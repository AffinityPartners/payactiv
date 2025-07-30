'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { Typography } from '@/components/ui/Typography'
import { Container } from '@/components/layout/Container'
import { MobileNav } from '@/components/ui/MobileNav'
import { useState, useEffect } from 'react'
import { HiMail, HiPhone, HiClock } from 'react-icons/hi'

export default function ContactPage() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <div className="min-h-screen">
      {/* Enhanced Header with glassmorphism */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm' 
          : 'glass-card border-b border-white/20 backdrop-blur-xl'
      }`}>
        <Container>
          <div className="flex items-center justify-between py-4 sm:py-6">
            <div className="flex items-center space-x-3 animate-fade-in">
              <Link href="/">
                <Image
                  src="/images/MyParentsBenefits.png"
                  alt="MyParentsBenefit Logo"
                  width={220}
                  height={55}
                  priority
                  className="h-auto w-auto max-h-10 sm:max-h-12 md:max-h-14 object-contain hover:scale-105 transition-transform duration-300"
                />
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-3 animate-fade-in">
              <Image
                src="/images/payactiv.png"
                alt="Payactiv Logo"
                width={160}
                height={45}
                className="h-auto w-auto max-h-12 object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Mobile Payactiv Logo and Navigation */}
            <div className="flex items-center space-x-4 md:hidden">
              <Image
                src="/images/payactiv.png"
                alt="Payactiv Logo"
                width={120}
                height={35}
                className="h-auto w-auto max-h-8 object-contain"
              />
              <MobileNav />
            </div>
          </div>
        </Container>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-14 md:py-16 bg-gradient-to-br from-blue-50/80 via-white to-purple-50/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(132,39,190,0.05),transparent_50%)]"></div>
        <Container className="relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <Typography variant="overline" className="mb-6">
              Get In Touch
            </Typography>
            
            <Typography variant="h1" className="mb-6">
              Contact Us
            </Typography>
            
            <Typography variant="body" className="text-lg text-slate-700 mb-8 leading-relaxed max-w-2xl mx-auto">
              We&apos;re here to help you navigate your family caregiving journey. Reach out to us with any questions, 
              concerns, or to learn more about our comprehensive support services.
            </Typography>
          </div>
        </Container>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-12 sm:py-14 md:py-16 bg-gradient-to-br from-slate-50/50 via-white to-emerald-50/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(156,213,140,0.08),transparent_50%)]"></div>
        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            
            {/* Contact Form */}
            <div className="animate-slide-up">
              <Card variant="glow" className="p-8">
                <CardHeader className="p-0 mb-8">
                  <Typography variant="h3" className="mb-4">
                    Send Us a Message
                  </Typography>
                  <Typography variant="body" className="text-slate-600">
                    Fill out the form below and we&apos;ll get back to you within 24 hours.
                  </Typography>
                </CardHeader>
                
                <CardContent className="p-0">
                  <form className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-semibold text-accent-purple mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl border border-slate-200 focus:border-accent-purple focus:ring-2 focus:ring-accent-purple/20 outline-none transition-all duration-200 bg-white/80 backdrop-blur-sm text-sm sm:text-base"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-semibold text-accent-purple mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:border-accent-purple focus:ring-2 focus:ring-accent-purple/20 outline-none transition-all duration-200 bg-white/80 backdrop-blur-sm"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-accent-purple mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:border-accent-purple focus:ring-2 focus:ring-accent-purple/20 outline-none transition-all duration-200 bg-white/80 backdrop-blur-sm"
                        placeholder="Enter your email address"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-accent-purple mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:border-accent-purple focus:ring-2 focus:ring-accent-purple/20 outline-none transition-all duration-200 bg-white/80 backdrop-blur-sm"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div>
                      <label htmlFor="employerName" className="block text-sm font-semibold text-accent-purple mb-2">
                        Employer Name *
                      </label>
                      <input
                        type="text"
                        id="employerName"
                        name="employerName"
                        required
                        className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:border-accent-purple focus:ring-2 focus:ring-accent-purple/20 outline-none transition-all duration-200 bg-white/80 backdrop-blur-sm"
                        placeholder="Enter your employer name"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-accent-purple mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        className="w-full px-4 py-3 pr-8 rounded-2xl border border-slate-200 focus:border-accent-purple focus:ring-2 focus:ring-accent-purple/20 outline-none transition-all duration-200 bg-white/80 backdrop-blur-sm appearance-none"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                          backgroundPosition: 'right 0.75rem center',
                          backgroundRepeat: 'no-repeat',
                          backgroundSize: '1.5em 1.5em'
                        }}
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="healthcare">Healthcare Services</option>
                        <option value="medicare">Medicare & Benefits</option>
                        <option value="caregiving">Caregiving Support</option>
                        <option value="technical">Technical Support</option>
                        <option value="partnership">Partnership Opportunities</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-accent-purple mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        required
                        className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:border-accent-purple focus:ring-2 focus:ring-accent-purple/20 outline-none transition-all duration-200 bg-white/80 backdrop-blur-sm resize-none"
                        placeholder="Tell us how we can help you..."
                      ></textarea>
                    </div>

                    <div className="pt-4">
                      <Button 
                        size="lg" 
                        className="bg-[#9cd58c] text-white font-bold shadow-lg hover:bg-[#9cd58c]/90 border-2 border-[#9cd58c] w-full group"
                        type="submit"
                      >
                        Send Message
                        <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="animate-slide-up space-y-8" style={{ animationDelay: '0.2s' }}>
              
              {/* Contact Details Card */}
              <Card variant="glow" className="p-8">
                <Typography variant="h3" className="mb-6">
                  Get in Touch
                </Typography>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent-purple/10 rounded-2xl flex items-center justify-center">
                      <HiMail className="w-6 h-6 text-accent-purple" />
                    </div>
                    <div>
                      <Typography variant="h4" className="mb-2">
                        Email Us
                      </Typography>
                      <Typography variant="body" className="text-slate-600">
                        support@myparentsbenefit.com
                      </Typography>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent-purple/10 rounded-2xl flex items-center justify-center">
                      <HiPhone className="w-6 h-6 text-accent-purple" />
                    </div>
                    <div>
                      <Typography variant="h4" className="mb-2">
                        Call Us
                      </Typography>
                      <Typography variant="body" className="text-slate-600">
                        1-800-PARENTS (1-800-727-3687)
                      </Typography>
                      <Typography variant="caption" className="text-slate-500">
                        Monday - Friday, 8:00 AM - 6:00 PM EST
                      </Typography>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent-purple/10 rounded-2xl flex items-center justify-center">
                      <HiClock className="w-6 h-6 text-accent-purple" />
                    </div>
                    <div>
                      <Typography variant="h4" className="mb-2">
                        Response Time
                      </Typography>
                      <Typography variant="body" className="text-slate-600">
                        We typically respond within 24 hours
                      </Typography>
                    </div>
                  </div>
                </div>
              </Card>

              {/* FAQ Link Card */}
              <Card variant="glow" className="p-8">
                <Typography variant="h4" className="mb-4">
                  Have Questions?
                </Typography>
                <Typography variant="body" className="text-slate-600 mb-6">
                  Check out our frequently asked questions for quick answers to common inquiries.
                </Typography>
                <Button 
                  size="lg" 
                  className="bg-[#9cd58c] text-white font-bold shadow-lg hover:bg-[#9cd58c]/90 border-2 border-[#9cd58c] group"
                  asChild
                >
                  <Link href="/faq">
                    <span>
                      View FAQ
                      <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </span>
                  </Link>
                </Button>
              </Card>

              {/* Services Overview Card */}
              <Card variant="glow" className="p-8">
                <Typography variant="h4" className="mb-4">
                  Our Services
                </Typography>
                <Typography variant="body" className="text-slate-600 mb-6">
                  Learn more about our comprehensive family caregiving support services.
                </Typography>
                <Button 
                  size="lg" 
                  className="bg-[#9cd58c] text-white font-bold shadow-lg hover:bg-[#9cd58c]/90 border-2 border-[#9cd58c] group"
                  asChild
                >
                  <Link href="/#services">
                    <span>
                      Explore Services
                      <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </span>
                  </Link>
                </Button>
              </Card>
              
            </div>
          </div>
        </Container>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-8 sm:py-12 lg:py-16 glass-card border-t border-white/20 backdrop-blur-xl">
        <Container>
          <div className="text-center space-y-6 sm:space-y-8">
            <div className="flex justify-center items-center space-x-4 sm:space-x-6 lg:space-x-8 flex-wrap">
              <Link 
                href="/" 
                className="text-slate-600 hover:text-accent-purple transition-colors font-medium hover:scale-105 transform duration-200"
              >
                Home
              </Link>
              <span className="text-slate-300">•</span>
              <Link 
                href="/faq" 
                className="text-slate-600 hover:text-accent-purple transition-colors font-medium hover:scale-105 transform duration-200"
              >
                FAQ
              </Link>
              <span className="text-slate-300">•</span>
              <button className="text-slate-600 hover:text-accent-purple transition-colors font-medium hover:scale-105 transform duration-200">
                Privacy Policy
              </button>
            </div>
            
            <div className="pt-8 border-t border-slate-200">
              <Typography variant="caption">
                © 2025 MyParentsBenefit. All rights reserved. • Empowering families through comprehensive caregiving support.
              </Typography>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  )
} 