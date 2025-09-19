-- Create storage bucket for assets
INSERT INTO storage.buckets (id, name, public) 
VALUES ('assets', 'assets', true);

-- Create RLS policies for public asset access
CREATE POLICY "Public asset access" ON storage.objects 
FOR SELECT USING (bucket_id = 'assets');

CREATE POLICY "Public asset upload" ON storage.objects 
FOR INSERT WITH CHECK (bucket_id = 'assets');