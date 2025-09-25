#!/usr/bin/env python3
"""
Google Indexing Status Monitor for EyeCare Center OC
Run this script periodically to check indexing progress
"""

import requests
import time
from urllib.parse import quote

def check_google_indexing():
    """Check if pages are indexed by Google"""

    base_url = "https://www.eyecarecenteroc.com"
    priority_pages = [
        "/",
        "/about",
        "/services",
        "/contact",
        "/conditions/keratoconus",
        "/conditions/dry-eye"
    ]

    print("🔍 Checking Google indexing status...")

    for page in priority_pages:
        full_url = base_url + page

        # Use Google search to check if page is indexed
        search_query = f"site:{full_url}"
        search_url = f"https://www.google.com/search?q={quote(search_query)}"

        print(f"Checking: {full_url}")
        print(f"Search URL: {search_url}")

        # In a real implementation, you would parse the search results
        # For now, just log the URLs for manual checking

        time.sleep(2)  # Rate limiting

    print("\n✅ Indexing check completed")
    print("💡 Manual verification: Visit the search URLs above")

if __name__ == "__main__":
    check_google_indexing()
