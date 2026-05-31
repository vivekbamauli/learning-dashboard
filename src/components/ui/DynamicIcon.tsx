import * as LucideIcons from 'lucide-react'
import type { LucideProps } from 'lucide-react'

interface DynamicIconProps extends LucideProps {
  name: string
}

export function DynamicIcon({ name, ...props }: DynamicIconProps) {
  const Icon = (LucideIcons as Record<string, React.ComponentType<LucideProps>>)[name]

  if (!Icon) {
    const Fallback = LucideIcons.BookOpen
    return <Fallback {...props} />
  }

  return <Icon {...props} />
}
