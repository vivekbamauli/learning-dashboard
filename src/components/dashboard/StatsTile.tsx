'use client'

import { motion } from 'framer-motion'
import { Star, Zap, BarChart2 } from 'lucide-react'
import { BentoCard } from '@/components/ui/BentoCard'
import type { UserProfile } from '@/types'

interface StatsTileProps {
  user: UserProfile
}

const stats = [
  {
    label: 'Total XP',
    key: 'totalXP' as const,
    icon: Star,
    color: 'text-accent-amber',
    bgColor: 'bg-accent-amber/10',
    format: (v: number) => v.toLocaleString(),
  },
  {
    label: 'Rank',
    key: 'rank' as const,
    icon: Zap,
    color: 'text-accent-cyan',
    bgColor: 'bg-accent-cyan/10',
    format: (v: string | number) => String(v),
  },
  {
    label: 'Streak',
    key: 'streak' as const,
    icon: BarChart2,
    color: 'text-accent-purple',
    bgColor: 'bg-accent-purple/10',
    format: (v: number) => `${v} days`,
  },
]

export function StatsTile({ user }: StatsTileProps) {
  return (
    <BentoCard index={1} glowColor="purple" meshVariant={2} className="h-full">
      <div className="relative z-10 p-5 space-y-3 h-full">
        <h2
          className="text-sm font-semibold text-text-secondary uppercase tracking-wider"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          Your Stats
        </h2>

        <div className="space-y-3">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            const value = user[stat.key]

            return (
              <motion.div
                key={stat.key}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.2 + i * 0.08,
                  duration: 0.4,
                  type: 'spring',
                  stiffness: 200,
                  damping: 25,
                }}
                className="flex items-center gap-3 p-3 rounded-xl bg-bg-elevated/50 border border-border-subtle"
              >
                <div className={`w-8 h-8 rounded-lg ${stat.bgColor} flex items-center justify-center flex-shrink-0`}>
                  <Icon size={16} className={stat.color} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-text-muted">{stat.label}</p>
                  <p className={`text-sm font-semibold ${stat.color} truncate`}>
                    {stat.format(value as never)}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* XP progress to next level */}
        <div className="pt-1">
          <div className="flex justify-between text-xs text-text-muted mb-1.5">
            <span>Next level</span>
            <span className="font-mono">{user.totalXP} / 5000 XP</span>
          </div>
          <div className="w-full h-1.5 bg-bg-overlay rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(user.totalXP / 5000) * 100}%` }}
              transition={{ delay: 0.5, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="h-full bg-gradient-to-r from-accent-purple to-accent-cyan rounded-full"
            />
          </div>
        </div>
      </div>
    </BentoCard>
  )
}
