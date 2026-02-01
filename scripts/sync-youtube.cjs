const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '/Users/alex/Documents/Projects/Marketing_F2F/.env' });

// Configuration
const OUTPUT_FILE = path.join(__dirname, '../data/youtube-videos.json');
const CHANNEL_ID = 'UCX32D3g3Z7YZ1X0m4Q5y6g'; // Optometric Eyecare Center

// Auth setup
const oauth2Client = new google.auth.OAuth2(
    process.env.GBP_CLIENT_ID,
    process.env.GBP_CLIENT_SECRET,
    'http://localhost:3005/auth/google/callback'
);

// Set credentials from environment
oauth2Client.setCredentials({
    refresh_token: process.env.YOUTUBE_REFRESH_TOKEN
});

const youtube = google.youtube({ version: 'v3', auth: oauth2Client });

// Helper to convert ISO 8601 duration to human readable (optional) or keep as ISO for schema
// Schema.org VideoObject requires ISO 8601 duration (e.g. PT1M33S)

async function syncYoutubeVideos() {
    console.log('\n╔══════════════════════════════════════════════════════════════════╗');
    console.log('║  📹  SYNCING YOUTUBE VIDEO DATA                                ║');
    console.log('╚══════════════════════════════════════════════════════════════════╝\n');

    try {
        // 1. Get recent public videos from the channel
        // We use 'forMine' if the token is for the channel owner, or filter by channelId
        const searchRes = await youtube.search.list({
            forMine: true,
            part: 'id,snippet',
            type: 'video',
            status: 'public',
            maxResults: 50,
            order: 'date'
        });

        const videos = searchRes.data.items;

        if (!videos || videos.length === 0) {
            console.log('No videos found.');
            return;
        }

        console.log(`Found ${videos.length} videos. Fetching details...`);

        // 2. Fetch full details (Duration is needed for valid Schema)
        const ids = videos.map(v => v.id.videoId).join(',');
        const detailsRes = await youtube.videos.list({
            id: ids,
            part: 'snippet,contentDetails'
        });

        const schemaData = detailsRes.data.items.map(v => ({
            id: v.id,
            title: v.snippet.title,
            description: v.snippet.description,
            thumbnailUrl: v.snippet.thumbnails.high.url,
            uploadDate: v.snippet.publishedAt,
            duration: v.contentDetails.duration, // ISO 8601 format (e.g., PT2M15S)
            embedUrl: `https://www.youtube.com/embed/${v.id}`,
            watchUrl: `https://www.youtube.com/watch?v=${v.id}`
        }));

        // 3. Write to file
        fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
        fs.writeFileSync(OUTPUT_FILE, JSON.stringify(schemaData, null, 2));

        console.log(`\n✅ Successfully saved ${schemaData.length} videos to:`);
        console.log(`   ${OUTPUT_FILE}`);

        // Log titles for verification
        console.log('\nSynced Videos:');
        schemaData.forEach(v => console.log(`- ${v.title} (${v.duration})`));

    } catch (error) {
        console.error('❌ Error syncing YouTube videos:', error.message);
        if (error.response) {
            console.error('API Error Details:', error.response.data);
        }
    }
}

syncYoutubeVideos();
