'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { HiHome, HiArchive, HiQuestionMarkCircle, HiMail, HiHeart } from 'react-icons/hi'

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
      icon: <HiHome className="w-5 h-5" />,
      label: 'Home',
      href: '/',
      path: '/'
    },
    {
      icon: <HiArchive className="w-5 h-5" />,
      label: 'Services',
      href: '#services',
      path: '/#services'
    },
    {
      icon: <HiQuestionMarkCircle className="w-5 h-5" />,
      label: 'FAQ',
      href: '/faq',
      path: '/faq'
    },
    {
      icon: <HiMail className="w-5 h-5" />,
      label: 'Contact',
      href: '/contact',
      path: '/contact'
    },
    {
      icon: <HiHeart className="w-5 h-5" />,
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