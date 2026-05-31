'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  LayoutDashboard,
  BookOpen,
  TrendingUp,
  Trophy,
  Settings,
  User,
  Zap,
  ChevronRight,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, href: '#' },
  { id: 'courses', label: 'Courses', icon: BookOpen, href: '#' },
  { id: 'progress', label: 'Progress', icon: TrendingUp, href: '#' },
  { id: 'achievements', label: 'Achievements', icon: Trophy, href: '#' },
  { id: 'profile', label: 'Profile', icon: User, href: '#' },
  { id: 'settings', label: 'Settings', icon: Settings, href: '#' },
]

export function Sidebar() {
  const [activeItem, setActiveItem] = useState('dashboard')
  const [isExpanded, setIsExpanded] = useState(true)

  return (
    <>
      {/* Desktop Sidebar */}
      <motion.nav
        initial={false}
        animate={{ width: isExpanded ? 240 : 72 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed left-0 top-0 h-screen z-50 hidden md:flex flex-col border-r border-border-subtle bg-bg-surface/80 backdrop-blur-xl overflow-hidden"
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-4 py-5 border-b border-border-subtle min-h-[72px]">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center flex-shrink-0 streak-glow">
            <Zap size={18} className="text-white" fill="white" />
          </div>
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <span
                  className="text-lg font-bold text-text-primary whitespace-nowrap"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  NexLearn
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Nav Items */}
        <div className="flex-1 flex flex-col gap-1 p-3 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeItem === item.id

            return (
              <button
                key={item.id}
                onClick={() => setActiveItem(item.id)}
                className="relative flex items-center gap-3 px-3 py-2.5 rounded-xl text-left w-full group"
              >
                {/* Active background pill with layoutId */}
                {isActive && (
                  <motion.div
                    layoutId="sidebar-active"
                    className="absolute inset-0 bg-gradient-to-r from-accent-cyan/10 to-accent-purple/5 rounded-xl border border-accent-cyan/20"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}

                <div className={cn(
                  'relative z-10 w-5 h-5 flex-shrink-0 transition-colors duration-200',
                  isActive ? 'text-accent-cyan' : 'text-text-muted group-hover:text-text-secondary'
                )}>
                  <Icon size={20} />
                </div>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.span
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -8 }}
                      transition={{ duration: 0.15 }}
                      className={cn(
                        'relative z-10 text-sm font-medium whitespace-nowrap transition-colors duration-200',
                        isActive ? 'text-text-primary' : 'text-text-secondary group-hover:text-text-primary'
                      )}
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>

                {isActive && !isExpanded && (
                  <motion.div
                    layoutId="sidebar-dot"
                    className="absolute right-1.5 w-1.5 h-1.5 rounded-full bg-accent-cyan"
                  />
                )}
              </button>
            )
          })}
        </div>

        {/* Collapse toggle */}
        <div className="p-3 border-t border-border-subtle">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-text-muted hover:text-text-secondary hover:bg-bg-elevated transition-all duration-200"
          >
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              <ChevronRight size={16} />
            </motion.div>
            <AnimatePresence>
              {isExpanded && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-xs font-medium whitespace-nowrap"
                >
                  Collapse
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex items-center justify-around bg-bg-surface/90 backdrop-blur-xl border-t border-border-subtle px-2 py-2">
        {navItems.slice(0, 5).map((item) => {
          const Icon = item.icon
          const isActive = activeItem === item.id

          return (
            <button
              key={item.id}
              onClick={() => setActiveItem(item.id)}
              className="relative flex flex-col items-center gap-1 px-3 py-1.5 rounded-xl"
            >
              {isActive && (
                <motion.div
                  layoutId="mobile-active"
                  className="absolute inset-0 bg-accent-cyan/10 rounded-xl"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <Icon
                size={20}
                className={cn(
                  'relative z-10 transition-colors',
                  isActive ? 'text-accent-cyan' : 'text-text-muted'
                )}
              />
              <span className={cn(
                'relative z-10 text-[10px] font-medium transition-colors',
                isActive ? 'text-accent-cyan' : 'text-text-muted'
              )}>
                {item.label}
              </span>
            </button>
          )
        })}
      </nav>
    </>
  )
}
