#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Image Optimization Statistics
 * Shows file size savings from WebP and AVIF conversion
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

function analyzeDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) return [];
  
  const results = [];
  const files = fs.readdirSync(dirPath, { withFileTypes: true });
  
  for (const file of files) {
    const fullPath = path.join(dirPath, file.name);
    
    if (file.isDirectory()) {
      results.push(...analyzeDirectory(fullPath));
    } else if (file.isFile()) {
      const ext = path.extname(file.name).toLowerCase();
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        const baseName = path.basename(file.name, ext);
        const dirName = path.dirname(fullPath);
        
        const originalSize = getFileSize(fullPath);
        const webpSize = getFileSize(path.join(dirName, `${baseName}.webp`));
        const avifSize = getFileSize(path.join(dirName, `${baseName}.avif`));
        
        if (webpSize > 0 || avifSize > 0) {
          results.push({
            original: fullPath,
            originalSize,
            webpSize,
            avifSize,
            webpSavings: originalSize > 0 ? ((originalSize - webpSize) / originalSize * 100) : 0,
            avifSavings: originalSize > 0 ? ((originalSize - avifSize) / originalSize * 100) : 0
          });
        }
      }
    }
  }
  
  return results;
}

function main() {
  console.log('📊 Image Optimization Statistics\n');
  
  const directories = ['public/images', 'public/lovable-uploads'];
  let totalResults = [];
  
  for (const dir of directories) {
    console.log(`📁 Analyzing ${dir}...`);
    const results = analyzeDirectory(dir);
    totalResults.push(...results);
  }
  
  if (totalResults.length === 0) {
    console.log('No optimized images found.');
    return;
  }
  
  // Calculate totals
  const totals = totalResults.reduce((acc, result) => ({
    originalTotal: acc.originalTotal + result.originalSize,
    webpTotal: acc.webpTotal + result.webpSize,
    avifTotal: acc.avifTotal + result.avifSize
  }), { originalTotal: 0, webpTotal: 0, avifTotal: 0 });
  
  const webpTotalSavings = ((totals.originalTotal - totals.webpTotal) / totals.originalTotal * 100);
  const avifTotalSavings = ((totals.originalTotal - totals.avifTotal) / totals.originalTotal * 100);
  
  console.log('\n🎯 Summary:');
  console.log(`Total images optimized: ${totalResults.length}`);
  console.log(`Original total size: ${formatBytes(totals.originalTotal)}`);
  console.log(`WebP total size: ${formatBytes(totals.webpTotal)} (${webpTotalSavings.toFixed(1)}% reduction)`);
  console.log(`AVIF total size: ${formatBytes(totals.avifTotal)} (${avifTotalSavings.toFixed(1)}% reduction)`);
  console.log(`Total savings with AVIF: ${formatBytes(totals.originalTotal - totals.avifTotal)}`);
  
  // Show top 10 largest savings
  console.log('\n🏆 Top 10 Largest Size Reductions (AVIF):');
  const topSavings = totalResults
    .filter(r => r.avifSize > 0)
    .sort((a, b) => (b.originalSize - b.avifSize) - (a.originalSize - a.avifSize))
    .slice(0, 10);
    
  topSavings.forEach((result, index) => {
    const filename = path.basename(result.original);
    const savings = formatBytes(result.originalSize - result.avifSize);
    console.log(`${index + 1}. ${filename}: ${savings} saved (${result.avifSavings.toFixed(1)}%)`);
  });
  
  console.log('\n✅ Image optimization complete! Your website will load significantly faster.');
}

if (require.main === module) {
  main();
}