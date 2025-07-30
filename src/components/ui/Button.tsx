import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, forwardRef } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass' | 'gradient' | 'premium'
  size?: 'sm' | 'default' | 'lg' | 'xl' | 'icon'
  asChild?: boolean
  glow?: boolean
  loading?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', asChild = false, glow = false, loading = false, disabled, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    
    const baseStyles = cn(
      // Base styles with enhanced transitions
      'relative inline-flex items-center justify-center font-semibold transition-all duration-300 ease-out',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent-purple',
      'disabled:pointer-events-none disabled:opacity-50 select-none',
      'transform active:scale-[0.98]',
      
      // Premium hover effects
      'overflow-hidden',
      
      // Glow effect
      glow && 'animate-glow-premium',
      
      // Variants with enhanced styling
      {
        'bg-white/90 backdrop-blur-sm text-gray-700 border border-gray-200 shadow-md hover:shadow-lg hover:bg-white hover:border-gray-300': variant === 'default',
        
        'bg-gradient-to-r from-accent-green to-accent-green-light text-white shadow-lg hover:shadow-xl hover:from-accent-green-light hover:to-accent-green': variant === 'primary',
        
        'bg-white/80 backdrop-blur-sm text-accent-purple border border-accent-purple/20 shadow-md hover:shadow-lg hover:bg-accent-purple/5 hover:border-accent-purple/30 before:bg-accent-purple/10 before:opacity-0 hover:before:opacity-100': variant === 'secondary',
        
        'border-2 border-accent-green/60 bg-transparent text-accent-green hover:bg-accent-green hover:text-white shadow-sm hover:shadow-md before:bg-accent-green/10 before:opacity-0 hover:before:opacity-100': variant === 'outline',
        
        'hover:bg-gray-100/80 hover:text-gray-700 text-gray-600 before:bg-gray-100 before:opacity-0 hover:before:opacity-100': variant === 'ghost',
        
        'glass-premium text-gray-700 shadow-lg hover:shadow-xl border-white/30 hover:border-white/50 before:bg-white/20 before:opacity-0 hover:before:opacity-100': variant === 'glass',
        
        'bg-gradient-to-r from-accent-purple via-accent-magenta to-accent-green text-white shadow-lg hover:shadow-xl before:absolute before:inset-0 before:bg-gradient-to-r before:from-accent-green before:via-accent-magenta before:to-accent-purple before:opacity-0 hover:before:opacity-100 before:transition-opacity': variant === 'gradient',
        
        'bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-xl hover:shadow-2xl border border-gray-700 hover:border-gray-600 before:bg-gradient-to-br before:from-white/10 before:to-white/5 before:opacity-0 hover:before:opacity-100': variant === 'premium',
      },
      
      // Size variants with refined padding
      {
        'h-9 px-4 py-2 text-sm rounded-xl': size === 'sm',
        'h-11 px-6 py-3 text-base rounded-2xl': size === 'default',
        'h-14 px-8 py-4 text-lg rounded-2xl font-semibold': size === 'lg',
        'h-16 px-10 py-5 text-xl rounded-3xl font-bold': size === 'xl',
        'h-11 w-11 rounded-xl p-0': size === 'icon',
      },
      
      // Enhanced rounded corners
      'rounded-2xl',
      
      className
    )

    // When asChild is true, return simplified structure
    if (asChild) {
      return (
        <Comp
          className={baseStyles}
          ref={ref}
          {...props}
        >
          {children}
        </Comp>
      )
    }
    
    // When not asChild, return full structure with loading states
    return (
      <Comp
        className={baseStyles}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {/* Premium loading state */}
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-inherit rounded-inherit">
            <AiOutlineLoading3Quarters className="animate-spin h-5 w-5 text-current" />
          </div>
        )}
        
        {/* Button content with fade effect during loading */}
        <span className={cn(
          "relative z-10 flex items-center justify-center gap-2",
          loading && "opacity-0"
        )}>
          {children}
        </span>
        
        {/* Premium hover effect overlay */}
        <span className="absolute inset-0 -z-10 rounded-inherit transition-transform duration-500 group-hover:scale-105" />
      </Comp>
    )
  }
)

Button.displayName = 'Button'

export { Button } 