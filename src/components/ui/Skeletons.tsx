import { cn } from '@/lib/utils'

function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'skeleton rounded-lg',
        className
      )}
    />
  )
}

export function CourseCardSkeleton() {
  return (
    <div className="rounded-2xl border border-border-subtle bg-bg-surface/60 p-5 space-y-4">
      <div className="flex items-start justify-between">
        <Skeleton className="w-10 h-10 rounded-xl" />
        <Skeleton className="w-12 h-5 rounded-full" />
      </div>
      <div className="space-y-2">
        <Skeleton className="w-full h-4 rounded" />
        <Skeleton className="w-2/3 h-4 rounded" />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between">
          <Skeleton className="w-16 h-3 rounded" />
          <Skeleton className="w-8 h-3 rounded" />
        </div>
        <Skeleton className="w-full h-2 rounded-full" />
      </div>
    </div>
  )
}

export function CourseGridSkeleton() {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <Skeleton className="w-32 h-6 rounded" />
        <Skeleton className="w-20 h-4 rounded" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <CourseCardSkeleton key={i} />
        ))}
      </div>
    </section>
  )
}

export function DashboardSkeleton() {
  return (
    <div className="flex min-h-screen bg-bg-base">
      {/* Sidebar skeleton */}
      <div className="fixed left-0 top-0 h-screen w-[240px] border-r border-border-subtle bg-bg-surface/80 p-4 space-y-4 hidden md:block">
        <div className="flex items-center gap-3 pb-4 border-b border-border-subtle">
          <Skeleton className="w-9 h-9 rounded-xl flex-shrink-0" />
          <Skeleton className="w-24 h-5 rounded" />
        </div>
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="flex items-center gap-3 px-2 py-2.5">
            <Skeleton className="w-5 h-5 rounded flex-shrink-0" />
            <Skeleton className="w-24 h-4 rounded" />
          </div>
        ))}
      </div>

      <main className="flex-1 ml-[240px] p-8 space-y-4">
        {/* Hero skeleton */}
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-8 rounded-2xl border border-border-subtle bg-bg-surface/60 p-8 h-48 space-y-4">
            <Skeleton className="w-24 h-4 rounded" />
            <Skeleton className="w-64 h-8 rounded" />
            <Skeleton className="w-48 h-4 rounded" />
          </div>
          <div className="col-span-4 rounded-2xl border border-border-subtle bg-bg-surface/60 p-6 space-y-4">
            <Skeleton className="w-full h-20 rounded-xl" />
            <Skeleton className="w-full h-16 rounded-xl" />
          </div>
        </div>
        <CourseGridSkeleton />
      </main>
    </div>
  )
}
