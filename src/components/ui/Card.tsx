import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  elevation?: 0 | 1 | 2 | 3 | 4 | 5
  variant?: 'default' | 'glass' | 'premium' | 'soft' | 'glow' | 'gradient'
  interactive?: boolean
  className?: string
  hoverable?: boolean
}

export function Card({ 
  children, 
  elevation = 1, 
  variant = 'default',
  interactive = false,
  hoverable = true,
  className 
}: CardProps) {
  // Enhanced elevation system with sophisticated shadows
  const elevationClasses = {
    0: 'shadow-none',
    1: 'shadow-sm hover:shadow-md',
    2: 'shadow-md hover:shadow-lg',
    3: 'shadow-lg hover:shadow-xl',
    4: 'shadow-xl hover:shadow-2xl',
    5: 'shadow-2xl hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]',
  }

  // Premium variant styles
  const variantClasses = {
    default: 'bg-white border border-gray-200',
    
    glass: cn(
      'bg-white/80 backdrop-blur-xl border border-white/30',
      'bg-gradient-to-br from-white/90 to-white/70',
      'shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]',
      'before:absolute before:inset-0 before:rounded-3xl',
      'before:bg-gradient-to-br before:from-white/50 before:to-transparent',
      'before:opacity-50'
    ),
    
    premium: cn(
      'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900',
      'border border-gray-700 text-white',
      'shadow-[0_20px_40px_rgba(0,0,0,0.4)]',
      'before:absolute before:inset-0 before:rounded-3xl',
      'before:bg-gradient-to-br before:from-white/10 before:to-transparent',
      'before:opacity-0 hover:before:opacity-100 before:transition-opacity'
    ),
    
    soft: cn(
      'bg-gradient-to-br from-gray-50 via-white to-gray-50',
      'border border-gray-100',
      'shadow-[0_4px_20px_rgba(0,0,0,0.06)]'
    ),
    
    glow: cn(
      'bg-white border border-accent-purple/20',
      'shadow-[0_0_30px_rgba(132,39,190,0.15)]',
      'hover:shadow-[0_0_40px_rgba(132,39,190,0.25)]'
    ),
    
    gradient: cn(
      'bg-gradient-to-br from-accent-purple/10 via-accent-magenta/10 to-accent-green/10',
      'border border-transparent',
      'bg-clip-padding',
      'before:absolute before:inset-0 before:-z-10 before:rounded-3xl',
      'before:bg-gradient-to-br before:from-accent-purple before:via-accent-magenta before:to-accent-green',
      'before:opacity-20 hover:before:opacity-30 before:transition-opacity',
      'shadow-lg'
    ),
  }

  return (
    <div
      className={cn(
        'relative rounded-3xl overflow-hidden transition-all duration-300',
        variantClasses[variant],
        hoverable && elevationClasses[elevation],
        interactive && hoverable && 'cursor-pointer hover:-translate-y-1 hover:scale-[1.02]',
        interactive && 'active:scale-[0.98]',
        className
      )}
    >
      {/* Premium inner glow effect */}
      {(variant === 'glass' || variant === 'premium' || variant === 'gradient') && (
        <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}
      
      {children}
    </div>
  )
}

interface CardHeaderProps {
  children: ReactNode
  className?: string
  separator?: boolean
}

export function CardHeader({ children, className, separator = false }: CardHeaderProps) {
  return (
    <div className={cn(
      'px-6 py-6 lg:px-8 lg:py-8',
      separator && 'border-b border-gray-100',
      className
    )}>
      {children}
    </div>
  )
}

interface CardContentProps {
  children: ReactNode
  className?: string
  noPadding?: boolean
}

export function CardContent({ children, className, noPadding = false }: CardContentProps) {
  return (
    <div className={cn(
      !noPadding && 'px-6 py-6 lg:px-8 lg:py-8',
      className
    )}>
      {children}
    </div>
  )
}

interface CardFooterProps {
  children: ReactNode
  className?: string
  separator?: boolean
}

export function CardFooter({ children, className, separator = true }: CardFooterProps) {
  return (
    <div className={cn(
      'px-6 py-4 lg:px-8 lg:py-6',
      separator && 'border-t border-gray-100',
      'bg-gray-50/50',
      className
    )}>
      {children}
    </div>
  )
} 