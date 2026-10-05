#!/usr/bin/env node
/**
 * Look up a JobNimbus contact by last name, and list their files + estimates.
 *
 * Usage:
 *   node scripts/jobnimbus-find.mjs "Espinoza"
 */
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { JobNimbusClient } from './lib/jobnimbus-client.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function loadEnvLocal() {
  const envPath = path.join(__dirname, '..', '.env.local');
  if (!fs.existsSync(envPath)) return;
  const lines = fs.readFileSync(envPath, 'utf-8').split('\n');
  for (const line of lines) {
    const match = line.match(/^([A-Z_][A-Z0-9_]*)=(.*)$/);
    if (match && !process.env[match[1]]) {
      process.env[match[1]] = match[2];
    }
  }
}

async function main() {
  const lastName = process.argv[2];
  if (!lastName) {
    console.error('Usage: node scripts/jobnimbus-find.mjs "<last name>"');
    process.exit(1);
  }

  loadEnvLocal();
  const client = new JobNimbusClient();

  const contactResult = await client.findContact('last_name', lastName);
  if (!contactResult.success) {
    console.error('Lookup failed:', contactResult.error);
    process.exit(1);
  }

  const contacts = contactResult.data.results || [];
  console.log(`Found ${contacts.length} contact(s) matching "${lastName}":\n`);

  for (const contact of contacts) {
    console.log(`- ${contact.display_name} (jnid: ${contact.jnid}) -- ${contact.record_type_name}`);

    const filesResult = await client.listFiles(contact.jnid);
    const files = filesResult.success ? filesResult.data.files || [] : [];
    console.log(`  Files: ${files.length}`);
    for (const file of files.slice(0, 10)) {
      const date = new Date(file.date_created * 1000).toISOString().slice(0, 10);
      console.log(`    ${date}  ${file.record_type_name || ''}  ${file.filename}  (jnid: ${file.jnid})`);
    }

    const estimatesResult = await client.getEstimates(contact.jnid);
    const estimates = estimatesResult.success ? estimatesResult.data.results || [] : [];
    console.log(`  Estimates: ${estimates.length}`);
    for (const est of estimates.slice(0, 10)) {
      console.log(`    #${est.number}  ${est.status_name}  $${est.total}  (jnid: ${est.jnid})`);
    }
    console.log('');
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
