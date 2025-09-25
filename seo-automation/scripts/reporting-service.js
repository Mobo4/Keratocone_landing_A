/**
 * REPORTING SERVICE
 * 
 * Automated reporting system for Dr. Bonakdar's SEO automation
 * Handles weekly reports, alerts, dashboard generation,
 * and stakeholder communications
 */

import fs from 'fs/promises';
import path from 'path';
import nodemailer from 'nodemailer';
import { Logger } from '../utils/logger.js';

class ReportingService {
  constructor(config) {
    this.config = config;
    this.logger = new Logger('ReportingService');
    this.emailTransporter = null;
    this.reportTemplates = new Map();
  }

  /**
   * Initialize the reporting service
   */
  async initialize() {
    this.logger.info('Initializing Reporting Service');
    
    // Initialize email transporter
    await this.initializeEmailService();
    
    // Load report templates
    await this.loadReportTemplates();
    
    this.logger.info('Reporting Service initialized');
  }

  /**
   * Generate comprehensive weekly report
   */
  async generateWeeklyReport() {
    this.logger.info('Generating weekly SEO report');
    
    const reportData = {
      period: {
        start: this.getDateDaysAgo(7),
        end: new Date().toISOString().split('T')[0]
      },
      timestamp: new Date().toISOString(),
      summary: {},
      sections: {}
    };

    try {
      // Collect data from all services
      const [rankings, traffic, conversions, technical] = await Promise.all([
        this.getRankingsData(),
        this.getTrafficData(),
        this.getConversionsData(),
        this.getTechnicalData()
      ]);

      reportData.sections = {
        rankings,
        traffic,
        conversions,
        technical
      };

      // Generate executive summary
      reportData.summary = this.generateExecutiveSummary(reportData.sections);

      // Generate visual charts and graphs
      const charts = await this.generateCharts(reportData);
      reportData.charts = charts;

      // Create HTML report
      const htmlReport = await this.generateHtmlReport(reportData);
      
      // Create PDF report
      const pdfReport = await this.generatePdfReport(reportData);

      // Save reports
      await this.saveReport(reportData, htmlReport, pdfReport);

      // Send to stakeholders
      await this.sendWeeklyReport(reportData, htmlReport, pdfReport);

      this.logger.info('Weekly report generated and sent successfully');
      return {
        success: true,
        reportData,
        htmlPath: path.join(process.cwd(), 'seo-automation/reports/weekly-report.html'),
        pdfPath: path.join(process.cwd(), 'seo-automation/reports/weekly-report.pdf')
      };

    } catch (error) {
      this.logger.error('Weekly report generation failed:', error);
      throw error;
    }
  }

  /**
   * Generate custom report based on parameters
   */
  async generateCustomReport(options = {}) {
    this.logger.info('Generating custom report', options);
    
    const reportData = {
      type: options.type || 'custom',
      period: options.period || {
        start: this.getDateDaysAgo(30),
        end: new Date().toISOString().split('T')[0]
      },
      sections: options.sections || ['rankings', 'traffic', 'conversions', 'technical'],
      timestamp: new Date().toISOString()
    };

    try {
      // Generate requested sections
      const sectionData = {};
      
      if (reportData.sections.includes('rankings')) {
        sectionData.rankings = await this.getRankingsData(reportData.period);
      }
      
      if (reportData.sections.includes('traffic')) {
        sectionData.traffic = await this.getTrafficData(reportData.period);
      }
      
      if (reportData.sections.includes('conversions')) {
        sectionData.conversions = await this.getConversionsData(reportData.period);
      }
      
      if (reportData.sections.includes('technical')) {
        sectionData.technical = await this.getTechnicalData(reportData.period);
      }

      reportData.data = sectionData;

      // Generate report format based on type
      let report;
      switch (options.format) {
        case 'json':
          report = JSON.stringify(reportData, null, 2);
          break;
        case 'csv':
          report = await this.generateCsvReport(reportData);
          break;
        case 'pdf':
          report = await this.generatePdfReport(reportData);
          break;
        default:
          report = await this.generateHtmlReport(reportData);
      }

      return {
        success: true,
        reportData,
        report,
        format: options.format || 'html'
      };

    } catch (error) {
      this.logger.error('Custom report generation failed:', error);
      throw error;
    }
  }

  /**
   * Send alert notifications
   */
  async sendAlert(alert) {
    this.logger.info('Sending alert notification', { type: alert.type });
    
    try {
      const alertData = {
        ...alert,
        timestamp: alert.timestamp || new Date().toISOString(),
        website: this.config.website.domain
      };

      // Generate alert message
      const alertMessage = this.generateAlertMessage(alertData);

      // Send email alert
      if (this.emailTransporter) {
        await this.sendEmailAlert(alertMessage);
      }

      // Log alert
      await this.logAlert(alertData);

      // Send to webhook if configured
      if (this.config.reporting.webhook) {
        await this.sendWebhookAlert(alertData);
      }

      return { success: true, alert: alertData };

    } catch (error) {
      this.logger.error('Failed to send alert:', error);
      throw error;
    }
  }

  /**
   * Generate executive summary from all sections
   */
  generateExecutiveSummary(sections) {
    const summary = {
      overallHealth: 'good',
      keyMetrics: {},
      highlights: [],
      concerns: [],
      recommendations: []
    };

    // Rankings summary
    if (sections.rankings) {
      const rankingChange = sections.rankings.summary.improved - sections.rankings.summary.declined;
      summary.keyMetrics.rankingChange = rankingChange;
      
      if (rankingChange > 0) {
        summary.highlights.push(`Improved rankings for ${sections.rankings.summary.improved} keywords`);
      } else if (rankingChange < -5) {
        summary.concerns.push(`Declined rankings for ${sections.rankings.summary.declined} keywords`);
        summary.overallHealth = 'needs_attention';
      }
    }

    // Traffic summary
    if (sections.traffic) {
      summary.keyMetrics.organicTraffic = sections.traffic.metrics.organicSessions;
      summary.keyMetrics.conversionRate = sections.traffic.metrics.conversionRate;
      
      if (sections.traffic.trends.organicGrowth > 10) {
        summary.highlights.push(`Organic traffic increased by ${sections.traffic.trends.organicGrowth}%`);
      } else if (sections.traffic.trends.organicGrowth < -10) {
        summary.concerns.push(`Organic traffic declined by ${Math.abs(sections.traffic.trends.organicGrowth)}%`);
        summary.overallHealth = 'needs_attention';
      }
    }

    // Technical summary
    if (sections.technical) {
      summary.keyMetrics.technicalScore = sections.technical.overallScore;
      
      if (sections.technical.summary.criticalIssues > 0) {
        summary.concerns.push(`${sections.technical.summary.criticalIssues} critical technical issues found`);
        summary.overallHealth = 'needs_attention';
      }
    }

    // Generate recommendations based on concerns
    if (summary.concerns.length > 0) {
      summary.recommendations.push('Focus on addressing identified technical and ranking issues');
    }
    
    if (sections.traffic?.metrics.bounceRate > 0.6) {
      summary.recommendations.push('Improve page content and user experience to reduce bounce rate');
    }

    return summary;
  }

  /**
   * Generate HTML report
   */
  async generateHtmlReport(reportData) {
    const template = this.reportTemplates.get('weekly') || this.getDefaultHtmlTemplate();
    
    // Replace template variables
    let html = template
      .replace('{{REPORT_DATE}}', new Date().toLocaleDateString())
      .replace('{{PERIOD_START}}', reportData.period.start)
      .replace('{{PERIOD_END}}', reportData.period.end)
      .replace('{{WEBSITE_URL}}', this.config.website.baseUrl);

    // Add summary section
    if (reportData.summary) {
      html = html.replace('{{EXECUTIVE_SUMMARY}}', this.generateSummaryHtml(reportData.summary));
    }

    // Add rankings section
    if (reportData.sections?.rankings) {
      html = html.replace('{{RANKINGS_SECTION}}', this.generateRankingsHtml(reportData.sections.rankings));
    }

    // Add traffic section
    if (reportData.sections?.traffic) {
      html = html.replace('{{TRAFFIC_SECTION}}', this.generateTrafficHtml(reportData.sections.traffic));
    }

    // Add technical section
    if (reportData.sections?.technical) {
      html = html.replace('{{TECHNICAL_SECTION}}', this.generateTechnicalHtml(reportData.sections.technical));
    }

    return html;
  }

  /**
   * Generate charts and visualizations
   */
  async generateCharts(reportData) {
    const charts = {};

    try {
      // Rankings trend chart
      if (reportData.sections.rankings) {
        charts.rankingsTrend = await this.createRankingsChart(reportData.sections.rankings);
      }

      // Traffic trend chart
      if (reportData.sections.traffic) {
        charts.trafficTrend = await this.createTrafficChart(reportData.sections.traffic);
      }

      // Core Web Vitals chart
      if (reportData.sections.technical?.categories?.coreWebVitals) {
        charts.coreWebVitals = await this.createCoreWebVitalsChart(
          reportData.sections.technical.categories.coreWebVitals
        );
      }

    } catch (error) {
      this.logger.error('Chart generation failed:', error);
    }

    return charts;
  }

  /**
   * Data collection methods
   */
  async getRankingsData(period = null) {
    try {
      const filePath = path.join(process.cwd(), 'seo-automation/reports/rankings.json');
      const data = await fs.readFile(filePath, 'utf8');
      const rankings = JSON.parse(data);
      
      // Return most recent ranking data
      return rankings[rankings.length - 1] || {
        summary: { improved: 0, declined: 0, stable: 0 },
        keywords: []
      };
    } catch (error) {
      this.logger.warn('Could not load rankings data');
      return { summary: { improved: 0, declined: 0, stable: 0 }, keywords: [] };
    }
  }

  async getTrafficData(period = null) {
    try {
      const filePath = path.join(process.cwd(), 'seo-automation/reports/traffic.json');
      const data = await fs.readFile(filePath, 'utf8');
      const traffic = JSON.parse(data);
      
      return traffic[traffic.length - 1] || {
        metrics: { organicSessions: 0, conversionRate: 0 },
        trends: { organicGrowth: 0 }
      };
    } catch (error) {
      this.logger.warn('Could not load traffic data');
      return {
        metrics: { organicSessions: 0, conversionRate: 0 },
        trends: { organicGrowth: 0 }
      };
    }
  }

  async getConversionsData(period = null) {
    try {
      const filePath = path.join(process.cwd(), 'seo-automation/reports/conversions.json');
      const data = await fs.readFile(filePath, 'utf8');
      const conversions = JSON.parse(data);
      
      return conversions[conversions.length - 1] || {
        summary: { totalConversions: 0, conversionRate: 0 }
      };
    } catch (error) {
      this.logger.warn('Could not load conversions data');
      return { summary: { totalConversions: 0, conversionRate: 0 } };
    }
  }

  async getTechnicalData(period = null) {
    try {
      const filePath = path.join(process.cwd(), 'seo-automation/reports/technical-audit.json');
      const data = await fs.readFile(filePath, 'utf8');
      const technical = JSON.parse(data);
      
      return technical[technical.length - 1] || {
        overallScore: 0,
        summary: { criticalIssues: 0 },
        categories: {}
      };
    } catch (error) {
      this.logger.warn('Could not load technical data');
      return {
        overallScore: 0,
        summary: { criticalIssues: 0 },
        categories: {}
      };
    }
  }

  /**
   * HTML generation helpers
   */
  generateSummaryHtml(summary) {
    const healthColor = summary.overallHealth === 'good' ? 'green' : 
                       summary.overallHealth === 'needs_attention' ? 'orange' : 'red';
    
    return `
      <div class="summary-section">
        <h2>Executive Summary</h2>
        <div class="health-indicator" style="color: ${healthColor}">
          Overall Health: ${summary.overallHealth.replace('_', ' ').toUpperCase()}
        </div>
        
        <div class="key-metrics">
          <h3>Key Metrics</h3>
          <ul>
            ${Object.entries(summary.keyMetrics).map(([key, value]) => 
              `<li>${key}: ${value}</li>`
            ).join('')}
          </ul>
        </div>
        
        ${summary.highlights.length > 0 ? `
          <div class="highlights">
            <h3>Highlights</h3>
            <ul>${summary.highlights.map(h => `<li>${h}</li>`).join('')}</ul>
          </div>
        ` : ''}
        
        ${summary.concerns.length > 0 ? `
          <div class="concerns">
            <h3>Areas of Concern</h3>
            <ul>${summary.concerns.map(c => `<li>${c}</li>`).join('')}</ul>
          </div>
        ` : ''}
        
        ${summary.recommendations.length > 0 ? `
          <div class="recommendations">
            <h3>Recommendations</h3>
            <ul>${summary.recommendations.map(r => `<li>${r}</li>`).join('')}</ul>
          </div>
        ` : ''}
      </div>
    `;
  }

  generateRankingsHtml(rankings) {
    return `
      <div class="rankings-section">
        <h2>Keyword Rankings</h2>
        <div class="summary-stats">
          <span class="stat">Improved: ${rankings.summary.improved}</span>
          <span class="stat">Declined: ${rankings.summary.declined}</span>
          <span class="stat">Stable: ${rankings.summary.stable}</span>
        </div>
        
        <table class="rankings-table">
          <thead>
            <tr><th>Keyword</th><th>Position</th><th>Change</th><th>URL</th></tr>
          </thead>
          <tbody>
            ${rankings.keywords.slice(0, 10).map(kw => `
              <tr>
                <td>${kw.keyword}</td>
                <td>${kw.currentPosition}</td>
                <td class="${kw.change > 0 ? 'positive' : kw.change < 0 ? 'negative' : 'neutral'}">
                  ${kw.change > 0 ? '+' : ''}${kw.change}
                </td>
                <td>${kw.url}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  generateTrafficHtml(traffic) {
    return `
      <div class="traffic-section">
        <h2>Traffic Analysis</h2>
        <div class="traffic-metrics">
          <div class="metric">
            <h3>Organic Sessions</h3>
            <span class="value">${traffic.metrics.organicSessions?.toLocaleString() || 0}</span>
          </div>
          <div class="metric">
            <h3>Conversion Rate</h3>
            <span class="value">${((traffic.metrics.conversionRate || 0) * 100).toFixed(2)}%</span>
          </div>
          <div class="metric">
            <h3>Organic Growth</h3>
            <span class="value ${traffic.trends?.organicGrowth > 0 ? 'positive' : 'negative'}">
              ${traffic.trends?.organicGrowth > 0 ? '+' : ''}${traffic.trends?.organicGrowth || 0}%
            </span>
          </div>
        </div>
      </div>
    `;
  }

  generateTechnicalHtml(technical) {
    return `
      <div class="technical-section">
        <h2>Technical SEO</h2>
        <div class="technical-score">
          <h3>Overall Score: ${technical.overallScore}/100</h3>
        </div>
        
        <div class="technical-summary">
          <span class="stat critical">Critical Issues: ${technical.summary.criticalIssues}</span>
          <span class="stat warning">Warnings: ${technical.summary.warningIssues}</span>
          <span class="stat passed">Passed: ${technical.summary.passedChecks}</span>
        </div>
        
        ${technical.categories ? Object.entries(technical.categories).map(([category, data]) => `
          <div class="category">
            <h4>${category.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</h4>
            <span class="score">${data.score || 0}/100</span>
          </div>
        `).join('') : ''}
      </div>
    `;
  }

  /**
   * Default HTML template
   */
  getDefaultHtmlTemplate() {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <title>SEO Report - {{REPORT_DATE}}</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 20px; }
          .header { border-bottom: 2px solid #007cba; padding-bottom: 10px; }
          .summary-section { margin: 20px 0; }
          .health-indicator { font-size: 18px; font-weight: bold; margin: 10px 0; }
          .key-metrics ul { list-style: none; padding: 0; }
          .key-metrics li { padding: 5px; background: #f5f5f5; margin: 2px 0; }
          .rankings-table { width: 100%; border-collapse: collapse; }
          .rankings-table th, .rankings-table td { border: 1px solid #ddd; padding: 8px; text-align: left; }
          .positive { color: green; }
          .negative { color: red; }
          .neutral { color: gray; }
          .traffic-metrics { display: flex; gap: 20px; }
          .metric { text-align: center; padding: 10px; background: #f9f9f9; }
          .technical-summary { display: flex; gap: 15px; margin: 10px 0; }
          .stat { padding: 5px 10px; border-radius: 3px; }
          .critical { background: #ffebee; color: #c62828; }
          .warning { background: #fff3e0; color: #ef6c00; }
          .passed { background: #e8f5e8; color: #2e7d32; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>SEO Automation Report</h1>
          <p>Website: {{WEBSITE_URL}} | Period: {{PERIOD_START}} to {{PERIOD_END}}</p>
        </div>
        
        {{EXECUTIVE_SUMMARY}}
        {{RANKINGS_SECTION}}
        {{TRAFFIC_SECTION}}
        {{TECHNICAL_SECTION}}
        
        <div class="footer">
          <p><small>Generated automatically by SEO Automation System on {{REPORT_DATE}}</small></p>
        </div>
      </body>
      </html>
    `;
  }

  /**
   * Helper methods
   */
  getDateDaysAgo(days) {
    const date = new Date();
    date.setDate(date.getDate() - days);
    return date.toISOString().split('T')[0];
  }

  async initializeEmailService() {
    // Initialize email transporter (configure based on your email service)
    this.emailTransporter = nodemailer.createTransporter({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
  }

  async loadReportTemplates() {
    // Load custom report templates if they exist
    try {
      const templatesDir = path.join(process.cwd(), 'seo-automation/templates');
      const files = await fs.readdir(templatesDir);
      
      for (const file of files) {
        if (file.endsWith('.html')) {
          const templateName = file.replace('.html', '');
          const templateContent = await fs.readFile(path.join(templatesDir, file), 'utf8');
          this.reportTemplates.set(templateName, templateContent);
        }
      }
    } catch (error) {
      this.logger.warn('No custom templates found, using defaults');
    }
  }

  generateAlertMessage(alert) {
    return {
      subject: `SEO Alert: ${alert.type} - ${this.config.website.domain}`,
      html: `
        <h2>SEO Alert Notification</h2>
        <p><strong>Type:</strong> ${alert.type}</p>
        <p><strong>Severity:</strong> ${alert.severity || 'medium'}</p>
        <p><strong>Message:</strong> ${alert.message}</p>
        <p><strong>Website:</strong> ${alert.website}</p>
        <p><strong>Time:</strong> ${new Date(alert.timestamp).toLocaleString()}</p>
        
        ${alert.details ? `<p><strong>Details:</strong> ${JSON.stringify(alert.details, null, 2)}</p>` : ''}
        
        <hr>
        <p><small>This alert was generated automatically by the SEO Automation System.</small></p>
      `
    };
  }

  async sendEmailAlert(alertMessage) {
    if (!this.emailTransporter) return;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: this.config.reporting.recipients.join(','),
      subject: alertMessage.subject,
      html: alertMessage.html
    };

    await this.emailTransporter.sendMail(mailOptions);
  }

  async sendWeeklyReport(reportData, htmlReport, pdfReport) {
    if (!this.emailTransporter) return;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: this.config.reporting.recipients.join(','),
      subject: `Weekly SEO Report - ${this.config.website.domain}`,
      html: htmlReport,
      attachments: pdfReport ? [{
        filename: 'seo-report.pdf',
        content: pdfReport
      }] : []
    };

    await this.emailTransporter.sendMail(mailOptions);
  }

  async saveReport(reportData, htmlReport, pdfReport) {
    const timestamp = new Date().toISOString().split('T')[0];
    
    // Save HTML report
    const htmlPath = path.join(process.cwd(), `seo-automation/reports/weekly-report-${timestamp}.html`);
    await fs.writeFile(htmlPath, htmlReport);
    
    // Save latest as well
    const latestHtmlPath = path.join(process.cwd(), 'seo-automation/reports/weekly-report.html');
    await fs.writeFile(latestHtmlPath, htmlReport);
    
    // Save JSON data
    const jsonPath = path.join(process.cwd(), `seo-automation/reports/weekly-data-${timestamp}.json`);
    await fs.writeFile(jsonPath, JSON.stringify(reportData, null, 2));
  }

  async logAlert(alert) {
    const alertsPath = path.join(process.cwd(), 'seo-automation/reports/alerts.json');
    
    try {
      let alerts = [];
      try {
        const existing = await fs.readFile(alertsPath, 'utf8');
        alerts = JSON.parse(existing);
      } catch (error) {
        // File doesn't exist
      }

      alerts.push(alert);
      
      // Keep only last 1000 alerts
      if (alerts.length > 1000) {
        alerts = alerts.slice(-1000);
      }

      await fs.writeFile(alertsPath, JSON.stringify(alerts, null, 2));
    } catch (error) {
      this.logger.error('Failed to log alert:', error);
    }
  }

  async createRankingsChart(rankings) {
    // This would integrate with a charting library like Chart.js or D3.js
    return { type: 'line', data: 'chart-data-placeholder' };
  }

  async createTrafficChart(traffic) {
    return { type: 'bar', data: 'chart-data-placeholder' };
  }

  async createCoreWebVitalsChart(vitals) {
    return { type: 'gauge', data: 'chart-data-placeholder' };
  }

  async generatePdfReport(reportData) {
    // This would integrate with a PDF generation library like Puppeteer or PDFKit
    return null; // PDF generation placeholder
  }

  async generateCsvReport(reportData) {
    // Convert report data to CSV format
    return 'CSV data placeholder';
  }

  async sendWebhookAlert(alert) {
    // Send alert to external webhook
    try {
      await fetch(this.config.reporting.webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(alert)
      });
    } catch (error) {
      this.logger.error('Webhook alert failed:', error);
    }
  }

  async healthCheck() {
    return {
      status: 'healthy',
      emailConfigured: !!this.emailTransporter,
      templatesLoaded: this.reportTemplates.size,
      lastReport: new Date().toISOString()
    };
  }

  async getStatus() {
    return {
      emailService: this.emailTransporter ? 'connected' : 'disconnected',
      reportTemplates: Array.from(this.reportTemplates.keys()),
      recipients: this.config.reporting.recipients,
      frequency: this.config.reporting.frequency
    };
  }

  async shutdown() {
    this.logger.info('Shutting down Reporting Service');
    if (this.emailTransporter) {
      this.emailTransporter.close();
    }
  }
}

export { ReportingService };