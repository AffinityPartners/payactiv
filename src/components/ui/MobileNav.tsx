'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { Typography } from '@/components/ui/Typography'
import { cn } from '@/lib/utils'

interface MobileNavProps {
  className?: string
}

export function MobileNav({ className }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <div className={cn('md:hidden', className)}>
      {/* Hamburger Menu Button */}
      <button
        onClick={toggleMenu}
        className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none focus:ring-2 focus:ring-accent-purple/20 rounded-lg p-1"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <span
          className={cn(
            'block h-0.5 w-6 bg-accent-purple transition-all duration-300 ease-out',
            isOpen ? 'rotate-45 translate-y-2' : ''
          )}
        />
        <span
          className={cn(
            'block h-0.5 w-6 bg-accent-purple transition-all duration-300 ease-out',
            isOpen ? 'opacity-0' : ''
          )}
        />
        <span
          className={cn(
            'block h-0.5 w-6 bg-accent-purple transition-all duration-300 ease-out',
            isOpen ? '-rotate-45 -translate-y-2' : ''
          )}
        />
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={closeMenu}
          />
          
          {/* Menu Panel */}
          <div className="fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-white shadow-2xl z-50 md:hidden">
            <div className="flex flex-col h-full">
              {/* Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <Image
                  src="/images/MyParentsBenefits.png"
                  alt="MyParentsBenefit Logo"
                  width={180}
                  height={45}
                  className="h-auto w-auto max-h-10 object-contain"
                />
                <button
                  onClick={closeMenu}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  aria-label="Close menu"
                >
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Menu Content */}
              <div className="flex-1 px-6 py-8 space-y-6">
                {/* Service Links */}
                <div className="space-y-4">
                  <Typography variant="label" className="text-accent-purple">
                    Our Partners
                  </Typography>
                  <div className="space-y-3">
                    <a
                      href="https://getlyric.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block py-2 px-4 text-sm text-gray-600 hover:text-accent-purple hover:bg-purple-50 rounded-lg transition-all duration-200"
                    >
                      Lyric Healthcare
                    </a>
                    <a
                      href="https://myseniorprotect.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block py-2 px-4 text-sm text-gray-600 hover:text-accent-purple hover:bg-purple-50 rounded-lg transition-all duration-200"
                    >
                      Senior Protect
                    </a>
                    <a
                      href="https://caringvillage.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block py-2 px-4 text-sm text-gray-600 hover:text-accent-purple hover:bg-purple-50 rounded-lg transition-all duration-200"
                    >
                      Caring Village
                    </a>
                    <a
                      href="https://ruffeow.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block py-2 px-4 text-sm text-gray-600 hover:text-accent-purple hover:bg-purple-50 rounded-lg transition-all duration-200"
                    >
                      REFFEOW
                    </a>
                    <a
                      href="https://www.chaiz.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block py-2 px-4 text-sm text-gray-600 hover:text-accent-purple hover:bg-purple-50 rounded-lg transition-all duration-200"
                    >
                      Chaiz
                    </a>
                    <a
                      href="https://www.safe4r.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block py-2 px-4 text-sm text-gray-600 hover:text-accent-purple hover:bg-purple-50 rounded-lg transition-all duration-200"
                    >
                      Safe4R
                    </a>
                  </div>
                </div>
              </div>

              {/* Menu Footer */}
              <div className="p-6 border-t border-gray-200">
                <Typography variant="caption" className="text-center block text-gray-500">
                  MyParentsBenefit - Supporting families through comprehensive caregiving
                </Typography>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
} 