'use client'

import Image from 'next/image'
import { ReactNode } from 'react'
import { Card, CardContent } from '@/components/ui/Card'
import { Typography } from '@/components/ui/Typography'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

interface ServiceSectionProps {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  features?: string[]
  ctaText: string
  ctaHref: string
  badge: {
    text: string
    color: 'blue' | 'emerald' | 'rose' | 'orange' | 'cyan' | 'indigo'
  }
  imagePosition?: 'left' | 'right'
  specialContent?: ReactNode
  floatingBadge?: {
    icon: ReactNode
    title: string
    subtitle: string
  }
  className?: string
}

const colorClasses = {
  blue: {
    badge: 'bg-blue-100 text-blue-700',
    dot: 'bg-blue-500',
    gradient: 'from-blue-400/20 to-purple-400/20',
    icon: 'from-blue-500 to-blue-600'
  },
  emerald: {
    badge: 'bg-emerald-100 text-emerald-700',
    dot: 'bg-emerald-500',
    gradient: 'from-emerald-400/20 to-green-400/20',
    icon: 'from-emerald-500 to-emerald-600'
  },
  rose: {
    badge: 'bg-rose-100 text-rose-700',
    dot: 'bg-rose-500',
    gradient: 'from-rose-400/20 to-pink-400/20',
    icon: 'from-rose-500 to-rose-600'
  },
  orange: {
    badge: 'bg-orange-100 text-orange-700',
    dot: 'bg-orange-500',
    gradient: 'from-orange-400/20 to-amber-400/20',
    icon: 'from-orange-500 to-orange-600'
  },
  cyan: {
    badge: 'bg-cyan-100 text-cyan-700',
    dot: 'bg-cyan-500',
    gradient: 'from-cyan-400/20 to-blue-400/20',
    icon: 'from-cyan-500 to-cyan-600'
  },
  indigo: {
    badge: 'bg-indigo-100 text-indigo-700',
    dot: 'bg-indigo-500',
    gradient: 'from-indigo-400/20 to-purple-400/20',
    icon: 'from-indigo-500 to-indigo-600'
  }
}

export function ServiceSection({
  title,
  description,
  imageSrc,
  imageAlt,
  features,
  ctaText,
  ctaHref,
  badge,
  imagePosition = 'left',
  specialContent,
  floatingBadge,
  className
}: ServiceSectionProps) {
  const colors = colorClasses[badge.color]
  const isImageLeft = imagePosition === 'left'

  return (
    <section className={cn(
      "py-20 sm:py-24 md:py-32 lg:py-40 relative overflow-hidden",
      className
    )}>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/30 via-white to-gray-50/30"></div>
      
      <div className="mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Section */}
          <div className={cn(
            "relative",
            isImageLeft ? "order-2 lg:order-1" : "order-2"
          )}>
            <div className="relative">
              {/* Decorative blur */}
              <div className={cn(
                "absolute -inset-4 rounded-3xl blur-2xl bg-gradient-to-r",
                colors.gradient
              )} />
              
              <Card variant="glass" className="relative overflow-hidden group" hoverable>
                <CardContent noPadding>
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Premium overlay effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </CardContent>
              </Card>
              
              {/* Floating badge */}
              {floatingBadge && (
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 animate-float-premium">
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br",
                      colors.icon
                    )}>
                      {floatingBadge.icon}
                    </div>
                    <div>
                      <Typography variant="body-small" weight="semibold" className="text-gray-900">
                        {floatingBadge.title}
                      </Typography>
                      <Typography variant="caption" className="text-gray-500">
                        {floatingBadge.subtitle}
                      </Typography>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Content Section */}
          <div className={cn(
            "space-y-8",
            isImageLeft ? "order-1 lg:order-2" : "order-1"
          )}>
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full">
                <div className={cn("w-2 h-2 rounded-full animate-pulse", colors.dot)} />
                <Typography variant="label" className={colors.badge}>
                  {badge.text}
                </Typography>
              </div>
              
              <Typography variant="h2" className="text-gray-900" weight="semibold">
                {title}
              </Typography>
            </div>
            
            <Typography variant="body-large" className="text-gray-600 leading-relaxed">
              {description}
            </Typography>
            
            {/* Special content (like price cards) */}
            {specialContent}
            
            {/* Feature list */}
            {features && features.length > 0 && (
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-accent-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <Typography variant="body-small" className="text-gray-700">
                      {feature}
                    </Typography>
                  </div>
                ))}
              </div>
            )}
            
            <div className="pt-4">
              <Button 
                size="lg" 
                variant="primary"
                className="group"
                asChild
              >
                <a href={ctaHref} target="_blank" rel="noopener noreferrer">
                  <span className="flex items-center">
                    {ctaText}
                    <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 