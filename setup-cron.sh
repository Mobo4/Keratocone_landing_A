#!/bin/bash

# SEO Automation Cron Setup Script
# Sets up daily automation for Dr. Bonakdar's SEO system

echo "🔧 Setting up SEO Automation Cron Jobs..."

# Create cron job entry
CRON_JOB="0 3 * * * cd /Users/alex/Documents/Documents\ -\ MacMiniM4/VSCode_Apps/bonakdar_net_Lovable && node scripts/seo-automation.js >> /tmp/seo-automation.log 2>&1"

# Check if cron job already exists
if crontab -l 2>/dev/null | grep -q "seo-automation.js"; then
    echo "⚠️ SEO automation cron job already exists"
else
    # Add the cron job
    (crontab -l 2>/dev/null; echo "$CRON_JOB") | crontab -
    echo "✅ SEO automation cron job added - runs daily at 3:00 AM"
fi

# Create log rotation script
cat > /tmp/seo-log-rotate.sh << 'EOF'
#!/bin/bash
# Rotate SEO automation logs weekly
if [ -f /tmp/seo-automation.log ]; then
    mv /tmp/seo-automation.log /tmp/seo-automation-$(date +%Y%m%d).log
    # Keep only last 4 weeks of logs
    find /tmp -name "seo-automation-*.log" -mtime +28 -delete
fi
EOF

chmod +x /tmp/seo-log-rotate.sh

# Add log rotation to cron (weekly)
LOG_ROTATE_JOB="0 4 * * 0 /tmp/seo-log-rotate.sh"

if crontab -l 2>/dev/null | grep -q "seo-log-rotate.sh"; then
    echo "⚠️ Log rotation cron job already exists"
else
    (crontab -l 2>/dev/null; echo "$LOG_ROTATE_JOB") | crontab -
    echo "✅ Log rotation cron job added - runs weekly on Sunday at 4:00 AM"
fi

echo ""
echo "📅 Current cron jobs:"
crontab -l | grep -E "(seo|SEO)"

echo ""
echo "🎯 SEO Automation Schedule:"
echo "   ⏰ Daily at 3:00 AM - Full SEO automation run"
echo "   🗂️ Weekly on Sunday at 4:00 AM - Log rotation"
echo "   📍 Logs: /tmp/seo-automation.log"
echo ""
echo "✅ Setup complete! SEO automation will run automatically."