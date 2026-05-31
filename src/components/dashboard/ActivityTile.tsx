'use client'

import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { Activity } from 'lucide-react'
import { BentoCard } from '@/components/ui/BentoCard'
import { activityData } from '@/lib/mock-data'

const levelColors = [
  'bg-bg-overlay',
  'bg-accent-cyan/20',
  'bg-accent-cyan/40',
  'bg-accent-cyan/70',
  'bg-accent-cyan',
]

const WEEKS = 26 // Show last 26 weeks (~6 months)

export function ActivityTile() {
  const weeks = useMemo(() => {
    const recentDays = activityData.slice(-WEEKS * 7)
    const result: (typeof activityData) = []

    // Pad the beginning so we start on Sunday
    const firstDate = new Date(recentDays[0].date)
    const dayOfWeek = firstDate.getDay()

    for (let i = 0; i < dayOfWeek; i++) {
      result.push({ date: '', count: -1, level: 0 })
    }

    return [...result, ...recentDays]
  }, [])

  const weekColumns = useMemo(() => {
    const cols: (typeof activityData)[] = []
    for (let i = 0; i < weeks.length; i += 7) {
      cols.push(weeks.slice(i, i + 7))
    }
    return cols
  }, [weeks])

  const totalContributions = activityData
    .slice(-WEEKS * 7)
    .reduce((sum, d) => sum + d.count, 0)

  return (
    <BentoCard index={7} glowColor="cyan" meshVariant={2} className="w-full">
      <div className="relative z-10 p-5 lg:p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <h2
            className="text-base font-semibold text-text-primary flex items-center gap-2"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            <Activity size={18} className="text-accent-cyan" />
            Learning Activity
          </h2>
          <span className="text-xs text-text-secondary font-mono">
            <span className="text-accent-cyan font-semibold">{totalContributions}</span> sessions in the last 6 months
          </span>
        </div>

        {/* Graph */}
        <div className="overflow-x-auto pb-2">
          <div className="flex gap-1 min-w-max">
            {weekColumns.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-1">
                {week.map((day, di) => (
                  <motion.div
                    key={`${wi}-${di}`}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: (wi * 7 + di) * 0.002,
                      duration: 0.3,
                      type: 'spring',
                      stiffness: 300,
                      damping: 20,
                    }}
                    title={day.date ? `${day.date}: ${day.count} sessions` : ''}
                    className={`
                      w-3 h-3 rounded-sm cursor-pointer
                      transition-all duration-150 hover:scale-125
                      ${day.count === -1 ? 'opacity-0 pointer-events-none' : levelColors[day.level]}
                    `}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-2 mt-3 justify-end">
          <span className="text-[10px] text-text-muted">Less</span>
          {levelColors.map((color, i) => (
            <div key={i} className={`w-3 h-3 rounded-sm ${color}`} />
          ))}
          <span className="text-[10px] text-text-muted">More</span>
        </div>
      </div>
    </BentoCard>
  )
}
