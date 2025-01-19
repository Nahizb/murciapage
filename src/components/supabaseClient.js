import { createClient } from '@supabase/supabase-js';

// Sustituye con tu URL y anon key
const supabaseUrl = 'https://rwkcvbnhjtbbpkvyzuat.supabase.co';  // Tu URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ3a2N2Ym5oanRiYnBrdnl6dWF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY4ODUyOTQsImV4cCI6MjA1MjQ2MTI5NH0.8uVsXelLhVnRdW-oxfYLkQod6LK0obkurM0jGMgyqNA';  // Sustituye esto con tu anon key (clave pública)

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
