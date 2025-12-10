import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface TrustScore {
  id: string;
  score: number;
  confidence_level: number;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface TrustMetric {
  id: string;
  trust_score_id: string;
  metric_name: string;
  metric_value: number;
  weight: number;
  created_at: string;
}

export interface AuditEvent {
  id: string;
  event_type: string;
  description: string;
  impact_score: number;
  timestamp: string;
}
