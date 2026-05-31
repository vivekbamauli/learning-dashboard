import { Suspense } from 'react'
import { Sidebar } from '@/components/sidebar/Sidebar'
import { HeroTile } from '@/components/dashboard/HeroTile'
import { CourseGrid } from '@/components/dashboard/CourseGrid'
import { ActivityTile } from '@/components/dashboard/ActivityTile'
import { StatsTile } from '@/components/dashboard/StatsTile'
import { CourseGridSkeleton } from '@/components/ui/Skeletons'
import { mockUser } from '@/lib/mock-data'

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-bg-base">
      {/* Background grid */}
      <div className="fixed inset-0 grid-bg opacity-100 pointer-events-none" />
      
      {/* Ambient glow blobs */}
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-accent-cyan/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-purple/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <main className="flex-1 min-w-0 ml-[72px] lg:ml-[240px] transition-all duration-300">
        <div className="max-w-[1400px] mx-auto p-4 md:p-6 lg:p-8">
          
          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 auto-rows-auto">
            
            {/* Hero Tile — spans full width on desktop */}
            <div className="col-span-1 md:col-span-2 lg:col-span-8">
              <HeroTile user={mockUser} />
            </div>

            {/* Stats Tile */}
            <div className="col-span-1 md:col-span-2 lg:col-span-4">
              <StatsTile user={mockUser} />
            </div>

            {/* Course Grid — fetched from Supabase via Suspense */}
            <div className="col-span-1 md:col-span-2 lg:col-span-12">
              <Suspense fallback={<CourseGridSkeleton />}>
                <CourseGrid />
              </Suspense>
            </div>

            {/* Activity Tile */}
            <div className="col-span-1 md:col-span-2 lg:col-span-12">
              <ActivityTile />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
