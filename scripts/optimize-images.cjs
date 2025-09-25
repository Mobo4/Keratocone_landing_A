#!/usr/bin/env node

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

/**
 * Image Optimization Script
 * Converts JPG/PNG images to WebP and AVIF formats
 * Maintains original files as fallbacks
 */

const INPUT_DIRS = [
  'public/images',
  'public/lovable-uploads'
];

const OUTPUT_QUALITY = {
  webp: 85,
  avif: 80,
  jpeg: 85,
  png: 95
};

async function optimizeImage(inputPath, outputDir) {
  const filename = path.basename(inputPath, path.extname(inputPath));
  const ext = path.extname(inputPath).toLowerCase();
  
  // Skip if not a supported image format
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) {
    return;
  }

  try {
    const imageBuffer = fs.readFileSync(inputPath);
    const image = sharp(imageBuffer);
    const metadata = await image.metadata();
    
    console.log(`Optimizing: ${inputPath} (${metadata.width}x${metadata.height})`);

    // Generate WebP version
    const webpPath = path.join(outputDir, `${filename}.webp`);
    if (!fs.existsSync(webpPath)) {
      await image
        .webp({ quality: OUTPUT_QUALITY.webp })
        .toFile(webpPath);
      console.log(`  ✓ WebP: ${webpPath}`);
    }

    // Generate AVIF version
    const avifPath = path.join(outputDir, `${filename}.avif`);
    if (!fs.existsSync(avifPath)) {
      await image
        .avif({ quality: OUTPUT_QUALITY.avif })
        .toFile(avifPath);
      console.log(`  ✓ AVIF: ${avifPath}`);
    }

    // Optimize original if it's large
    const stats = fs.statSync(inputPath);
    const fileSizeKB = stats.size / 1024;
    
    if (fileSizeKB > 100) { // Only optimize if > 100KB
      if (ext === '.jpg' || ext === '.jpeg') {
        const optimizedPath = path.join(outputDir, `${filename}_optimized${ext}`);
        await image
          .jpeg({ quality: OUTPUT_QUALITY.jpeg, mozjpeg: true })
          .toFile(optimizedPath);
        console.log(`  ✓ Optimized JPEG: ${optimizedPath}`);
      } else if (ext === '.png') {
        const optimizedPath = path.join(outputDir, `${filename}_optimized${ext}`);
        await image
          .png({ quality: OUTPUT_QUALITY.png, compressionLevel: 9 })
          .toFile(optimizedPath);
        console.log(`  ✓ Optimized PNG: ${optimizedPath}`);
      }
    }

  } catch (error) {
    console.error(`Error optimizing ${inputPath}:`, error.message);
  }
}

async function processDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) {
    console.log(`Directory not found: ${dirPath}`);
    return;
  }

  const files = fs.readdirSync(dirPath, { withFileTypes: true });
  
  for (const file of files) {
    const fullPath = path.join(dirPath, file.name);
    
    if (file.isDirectory()) {
      // Recursively process subdirectories
      await processDirectory(fullPath);
    } else if (file.isFile()) {
      await optimizeImage(fullPath, dirPath);
    }
  }
}

async function main() {
  console.log('🖼️  Starting image optimization...\n');
  
  for (const dir of INPUT_DIRS) {
    console.log(`📁 Processing directory: ${dir}`);
    await processDirectory(dir);
    console.log('');
  }
  
  console.log('✅ Image optimization complete!');
  console.log('\nNext steps:');
  console.log('1. Update your components to use the LazyImage component');
  console.log('2. Test the new image formats in your browser');
  console.log('3. Consider removing original large images if optimization worked well');
}

// Handle command line execution
if (require.main === module) {
  main().catch(console.error);
}

module.exports = { optimizeImage, processDirectory };