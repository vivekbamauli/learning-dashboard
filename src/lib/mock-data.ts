import type { Course, ActivityDay, UserProfile } from '@/types'

export const mockUser: UserProfile = {
  name: 'Alex',
  streak: 14,
  totalXP: 4280,
  rank: 'Neural Architect',
}

export const mockCourses: Course[] = [
  {
    id: '1',
    title: 'Advanced React Patterns',
    progress: 75,
    icon_name: 'Layers',
    created_at: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'TypeScript Mastery',
    progress: 48,
    icon_name: 'Code2',
    created_at: new Date().toISOString(),
  },
  {
    id: '3',
    title: 'System Design Fundamentals',
    progress: 30,
    icon_name: 'Network',
    created_at: new Date().toISOString(),
  },
  {
    id: '4',
    title: 'Machine Learning Basics',
    progress: 62,
    icon_name: 'Brain',
    created_at: new Date().toISOString(),
  },
]

function generateActivityData(): ActivityDay[] {
  const days: ActivityDay[] = []
  const now = new Date()

  for (let i = 364; i >= 0; i--) {
    const date = new Date(now)
    date.setDate(date.getDate() - i)
    const count = Math.random() < 0.3
      ? 0
      : Math.floor(Math.random() * 8)
    const level = count === 0 ? 0 : count <= 2 ? 1 : count <= 4 ? 2 : count <= 6 ? 3 : 4

    days.push({
      date: date.toISOString().split('T')[0],
      count,
      level: level as 0 | 1 | 2 | 3 | 4,
    })
  }

  return days
}

export const activityData: ActivityDay[] = generateActivityData()
