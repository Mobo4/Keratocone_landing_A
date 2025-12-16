# 🕵️‍♂️ Local Semrush Agent (`tools/seo-audit`)

This directory contains the custom **Semrush Emulation Agent** designed for the `eyecare-center-oc` project. It is a Node.js-based automated auditor that "learns" from our specific codebase structure to provide high-fidelity SEO checks without the noise of generic tools.

## 🧠 The "Brain" (`audit.mjs`)
The agent's logic is encapsulated in `audit.mjs`. It currently possesses **10 Core Skills** derived from technical SEO best practices and specific learnings from this project.

### 🔍 Skill Matrix
| ID | Skill / Check | Description | Project Learning / Adaptation |
|----|---------------|-------------|-------------------------------|
| 1 | **Metadata Existence** | Checks if `export const metadata` exists. | Scans `page.tsx` specifically. |
| 2 | **Alt Text Scanner** | Finds images missing descriptions. | Handles standard `<img>` and Next.js `<Image>`. |
| 3 | **Schema Validator** | Verifies JSON-LD presence. | **Learned:** Knows to check for our custom `generateLocalBusinessSchema` functions. |
| 4 | **H1 Guardian** | Ensures one `<h1>` per page. | **Learned:** "Smart detection" ignores pages where `<h1>` is hidden inside `<Hero>` components (to avoid false positives). |
| 5 | **Metadata Analyst** | Checks Title/Desc length & Quality. | Enforces Semrush character limits and Canonical/OG tag presence. |
| 6 | **Broken Image Hunter** | Verifies local image paths. | Checks `src="/..."` attributes against the actual `public/` directory structure. |
| 7 | **Link Auditor** | Finds broken internal links. | Validates Next.js dynamic routes (e.g., `[slug]`) vs static paths. |
| 8 | **Global File Check** | Checks critical SEO files. | Verifies `robots.txt`, `sitemap.xml`, and `favicon.ico`. |
| 9 | **Sitemap Coverage** | Finds orphaned pages. | **Learned:** cross-references `app/` directory against `sitemap.ts` to find forgotten pages. |
| 10 | **Keyword Scanner** | Checks for target keywords. | Configurable list in `config.mjs` to ensure semantic density. |

## ⚙️ Configuration (`config.mjs`)
The agent's "Memory" of what is important.
- **Critical Pages**: Pages that MUST have Schema.
- **Validation Rules**: Min/Max lengths for titles and descriptions.
- **Exclusions**: Directories to ignore (e.g., `admin`, `api`).

## 🚀 Usage
The agent is runnable via the CLI:
```bash
node tools/seo-audit/audit.mjs
```
It outputs a console report and a JSON file in `docs/seo-audit-report.json`.

## 🔄 Continuous Learning
As we find new issues or false positives (like the "Missing H1" in complex components), we refine the logic in `audit.mjs` to make the agent smarter and more context-aware.
