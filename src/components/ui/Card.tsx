import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  elevation?: 0 | 1 | 2 | 3 | 4 | 5
  interactive?: boolean
  className?: string
}

export function Card({ children, elevation = 1, interactive = false, className }: CardProps) {
  const elevationClasses = {
    0: 'shadow-none',
    1: 'shadow-sm',
    2: 'shadow-md',
    3: 'shadow-lg',
    4: 'shadow-xl',
    5: 'shadow-2xl',
  }

  return (
    <div
      className={cn(
        'rounded-lg bg-white border border-accent-green/20',
        elevationClasses[elevation],
        interactive && 'transition-all duration-200 hover:shadow-lg hover:-translate-y-1 cursor-pointer',
        className
      )}
    >
      {children}
    </div>
  )
}

interface CardHeaderProps {
  children: ReactNode
  className?: string
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return (
    <div className={cn('p-6 pb-3', className)}>
      {children}
    </div>
  )
}

interface CardContentProps {
  children: ReactNode
  className?: string
}

export function CardContent({ children, className }: CardContentProps) {
  return (
    <div className={cn('px-6 pb-6', className)}>
      {children}
    </div>
  )
}

interface CardFooterProps {
  children: ReactNode
  className?: string
}

export function CardFooter({ children, className }: CardFooterProps) {
  return (
    <div className={cn('px-6 py-3 mt-auto border-t border-accent-green/20', className)}>
      {children}
    </div>
  )
} 