import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'
const SUPABASE_URL = 'https://jivjhtqfqktmufmyeyzj.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImppdmpodHFmcWt0bXVmbXlleXpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQxMTU2NDYsImV4cCI6MjA4OTY5MTY0Nn0.xdOe0wzuQgydkVqyMf09PNuiWbeEzPCjLU9SeKpfR6M'
export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)
