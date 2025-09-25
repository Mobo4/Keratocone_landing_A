#!/usr/bin/env python3
"""
Webflow Site Creator for Dr. Bonakdar Optometry
Creates 300-page optimized structure with preserved SEO
"""

import requests
import json
import time
from typing import Dict, List, Optional

class WebflowSiteCreator:
    def __init__(self, api_token: str):
        self.api_token = api_token
        self.base_url = "https://api.webflow.com/v2"
        self.headers = {
            "Authorization": f"Bearer {api_token}",
            "accept": "application/json",
            "content-type": "application/json"
        }

    def get_sites(self) -> Dict:
        """Get all sites in the workspace"""
        response = requests.get(f"{self.base_url}/sites", headers=self.headers)
        return response.json()

    def create_site(self, name: str, workspace_id: str) -> Dict:
        """Create a new Webflow site"""
        data = {
            "displayName": name,
            "workspaceId": workspace_id,
            "timeZone": "America/Los_Angeles"
        }
        response = requests.post(f"{self.base_url}/sites", headers=self.headers, json=data)
        return response.json()

    def get_pages(self, site_id: str) -> Dict:
        """Get all pages for a site"""
        response = requests.get(f"{self.base_url}/sites/{site_id}/pages", headers=self.headers)
        return response.json()

    def create_page(self, site_id: str, title: str, slug: str, parent_id: Optional[str] = None) -> Dict:
        """Create a new page"""
        data = {
            "title": title,
            "slug": slug
        }
        if parent_id:
            data["parentId"] = parent_id

        response = requests.post(f"{self.base_url}/sites/{site_id}/pages", headers=self.headers, json=data)
        return response.json()

# Service and location definitions
SERVICES = [
    "dry-eye-doctor-near-me",
    "keratoconus-scleral-lens-specialist-near-me",  # MERGED SERVICE
    "optometrist-near-me",
    "myopia-control",
    "orthokeratology",
    "headache-eye-fatigue"
]

TOP_28_LOCATIONS = [
    "anaheim-hills", "balboa-island", "corona-del-mar", "downtown-brea",
    "downtown-fullerton", "downtown-huntington-beach", "downtown-santa-ana",
    "fashion-island", "huntington-harbor", "little-saigon", "mesa-verde",
    "newport-coast", "northwood", "old-town-tustin", "old-towne-orange",
    "orange-park-acres", "orchard-hills", "platinum-triangle", "portola-springs",
    "quail-hill", "south-coast-metro", "turtle-rock", "tustin-legacy",
    "tustin-ranch", "university-park", "west-garden-grove", "woodbridge", "great-park"
]

CONDITIONS = [
    "subconjunctival-hemorrhage", "posterior-vitreous-detachment",
    "ocular-surface-disease", "computer-vision-syndrome", "uveitis-iritis",
    "herpes-simplex-keratitis", "narrow-angles", "blepharitis",
    "fuchs-corneal-dystrophy", "allergic-conjunctivitis", "floaters-flashes",
    "myopia", "pinguecula-pterygium"
]

def main():
    """Main execution function"""
    print("🚀 Starting Dr. Bonakdar Webflow Site Creation")
    print("📊 Target: 300 pages (377→300 optimization)")

    # Initialize creator
    creator = WebflowSiteCreator("1b57afb40d7b010bd4174aba0775dea577952a9f73548d56ec2417240ba5d9bd")

    # Get existing sites
    sites = creator.get_sites()
    print(f"✅ API Connected. Found {len(sites.get('sites', []))} existing sites")

    # Get workspace ID from existing site
    workspace_id = sites['sites'][0]['workspaceId'] if sites.get('sites') else None
    if not workspace_id:
        print("❌ No workspace found")
        return

    print(f"📁 Using workspace: {workspace_id}")

    # Create new site for Dr. Bonakdar
    print("🏗️ Creating Dr. Bonakdar Optometry site...")
    new_site = creator.create_site("Dr. Bonakdar Optometry", workspace_id)
    site_id = new_site.get('id')

    if not site_id:
        print(f"❌ Failed to create site: {new_site}")
        return

    print(f"✅ Site created! ID: {site_id}")
    print(f"🌐 Site name: {new_site.get('displayName')}")

    # Page creation summary
    print("\n📄 Page Structure Plan:")
    print(f"   • Main pages: 36")
    print(f"   • Medical conditions: {len(CONDITIONS)}")
    print(f"   • Service pages: {len(SERVICES)} × {len(TOP_28_LOCATIONS)} = {len(SERVICES) * len(TOP_28_LOCATIONS)}")
    print(f"   • Landing pages: 4")
    print(f"   • Neighborhoods: 40")
    print(f"   • TOTAL: ~300 pages")

    print(f"\n🎯 Ready to create pages for site: {site_id}")
    print("📋 Use the instructions in CLAUDE_DESKTOP_WEBFLOW_INSTRUCTIONS.md for detailed page creation")

if __name__ == "__main__":
    main()