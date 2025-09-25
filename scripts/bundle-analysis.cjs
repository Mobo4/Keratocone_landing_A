#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Bundle Analysis Script
 * Analyzes Vite build output for optimization opportunities
 */

function getFileSize(filePath) {
  try {
    const stats = fs.statSync(filePath);
    return stats.size;
  } catch {
    return 0;
  }
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}

function analyzeBuild() {
  const distPath = './dist/assets';
  
  if (!fs.existsSync(distPath)) {
    console.log('❌ Build directory not found. Run `npm run build` first.');
    return;
  }

  const files = fs.readdirSync(distPath);
  const assets = [];
  let totalSize = 0;

  for (const file of files) {
    const filePath = path.join(distPath, file);
    const size = getFileSize(filePath);
    const ext = path.extname(file);
    
    totalSize += size;
    
    // Categorize assets
    let category = 'other';
    if (ext === '.js') category = 'javascript';
    else if (ext === '.css') category = 'css';
    else if (['.png', '.jpg', '.jpeg', '.webp', '.avif', '.svg'].includes(ext)) category = 'images';
    
    assets.push({
      file,
      size,
      category,
      isVendor: file.includes('vendor'),
      isIndex: file.includes('index'),
      isChunk: !file.includes('index') && !file.includes('vendor') && ext === '.js'
    });
  }

  // Sort by size
  assets.sort((a, b) => b.size - a.size);

  console.log('📦 Bundle Analysis Report\n');
  console.log(`Total bundle size: ${formatBytes(totalSize)}\n`);

  // Summary by category
  const categories = assets.reduce((acc, asset) => {
    acc[asset.category] = (acc[asset.category] || 0) + asset.size;
    return acc;
  }, {});

  console.log('📊 Size by Category:');
  Object.entries(categories).forEach(([cat, size]) => {
    console.log(`  ${cat}: ${formatBytes(size)} (${((size/totalSize)*100).toFixed(1)}%)`);
  });

  console.log('\n🏆 Largest Assets:');
  assets.slice(0, 10).forEach((asset, i) => {
    const percentage = ((asset.size / totalSize) * 100).toFixed(1);
    console.log(`${i + 1}. ${asset.file}: ${formatBytes(asset.size)} (${percentage}%)`);
  });

  // JavaScript analysis
  const jsAssets = assets.filter(a => a.category === 'javascript');
  const vendorJs = jsAssets.filter(a => a.isVendor);
  const indexJs = jsAssets.filter(a => a.isIndex);
  const chunkJs = jsAssets.filter(a => a.isChunk);

  console.log('\n📄 JavaScript Bundle Breakdown:');
  console.log(`  Vendor chunks: ${vendorJs.length} files, ${formatBytes(vendorJs.reduce((sum, a) => sum + a.size, 0))}`);
  console.log(`  Main/Index chunks: ${indexJs.length} files, ${formatBytes(indexJs.reduce((sum, a) => sum + a.size, 0))}`);
  console.log(`  Page chunks: ${chunkJs.length} files, ${formatBytes(chunkJs.reduce((sum, a) => sum + a.size, 0))}`);

  // Recommendations
  console.log('\n💡 Optimization Recommendations:');
  
  if (vendorJs.some(a => a.size > 200 * 1024)) {
    console.log('  ⚠️  Large vendor bundle detected (>200KB) - consider vendor splitting');
  }
  
  if (indexJs.some(a => a.size > 100 * 1024)) {
    console.log('  ⚠️  Large main bundle detected (>100KB) - consider code splitting');
  }
  
  const largeCss = assets.filter(a => a.category === 'css' && a.size > 50 * 1024);
  if (largeCss.length > 0) {
    console.log('  ⚠️  Large CSS bundle detected (>50KB) - consider CSS splitting or unused CSS removal');
  }

  const totalJsSize = jsAssets.reduce((sum, a) => sum + a.size, 0);
  if (totalJsSize > 500 * 1024) {
    console.log('  ⚠️  Total JavaScript size is large (>500KB) - consider lazy loading and tree shaking');
  }
  
  console.log('\n✅ Good practices detected:');
  if (chunkJs.length > 5) {
    console.log('  ✓ Good code splitting - multiple page chunks found');
  }
  if (assets.some(a => a.file.includes('LazyImage'))) {
    console.log('  ✓ Lazy loading implementation found');
  }
  if (vendorJs.length > 0) {
    console.log('  ✓ Vendor code separation implemented');
  }
}

if (require.main === module) {
  analyzeBuild();
}

module.exports = { analyzeBuild };