import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const SUPABASE_URL = 'https://jivjhtqfqktmufmyeyzj.supabase.co'  // tu Project URL
const SUPABASE_KEY = 'sb_publishable_FGMSjudy2IdTe2igi5JRJQ_Paw90L8J' // tu clave publishable

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)
