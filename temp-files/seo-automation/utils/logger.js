/**
 * LOGGER UTILITY
 * 
 * Centralized logging system for SEO automation
 * Provides structured logging with different levels and output formats
 */

import fs from 'fs/promises';
import path from 'path';

class Logger {
  constructor(serviceName, options = {}) {
    this.serviceName = serviceName;
    this.logLevel = options.logLevel || 'info';
    this.logToFile = options.logToFile !== false; // Default to true
    this.logToConsole = options.logToConsole !== false; // Default to true
    this.logDir = options.logDir || path.join(process.cwd(), 'seo-automation/logs');
    
    // Log levels in order of importance
    this.levels = {
      error: 0,
      warn: 1,
      info: 2,
      debug: 3
    };

    // Ensure log directory exists
    this.ensureLogDirectory();
  }

  /**
   * Ensure log directory exists
   */
  async ensureLogDirectory() {
    try {
      await fs.mkdir(this.logDir, { recursive: true });
    } catch (error) {
      console.error('Failed to create log directory:', error);
    }
  }

  /**
   * Check if message should be logged based on level
   */
  shouldLog(level) {
    return this.levels[level] <= this.levels[this.logLevel];
  }

  /**
   * Format log message
   */
  formatMessage(level, message, data = null) {
    const timestamp = new Date().toISOString();
    const logEntry = {
      timestamp,
      level: level.toUpperCase(),
      service: this.serviceName,
      message,
      data
    };

    return logEntry;
  }

  /**
   * Write log to file
   */
  async writeToFile(logEntry) {
    if (!this.logToFile) return;

    try {
      const date = new Date().toISOString().split('T')[0];
      const logFile = path.join(this.logDir, `${this.serviceName}-${date}.log`);
      const logLine = JSON.stringify(logEntry) + '\n';
      
      await fs.appendFile(logFile, logLine);
    } catch (error) {
      console.error('Failed to write to log file:', error);
    }
  }

  /**
   * Write log to console with formatting
   */
  writeToConsole(logEntry) {
    if (!this.logToConsole) return;

    const { timestamp, level, service, message, data } = logEntry;
    const timeStr = new Date(timestamp).toLocaleTimeString();
    
    // Color coding for different levels
    const colors = {
      ERROR: '\x1b[31m', // Red
      WARN: '\x1b[33m',  // Yellow
      INFO: '\x1b[36m',  // Cyan
      DEBUG: '\x1b[37m'  // White
    };
    
    const reset = '\x1b[0m';
    const color = colors[level] || '';
    
    let logMessage = `${color}[${timeStr}] ${level} [${service}]${reset} ${message}`;
    
    if (data) {
      logMessage += '\n' + JSON.stringify(data, null, 2);
    }
    
    console.log(logMessage);
  }

  /**
   * Log error message
   */
  async error(message, data = null) {
    if (!this.shouldLog('error')) return;
    
    const logEntry = this.formatMessage('error', message, data);
    this.writeToConsole(logEntry);
    await this.writeToFile(logEntry);
  }

  /**
   * Log warning message
   */
  async warn(message, data = null) {
    if (!this.shouldLog('warn')) return;
    
    const logEntry = this.formatMessage('warn', message, data);
    this.writeToConsole(logEntry);
    await this.writeToFile(logEntry);
  }

  /**
   * Log info message
   */
  async info(message, data = null) {
    if (!this.shouldLog('info')) return;
    
    const logEntry = this.formatMessage('info', message, data);
    this.writeToConsole(logEntry);
    await this.writeToFile(logEntry);
  }

  /**
   * Log debug message
   */
  async debug(message, data = null) {
    if (!this.shouldLog('debug')) return;
    
    const logEntry = this.formatMessage('debug', message, data);
    this.writeToConsole(logEntry);
    await this.writeToFile(logEntry);
  }

  /**
   * Log performance timing
   */
  async performance(operation, duration, data = null) {
    const message = `Performance: ${operation} completed in ${duration}ms`;
    await this.info(message, { duration, operation, ...data });
  }

  /**
   * Create a timer for performance measurement
   */
  startTimer(operation) {
    const startTime = Date.now();
    
    return {
      end: async (data = null) => {
        const duration = Date.now() - startTime;
        await this.performance(operation, duration, data);
        return duration;
      }
    };
  }

  /**
   * Log API request/response
   */
  async apiCall(method, url, status, duration, data = null) {
    const message = `API ${method} ${url} - ${status} (${duration}ms)`;
    const logData = { method, url, status, duration, ...data };
    
    if (status >= 400) {
      await this.error(message, logData);
    } else if (status >= 300) {
      await this.warn(message, logData);
    } else {
      await this.info(message, logData);
    }
  }

  /**
   * Get recent logs
   */
  async getRecentLogs(lines = 100) {
    try {
      const date = new Date().toISOString().split('T')[0];
      const logFile = path.join(this.logDir, `${this.serviceName}-${date}.log`);
      
      const content = await fs.readFile(logFile, 'utf8');
      const logLines = content.trim().split('\n');
      
      return logLines
        .slice(-lines)
        .map(line => {
          try {
            return JSON.parse(line);
          } catch (error) {
            return { message: line, error: 'Failed to parse log entry' };
          }
        });
    } catch (error) {
      return [];
    }
  }

  /**
   * Clean old log files
   */
  async cleanOldLogs(daysToKeep = 30) {
    try {
      const files = await fs.readdir(this.logDir);
      const cutoffDate = new Date();
      cutoffDate.setDate(cutoffDate.getDate() - daysToKeep);
      
      for (const file of files) {
        if (file.endsWith('.log')) {
          const filePath = path.join(this.logDir, file);
          const stats = await fs.stat(filePath);
          
          if (stats.mtime < cutoffDate) {
            await fs.unlink(filePath);
            console.log(`Cleaned old log file: ${file}`);
          }
        }
      }
    } catch (error) {
      console.error('Failed to clean old logs:', error);
    }
  }

  /**
   * Get log statistics
   */
  async getLogStats(days = 7) {
    const stats = {
      totalEntries: 0,
      errorCount: 0,
      warnCount: 0,
      infoCount: 0,
      debugCount: 0,
      dateRange: {
        start: new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        end: new Date().toISOString().split('T')[0]
      }
    };

    try {
      for (let i = 0; i < days; i++) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        const dateStr = date.toISOString().split('T')[0];
        
        const logFile = path.join(this.logDir, `${this.serviceName}-${dateStr}.log`);
        
        try {
          const content = await fs.readFile(logFile, 'utf8');
          const lines = content.trim().split('\n').filter(line => line);
          
          stats.totalEntries += lines.length;
          
          lines.forEach(line => {
            try {
              const entry = JSON.parse(line);
              switch (entry.level) {
                case 'ERROR': stats.errorCount++; break;
                case 'WARN': stats.warnCount++; break;
                case 'INFO': stats.infoCount++; break;
                case 'DEBUG': stats.debugCount++; break;
              }
            } catch (error) {
              // Skip malformed entries
            }
          });
        } catch (error) {
          // Log file doesn't exist for this date
        }
      }
    } catch (error) {
      console.error('Failed to generate log stats:', error);
    }

    return stats;
  }
}

export { Logger };