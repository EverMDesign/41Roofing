#!/usr/bin/env node
/**
 * PREVIEW ONLY -- cannot actually send. Confirmed live (2026-10-04):
 * JobNimbus's /estimates endpoint only allows GET/HEAD. There is no API
 * way to create or update an estimate -- new estimates must be made in
 * the JobNimbus app itself. This script is kept so a payload can still
 * be previewed/shaped for reference, but --confirm will refuse to send.
 *
 * Usage:
 *   node scripts/jobnimbus-create-estimate.mjs docs/estimates/some-job-input.json
 */
import * as fs from 'fs';
import * as path from 'path';

function buildPayload(input) {
  return {
    related: [
      { id: input.contactId, type: 'contact' },
      ...(input.jobId ? [{ id: input.jobId, type: 'job' }] : []),
    ],
    note: input.note || '',
    internal_note: input.internal_note || '',
    items: (input.items || []).map((item) => ({
      name: item.name,
      uom: item.uom || 'Items',
      item_type: item.item_type || 'material',
      category: item.category || null,
      description: item.description || '',
      quantity: item.quantity ?? 1,
      price: item.price ?? 0,
      cost: item.cost ?? 0,
    })),
  };
}

async function main() {
  const inputPath = process.argv[2];
  const confirmed = process.argv.includes('--confirm');

  if (!inputPath) {
    console.error('Usage: node scripts/jobnimbus-create-estimate.mjs <input.json> [--confirm]');
    process.exit(1);
  }

  const resolvedPath = path.resolve(inputPath);
  if (!fs.existsSync(resolvedPath)) {
    console.error(`Input file not found: ${resolvedPath}`);
    process.exit(1);
  }

  const input = JSON.parse(fs.readFileSync(resolvedPath, 'utf-8'));
  if (!input.contactId) {
    console.error('Input JSON must include a "contactId" field.');
    process.exit(1);
  }

  const payload = buildPayload(input);

  console.log('Estimate payload:');
  console.log(JSON.stringify(payload, null, 2));

  if (!confirmed) {
    console.log('\nPreview only -- nothing was sent (and --confirm would refuse too, see below).');
    return;
  }

  console.error(
    '\nCannot send: JobNimbus\'s /estimates endpoint only allows GET. There is no API way to create an estimate -- it must be made in the JobNimbus app.'
  );
  process.exit(1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
