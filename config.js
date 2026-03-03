// ============================================================
// CASE TRACKER — Configuration
// Replace the placeholder values below with your actual Supabase credentials.
// You can find these in your Supabase dashboard under Settings > API.
// ============================================================

const CONFIG = {
  // Your Supabase project URL (looks like: https://abcdefghij.supabase.co)
  SUPABASE_URL: 'https://ltguwfyysvlggwelnfyt.supabase.co',

  // Your Supabase anon/public key (a long string starting with "eyJ...")
  SUPABASE_ANON_KEY: 'sb_publishable_ULeS3FcZryzc1WgMF2JPXw_BfJ5sRg6',

  // Number of days before a "Waiting on Client" card auto-moves to "Follow Up Needed"
  FOLLOW_UP_DAYS: 14,

  // The stages (don't change these unless you also update the SQL)
  STAGES: [
    { id: 'my_action', label: 'My Action Needed' },
    { id: 'waiting_on_client', label: 'Waiting on Client' },
    { id: 'follow_up_needed', label: 'Follow Up Needed' }
  ],

  // Matter type options for the dropdown
  MATTER_TYPES: [
    { value: 'probate', label: 'Probate' },
    { value: 'guardianship', label: 'Guardianship' },
    { value: 'trust_admin', label: 'Trust Admin' },
    { value: 'other', label: 'Other' }
  ]
};
