-- ============================================
-- NexLearn Dashboard — Supabase Setup Script
-- Run this in your Supabase SQL Editor
-- ============================================

-- 1. Create the courses table
CREATE TABLE IF NOT EXISTS public.courses (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title       TEXT NOT NULL,
  progress    INTEGER NOT NULL DEFAULT 0 CHECK (progress BETWEEN 0 AND 100),
  icon_name   TEXT NOT NULL DEFAULT 'BookOpen',
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 2. Enable Row Level Security (recommended)
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;

-- 3. Allow public read access (anon key)
CREATE POLICY "Allow public read" ON public.courses
  FOR SELECT USING (true);

-- 4. Seed with sample data
INSERT INTO public.courses (title, progress, icon_name) VALUES
  ('Advanced React Patterns',        75, 'Layers'),
  ('TypeScript Mastery',             48, 'Code2'),
  ('System Design Fundamentals',     30, 'Network'),
  ('Machine Learning Basics',        62, 'Brain');
