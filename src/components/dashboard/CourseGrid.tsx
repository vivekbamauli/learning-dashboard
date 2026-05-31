import { BookOpen, RefreshCw } from 'lucide-react'
import { CourseCard } from './CourseCard'
import { mockCourses } from '@/lib/mock-data'
import type { Course } from '@/types'

async function fetchCourses(): Promise<Course[]> {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  // If env vars are missing, use mock data (great for demo/development)
  if (!supabaseUrl || !supabaseKey) {
    console.warn('Supabase env vars not set — using mock data.')
    return mockCourses
  }

  try {
    const { createClient } = await import('@supabase/supabase-js')
    const supabase = createClient(supabaseUrl, supabaseKey)
    const { data, error } = await supabase
      .from('courses')
      .select('*')
      .order('created_at', { ascending: true })

    if (error) throw error
    if (!data || data.length === 0) return mockCourses

    return data as Course[]
  } catch (err) {
    console.error('Supabase fetch failed, falling back to mock data:', err)
    return mockCourses
  }
}

function CourseError() {
  return (
    <section className="space-y-4">
      <h2
        className="text-base font-semibold text-text-primary flex items-center gap-2"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        <BookOpen size={18} className="text-accent-cyan" />
        Active Courses
      </h2>
      <div className="rounded-2xl border border-accent-rose/20 bg-accent-rose/5 p-6 flex items-center gap-4">
        <RefreshCw size={20} className="text-accent-rose flex-shrink-0" />
        <div>
          <p className="text-sm font-medium text-text-primary">Failed to load courses</p>
          <p className="text-xs text-text-secondary mt-0.5">Check your Supabase connection and try again.</p>
        </div>
      </div>
    </section>
  )
}

export async function CourseGrid() {
  let courses: Course[]

  try {
    courses = await fetchCourses()
  } catch {
    return <CourseError />
  }

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2
          className="text-base font-semibold text-text-primary flex items-center gap-2"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          <BookOpen size={18} className="text-accent-cyan" />
          Active Courses
        </h2>
        <span className="text-xs text-text-muted font-mono">
          {courses.length} enrolled
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {courses.map((course, index) => (
          <CourseCard key={course.id} course={course} index={index} />
        ))}
      </div>
    </section>
  )
}
