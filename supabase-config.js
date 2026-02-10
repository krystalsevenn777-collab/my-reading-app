// 引入 Supabase SDK
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://hvdfbdvdlzzfaogggebd.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh2ZGZiZHZkbHp6ZmFvZ2dnZWJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAzNTM2MDUsImV4cCI6MjA4NTkyOTYwNX0.-gRyNtIb-Ru8FdHI7ytOzdAJkrhX8OhZgbOgpwngILY'
export const supabase = createClient(supabaseUrl, supabaseKey)