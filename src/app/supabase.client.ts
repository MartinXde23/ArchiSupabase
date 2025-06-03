import {createClient} from '@supabase/supabase-js';

const supabaseUrl = 'https://dxnnxcygedjafcapwlus.supabase.co';
const supabaseApiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4bm54Y3lnZWRqYWZjYXB3bHVzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5MTU3ODYsImV4cCI6MjA2NDQ5MTc4Nn0.4Es0pnOhIIS1YOiyUcnb4dMW3hy4RwQASxKaP6pjeqQ'

export const supabase = createClient(supabaseUrl, supabaseApiKey)