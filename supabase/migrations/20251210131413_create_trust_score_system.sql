/*
  # Algorithmic Trust Score System

  1. New Tables
    - `trust_scores`
      - `id` (uuid, primary key)
      - `score` (numeric, the main algorithmic trust score 0-100)
      - `confidence_level` (numeric, confidence in the score 0-100)
      - `status` (text, status of the algorithm: active, calibrating, error)
      - `created_at` (timestamptz, when score was calculated)
      - `updated_at` (timestamptz, last update time)
    
    - `trust_metrics`
      - `id` (uuid, primary key)
      - `trust_score_id` (uuid, foreign key to trust_scores)
      - `metric_name` (text, name of the metric)
      - `metric_value` (numeric, value of the metric)
      - `weight` (numeric, weight in overall calculation)
      - `created_at` (timestamptz)
    
    - `audit_events`
      - `id` (uuid, primary key)
      - `event_type` (text, type of event)
      - `description` (text, event description)
      - `impact_score` (numeric, impact on trust score)
      - `timestamp` (timestamptz, when event occurred)

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access (demo purposes)

  3. Sample Data
    - Insert initial trust score data
    - Insert breakdown metrics
    - Insert recent audit events
*/

-- Create trust_scores table
CREATE TABLE IF NOT EXISTS trust_scores (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  score numeric NOT NULL DEFAULT 0,
  confidence_level numeric NOT NULL DEFAULT 0,
  status text NOT NULL DEFAULT 'active',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create trust_metrics table
CREATE TABLE IF NOT EXISTS trust_metrics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  trust_score_id uuid REFERENCES trust_scores(id) ON DELETE CASCADE,
  metric_name text NOT NULL,
  metric_value numeric NOT NULL DEFAULT 0,
  weight numeric NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create audit_events table
CREATE TABLE IF NOT EXISTS audit_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  event_type text NOT NULL,
  description text NOT NULL,
  impact_score numeric NOT NULL DEFAULT 0,
  timestamp timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE trust_scores ENABLE ROW LEVEL SECURITY;
ALTER TABLE trust_metrics ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_events ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access (demo purposes)
CREATE POLICY "Allow public read access to trust scores"
  ON trust_scores FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Allow public read access to trust metrics"
  ON trust_metrics FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Allow public read access to audit events"
  ON audit_events FOR SELECT
  TO anon
  USING (true);

-- Insert sample data
INSERT INTO trust_scores (score, confidence_level, status)
VALUES (87.3, 94.2, 'active');

-- Get the latest trust score id for metrics
DO $$
DECLARE
  latest_score_id uuid;
BEGIN
  SELECT id INTO latest_score_id FROM trust_scores ORDER BY created_at DESC LIMIT 1;
  
  -- Insert trust metrics
  INSERT INTO trust_metrics (trust_score_id, metric_name, metric_value, weight) VALUES
    (latest_score_id, 'Data Integrity', 92.5, 0.25),
    (latest_score_id, 'System Uptime', 99.8, 0.20),
    (latest_score_id, 'Response Time', 85.4, 0.15),
    (latest_score_id, 'Error Rate', 78.2, 0.15),
    (latest_score_id, 'Security Compliance', 95.1, 0.25);
END $$;

-- Insert audit events
INSERT INTO audit_events (event_type, description, impact_score, timestamp) VALUES
  ('CALIBRATION', 'System recalibration completed', 2.3, now() - interval '2 hours'),
  ('SECURITY_SCAN', 'Security vulnerability scan passed', 0.8, now() - interval '5 hours'),
  ('PERFORMANCE', 'Response time optimization deployed', 3.1, now() - interval '8 hours'),
  ('DATA_VALIDATION', 'Data integrity check completed', 1.2, now() - interval '12 hours'),
  ('UPDATE', 'Algorithm parameters updated', -0.5, now() - interval '1 day'),
  ('MONITORING', 'Anomaly detection active', 0.0, now() - interval '2 days');