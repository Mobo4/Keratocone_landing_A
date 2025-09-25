#!/usr/bin/env node

/**
 * SEO AUTOMATION DASHBOARD SERVER
 * 
 * Real-time dashboard for monitoring SEO automation system
 * Provides web interface for system status, metrics, and controls
 */

import dotenv from 'dotenv';
import express from 'express';
import { WebSocketServer } from 'ws';
import http from 'http';
import path from 'path';
import fs from 'fs/promises';
import { SEOOrchestrator } from './seo-orchestrator.js';
import { Logger } from '../utils/logger.js';

// Load environment variables
dotenv.config();

class DashboardServer {
  constructor(port = 3000) {
    this.port = port;
    this.app = express();
    this.server = http.createServer(this.app);
    this.wss = new WebSocketServer({ server: this.server });
    this.logger = new Logger('DashboardServer');
    this.orchestrator = null;
    this.clients = new Set();
    
    this.setupMiddleware();
    this.setupRoutes();
    this.setupWebSocket();
  }

  /**
   * Setup Express middleware
   */
  setupMiddleware() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.static(path.join(process.cwd(), 'seo-automation/dashboard/public')));
    
    // Basic authentication middleware
    this.app.use((req, res, next) => {
      if (req.path.startsWith('/api/')) {
        const auth = req.headers.authorization;
        if (!auth || !this.validateAuth(auth)) {
          return res.status(401).json({ error: 'Unauthorized' });
        }
      }
      next();
    });
  }

  /**
   * Setup API routes
   */
  setupRoutes() {
    // Serve dashboard HTML
    this.app.get('/', (req, res) => {
      res.sendFile(path.join(process.cwd(), 'seo-automation/dashboard/index.html'));
    });

    // System status API
    this.app.get('/api/status', async (req, res) => {
      try {
        if (!this.orchestrator) {
          return res.json({ status: 'stopped', services: {} });
        }
        
        const status = await this.orchestrator.getSystemStatus();
        res.json(status);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

    // Health check API
    this.app.get('/api/health', async (req, res) => {
      try {
        if (!this.orchestrator) {
          return res.json({ status: 'stopped' });
        }
        
        const health = await this.orchestrator.performHealthCheck();
        res.json(health);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

    // Run task API
    this.app.post('/api/tasks/:taskName', async (req, res) => {
      try {
        if (!this.orchestrator) {
          return res.status(400).json({ error: 'System not started' });
        }
        
        const { taskName } = req.params;
        const options = req.body;
        
        const result = await this.orchestrator.runTask(taskName, options);
        
        // Broadcast update to all clients
        this.broadcast({ type: 'task_completed', taskName, result });
        
        res.json(result);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

    // Get reports API
    this.app.get('/api/reports/:type', async (req, res) => {
      try {
        const { type } = req.params;
        const reports = await this.getReports(type);
        res.json(reports);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

    // Get logs API
    this.app.get('/api/logs/:service?', async (req, res) => {
      try {
        const { service } = req.params;
        const { lines = 100 } = req.query;
        
        const logs = await this.getLogs(service, parseInt(lines));
        res.json(logs);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

    // System control API
    this.app.post('/api/system/:action', async (req, res) => {
      try {
        const { action } = req.params;
        
        switch (action) {
          case 'start':
            await this.startSystem();
            break;
          case 'stop':
            await this.stopSystem();
            break;
          case 'restart':
            await this.restartSystem();
            break;
          default:
            return res.status(400).json({ error: 'Invalid action' });
        }
        
        res.json({ success: true, action });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

    // Metrics API
    this.app.get('/api/metrics', async (req, res) => {
      try {
        const metrics = await this.getMetrics();
        res.json(metrics);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

    // Configuration API
    this.app.get('/api/config', async (req, res) => {
      try {
        const configPath = path.join(process.cwd(), 'seo-automation/configs/seo-config.json');
        const config = JSON.parse(await fs.readFile(configPath, 'utf8'));
        res.json(config);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

    this.app.put('/api/config', async (req, res) => {
      try {
        const configPath = path.join(process.cwd(), 'seo-automation/configs/seo-config.json');
        await fs.writeFile(configPath, JSON.stringify(req.body, null, 2));
        res.json({ success: true });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });
  }

  /**
   * Setup WebSocket for real-time updates
   */
  setupWebSocket() {
    this.wss.on('connection', (ws) => {
      this.logger.info('New dashboard client connected');
      this.clients.add(ws);
      
      // Send initial status
      this.sendToClient(ws, { 
        type: 'status', 
        data: { connected: true, timestamp: new Date().toISOString() }
      });
      
      ws.on('close', () => {
        this.clients.delete(ws);
        this.logger.info('Dashboard client disconnected');
      });
      
      ws.on('message', async (message) => {
        try {
          const data = JSON.parse(message);
          await this.handleWebSocketMessage(ws, data);
        } catch (error) {
          this.logger.error('WebSocket message error:', error);
        }
      });
    });
  }

  /**
   * Handle WebSocket messages
   */
  async handleWebSocketMessage(ws, message) {
    switch (message.type) {
      case 'subscribe':
        // Client wants to subscribe to updates
        ws.subscriptions = message.topics || ['status', 'logs', 'metrics'];
        break;
        
      case 'get_status':
        if (this.orchestrator) {
          const status = await this.orchestrator.getSystemStatus();
          this.sendToClient(ws, { type: 'status', data: status });
        }
        break;
        
      case 'get_logs':
        const logs = await this.getLogs(message.service, message.lines || 50);
        this.sendToClient(ws, { type: 'logs', data: logs });
        break;
    }
  }

  /**
   * Start the SEO orchestrator system
   */
  async startSystem() {
    if (this.orchestrator) {
      throw new Error('System already started');
    }
    
    this.orchestrator = new SEOOrchestrator();
    await this.orchestrator.initialize();
    
    this.broadcast({ type: 'system_started', timestamp: new Date().toISOString() });
    this.logger.info('SEO Orchestrator started from dashboard');
  }

  /**
   * Stop the SEO orchestrator system
   */
  async stopSystem() {
    if (!this.orchestrator) {
      throw new Error('System not started');
    }
    
    await this.orchestrator.shutdown();
    this.orchestrator = null;
    
    this.broadcast({ type: 'system_stopped', timestamp: new Date().toISOString() });
    this.logger.info('SEO Orchestrator stopped from dashboard');
  }

  /**
   * Restart the SEO orchestrator system
   */
  async restartSystem() {
    if (this.orchestrator) {
      await this.stopSystem();
    }
    await this.startSystem();
  }

  /**
   * Get reports data
   */
  async getReports(type) {
    const reportsDir = path.join(process.cwd(), 'seo-automation/reports');
    
    try {
      const files = await fs.readdir(reportsDir);
      const reportFiles = files.filter(file => {
        if (type === 'all') return file.endsWith('.json');
        return file.includes(type) && file.endsWith('.json');
      });
      
      const reports = [];
      for (const file of reportFiles.slice(-10)) { // Get last 10 reports
        try {
          const filePath = path.join(reportsDir, file);
          const content = await fs.readFile(filePath, 'utf8');
          const data = JSON.parse(content);
          
          reports.push({
            filename: file,
            timestamp: data.timestamp || file,
            data: Array.isArray(data) ? data[data.length - 1] : data
          });
        } catch (error) {
          this.logger.error(`Failed to read report ${file}:`, error);
        }
      }
      
      return reports.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    } catch (error) {
      this.logger.error('Failed to read reports directory:', error);
      return [];
    }
  }

  /**
   * Get logs data
   */
  async getLogs(service, lines = 100) {
    const logsDir = path.join(process.cwd(), 'seo-automation/logs');
    
    try {
      const files = await fs.readdir(logsDir);
      const today = new Date().toISOString().split('T')[0];
      
      let logFiles = files.filter(file => file.includes(today) && file.endsWith('.log'));
      
      if (service) {
        logFiles = logFiles.filter(file => file.includes(service));
      }
      
      const logs = [];
      
      for (const file of logFiles) {
        try {
          const filePath = path.join(logsDir, file);
          const content = await fs.readFile(filePath, 'utf8');
          const logLines = content.trim().split('\n').slice(-lines);
          
          logLines.forEach(line => {
            if (line.trim()) {
              try {
                logs.push(JSON.parse(line));
              } catch (error) {
                logs.push({ message: line, service: 'unknown', level: 'INFO' });
              }
            }
          });
        } catch (error) {
          this.logger.error(`Failed to read log ${file}:`, error);
        }
      }
      
      return logs.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    } catch (error) {
      this.logger.error('Failed to read logs directory:', error);
      return [];
    }
  }

  /**
   * Get system metrics
   */
  async getMetrics() {
    const metrics = {
      uptime: process.uptime(),
      memory: process.memoryUsage(),
      cpu: process.cpuUsage(),
      timestamp: new Date().toISOString()
    };

    // Add SEO-specific metrics if orchestrator is running
    if (this.orchestrator) {
      try {
        const status = await this.orchestrator.getSystemStatus();
        metrics.seo = {
          scheduledTasks: status.scheduledTasks?.length || 0,
          lastHealthCheck: status.lastHealthCheck?.timestamp,
          servicesStatus: status.services
        };
      } catch (error) {
        this.logger.error('Failed to get SEO metrics:', error);
      }
    }

    return metrics;
  }

  /**
   * Broadcast message to all connected clients
   */
  broadcast(message) {
    const data = JSON.stringify(message);
    this.clients.forEach(client => {
      if (client.readyState === client.OPEN) {
        client.send(data);
      }
    });
  }

  /**
   * Send message to specific client
   */
  sendToClient(client, message) {
    if (client.readyState === client.OPEN) {
      client.send(JSON.stringify(message));
    }
  }

  /**
   * Basic authentication validation
   */
  validateAuth(auth) {
    // Use environment variable for password
    const credentials = Buffer.from(auth.split(' ')[1], 'base64').toString();
    const [username, password] = credentials.split(':');
    
    const requiredPassword = process.env.DASHBOARD_PASSWORD || 'changeme';
    return username === 'admin' && password === requiredPassword;
  }

  /**
   * Start dashboard server
   */
  async start() {
    await this.createDashboardFiles();
    
    this.server.listen(this.port, () => {
      this.logger.info(`Dashboard server running on http://localhost:${this.port}`);
      console.log(`
🚀 SEO Automation Dashboard Started
📊 URL: http://localhost:${this.port}
🔐 Username: admin
🔐 Password: (set in DASHBOARD_PASSWORD environment variable)

Available endpoints:
📈 Dashboard: http://localhost:${this.port}
🔍 API Status: http://localhost:${this.port}/api/status
🏥 Health Check: http://localhost:${this.port}/api/health
📋 Reports: http://localhost:${this.port}/api/reports/all
📜 Logs: http://localhost:${this.port}/api/logs
      `);
    });

    // Start real-time updates
    this.startPeriodicUpdates();
  }

  /**
   * Create dashboard HTML and CSS files
   */
  async createDashboardFiles() {
    const dashboardDir = path.join(process.cwd(), 'seo-automation/dashboard');
    const publicDir = path.join(dashboardDir, 'public');
    
    await fs.mkdir(publicDir, { recursive: true });
    
    // Create HTML file
    const htmlContent = this.getDashboardHTML();
    await fs.writeFile(path.join(dashboardDir, 'index.html'), htmlContent);
    
    // Create CSS file
    const cssContent = this.getDashboardCSS();
    await fs.writeFile(path.join(publicDir, 'dashboard.css'), cssContent);
    
    // Create JavaScript file
    const jsContent = this.getDashboardJS();
    await fs.writeFile(path.join(publicDir, 'dashboard.js'), jsContent);
  }

  /**
   * Start periodic updates for real-time data
   */
  startPeriodicUpdates() {
    // Send metrics every 30 seconds
    setInterval(async () => {
      try {
        const metrics = await this.getMetrics();
        this.broadcast({ type: 'metrics', data: metrics });
      } catch (error) {
        this.logger.error('Failed to broadcast metrics:', error);
      }
    }, 30000);

    // Send logs every 10 seconds
    setInterval(async () => {
      try {
        const logs = await this.getLogs(null, 20);
        this.broadcast({ type: 'logs', data: logs });
      } catch (error) {
        this.logger.error('Failed to broadcast logs:', error);
      }
    }, 10000);
  }

  /**
   * Get dashboard HTML content
   */
  getDashboardHTML() {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SEO Automation Dashboard</title>
    <link rel="stylesheet" href="dashboard.css">
</head>
<body>
    <div class="dashboard">
        <header class="header">
            <h1>🚀 SEO Automation Dashboard</h1>
            <div class="status-indicator">
                <span class="status-dot" id="statusDot"></span>
                <span id="statusText">Connecting...</span>
            </div>
        </header>

        <nav class="nav-tabs">
            <button class="tab-btn active" data-tab="overview">Overview</button>
            <button class="tab-btn" data-tab="tasks">Tasks</button>
            <button class="tab-btn" data-tab="reports">Reports</button>
            <button class="tab-btn" data-tab="logs">Logs</button>
            <button class="tab-btn" data-tab="config">Config</button>
        </nav>

        <main class="main-content">
            <!-- Overview Tab -->
            <div class="tab-content active" id="overview">
                <div class="cards-grid">
                    <div class="card">
                        <h3>System Status</h3>
                        <div id="systemStatus">Loading...</div>
                    </div>
                    <div class="card">
                        <h3>Services Health</h3>
                        <div id="servicesHealth">Loading...</div>
                    </div>
                    <div class="card">
                        <h3>Recent Activity</h3>
                        <div id="recentActivity">Loading...</div>
                    </div>
                    <div class="card">
                        <h3>System Metrics</h3>
                        <div id="systemMetrics">Loading...</div>
                    </div>
                </div>
            </div>

            <!-- Tasks Tab -->
            <div class="tab-content" id="tasks">
                <div class="task-controls">
                    <h3>Manual Task Execution</h3>
                    <div class="task-buttons">
                        <button class="task-btn" data-task="contentUpdate">Content Update</button>
                        <button class="task-btn" data-task="searchEngineNotification">Search Notification</button>
                        <button class="task-btn" data-task="performanceMonitoring">Performance Check</button>
                        <button class="task-btn" data-task="technicalSeo">Technical Audit</button>
                        <button class="task-btn" data-task="generateReport">Generate Report</button>
                    </div>
                </div>
                <div class="task-results" id="taskResults"></div>
            </div>

            <!-- Reports Tab -->
            <div class="tab-content" id="reports">
                <div class="reports-list" id="reportsList">Loading reports...</div>
            </div>

            <!-- Logs Tab -->
            <div class="tab-content" id="logs">
                <div class="logs-controls">
                    <select id="logService">
                        <option value="">All Services</option>
                        <option value="ContentUpdateService">Content Update</option>
                        <option value="SearchEngineNotificationService">Search Notification</option>
                        <option value="PerformanceMonitoringService">Performance Monitoring</option>
                        <option value="TechnicalSeoService">Technical SEO</option>
                        <option value="ReportingService">Reporting</option>
                    </select>
                    <button id="refreshLogs">Refresh</button>
                    <button id="clearLogs">Clear</button>
                </div>
                <div class="logs-container" id="logsContainer"></div>
            </div>

            <!-- Config Tab -->
            <div class="tab-content" id="config">
                <div class="config-editor">
                    <h3>System Configuration</h3>
                    <textarea id="configEditor" rows="20" cols="80"></textarea>
                    <div class="config-controls">
                        <button id="saveConfig">Save Configuration</button>
                        <button id="resetConfig">Reset to Default</button>
                    </div>
                </div>
            </div>
        </main>
    </div>

    <script src="dashboard.js"></script>
</body>
</html>`;
  }

  /**
   * Get dashboard CSS content
   */
  getDashboardCSS() {
    return `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: #f5f7fa;
    color: #333;
}

.dashboard {
    min-height: 100vh;
}

.header {
    background: #2563eb;
    color: white;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.status-indicator {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.status-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #ef4444;
    animation: pulse 2s infinite;
}

.status-dot.connected {
    background: #22c55e;
}

@keyframes pulse {
    0% { opacity: 1; }
    50% { opacity: 0.5; }
    100% { opacity: 1; }
}

.nav-tabs {
    background: white;
    border-bottom: 1px solid #e5e7eb;
    padding: 0 2rem;
    display: flex;
    gap: 1rem;
}

.tab-btn {
    background: none;
    border: none;
    padding: 1rem 1.5rem;
    cursor: pointer;
    border-bottom: 3px solid transparent;
    font-weight: 500;
    color: #6b7280;
    transition: all 0.2s;
}

.tab-btn.active {
    color: #2563eb;
    border-bottom-color: #2563eb;
}

.tab-btn:hover {
    color: #2563eb;
    background: #f9fafb;
}

.main-content {
    padding: 2rem;
}

.tab-content {
    display: none;
}

.tab-content.active {
    display: block;
}

.cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
}

.card {
    background: white;
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    border: 1px solid #e5e7eb;
}

.card h3 {
    margin-bottom: 1rem;
    color: #374151;
    font-size: 1.1rem;
}

.task-controls {
    background: white;
    border-radius: 8px;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.task-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 1rem;
}

.task-btn {
    background: #2563eb;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 500;
    transition: background 0.2s;
}

.task-btn:hover {
    background: #1d4ed8;
}

.task-btn:disabled {
    background: #9ca3af;
    cursor: not-allowed;
}

.task-results {
    background: white;
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    min-height: 200px;
}

.logs-controls {
    background: white;
    border-radius: 8px;
    padding: 1rem;
    margin-bottom: 1rem;
    display: flex;
    gap: 1rem;
    align-items: center;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.logs-controls select {
    padding: 0.5rem;
    border: 1px solid #d1d5db;
    border-radius: 4px;
}

.logs-controls button {
    background: #6b7280;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.875rem;
}

.logs-controls button:hover {
    background: #4b5563;
}

.logs-container {
    background: #1f2937;
    color: #f9fafb;
    border-radius: 8px;
    padding: 1rem;
    font-family: 'Monaco', 'Menlo', monospace;
    font-size: 0.875rem;
    height: 500px;
    overflow-y: auto;
    line-height: 1.5;
}

.log-entry {
    margin-bottom: 0.5rem;
    padding: 0.25rem;
    border-radius: 3px;
}

.log-entry.error {
    background: rgba(239, 68, 68, 0.2);
    border-left: 3px solid #ef4444;
}

.log-entry.warn {
    background: rgba(245, 158, 11, 0.2);
    border-left: 3px solid #f59e0b;
}

.log-entry.info {
    background: rgba(59, 130, 246, 0.2);
    border-left: 3px solid #3b82f6;
}

.config-editor {
    background: white;
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

#configEditor {
    width: 100%;
    font-family: 'Monaco', 'Menlo', monospace;
    font-size: 0.875rem;
    border: 1px solid #d1d5db;
    border-radius: 4px;
    padding: 1rem;
    margin-bottom: 1rem;
}

.config-controls {
    display: flex;
    gap: 1rem;
}

.config-controls button {
    background: #2563eb;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 500;
}

#resetConfig {
    background: #6b7280;
}

.reports-list {
    background: white;
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.report-item {
    border-bottom: 1px solid #e5e7eb;
    padding: 1rem 0;
}

.report-item:last-child {
    border-bottom: none;
}

.report-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
}

.report-title {
    font-weight: 600;
    color: #374151;
}

.report-date {
    color: #6b7280;
    font-size: 0.875rem;
}

.report-summary {
    color: #6b7280;
    font-size: 0.875rem;
}

.loading {
    text-align: center;
    color: #6b7280;
    padding: 2rem;
}

.success {
    color: #22c55e;
    font-weight: 500;
}

.error {
    color: #ef4444;
    font-weight: 500;
}

.warning {
    color: #f59e0b;
    font-weight: 500;
}`;
  }

  /**
   * Get dashboard JavaScript content
   */
  getDashboardJS() {
    return `class Dashboard {
    constructor() {
        this.ws = null;
        this.currentTab = 'overview';
        this.init();
    }

    init() {
        this.setupWebSocket();
        this.setupEventListeners();
        this.loadInitialData();
    }

    setupWebSocket() {
        const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
        this.ws = new WebSocket(\`\${protocol}//\${window.location.host}\`);

        this.ws.onopen = () => {
            console.log('Connected to dashboard');
            this.updateStatus('connected', 'Connected');
        };

        this.ws.onclose = () => {
            console.log('Disconnected from dashboard');
            this.updateStatus('disconnected', 'Disconnected');
            setTimeout(() => this.setupWebSocket(), 5000);
        };

        this.ws.onmessage = (event) => {
            const message = JSON.parse(event.data);
            this.handleWebSocketMessage(message);
        };
    }

    setupEventListeners() {
        // Tab switching
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const tab = btn.dataset.tab;
                this.switchTab(tab);
            });
        });

        // Task buttons
        document.querySelectorAll('.task-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const task = btn.dataset.task;
                this.runTask(task, btn);
            });
        });

        // Log controls
        document.getElementById('refreshLogs')?.addEventListener('click', () => {
            this.loadLogs();
        });

        document.getElementById('clearLogs')?.addEventListener('click', () => {
            document.getElementById('logsContainer').innerHTML = '';
        });

        // Config controls
        document.getElementById('saveConfig')?.addEventListener('click', () => {
            this.saveConfiguration();
        });

        document.getElementById('resetConfig')?.addEventListener('click', () => {
            this.loadConfiguration();
        });
    }

    switchTab(tab) {
        // Update tab buttons
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(\`[data-tab="\${tab}"]\`).classList.add('active');

        // Update tab content
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        document.getElementById(tab).classList.add('active');

        this.currentTab = tab;

        // Load tab-specific data
        switch (tab) {
            case 'reports':
                this.loadReports();
                break;
            case 'logs':
                this.loadLogs();
                break;
            case 'config':
                this.loadConfiguration();
                break;
        }
    }

    async loadInitialData() {
        await this.loadStatus();
        await this.loadMetrics();
    }

    async loadStatus() {
        try {
            const response = await fetch('/api/status', {
                headers: { 'Authorization': \`Basic \${btoa('admin:' + (window.DASHBOARD_PASSWORD || prompt('Enter dashboard password:')))}\` }
            });
            const status = await response.json();
            this.updateSystemStatus(status);
        } catch (error) {
            console.error('Failed to load status:', error);
        }
    }

    async loadMetrics() {
        try {
            const response = await fetch('/api/metrics', {
                headers: { 'Authorization': \`Basic \${btoa('admin:' + (window.DASHBOARD_PASSWORD || prompt('Enter dashboard password:')))}\` }
            });
            const metrics = await response.json();
            this.updateSystemMetrics(metrics);
        } catch (error) {
            console.error('Failed to load metrics:', error);
        }
    }

    async loadReports() {
        try {
            const response = await fetch('/api/reports/all', {
                headers: { 'Authorization': \`Basic \${btoa('admin:' + (window.DASHBOARD_PASSWORD || prompt('Enter dashboard password:')))}\` }
            });
            const reports = await response.json();
            this.updateReportsList(reports);
        } catch (error) {
            console.error('Failed to load reports:', error);
        }
    }

    async loadLogs() {
        const service = document.getElementById('logService')?.value || '';
        try {
            const response = await fetch(\`/api/logs/\${service}?lines=100\`, {
                headers: { 'Authorization': \`Basic \${btoa('admin:' + (window.DASHBOARD_PASSWORD || prompt('Enter dashboard password:')))}\` }
            });
            const logs = await response.json();
            this.updateLogsDisplay(logs);
        } catch (error) {
            console.error('Failed to load logs:', error);
        }
    }

    async loadConfiguration() {
        try {
            const response = await fetch('/api/config', {
                headers: { 'Authorization': \`Basic \${btoa('admin:' + (window.DASHBOARD_PASSWORD || prompt('Enter dashboard password:')))}\` }
            });
            const config = await response.json();
            document.getElementById('configEditor').value = JSON.stringify(config, null, 2);
        } catch (error) {
            console.error('Failed to load configuration:', error);
        }
    }

    async saveConfiguration() {
        try {
            const configText = document.getElementById('configEditor').value;
            const config = JSON.parse(configText);
            
            const response = await fetch('/api/config', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': \`Basic \${btoa('admin:' + (window.DASHBOARD_PASSWORD || prompt('Enter dashboard password:')))}\`
                },
                body: JSON.stringify(config)
            });

            if (response.ok) {
                alert('Configuration saved successfully');
            } else {
                alert('Failed to save configuration');
            }
        } catch (error) {
            alert('Invalid JSON configuration');
        }
    }

    async runTask(taskName, button) {
        button.disabled = true;
        button.textContent = 'Running...';

        try {
            const response = await fetch(\`/api/tasks/\${taskName}\`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': \`Basic \${btoa('admin:' + (window.DASHBOARD_PASSWORD || prompt('Enter dashboard password:')))}\`
                },
                body: JSON.stringify({})
            });

            const result = await response.json();
            this.displayTaskResult(taskName, result);
        } catch (error) {
            this.displayTaskResult(taskName, { error: error.message });
        } finally {
            button.disabled = false;
            button.textContent = button.dataset.task.replace(/([A-Z])/g, ' $1').trim();
        }
    }

    handleWebSocketMessage(message) {
        switch (message.type) {
            case 'status':
                this.updateSystemStatus(message.data);
                break;
            case 'metrics':
                this.updateSystemMetrics(message.data);
                break;
            case 'logs':
                if (this.currentTab === 'logs') {
                    this.updateLogsDisplay(message.data);
                }
                break;
            case 'task_completed':
                this.displayTaskResult(message.taskName, message.result);
                break;
        }
    }

    updateStatus(status, text) {
        const dot = document.getElementById('statusDot');
        const statusText = document.getElementById('statusText');
        
        dot.className = \`status-dot \${status}\`;
        statusText.textContent = text;
    }

    updateSystemStatus(status) {
        const container = document.getElementById('systemStatus');
        container.innerHTML = \`
            <div><strong>Uptime:</strong> \${Math.floor(status.uptime / 3600)}h \${Math.floor((status.uptime % 3600) / 60)}m</div>
            <div><strong>Scheduled Tasks:</strong> \${status.scheduledTasks?.length || 0}</div>
            <div><strong>Services:</strong> \${Object.keys(status.services || {}).length}</div>
        \`;
    }

    updateSystemMetrics(metrics) {
        const container = document.getElementById('systemMetrics');
        const memoryMB = Math.round(metrics.memory?.rss / 1024 / 1024) || 0;
        
        container.innerHTML = \`
            <div><strong>Memory:</strong> \${memoryMB} MB</div>
            <div><strong>CPU Time:</strong> \${Math.round(metrics.cpu?.user / 1000) || 0}ms</div>
            <div><strong>Last Updated:</strong> \${new Date(metrics.timestamp).toLocaleTimeString()}</div>
        \`;
    }

    updateReportsList(reports) {
        const container = document.getElementById('reportsList');
        
        if (reports.length === 0) {
            container.innerHTML = '<div class="loading">No reports available</div>';
            return;
        }

        container.innerHTML = reports.map(report => \`
            <div class="report-item">
                <div class="report-header">
                    <span class="report-title">\${report.filename}</span>
                    <span class="report-date">\${new Date(report.timestamp).toLocaleString()}</span>
                </div>
                <div class="report-summary">
                    \${report.data.summary ? JSON.stringify(report.data.summary) : 'Report data available'}
                </div>
            </div>
        \`).join('');
    }

    updateLogsDisplay(logs) {
        const container = document.getElementById('logsContainer');
        
        container.innerHTML = logs.slice(0, 100).map(log => {
            const level = log.level?.toLowerCase() || 'info';
            const timestamp = new Date(log.timestamp).toLocaleTimeString();
            return \`
                <div class="log-entry \${level}">
                    [\${timestamp}] [\${log.service || 'unknown'}] [\${log.level || 'INFO'}] \${log.message}
                </div>
            \`;
        }).join('');
        
        container.scrollTop = container.scrollHeight;
    }

    displayTaskResult(taskName, result) {
        const container = document.getElementById('taskResults');
        const timestamp = new Date().toLocaleTimeString();
        
        const resultClass = result.error ? 'error' : 'success';
        const resultText = result.error ? result.error : 'Task completed successfully';
        
        container.innerHTML = \`
            <div class="task-result">
                <div><strong>Task:</strong> \${taskName}</div>
                <div><strong>Time:</strong> \${timestamp}</div>
                <div class="\${resultClass}"><strong>Result:</strong> \${resultText}</div>
                \${result.summary ? \`<div><strong>Summary:</strong> \${JSON.stringify(result.summary, null, 2)}</div>\` : ''}
            </div>
        \` + container.innerHTML;
    }
}

// Initialize dashboard when page loads
document.addEventListener('DOMContentLoaded', () => {
    new Dashboard();
});`;
  }

  async shutdown() {
    if (this.orchestrator) {
      await this.orchestrator.shutdown();
    }
    this.server.close();
    this.logger.info('Dashboard server shut down');
  }
}

// Start dashboard server if run directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const port = process.argv[2] || 3000;
  const dashboard = new DashboardServer(port);
  
  await dashboard.start();
  
  // Graceful shutdown
  process.on('SIGINT', async () => {
    console.log('\nShutting down dashboard server...');
    await dashboard.shutdown();
    process.exit(0);
  });
}

export { DashboardServer };