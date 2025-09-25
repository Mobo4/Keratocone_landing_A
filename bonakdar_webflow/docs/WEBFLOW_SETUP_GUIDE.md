# Webflow MCP Server Setup Guide

## ✅ Installation Complete

The Webflow MCP server has been installed and configured for Claude Code. You can now replicate your Dr. Bonakdar website to Webflow.

## 🔑 Required: Webflow API Token Setup

### Step 1: Get Your Webflow API Token
1. **Go to Webflow Account Settings**: https://webflow.com/account
2. **Navigate to**: Integrations → API Access
3. **Generate new token** with these permissions:
   - Sites: Read, Write
   - CMS: Read, Write
   - Forms: Read
   - Users: Read

### Step 2: Add API Token to Configuration
1. **Edit the Claude config file**:
   ```bash
   nano "/Users/alex/Library/Application Support/Claude/claude_desktop_config.json"
   ```
2. **Find the webflow section** and add your token:
   ```json
   "webflow": {
     "command": "npx",
     "args": ["webflow-mcp-server"],
     "env": {
       "WEBFLOW_API_TOKEN": "YOUR_TOKEN_HERE"
     }
   }
   ```
3. **Restart Claude Code** for changes to take effect

## 🚀 Available Webflow MCP Commands

Once configured, you'll have access to these tools:

### Site Management
- `webflow_list_sites` - List all your Webflow sites
- `webflow_get_site` - Get detailed site information
- `webflow_publish_site` - Publish site to live domain

### Collection (CMS) Management
- `webflow_list_collections` - List CMS collections
- `webflow_get_collection` - Get collection details
- `webflow_create_collection_item` - Add new CMS items
- `webflow_update_collection_item` - Update existing items

### Page Management
- `webflow_list_pages` - List all pages in site
- `webflow_get_page` - Get page content and structure

## 🏥 Dr. Bonakdar Website Replication Strategy

### Phase 1: Site Structure Analysis
```
Current React Website Analysis:
├── Homepage (/)
├── About (/about)
├── Services (/services)
├── Contact (/contact)
├── Eyewear (/eyewear)
├── Fashion (/fashion)
├── Locations (/locations)
├── Medical Conditions:
│   ├── Keratoconus (/conditions/keratoconus)
│   ├── Dry Eye (/conditions/dry-eye)
│   ├── LASIK (/conditions/lasik)
│   ├── Cataract (/conditions/cataract)
│   └── Ortho-K (/conditions/ortho-k)
└── Spanish Routes (/es/*)
```

### Phase 2: Webflow Site Creation
1. **Create new Webflow site** for Dr. Bonakdar
2. **Set up CMS collections** for:
   - Medical conditions
   - Services
   - Locations
   - Blog/education content
3. **Design responsive layouts** matching current branding

### Phase 3: Content Migration
1. **Extract content** from React components
2. **Import to Webflow CMS** using MCP server
3. **Recreate page structures** with Webflow Designer
4. **Implement multilingual support** (English/Spanish)

### Phase 4: SEO Preservation
1. **Maintain URL structure** for SEO
2. **Import meta tags** and descriptions
3. **Set up redirects** from old URLs if needed
4. **Verify schema markup** and structured data

## 🔧 Replication Workflow Commands

### 1. Analyze Current Site Structure
```
"Use the webflow MCP server to list my existing sites and help me create a new site for the Dr. Bonakdar optometry practice"
```

### 2. Create Content Collections
```
"Create Webflow CMS collections for medical conditions, services, and locations based on the current React website structure"
```

### 3. Migrate Content
```
"Extract content from the React components and import them into the Webflow CMS collections using the MCP server"
```

### 4. Design & Styling
```
"Help me recreate the current website design in Webflow, maintaining the eyecare branding and responsive layout"
```

## 📊 Content Mapping Reference

### Current React Structure → Webflow Collections

**Medical Conditions Collection:**
- Name (text)
- Slug (text)
- Description (rich text)
- Symptoms (rich text)
- Treatment options (rich text)
- Images (image)
- SEO meta (text)

**Services Collection:**
- Service name (text)
- Description (rich text)
- Benefits (rich text)
- Process (rich text)
- Pricing info (rich text)
- Call-to-action (text)

**Locations Collection:**
- Office name (text)
- Address (text)
- Phone (text)
- Hours (rich text)
- Services offered (multi-reference)
- Map embed (embed)

## 🌐 Multilingual Considerations

The current site supports English and Spanish. For Webflow:
1. **Option A**: Separate sites for each language
2. **Option B**: Single site with conditional content
3. **Option C**: Webflow Localization (paid feature)

## 🎯 Success Metrics

- ✅ All current pages replicated
- ✅ SEO rankings maintained
- ✅ Mobile responsiveness preserved
- ✅ Contact forms functional
- ✅ Load times comparable or better
- ✅ Admin-friendly CMS for updates

## 🚨 Important Notes

1. **Backup**: Ensure current React site remains functional during transition
2. **SEO**: Implement proper redirects and maintain URL structure
3. **Testing**: Thoroughly test all forms and functionality
4. **Performance**: Monitor site speed after migration
5. **Analytics**: Set up tracking to compare performance

## 📞 Next Steps

1. **Get Webflow API token** and update configuration
2. **Restart Claude Code** to activate MCP server
3. **Run initial site analysis** with Webflow tools
4. **Plan migration timeline** with client approval
5. **Begin content structure mapping**

Ready to start replicating your optometry website to Webflow!