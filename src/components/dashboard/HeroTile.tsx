'use client'

import { motion } from 'framer-motion'
import { Flame, Sparkles, ArrowRight } from 'lucide-react'
import { BentoCard } from '@/components/ui/BentoCard'
import type { UserProfile } from '@/types'

interface HeroTileProps {
  user: UserProfile
}

export function HeroTile({ user }: HeroTileProps) {
  const hour = new Date().getHours()
  const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening'

  return (
    <BentoCard index={0} glowColor="cyan" meshVariant={1} className="min-h-[200px]">
      {/* Inner glow */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent-cyan/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[200px] h-[200px] bg-accent-purple/5 rounded-full blur-[60px] pointer-events-none" />

      <div className="relative z-10 p-6 lg:p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 h-full">
        {/* Left: Greeting */}
        <div className="space-y-2">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="flex items-center gap-2"
          >
            <span className="text-sm font-medium text-text-secondary font-mono tracking-wider uppercase">
              {greeting}
            </span>
            <Sparkles size={14} className="text-accent-amber" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="text-3xl lg:text-4xl xl:text-5xl font-bold text-text-primary leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Welcome back,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-purple">
              {user.name}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="text-text-secondary text-sm lg:text-base max-w-md"
          >
            You&apos;re on a roll! Keep building momentum — your future self will thank you.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.4 }}
            whileHover={{
              scale: 1.03,
              transition: { type: 'spring', stiffness: 300, damping: 20 },
            }}
            whileTap={{ scale: 0.97 }}
            className="mt-2 flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-accent-cyan/20 to-accent-purple/10 border border-accent-cyan/30 text-accent-cyan text-sm font-medium hover:from-accent-cyan/30 hover:to-accent-purple/20 transition-all duration-200"
          >
            Continue Learning
            <ArrowRight size={14} />
          </motion.button>
        </div>

        {/* Right: Streak Indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.4, type: 'spring', stiffness: 200, damping: 20 }}
          className="flex-shrink-0"
        >
          <div className="relative flex flex-col items-center justify-center w-36 h-36 lg:w-44 lg:h-44 rounded-2xl border border-accent-amber/20 bg-gradient-to-br from-accent-amber/10 to-accent-rose/5">
            {/* Animated rings */}
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.1, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 rounded-2xl border border-accent-amber/20"
            />

            <Flame size={32} className="text-accent-amber mb-1" fill="rgba(245,158,11,0.3)" />
            <span
              className="text-4xl lg:text-5xl font-bold text-accent-amber"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {user.streak}
            </span>
            <span className="text-xs text-text-secondary font-medium mt-1 uppercase tracking-wider">
              Day Streak
            </span>

            {/* Small dots for each streak day (last 7) */}
            <div className="flex gap-1 mt-2">
              {Array.from({ length: 7 }).map((_, i) => (
                <div
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full ${
                    i < (user.streak % 7 || 7) ? 'bg-accent-amber' : 'bg-border-muted'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </BentoCard>
  )
}
