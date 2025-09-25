#!/usr/bin/env node

/**
 * SEO AUTOMATION SETUP SCRIPT
 * 
 * Initial setup and configuration for the SEO automation system
 * Handles environment setup, API key configuration, and validation
 */

import fs from 'fs/promises';
import path from 'path';
import { createInterface } from 'readline';

class SEOAutomationSetup {
  constructor() {
    this.rl = createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  async run() {
    console.log(`
🚀 SEO Automation System Setup
===============================

This setup will configure your SEO automation system for Dr. Bonakdar's website.

Let's get started!
    `);

    try {
      // Check prerequisites
      await this.checkPrerequisites();
      
      // Create directory structure
      await this.createDirectoryStructure();
      
      // Configure environment variables
      await this.setupEnvironmentVariables();
      
      // Install dependencies
      await this.installDependencies();
      
      // Create default configurations
      await this.createDefaultConfigurations();
      
      // Validate setup
      await this.validateSetup();
      
      console.log(`
✅ Setup Complete!

Your SEO automation system is now ready. Here's what you can do next:

📊 Start the dashboard:
   npm run dashboard

🚀 Start the automation system:
   npm start

📈 Check system status:
   npm run status

🏥 Run health check:
   npm run health

🔧 Manual task execution:
   npm run content-update
   npm run search-notification
   npm run performance-check
   npm run technical-audit
   npm run generate-report

📁 Important files:
   - Configuration: seo-automation/configs/seo-config.json
   - Environment: seo-automation/.env
   - Logs: seo-automation/logs/
   - Reports: seo-automation/reports/

🔐 Dashboard access:
   URL: http://localhost:3000
   Username: admin
   Password: (set DASHBOARD_PASSWORD in .env file)

For more information, check the README.md file.
      `);

    } catch (error) {
      console.error('❌ Setup failed:', error.message);
      process.exit(1);
    } finally {
      this.rl.close();
    }
  }

  async checkPrerequisites() {
    console.log('🔍 Checking prerequisites...');
    
    // Check Node.js version
    const nodeVersion = process.version;
    const majorVersion = parseInt(nodeVersion.slice(1).split('.')[0]);
    
    if (majorVersion < 18) {
      throw new Error(`Node.js 18.0.0 or higher required. Current version: ${nodeVersion}`);
    }
    
    console.log(`✓ Node.js version: ${nodeVersion}`);
    
    // Check npm
    try {
      const { execSync } = await import('child_process');
      const npmVersion = execSync('npm --version', { encoding: 'utf8' }).trim();
      console.log(`✓ npm version: ${npmVersion}`);
    } catch (error) {
      throw new Error('npm is required but not found');
    }
    
    console.log('✓ Prerequisites check passed');
  }

  async createDirectoryStructure() {
    console.log('📁 Creating directory structure...');
    
    const directories = [
      'seo-automation/logs',
      'seo-automation/reports',
      'seo-automation/templates',
      'seo-automation/dashboard/public',
      'seo-automation/data',
      'seo-automation/backups'
    ];

    for (const dir of directories) {
      await fs.mkdir(dir, { recursive: true });
      console.log(`✓ Created: ${dir}`);
    }
  }

  async setupEnvironmentVariables() {
    console.log('🔧 Setting up environment variables...');
    
    const envPath = path.join(process.cwd(), 'seo-automation/.env');
    
    // Check if .env already exists
    try {
      await fs.access(envPath);
      const overwrite = await this.question('Environment file already exists. Overwrite? (y/N): ');
      if (overwrite.toLowerCase() !== 'y') {
        console.log('✓ Keeping existing environment file');
        return;
      }
    } catch (error) {
      // File doesn't exist, continue
    }

    console.log('\\nConfiguring API keys and settings...');
    console.log('(Leave blank to skip optional services)');

    const googleApiKey = await this.question('Google API Key (for Analytics/Search Console): ');
    const bingApiKey = await this.question('Bing Webmaster API Key: ');
    const indexNowKey = await this.question('IndexNow API Key: ');
    const emailUser = await this.question('Email username (for notifications): ');
    const emailPass = await this.question('Email password (for notifications): ');
    const webhookUrl = await this.question('Webhook URL (for alerts): ');

    const envContent = `# SEO Automation Environment Variables
# Generated on ${new Date().toISOString()}

# Google APIs
GOOGLE_API_KEY=${googleApiKey}
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

# Search Console
GOOGLE_SEARCH_CONSOLE_SITE_URL=https://eyecarecenteroc.com

# Analytics
GA_PROPERTY_ID=

# Bing Webmaster Tools
BING_API_KEY=${bingApiKey}
BING_SITE_URL=https://eyecarecenteroc.com

# IndexNow
INDEX_NOW_KEY=${indexNowKey}

# Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=${emailUser}
EMAIL_PASS=${emailPass}

# Notification Settings
WEBHOOK_URL=${webhookUrl}
ALERT_EMAIL=${emailUser}

# Security
JWT_SECRET=seo-automation-jwt-secret-${Date.now()}
DASHBOARD_PASSWORD=changeme_set_secure_password

# Database (if needed)
DATABASE_URL=

# Environment
NODE_ENV=production
LOG_LEVEL=info

# Rate Limiting
RATE_LIMIT_ENABLED=true
RATE_LIMIT_WINDOW=900000
RATE_LIMIT_MAX=100

# Caching
CACHE_TTL=300
CACHE_MAX_SIZE=1000
`;

    await fs.writeFile(envPath, envContent);
    console.log('✓ Environment variables configured');
    console.log('💡 You can edit seo-automation/.env to update these settings later');
  }

  async installDependencies() {
    console.log('📦 Installing dependencies...');
    
    const installDeps = await this.question('Install npm dependencies now? (Y/n): ');
    if (installDeps.toLowerCase() === 'n') {
      console.log('⚠️  Skipping dependency installation');
      console.log('💡 Run "npm install" in the seo-automation directory later');
      return;
    }

    try {
      const { execSync } = await import('child_process');
      
      console.log('Installing packages... this may take a few minutes');
      
      process.chdir('seo-automation');
      execSync('npm install', { stdio: 'inherit' });
      process.chdir('..');
      
      console.log('✓ Dependencies installed successfully');
    } catch (error) {
      console.log('⚠️  Dependency installation failed');
      console.log('💡 Run "npm install" in the seo-automation directory manually');
    }
  }

  async createDefaultConfigurations() {
    console.log('⚙️  Creating default configurations...');
    
    // Create sample data files
    await this.createSampleTestimonials();
    await this.createSampleKeywordData();
    await this.createDefaultTemplates();
    
    console.log('✓ Default configurations created');
  }

  async createSampleTestimonials() {
    const testimonialsPath = path.join(process.cwd(), 'seo-automation/data/testimonials.json');
    
    const testimonials = [
      {
        id: 1,
        author: "Sarah M.",
        rating: 5,
        text: "Excellent care and professional service. Dr. Bonakdar explained everything clearly and made me feel comfortable throughout my cataract surgery.",
        category: "cataract",
        date: "2024-01-15",
        verified: true
      },
      {
        id: 2,
        author: "John D.",
        rating: 5,
        text: "Outstanding results from my glaucoma treatment. The staff is knowledgeable and caring.",
        category: "glaucoma",
        date: "2024-01-20",
        verified: true
      },
      {
        id: 3,
        author: "Maria L.",
        rating: 5,
        text: "Best eye care experience I've had. Professional, thorough, and genuinely caring.",
        category: "general",
        date: "2024-02-01",
        verified: true
      }
    ];

    await fs.writeFile(testimonialsPath, JSON.stringify(testimonials, null, 2));
  }

  async createSampleKeywordData() {
    const keywordsPath = path.join(process.cwd(), 'seo-automation/data/keyword-tracking.json');
    
    const keywords = [
      {
        keyword: "eye doctor orange county",
        currentPosition: 3,
        previousPosition: 4,
        searchVolume: 1200,
        difficulty: 65,
        lastUpdated: new Date().toISOString()
      },
      {
        keyword: "ophthalmologist orange county",
        currentPosition: 5,
        previousPosition: 6,
        searchVolume: 800,
        difficulty: 70,
        lastUpdated: new Date().toISOString()
      },
      {
        keyword: "cataract surgery orange county",
        currentPosition: 2,
        previousPosition: 2,
        searchVolume: 600,
        difficulty: 75,
        lastUpdated: new Date().toISOString()
      }
    ];

    await fs.writeFile(keywordsPath, JSON.stringify(keywords, null, 2));
  }

  async createDefaultTemplates() {
    // Email templates
    const emailTemplatesDir = path.join(process.cwd(), 'seo-automation/templates/email');
    await fs.mkdir(emailTemplatesDir, { recursive: true });
    
    const alertTemplate = `Subject: SEO Alert - {{alertType}}

Dear Administrator,

An SEO alert has been triggered for {{websiteDomain}}:

Alert Type: {{alertType}}
Severity: {{severity}}
Message: {{message}}
Timestamp: {{timestamp}}

{{#if details}}
Details:
{{details}}
{{/if}}

Please review and take appropriate action if necessary.

Best regards,
SEO Automation System`;

    await fs.writeFile(
      path.join(emailTemplatesDir, 'alert-notification.txt'),
      alertTemplate
    );

    const reportTemplate = `Subject: Weekly SEO Report - {{websiteDomain}}

Dear Team,

Here's your weekly SEO performance report for {{websiteDomain}}:

## Summary
- Overall Health: {{overallHealth}}
- Organic Traffic: {{organicTraffic}} sessions
- Ranking Changes: {{rankingChanges}}
- Technical Score: {{technicalScore}}/100

## Key Highlights
{{#each highlights}}
- {{this}}
{{/each}}

{{#if concerns}}
## Areas of Concern
{{#each concerns}}
- {{this}}
{{/each}}
{{/if}}

For detailed metrics, please access the dashboard at {{dashboardUrl}}

Best regards,
SEO Automation System`;

    await fs.writeFile(
      path.join(emailTemplatesDir, 'weekly-report.txt'),
      reportTemplate
    );
  }

  async validateSetup() {
    console.log('🔍 Validating setup...');
    
    const checks = [
      {
        name: 'Configuration file',
        path: 'seo-automation/configs/seo-config.json'
      },
      {
        name: 'Environment file',
        path: 'seo-automation/.env'
      },
      {
        name: 'Package file',
        path: 'seo-automation/package.json'
      },
      {
        name: 'Main orchestrator',
        path: 'seo-automation/scripts/seo-orchestrator.js'
      },
      {
        name: 'Dashboard server',
        path: 'seo-automation/scripts/dashboard-server.js'
      }
    ];

    for (const check of checks) {
      try {
        await fs.access(check.path);
        console.log(`✓ ${check.name} exists`);
      } catch (error) {
        console.log(`❌ ${check.name} missing`);
        throw new Error(`Setup validation failed: ${check.name} not found`);
      }
    }

    console.log('✓ Setup validation passed');
  }

  question(prompt) {
    return new Promise((resolve) => {
      this.rl.question(prompt, resolve);
    });
  }
}

// Run setup if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const setup = new SEOAutomationSetup();
  await setup.run();
}