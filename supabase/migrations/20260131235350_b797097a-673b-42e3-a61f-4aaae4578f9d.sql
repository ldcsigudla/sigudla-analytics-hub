-- Create table for dataset requests
CREATE TABLE public.dataset_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  dataset_id INTEGER NOT NULL,
  dataset_title TEXT NOT NULL,
  email TEXT NOT NULL,
  name TEXT,
  message TEXT,
  request_type TEXT NOT NULL DEFAULT 'standard',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.dataset_requests ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert requests (public form)
CREATE POLICY "Anyone can submit dataset requests" 
ON public.dataset_requests 
FOR INSERT 
WITH CHECK (true);

-- Only admins can view all requests
CREATE POLICY "Admins can view all dataset requests" 
ON public.dataset_requests 
FOR SELECT 
USING (public.has_role(auth.uid(), 'admin'::app_role));