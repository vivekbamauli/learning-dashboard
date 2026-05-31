'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface BentoCardProps {
  children: React.ReactNode
  className?: string
  index?: number
  glowColor?: 'cyan' | 'purple' | 'emerald' | 'amber' | 'rose'
  meshVariant?: 1 | 2 | 3 | 4
}

const glowStyles = {
  cyan: 'hover:border-accent-cyan/30 hover:shadow-[0_0_30px_rgba(0,212,255,0.15)]',
  purple: 'hover:border-accent-purple/30 hover:shadow-[0_0_30px_rgba(124,58,237,0.15)]',
  emerald: 'hover:border-accent-emerald/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]',
  amber: 'hover:border-accent-amber/30 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]',
  rose: 'hover:border-accent-rose/30 hover:shadow-[0_0_30px_rgba(244,63,94,0.15)]',
}

const meshStyles = {
  1: 'bg-mesh-1',
  2: 'bg-mesh-2',
  3: 'bg-mesh-3',
  4: 'bg-mesh-4',
}

export function BentoCard({
  children,
  className,
  index = 0,
  glowColor = 'cyan',
  meshVariant = 1,
}: BentoCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.08,
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{
        scale: 1.015,
        transition: { type: 'spring', stiffness: 300, damping: 20 },
      }}
      className={cn(
        'relative rounded-2xl border border-border-subtle',
        'bg-bg-surface/60 backdrop-blur-sm',
        'overflow-hidden noise-overlay',
        'transition-all duration-300 ease-out',
        'shadow-card hover:shadow-card-hover',
        glowStyles[glowColor],
        meshVariant && meshStyles[meshVariant],
        className
      )}
    >
      {children}
    </motion.article>
  )
}
