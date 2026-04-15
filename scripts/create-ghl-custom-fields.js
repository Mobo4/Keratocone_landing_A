/**
 * create-ghl-custom-fields.js
 * Creates the missing GHL custom fields needed for full lead attribution.
 *
 * Run once:
 *   GHL_API_KEY=pit-... GHL_LOCATION_ID=... node scripts/create-ghl-custom-fields.js
 *
 * Outputs the field IDs to copy into the route files.
 */

const API_KEY = process.env.GHL_API_KEY || 'pit-a182a4a3-fe2a-4ede-9233-889924235d0a';
const LOCATION_ID = process.env.GHL_LOCATION_ID || 'gQMBw35UGXwFCKQ03Y7Q';
const BASE = 'https://services.leadconnectorhq.com';
const VERSION = '2021-07-28';

const FIELDS_TO_CREATE = [
    { name: 'City', key: 'city', dataType: 'TEXT' },
    { name: 'State', key: 'state', dataType: 'TEXT' },
    { name: 'First Touch Source', key: 'first_touch_source', dataType: 'TEXT' },
    { name: 'First Touch Medium', key: 'first_touch_medium', dataType: 'TEXT' },
    { name: 'First Touch Campaign', key: 'first_touch_campaign', dataType: 'TEXT' },
    { name: 'Service Interest', key: 'service_interest', dataType: 'TEXT' },
    { name: 'Insurance Type', key: 'insurance_type', dataType: 'TEXT' },
    { name: 'Visitor ID', key: 'visitor_id', dataType: 'TEXT' },
];

async function listExisting() {
    const res = await fetch(
        `${BASE}/locations/${LOCATION_ID}/customFields?model=contact`,
        {
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Version': VERSION,
            },
        }
    );
    const data = await res.json();
    // GHL returns { customFields: [...] }
    return (data.customFields || []);
}

async function createField(name, dataType) {
    const res = await fetch(
        `${BASE}/locations/${LOCATION_ID}/customFields`,
        {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Version': VERSION,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, dataType, model: 'contact' }),
        }
    );
    const data = await res.json();
    if (!res.ok) {
        console.error(`  ✗ Failed to create "${name}":`, JSON.stringify(data));
        return null;
    }
    // GHL returns { customField: { id, name, ... } }
    return data.customField || data;
}

async function main() {
    console.log('Fetching existing custom fields...');
    const existing = await listExisting();
    const existingByName = {};
    for (const f of existing) {
        existingByName[f.name?.toLowerCase()] = f;
    }
    console.log(`Found ${existing.length} existing custom fields.\n`);

    const results = {};

    for (const { name, key, dataType } of FIELDS_TO_CREATE) {
        const existKey = name.toLowerCase();
        if (existingByName[existKey]) {
            const id = existingByName[existKey].id;
            console.log(`  ✓ Already exists: "${name}" → ${id}`);
            results[key] = id;
        } else {
            console.log(`  + Creating: "${name}"...`);
            const field = await createField(name, dataType);
            if (field?.id) {
                console.log(`    → Created: ${field.id}`);
                results[key] = field.id;
            }
        }
    }

    console.log('\n─── Field ID map (copy into route files) ───');
    for (const [key, id] of Object.entries(results)) {
        console.log(`  ${key}: '${id}'`);
    }

    console.log('\n─── Existing UTM fields (already wired) ───');
    console.log("  utmSource:   '6sdXreQxbnVymcrOOvHU'");
    console.log("  utmMedium:   '3if5VqRIHGXkjDspuNgs'");
    console.log("  utmCampaign: 'cZiraewtlWoRya9HTpoD'");

    return results;
}

main().catch(console.error);
