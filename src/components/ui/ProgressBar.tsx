'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ProgressBarProps {
  value: number
  className?: string
  color?: 'cyan' | 'purple' | 'emerald' | 'amber' | 'rose'
}

const colorStyles = {
  cyan: 'from-accent-cyan to-cyan-400',
  purple: 'from-accent-purple to-purple-400',
  emerald: 'from-accent-emerald to-emerald-400',
  amber: 'from-accent-amber to-yellow-400',
  rose: 'from-accent-rose to-pink-400',
}

export function ProgressBar({ value, className, color = 'cyan' }: ProgressBarProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-20px' })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start({
        width: `${value}%`,
        transition: {
          duration: 1.2,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.3,
        },
      })
    }
  }, [isInView, controls, value])

  return (
    <div ref={ref} className={cn('w-full h-1.5 bg-bg-overlay rounded-full overflow-hidden', className)}>
      <motion.div
        initial={{ width: 0 }}
        animate={controls}
        className={cn(
          'h-full rounded-full bg-gradient-to-r progress-bar-glow',
          colorStyles[color]
        )}
      />
    </div>
  )
}
