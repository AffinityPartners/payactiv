import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, forwardRef } from 'react'
import { Slot } from '@radix-ui/react-slot'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(
          'inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
          'disabled:pointer-events-none disabled:opacity-50',
          {
            'bg-gradient-to-r from-accent-purple to-accent-magenta text-white hover:from-accent-magenta hover:to-accent-purple focus-visible:ring-accent-purple': variant === 'default',
            'bg-error-500 text-white hover:bg-error-600 focus-visible:ring-error-500': variant === 'destructive',
            'border border-accent-green bg-white hover:bg-accent-green/10 focus-visible:ring-accent-green': variant === 'outline',
            'bg-accent-green/20 text-accent-purple hover:bg-accent-green/30 focus-visible:ring-accent-green': variant === 'secondary',
            'hover:bg-accent-green/10 hover:text-accent-purple focus-visible:ring-accent-green': variant === 'ghost',
            'text-primary-500 underline-offset-4 hover:underline focus-visible:ring-primary-500': variant === 'link',
          },
          {
            'h-10 px-4 py-2': size === 'default',
            'h-9 rounded-md px-3': size === 'sm',
            'h-11 rounded-lg px-8': size === 'lg',
            'h-10 w-10': size === 'icon',
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button } 