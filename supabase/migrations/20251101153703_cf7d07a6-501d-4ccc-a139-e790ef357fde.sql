-- Enable pg_cron extension if not already enabled
CREATE EXTENSION IF NOT EXISTS pg_cron;

-- Create a simple keepalive cron job that runs daily at 3 AM UTC
-- This executes a harmless SELECT query to prevent database pausing
SELECT cron.schedule(
  'database-keepalive',
  '0 3 * * *', -- Daily at 3 AM UTC
  $$
  SELECT 1 AS keepalive;
  $$
);