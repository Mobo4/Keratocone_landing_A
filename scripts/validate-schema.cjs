const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, '../data/youtube-videos.json');
const ORGANIZATION = {
    "@type": "Organization",
    "name": "Optometric Eyecare Center of Orange County",
    "logo": {
        "@type": "ImageObject",
        "url": "https://eyecarecenteroc.com/logo.png"
    }
};

try {
    if (!fs.existsSync(DATA_FILE)) {
        throw new Error(`Data file not found: ${DATA_FILE}. Run sync-youtube.cjs first.`);
    }

    const videos = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    console.log(`\nValidating ${videos.length} videos...\n`);

    videos.forEach(video => {
        // Construct the full Schema object
        const schema = {
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "name": video.title,
            "description": video.description ? video.description.substring(0, 150) + "..." : "",
            "thumbnailUrl": [video.thumbnailUrl],
            "uploadDate": video.uploadDate,
            "duration": video.duration,
            "embedUrl": video.embedUrl,
            "publisher": ORGANIZATION
        };

        // Basic validation
        if (!schema.name) console.error(`[FAIL] Missing name for ${video.id}`);
        if (!schema.uploadDate) console.error(`[FAIL] Missing uploadDate for ${video.id}`);
        if (!schema.duration) console.error(`[FAIL] Missing duration for ${video.id}`);

        console.log(`[PASS] ${video.title} (${video.duration})`);
    });

    console.log('\n--- SAMPLE JSON-LD OUTPUT (First Video) ---\n');
    const sampleSchema = {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": videos[0].title,
        "description": videos[0].description,
        "thumbnailUrl": [videos[0].thumbnailUrl],
        "uploadDate": videos[0].uploadDate,
        "duration": videos[0].duration,
        "embedUrl": videos[0].embedUrl,
        "publisher": ORGANIZATION
    };
    console.log(JSON.stringify(sampleSchema, null, 2));

} catch (err) {
    console.error(err.message);
    process.exit(1);
}
