# JobNimbus Integration

Operator tooling for Claude Code to look up JobNimbus contacts/estimates and
manage contacts. This is **not** part of the live website -- it's a set of
scripts run directly when asked, the same way the LeadConnector scripts
work for GHL (see `/Users/Ever/Documents/Websites/Docs/leadconnector-api.md`).

## Architecture

```
scripts/jobnimbus-find.mjs -> scripts/lib/jobnimbus-client.mjs -> JobNimbus /contacts, /files, /estimates (GET)
(ad-hoc)                   -> scripts/lib/jobnimbus-client.mjs -> JobNimbus /contacts (POST/PUT)
```

**Estimates are read-only.** Confirmed live (2026-10-04): JobNimbus's
`/estimates` endpoint only allows `GET`/`HEAD` (the server's `Allow` header
confirms this directly) -- unlike `/contacts`, `/files`, and `/jobs`, which
all allow `POST`. There is no way to create or edit an estimate through this
API. New estimates have to be made in the JobNimbus app itself.
`jobnimbus-create-estimate.mjs` is kept only to preview/shape an estimate
payload for reference -- it refuses to actually send anything.

## Environment Variables

| Variable | Description |
|---|---|
| `JOBNIMBUS_API_KEY` | API key from JobNimbus -> Settings -> API |

## Scripts

### Find a contact and see their files/estimates

```bash
node scripts/jobnimbus-find.mjs "Espinoza"
```

Prints matching contacts, their attached files (estimates, work orders,
invoices as PDFs), and their estimate records with totals.

### Preview an estimate payload (cannot send)

```bash
node scripts/jobnimbus-create-estimate.mjs docs/estimates/<job>-input.json
```

**Input JSON shape:**
```json
{
  "contactId": "<contact jnid, from jobnimbus-find.mjs>",
  "jobId": "<job jnid, optional>",
  "note": "Customer-facing note",
  "internal_note": "Internal-only note",
  "items": [
    { "category": "ROOF", "name": "Baseboards", "uom": "LF", "description": "...", "quantity": 22.48, "price": 3.16, "cost": 2.34 }
  ]
}
```

### Create or update a contact

No dedicated script yet -- `JobNimbusClient.createContact(payload)` and
`.updateContact(jnid, payload)` are available in
`scripts/lib/jobnimbus-client.mjs`. Both confirmed working live
(2026-10-04): `createContact` correctly rejects duplicate display names;
`updateContact` successfully filled in blank fields on an existing contact.
Known field names (from real contact records): `first_name`, `last_name`,
`email`, `mobile_phone`, `home_phone`, `address_line1`, `city`,
`state_text`, `zip`, `description` (internal note), `record_type_name`.

## Safety

- `createContact` / `updateContact` write directly to the live JobNimbus account. This is not reversible like a file edit.
- Always show the operator the exact payload and get explicit go-ahead before sending -- every time, not just once when this tooling was built.
- `createEstimate` / `updateEstimate` are intentionally disabled (they throw) since the API doesn't support them -- see above.

## Downloading a file

`client.getFileBytes(jnid)` returns raw bytes directly (the `/files/{jnid}`
endpoint serves the PDF inline, it is not a redirect). Example:

```js
const result = await client.getFileBytes(fileJnid);
if (result.success) fs.writeFileSync('out.pdf', result.buffer);
```

## Common Issues

- **Missing credentials error**: check `.env.local` has `JOBNIMBUS_API_KEY` set.
- **`query_string queries are not supported`**: JobNimbus's `filter` only supports `term` and `wildcard` queries, not `query_string`. `findContact` already uses `term`.
- **"Method Not Allowed" on `/estimates`**: expected -- see Architecture above. Not a bug.
- **"Duplicate contact exists"**: JobNimbus blocks creating a contact with a `display_name` that already exists. Use `findContact` first and call `updateContact` instead if the person already exists.
