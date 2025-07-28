import { cn } from '@/lib/utils'
import { ReactNode, CSSProperties } from 'react'

interface TypographyProps {
  children: ReactNode
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'body' | 'body-large' | 'body-small' | 'caption' | 'label' | 'overline'
  className?: string
  as?: keyof JSX.IntrinsicElements
  gradient?: boolean
  animate?: boolean
  style?: CSSProperties
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold'
}

export function Typography({ 
  children, 
  variant = 'body', 
  className,
  as,
  gradient = false,
  animate = false,
  style,
  weight
}: TypographyProps) {
  // Enhanced typography scale with improved line heights and spacing
  const variants = {
    h1: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.4] text-gray-900 pb-2',
    h2: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.2] text-gray-900',
    h3: 'text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-[1.3] text-gray-800',
    h4: 'text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium leading-[1.4] text-gray-800',
    h5: 'text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-[1.5] text-gray-700',
    'body-large': 'text-base sm:text-lg md:text-xl leading-relaxed text-gray-600',
    body: 'text-sm sm:text-base md:text-lg leading-relaxed text-gray-600',
    'body-small': 'text-xs sm:text-sm md:text-base leading-relaxed text-gray-500',
    caption: 'text-xs sm:text-sm text-gray-500 tracking-wide',
    label: 'text-xs sm:text-sm font-medium text-gray-700 tracking-wide uppercase',
    overline: 'text-xs font-semibold tracking-[0.1em] uppercase text-gray-600',
  }

  // Weight modifiers
  const weightClasses = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold'
  }

  // Map variants to appropriate HTML elements
  const getDefaultElement = (variant: string): keyof JSX.IntrinsicElements => {
    if (variant.startsWith('h') && ['h1', 'h2', 'h3', 'h4', 'h5'].includes(variant)) {
      return variant as keyof JSX.IntrinsicElements
    }
    if (variant === 'label') return 'label'
    if (variant === 'caption') return 'figcaption'
    return 'p'
  }

  const Component = as || getDefaultElement(variant)
  
  const baseClasses = variants[variant]
  const gradientClasses = gradient ? 'text-gradient-premium' : ''
  const animateClasses = animate ? 'animate-fade-in' : ''
  const weightClass = weight ? weightClasses[weight] : ''

  // Add premium transitions for interactive text
  const transitionClass = Component === 'a' || Component === 'button' 
    ? 'transition-all duration-300 hover:opacity-80' 
    : ''

  return (
    <Component 
      className={cn(
        baseClasses,
        weightClass,
        gradientClasses,
        animateClasses,
        transitionClass,
        className
      )}
      style={style}
    >
      {children}
    </Component>
  )
} 