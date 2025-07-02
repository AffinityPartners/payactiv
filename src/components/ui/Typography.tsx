import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface TypographyProps {
  children: ReactNode
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'caption' | 'label'
  className?: string
  as?: keyof JSX.IntrinsicElements
}

export function Typography({ 
  children, 
  variant = 'body', 
  className,
  as
}: TypographyProps) {
  const variants = {
    h1: 'text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-accent-purple',
    h2: 'text-3xl md:text-4xl font-semibold tracking-tight text-accent-purple',
    h3: 'text-2xl md:text-3xl font-semibold text-accent-purple',
    h4: 'text-xl md:text-2xl font-medium text-accent-purple',
    body: 'text-base leading-relaxed text-gray-700',
    caption: 'text-sm text-accent-magenta',
    label: 'text-sm font-medium text-accent-purple',
  }

  const Component = as || (variant.startsWith('h') ? variant : 'p')

  return (
    <Component className={cn(variants[variant], className)}>
      {children}
    </Component>
  )
} 