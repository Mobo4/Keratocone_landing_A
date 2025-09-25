#!/usr/bin/env node

/**
 * SEO AUTOMATION ORCHESTRATOR
 * 
 * Main orchestrator for Dr. Bonakdar's SEO automation system
 * Coordinates all SEO automation tasks including content updates,
 * search engine notifications, performance monitoring, and technical SEO
 */

import fs from 'fs/promises';
import path from 'path';
import cron from 'node-cron';
import { ContentUpdateService } from './content-update-service.js';
import { SearchEngineNotificationService } from './search-engine-notification-service.js';
import { PerformanceMonitoringService } from './performance-monitoring-service.js';
import { TechnicalSeoService } from './technical-seo-service.js';
import { ReportingService } from './reporting-service.js';
import { Logger } from '../utils/logger.js';

class SEOOrchestrator {
  constructor() {
    this.configPath = path.join(process.cwd(), 'seo-automation/configs/seo-config.json');
    this.config = null;
    this.logger = new Logger('SEO-Orchestrator');
    this.services = {};
    this.scheduledTasks = new Map();
  }

  /**
   * Initialize the SEO automation system
   */
  async initialize() {
    try {
      // Load configuration
      this.config = await this.loadConfig();
      this.logger.info('Configuration loaded successfully');

      // Initialize services
      await this.initializeServices();
      this.logger.info('All services initialized');

      // Setup scheduled tasks
      this.setupScheduledTasks();
      this.logger.info('Scheduled tasks configured');

      // Run initial health check
      await this.performHealthCheck();
      
      this.logger.info('SEO Orchestrator initialized successfully');
      return true;
    } catch (error) {
      this.logger.error('Failed to initialize SEO Orchestrator:', error);
      throw error;
    }
  }

  /**
   * Load configuration from file
   */
  async loadConfig() {
    try {
      const configData = await fs.readFile(this.configPath, 'utf8');
      return JSON.parse(configData);
    } catch (error) {
      throw new Error(`Failed to load configuration: ${error.message}`);
    }
  }

  /**
   * Initialize all SEO services
   */
  async initializeServices() {
    this.services = {
      contentUpdate: new ContentUpdateService(this.config),
      searchEngineNotification: new SearchEngineNotificationService(this.config),
      performanceMonitoring: new PerformanceMonitoringService(this.config),
      technicalSeo: new TechnicalSeoService(this.config),
      reporting: new ReportingService(this.config)
    };

    // Initialize each service
    for (const [name, service] of Object.entries(this.services)) {
      try {
        await service.initialize();
        this.logger.info(`${name} service initialized`);
      } catch (error) {
        this.logger.error(`Failed to initialize ${name} service:`, error);
        throw error;
      }
    }
  }

  /**
   * Setup all scheduled tasks based on configuration
   */
  setupScheduledTasks() {
    const { automation } = this.config;

    // Content Update Task
    if (automation.contentUpdate.enabled) {
      this.scheduleTask('contentUpdate', automation.contentUpdate.schedule, () => {
        return this.services.contentUpdate.performUpdate();
      });
    }

    // Search Engine Notification Task
    if (automation.searchEngineNotification.enabled) {
      this.scheduleTask('searchEngineNotification', automation.searchEngineNotification.schedule, () => {
        return this.services.searchEngineNotification.notifySearchEngines();
      });
    }

    // Performance Monitoring Tasks
    if (automation.performanceMonitoring.enabled) {
      this.scheduleTask('rankingCheck', automation.performanceMonitoring.rankingChecks, () => {
        return this.services.performanceMonitoring.checkRankings();
      });

      this.scheduleTask('trafficAnalysis', automation.performanceMonitoring.trafficAnalysis, () => {
        return this.services.performanceMonitoring.analyzeTraffic();
      });
    }

    // Technical SEO Tasks
    if (automation.technicalSeo.enabled) {
      this.scheduleTask('technicalSeo', automation.technicalSeo.schedule, () => {
        return this.services.technicalSeo.performAudit();
      });

      this.scheduleTask('brokenLinkCheck', automation.technicalSeo.brokenLinkCheck, () => {
        return this.services.technicalSeo.checkBrokenLinks();
      });
    }

    // Weekly Reporting
    this.scheduleTask('weeklyReport', '0 8 * * 1', () => {
      return this.services.reporting.generateWeeklyReport();
    });
  }

  /**
   * Schedule a task with cron
   */
  scheduleTask(name, schedule, taskFunction) {
    try {
      const task = cron.schedule(schedule, async () => {
        this.logger.info(`Starting scheduled task: ${name}`);
        try {
          const result = await taskFunction();
          this.logger.info(`Completed scheduled task: ${name}`, result);
        } catch (error) {
          this.logger.error(`Error in scheduled task ${name}:`, error);
          // Send alert for failed task
          await this.sendTaskFailureAlert(name, error);
        }
      }, { scheduled: false });

      this.scheduledTasks.set(name, task);
      task.start();
      this.logger.info(`Scheduled task '${name}' with cron: ${schedule}`);
    } catch (error) {
      this.logger.error(`Failed to schedule task '${name}':`, error);
    }
  }

  /**
   * Perform health check on all services
   */
  async performHealthCheck() {
    const healthStatus = {
      timestamp: new Date().toISOString(),
      overall: 'healthy',
      services: {}
    };

    for (const [name, service] of Object.entries(this.services)) {
      try {
        const status = await service.healthCheck();
        healthStatus.services[name] = status;
        if (status.status !== 'healthy') {
          healthStatus.overall = 'degraded';
        }
      } catch (error) {
        healthStatus.services[name] = {
          status: 'unhealthy',
          error: error.message
        };
        healthStatus.overall = 'unhealthy';
      }
    }

    this.logger.info('Health check completed:', healthStatus);
    
    // Save health status to file
    const healthFile = path.join(process.cwd(), 'seo-automation/reports/health-status.json');
    await fs.writeFile(healthFile, JSON.stringify(healthStatus, null, 2));

    return healthStatus;
  }

  /**
   * Manual trigger for specific automation tasks
   */
  async runTask(taskName, options = {}) {
    this.logger.info(`Manually triggered task: ${taskName}`);

    try {
      let result;
      switch (taskName) {
        case 'contentUpdate':
          result = await this.services.contentUpdate.performUpdate(options);
          break;
        case 'searchEngineNotification':
          result = await this.services.searchEngineNotification.notifySearchEngines(options);
          break;
        case 'performanceMonitoring':
          result = await this.services.performanceMonitoring.fullAnalysis(options);
          break;
        case 'technicalSeo':
          result = await this.services.technicalSeo.performAudit(options);
          break;
        case 'generateReport':
          result = await this.services.reporting.generateCustomReport(options);
          break;
        default:
          throw new Error(`Unknown task: ${taskName}`);
      }

      this.logger.info(`Task ${taskName} completed successfully:`, result);
      return result;
    } catch (error) {
      this.logger.error(`Task ${taskName} failed:`, error);
      throw error;
    }
  }

  /**
   * Send alert for task failures
   */
  async sendTaskFailureAlert(taskName, error) {
    try {
      await this.services.reporting.sendAlert({
        type: 'task_failure',
        task: taskName,
        error: error.message,
        timestamp: new Date().toISOString()
      });
    } catch (alertError) {
      this.logger.error('Failed to send task failure alert:', alertError);
    }
  }

  /**
   * Get system status and metrics
   */
  async getSystemStatus() {
    const status = {
      uptime: process.uptime(),
      scheduledTasks: Array.from(this.scheduledTasks.keys()),
      lastHealthCheck: await this.getLastHealthCheck(),
      services: {}
    };

    for (const [name, service] of Object.entries(this.services)) {
      status.services[name] = await service.getStatus();
    }

    return status;
  }

  /**
   * Get last health check results
   */
  async getLastHealthCheck() {
    try {
      const healthFile = path.join(process.cwd(), 'seo-automation/reports/health-status.json');
      const data = await fs.readFile(healthFile, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      return null;
    }
  }

  /**
   * Graceful shutdown
   */
  async shutdown() {
    this.logger.info('Shutting down SEO Orchestrator...');
    
    // Stop all scheduled tasks
    for (const [name, task] of this.scheduledTasks) {
      task.stop();
      this.logger.info(`Stopped scheduled task: ${name}`);
    }

    // Shutdown services
    for (const [name, service] of Object.entries(this.services)) {
      try {
        await service.shutdown();
        this.logger.info(`${name} service shut down`);
      } catch (error) {
        this.logger.error(`Error shutting down ${name} service:`, error);
      }
    }

    this.logger.info('SEO Orchestrator shutdown complete');
  }
}

// CLI Interface
if (import.meta.url === `file://${process.argv[1]}`) {
  const orchestrator = new SEOOrchestrator();
  
  const command = process.argv[2];
  const taskOptions = process.argv[3] ? JSON.parse(process.argv[3]) : {};

  async function runCLI() {
    try {
      await orchestrator.initialize();

      switch (command) {
        case 'start':
          console.log('SEO Orchestrator started successfully');
          // Keep process running
          process.on('SIGINT', async () => {
            await orchestrator.shutdown();
            process.exit(0);
          });
          break;

        case 'status':
          const status = await orchestrator.getSystemStatus();
          console.log(JSON.stringify(status, null, 2));
          break;

        case 'health':
          const health = await orchestrator.performHealthCheck();
          console.log(JSON.stringify(health, null, 2));
          break;

        case 'run':
          const taskName = process.argv[3];
          if (!taskName) {
            throw new Error('Task name required for run command');
          }
          const result = await orchestrator.runTask(taskName, taskOptions);
          console.log(JSON.stringify(result, null, 2));
          break;

        default:
          console.log(`
Usage: node seo-orchestrator.js <command> [options]

Commands:
  start    - Start the SEO automation system
  status   - Get system status
  health   - Perform health check
  run      - Run specific task manually

Examples:
  node seo-orchestrator.js start
  node seo-orchestrator.js health
  node seo-orchestrator.js run contentUpdate
  node seo-orchestrator.js run generateReport '{"type":"weekly"}'
          `);
      }
    } catch (error) {
      console.error('Error:', error.message);
      process.exit(1);
    }
  }

  runCLI();
}

export { SEOOrchestrator };