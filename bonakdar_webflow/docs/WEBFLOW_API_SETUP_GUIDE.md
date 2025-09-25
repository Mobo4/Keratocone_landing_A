# Webflow API Setup Guide - Dr. Bonakdar Optometry

## 🔑 CRITICAL: API Token Regeneration Required

**Current Status**: API token lacks required permissions
**Required Action**: Generate new token with full scope permissions

## 📋 Step-by-Step API Token Setup

### Step 1: Access Webflow Account Settings
1. Navigate to: https://webflow.com/account
2. Click on **Integrations** in the left sidebar
3. Select **API Access** tab

### Step 2: Generate New API Token
1. Click **"Generate new token"** button
2. **Token Name**: `Dr Bonakdar Optometry - MCP Integration`
3. **Description**: `API token for automated site creation and content management via MCP server`

### Step 3: Configure Required Permissions
**CRITICAL**: Select ALL of the following scopes:

#### Site Management Permissions
- [x] **sites:read** - Required to list and read site information
- [x] **sites:write** - Required to create and modify sites
- [x] **sites:publish** - Required to publish site changes

#### Content Management Permissions
- [x] **cms:read** - Required to read CMS collections and items
- [x] **cms:write** - Required to create and modify CMS collections and items

#### Form Management Permissions
- [x] **forms:read** - Required to access form submissions

#### User Management Permissions
- [x] **users:read** - Required to read user information

### Step 4: Save and Copy Token
1. Click **"Generate token"**
2. **IMPORTANT**: Copy the token immediately - it will only be shown once
3. Store securely in password manager or secure environment file

## 🧪 API Token Verification

### Test 1: Basic Connectivity
```bash
curl -X GET "https://api.webflow.com/v2/sites" \
  -H "Authorization: Bearer YOUR_NEW_TOKEN_HERE" \
  -H "accept: application/json"
```

**Expected Success Response**:
```json
{
  "sites": []
}
```

**Error Response (if permissions still insufficient)**:
```json
{
  "message": "OAuthForbidden: You are missing the following scopes - 'sites:read'",
  "code": "missing_scopes"
}
```

### Test 2: Site Creation Capability
```bash
curl -X POST "https://api.webflow.com/v2/sites" \
  -H "Authorization: Bearer YOUR_NEW_TOKEN_HERE" \
  -H "Content-Type: application/json" \
  -H "accept: application/json" \
  -d '{
    "displayName": "Test Site Creation",
    "subdomain": "test-creation-check"
  }'
```

**Expected Success Response**:
```json
{
  "id": "site_id_here",
  "displayName": "Test Site Creation",
  "subdomain": "test-creation-check",
  ...
}
```

### Test 3: CMS Collection Access
```bash
# Replace SITE_ID with actual site ID from previous test
curl -X GET "https://api.webflow.com/v2/sites/SITE_ID/collections" \
  -H "Authorization: Bearer YOUR_NEW_TOKEN_HERE" \
  -H "accept: application/json"
```

## 🔧 Environment Configuration

### Update Project Environment
Once token is verified, add to project environment:

**For Development** (`.env.local`):
```bash
WEBFLOW_API_TOKEN=your_new_token_here
WEBFLOW_SITE_ID=will_be_generated
```

**For MCP Server Configuration**:
```json
{
  "webflow": {
    "command": "npx",
    "args": ["webflow-mcp-server"],
    "env": {
      "WEBFLOW_API_TOKEN": "your_new_token_here"
    }
  }
}
```

## 🏗️ Site Creation Process

Once API token is verified, proceed with site creation:

### Option 1: API-Driven Creation (Recommended)
```bash
curl -X POST "https://api.webflow.com/v2/sites" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "displayName": "Dr. Bonakdar Optometry",
    "subdomain": "drbonakdar-optometry",
    "customDomains": []
  }'
```

### Option 2: Manual Creation (Fallback)
1. Go to Webflow Dashboard: https://webflow.com/dashboard
2. Click **"New Site"**
3. Choose **"Start from scratch"**
4. Site Name: `Dr. Bonakdar Optometry`
5. Subdomain: `drbonakdar-optometry`
6. Plan: **Professional** (required for CMS)

## 📊 Post-Creation Validation

### Verify Site Creation
```bash
# List all sites to confirm creation
curl -X GET "https://api.webflow.com/v2/sites" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "accept: application/json"
```

### Configure Basic Site Settings
```bash
# Update site settings
curl -X PATCH "https://api.webflow.com/v2/sites/SITE_ID" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "displayName": "Dr. Bonakdar Optometry",
    "customDomains": ["www.drbonakdar.com"]
  }'
```

## 🚨 Troubleshooting Common Issues

### Issue 1: "Missing Scopes" Error
**Cause**: API token doesn't have required permissions
**Solution**: Regenerate token with ALL required scopes checked

### Issue 2: "Invalid Token" Error
**Cause**: Token copied incorrectly or has expired
**Solution**: Verify token format and regenerate if necessary

### Issue 3: "Site Creation Failed"
**Cause**: Subdomain already exists or invalid characters
**Solution**: Try different subdomain name

### Issue 4: "Rate Limit Exceeded"
**Cause**: Too many API calls in short period
**Solution**: Wait 60 seconds and retry

## 📝 Security Best Practices

### Token Management
1. **Never commit API tokens to git repositories**
2. **Use environment variables for all configurations**
3. **Rotate tokens every 90 days**
4. **Use descriptive token names for tracking**

### Access Control
1. **Minimum required permissions only**
2. **Regular audit of API usage**
3. **Monitor for unexpected API calls**
4. **Immediate revocation if compromised**

## 🎯 Next Steps After Token Setup

1. **Complete API verification tests**
2. **Create Dr. Bonakdar Optometry site**
3. **Configure basic design system**
4. **Begin CMS collection setup**
5. **Implement eyecare branding colors**

---

**Priority**: HIGH - Required before any Webflow development
**Estimated Time**: 30 minutes setup + 15 minutes testing
**Dependencies**: Valid Webflow account with Professional plan access