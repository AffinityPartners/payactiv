'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

interface MobileFooterNavProps {
  className?: string
}

export function MobileFooterNav({ className }: MobileFooterNavProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Hide footer nav when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const navItems = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      label: 'Home',
      href: '/',
      path: '/'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      label: 'Services',
      href: '#services',
      path: '/#services'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      label: 'FAQ',
      href: '/faq',
      path: '/faq'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Contact',
      href: '/contact',
      path: '/contact'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      label: 'Care',
      href: '#services',
      path: '/#services'
    }
  ]

  return (
    <nav
      className={cn(
        'fixed bottom-0 left-0 right-0 z-40 md:hidden transition-transform duration-300 ease-in-out',
        isVisible ? 'translate-y-0' : 'translate-y-full',
        className
      )}
    >
      {/* Background with glassmorphism effect */}
      <div className="bg-white/95 backdrop-blur-xl border-t border-gray-200/50 shadow-lg">
        <div className="px-4 py-2">
          <div className="flex items-center justify-around">
                         {navItems.map((item, index) => {
               const isActive = pathname === item.path || (item.href.startsWith('#') && pathname === '/')
               
               return (
                 <Link
                   key={item.label}
                   href={item.href}
                   className={cn(
                     'flex flex-col items-center justify-center p-2 rounded-lg transition-all duration-200 min-w-[60px] relative',
                     'hover:bg-accent-purple/10 active:scale-95',
                     isActive 
                       ? 'text-accent-purple' 
                       : 'text-gray-600 hover:text-accent-purple'
                   )}
                   {...(item.href.startsWith('#') && { 
                     onClick: (e) => {
                       e.preventDefault()
                       const element = document.querySelector(item.href)
                       if (element) {
                         element.scrollIntoView({ behavior: 'smooth' })
                       }
                     }
                   })}
                 >
                   <div className={cn(
                     'transition-all duration-200',
                     isActive ? 'scale-110' : 'group-hover:scale-105'
                   )}>
                     {item.icon}
                   </div>
                                        <span className={cn(
                       'text-xs font-medium mt-1 transition-colors duration-200',
                       isActive 
                         ? 'text-accent-purple' 
                         : 'text-gray-600'
                     )}>
                       {item.label}
                     </span>
                     
                     {/* Active indicator */}
                     {isActive && (
                       <div className="absolute -top-1 left-1/2 transform -translate-x-1/2">
                         <div className="w-1 h-1 bg-accent-purple rounded-full animate-pulse"></div>
                       </div>
                     )}
                   </Link>
               )
             })}
          </div>
        </div>
        
        {/* Home indicator for iOS-style design */}
        <div className="flex justify-center pb-2">
          <div className="w-12 h-1 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </nav>
  )
} 