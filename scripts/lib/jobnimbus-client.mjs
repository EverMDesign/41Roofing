/**
 * JobNimbus API Client
 * Looks up contacts/jobs/files/estimates, and creates/updates estimates.
 */

const API_BASE = 'https://app.jobnimbus.com/api1';

export class JobNimbusClient {
  constructor() {
    this.apiKey = process.env.JOBNIMBUS_API_KEY || '';

    if (!this.apiKey) {
      throw new Error('Missing JobNimbus credentials: JOBNIMBUS_API_KEY must be set in .env.local');
    }
  }

  getHeaders() {
    return {
      Authorization: `Bearer ${this.apiKey}`,
      'Content-Type': 'application/json',
    };
  }

  async request(method, path, { query, body } = {}) {
    try {
      const url = new URL(`${API_BASE}${path}`);
      if (query) {
        for (const [key, value] of Object.entries(query)) {
          url.searchParams.set(key, typeof value === 'string' ? value : JSON.stringify(value));
        }
      }

      const response = await fetch(url, {
        method,
        headers: this.getHeaders(),
        body: body ? JSON.stringify(body) : undefined,
      });

      const responseText = await response.text();

      if (!response.ok) {
        throw new Error(responseText || `API Error: ${response.status}`);
      }

      const contentType = response.headers.get('content-type') || '';
      if (contentType.includes('application/json')) {
        return { success: true, data: JSON.parse(responseText) };
      }
      return { success: true, data: responseText };
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error';
      console.error('JobNimbus API Error:', message);
      return { success: false, error: message };
    }
  }

  /** Search contacts by an exact field match, e.g. findContact('last_name', 'Espinoza') */
  async findContact(field, value) {
    return this.request('GET', '/contacts', {
      query: { filter: { must: [{ term: { [field]: value } }] } },
    });
  }

  /** List files (estimates, work orders, invoices) attached to a contact or job */
  async listFiles(relatedId) {
    return this.request('GET', '/files', {
      query: { filter: { must: [{ term: { 'related.id': relatedId } }] }, size: 50 },
    });
  }

  /** Download one file's raw bytes (caller decides how to save it) */
  async getFileBytes(jnid) {
    try {
      const response = await fetch(`${API_BASE}/files/${jnid}`, {
        headers: this.getHeaders(),
      });
      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }
      const buffer = Buffer.from(await response.arrayBuffer());
      return { success: true, buffer };
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error';
      console.error('JobNimbus API Error:', message);
      return { success: false, error: message };
    }
  }

  /** List estimates attached to a contact or job */
  async getEstimates(relatedId) {
    return this.request('GET', '/estimates', {
      query: { filter: { must: [{ term: { 'related.id': relatedId } }] }, size: 50 },
    });
  }

  /**
   * NOT SUPPORTED. Confirmed live (2026-10-04): JobNimbus's /estimates
   * endpoint only allows GET/HEAD (server's Allow header confirms this),
   * unlike /contacts, /files, and /jobs which all allow POST. There is no
   * way to create or update an estimate through this API -- new estimates
   * must be made in the JobNimbus app itself. Left here (throwing) so any
   * future attempt fails loudly instead of silently no-op-ing.
   */
  async createEstimate() {
    throw new Error(
      'Not supported: JobNimbus /estimates only allows GET. Estimates must be created in the JobNimbus app.'
    );
  }

  async updateEstimate() {
    throw new Error(
      'Not supported: JobNimbus /estimates only allows GET. Estimates must be edited in the JobNimbus app.'
    );
  }

  /** Create a new contact */
  async createContact(payload) {
    return this.request('POST', '/contacts', { body: payload });
  }

  /** Update an existing contact */
  async updateContact(jnid, payload) {
    return this.request('PUT', `/contacts/${jnid}`, { body: payload });
  }
}

export default JobNimbusClient;
