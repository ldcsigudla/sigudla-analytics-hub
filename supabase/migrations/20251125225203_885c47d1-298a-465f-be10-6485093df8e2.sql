-- Schedule daily keepalive job at noon
SELECT cron.schedule(
  'keepalive-heartbeat',
  '0 12 * * *',
  $$
  SELECT net.http_post(
      url:='https://fkmonqbuaxjurenyutqv.supabase.co/functions/v1/keepalive',
      headers:='{"Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZrbW9ucWJ1YXhqdXJlbnl1dHF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgyNjM5NTgsImV4cCI6MjA3MzgzOTk1OH0.cpa3MVtYvgysqxvTEAQRa-Zl20obLetQnIsfrGej5tM"}'::jsonb,
      body:='{}'::jsonb
  ) AS request_id;
  $$
);