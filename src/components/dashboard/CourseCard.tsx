'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { BentoCard } from '@/components/ui/BentoCard'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { DynamicIcon } from '@/components/ui/DynamicIcon'
import type { Course } from '@/types'

interface CourseCardProps {
  course: Course
  index: number
}

const cardVariants = [
  { glowColor: 'cyan', iconBg: 'bg-accent-cyan/10', iconColor: 'text-accent-cyan', progressColor: 'cyan', meshVariant: 1 },
  { glowColor: 'purple', iconBg: 'bg-accent-purple/10', iconColor: 'text-accent-purple', progressColor: 'purple', meshVariant: 2 },
  { glowColor: 'emerald', iconBg: 'bg-accent-emerald/10', iconColor: 'text-accent-emerald', progressColor: 'emerald', meshVariant: 3 },
  { glowColor: 'amber', iconBg: 'bg-accent-amber/10', iconColor: 'text-accent-amber', progressColor: 'amber', meshVariant: 4 },
] as const

export function CourseCard({ course, index }: CourseCardProps) {
  const variant = cardVariants[index % cardVariants.length]

  return (
    <BentoCard
      index={index + 3}
      glowColor={variant.glowColor}
      meshVariant={variant.meshVariant}
      className="group"
    >
      <div className="relative z-10 p-5 flex flex-col gap-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className={`w-10 h-10 rounded-xl ${variant.iconBg} flex items-center justify-center`}>
            <DynamicIcon
              name={course.icon_name}
              size={20}
              className={variant.iconColor}
            />
          </div>

          <motion.button
            whileHover={{
              scale: 1.1,
              transition: { type: 'spring', stiffness: 300, damping: 20 },
            }}
            whileTap={{ scale: 0.95 }}
            className="w-7 h-7 rounded-lg bg-bg-overlay border border-border-subtle flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          >
            <ArrowUpRight size={14} className="text-text-secondary" />
          </motion.button>
        </div>

        {/* Title */}
        <div>
          <h3
            className="text-sm font-semibold text-text-primary leading-snug line-clamp-2"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {course.title}
          </h3>
        </div>

        {/* Progress */}
        <div className="space-y-2 mt-auto">
          <div className="flex items-center justify-between">
            <span className="text-xs text-text-muted">Progress</span>
            <span
              className={`text-xs font-semibold font-mono ${variant.iconColor}`}
            >
              {course.progress}%
            </span>
          </div>
          <ProgressBar
            value={course.progress}
            color={variant.progressColor}
          />
        </div>
      </div>
    </BentoCard>
  )
}
