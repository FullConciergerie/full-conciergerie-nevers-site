'use server';

import { handleLead, type LeadResult } from '@/lib/lead-bien-invendu';

export async function submitBienInvendu(formData: FormData): Promise<LeadResult> {
  return handleLead(formData, 'fullnevers');
}
