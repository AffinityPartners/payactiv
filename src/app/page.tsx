'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { Typography } from '@/components/ui/Typography'
import { Container } from '@/components/layout/Container'
import { Grid } from '@/components/layout/Grid'
import { MobileNav } from '@/components/ui/MobileNav'
import { useState, useEffect } from 'react'


export default function Home() {
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
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo Section */}
            <div className="flex items-center space-x-3 animate-fade-in">
              <Link href="/" className="hover:opacity-90 transition-opacity">
                <Image
                  src="/images/MyParentsBenefits.png"
                  alt="MyParentsBenefit Logo"
                  width={220}
                  height={55}
                  priority
                  className="h-auto w-auto max-h-8 sm:max-h-10 md:max-h-12 object-contain"
                />
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-sm font-medium text-gray-700 hover:text-accent-purple transition-colors">
                Home
              </Link>
              <Link href="#services" className="text-sm font-medium text-gray-700 hover:text-accent-purple transition-colors">
                Services
              </Link>
              <Link href="/faq" className="text-sm font-medium text-gray-700 hover:text-accent-purple transition-colors">
                FAQ
              </Link>
              <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-accent-purple transition-colors">
                Contact
              </Link>
            </nav>

            {/* Desktop Payactiv Logo */}
            <div className="hidden md:flex items-center animate-fade-in">
              <Image
                src="/images/payactiv.png"
                alt="Payactiv Logo"
                width={160}
                height={45}
                className="h-auto w-auto max-h-10 object-contain hover:opacity-90 transition-opacity"
              />
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-3 md:hidden">
              <Image
                src="/images/payactiv.png"
                alt="Payactiv Logo"
                width={100}
                height={30}
                className="h-auto w-auto max-h-7 object-contain"
              />
              <MobileNav />
            </div>
          </div>
        </Container>
      </header>

      {/* Enhanced Hero Section */}
      <section className="relative min-h-[650px] sm:min-h-[700px] md:min-h-[800px] lg:min-h-[900px] flex items-center">
        {/* Premium gradient background */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-purple-50/50 via-white to-green-50/30"></div>
        
        {/* Background Image with refined overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/mom-and-daughter.png"
            alt="Mother and daughter spending quality time together - representing family support and connection"
            fill
            priority
            className="object-cover object-[75%_center] sm:object-[85%_center] md:object-center"
            quality={100}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAACAAIDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxQf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
          {/* Premium gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/30"></div>
        </div>
        
        {/* Hero Content with enhanced styling */}
        <Container className="relative z-10 w-full">
          <div className="max-w-3xl py-20 sm:py-24 md:py-32 lg:py-36 px-4">
            <div className="text-left space-y-8">
              {/* Overline with premium styling */}
              <div className="space-y-6">
                <div 
                  className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full animate-fade-in"
                  style={{ animationDelay: '0.1s' }}
                >
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  <Typography variant="label" className="text-purple-700">
                    Comprehensive Family Care Platform
                  </Typography>
                </div>
                
                {/* Main heading with gradient effect */}
                <Typography 
                  variant="h1" 
                  className="animate-slide-up overflow-visible"
                  gradient
                  style={{ animationDelay: '0.2s', overflow: 'visible' }}
                >
                  Helping You Help
                  <br />
                  Your Parents with
                  <br className="sm:hidden" />
                  <span className="text-accent-purple"> Caregiving</span>
                </Typography>
              </div>
              
              {/* Subheading with better spacing */}
              <Typography 
                variant="body-large" 
                className="text-gray-600 max-w-2xl animate-fade-in leading-relaxed" 
                style={{ animationDelay: '0.4s' }}
              >
                Discover comprehensive resources, expert guidance, and community support 
                to navigate your family caregiving journey with confidence and peace of mind.
              </Typography>
              
              {/* Enhanced CTA buttons */}
              <div className="flex flex-row gap-4 pt-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <Button 
                  size="lg" 
                  variant="primary"
                  className="group shadow-xl hover:shadow-2xl"
                  asChild
                >
                  <Link href="#services">
                    <span className="flex items-center">
                      Explore Services
                      <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="glass"
                  className="backdrop-blur-md"
                  asChild
                >
                  <Link href="/contact">
                    Get Started
                  </Link>
                </Button>
              </div>
              
              {/* Trust indicators */}
              <div className="flex items-center gap-6 pt-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white" />
                  ))}
                </div>
                <div>
                  <Typography variant="body-small" className="text-gray-500">
                    Trusted by <span className="font-semibold text-gray-700">10,000+</span> families
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Premium Full Width Bar Section */}
      <section className="relative py-16 sm:py-20 md:py-24 overflow-hidden" id="services">
        {/* Premium gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent-purple via-accent-magenta to-accent-purple">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-transparent"></div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-gradient-x"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.2)_0%,transparent_70%)]"></div>
        </div>
        
        <Container className="relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Typography 
              variant="h2" 
              className="text-white font-light leading-relaxed"
              as="p"
            >
              Helping Mom or Dad Begins with Managing their Care Including 
              <span className="font-semibold"> Doctor Visits</span>, 
              <span className="font-semibold"> Prescription Reminders</span>, and 
              <span className="font-semibold"> Safety Alerts</span> Supporting Everyday Life.
            </Typography>
          </div>
        </Container>
      </section>

      {/* Enhanced Lyric Healthcare Services Section */}
      <section className="py-20 sm:py-24 md:py-32 lg:py-40 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30"></div>
        
        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Enhanced Lyric Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-2xl"></div>
                
                <Card variant="glass" className="relative overflow-hidden group" hoverable>
                  <CardContent noPadding>
                    <Image
                      src="/images/lyric-image.png"
                      alt="Lyric healthcare services for seniors"
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Premium overlay effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </CardContent>
                </Card>
                
                {/* Floating badge */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 animate-float-premium">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <Typography variant="body-small" weight="semibold" className="text-gray-900">
                        24/7 Available
                      </Typography>
                      <Typography variant="caption" className="text-gray-500">
                        Always here for you
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right - Enhanced Content */}
            <div className="order-1 lg:order-2 space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <Typography variant="label" className="text-blue-700">
                    Healthcare Services
                  </Typography>
                </div>
                
                <Typography variant="h2" className="text-gray-900" weight="semibold">
                  You can Schedule and Join Your Parent&apos;s Doctor Appointments.
                </Typography>
              </div>
              
              <Typography variant="body-large" className="text-gray-600 leading-relaxed">
                Have a 24/7 dedicated care team for your parents, grandparents and other loved ones. 
                Our national network of providers is here for senior loved ones. Healthcare services 
                include Urgent Care, Primary Care, Mental Health, Dermatology, Virtual MSK, Labs 
                GLP-1 Weight Loss Program and Medications.
              </Typography>
              
              {/* Feature list */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Urgent Care Access',
                  'Mental Health Support',
                  'Virtual Consultations',
                  'Prescription Management'
                ].map((feature, index) => (
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
              
              <div className="pt-4">
                <Button 
                  size="lg" 
                  variant="primary"
                  className="group"
                  asChild
                >
                  <a href="https://getlyric.com/" target="_blank" rel="noopener noreferrer">
                    <span className="flex items-center">
                      Learn More About Lyric
                      <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Enhanced Senior Protect Medicare Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-br from-emerald-50/50 via-white to-green-50/50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Enhanced Senior Protect Image */}
            <div className="relative order-2 lg:order-1">
              <Card variant="glass" className="overflow-hidden group">
                <Image
                  src="/images/senior-protect-image.png"
                  alt="Senior Protect Medicare and health benefits services"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </Card>
            </div>
            
            {/* Right - Enhanced Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <Typography variant="label" className="text-emerald-700">
                    Medicare & Benefits
                  </Typography>
                </div>
                
                <Typography variant="h2">
                  Medicare and Other Senior Health Benefits Can Impact Family Caregiving.
                </Typography>
              </div>
              
              <Typography variant="body-large" className="text-gray-600">
                According to the Kaiser Foundation there&apos;s over 100,000 pages of Medicare laws and regulations 
                for Medicare Part A, B, C and D – We help you navigate and choose the best coverage. Now, you can 
                speak to an independent licensed Medicare agent to review your current plan and other options.
              </Typography>
              
              <div className="pt-4">
                <Button 
                  size="lg" 
                  variant="primary"
                  className="w-full sm:w-auto"
                  asChild
                >
                  <a href="https://myseniorprotect.com/" target="_blank" rel="noopener noreferrer">
                    <span>
                      LEARN MORE
                      <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Enhanced Caring Village Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-br from-rose-50/50 via-white to-pink-50/50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Enhanced Caring Village Image */}
            <div className="relative order-2 lg:order-1">
              <Card variant="glass" className="overflow-hidden group">
                <Image
                  src="/images/caring-village-image.png"
                  alt="Caring Village family caregiving dashboard and mobile app"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </Card>
            </div>
            
            {/* Right - Enhanced Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-100 rounded-full">
                  <div className="w-2 h-2 bg-rose-500 rounded-full animate-pulse"></div>
                  <Typography variant="label" className="text-rose-700">
                    Care Coordination
                  </Typography>
                </div>
                
                <Typography variant="h2">
                  Save Time. Eliminate Frustration. And Keep Care Coordinated.
                </Typography>
              </div>
              
              <Typography variant="body-large" className="text-gray-600">
                Caring Village is the only easy-to-use dashboard and senior support mobile application 
                designed specifically for family caregivers, like you, making it easier, safer, and less 
                stressful to care for an aging loved one.
              </Typography>
              
              <div className="pt-4">
                <Button 
                  size="lg" 
                  variant="primary"
                  className="w-full sm:w-auto"
                  asChild
                >
                  <a href="https://caringvillage.com/" target="_blank" rel="noopener noreferrer">
                    <span>
                      LEARN MORE
                      <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Enhanced REFFEOW Pet Healthcare Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-br from-amber-50/50 via-white to-orange-50/50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Enhanced Ruffeow Image */}
            <div className="relative order-2 lg:order-1">
              <Card variant="glass" className="overflow-hidden group">
                <Image
                  src="/images/Ruffeow-image.png"
                  alt="REFFEOW pet healthcare services for family pets"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </Card>
            </div>
            
            {/* Right - Enhanced Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full">
                  <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                  <Typography variant="label" className="text-orange-700">
                    Pet Healthcare
                  </Typography>
                </div>
                
                <Typography variant="h2">
                  Healthcare for All Family (Furry) Loved Ones.
                </Typography>
              </div>
              
              <Typography variant="body-large" className="text-gray-600">
                You and your loved ones can enjoy access to pet healthcare with one flat rate, no quotes, 
                no deductibles, no age restrictions, real RX benefits, quick reimbursements, competitive 
                pricing and compassionate giving. We donate 20% of our profits to animal rescue organizations.
              </Typography>
              
              <div className="pt-4">
                <Button 
                  size="lg" 
                  variant="primary"
                  className="w-full sm:w-auto"
                  asChild
                >
                  <a href="https://ruffeow.com/" target="_blank" rel="noopener noreferrer">
                    <span>
                      LEARN MORE
                      <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Enhanced Chaiz Auto Protection Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-br from-cyan-50/50 via-white to-blue-50/50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Enhanced Chaiz Image */}
            <div className="relative order-2 lg:order-1">
              <Card variant="glass" className="overflow-hidden group">
                <Image
                  src="/images/chaiz-image.png"
                  alt="Chaiz auto repair service protection for families"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </Card>
            </div>
            
            {/* Right - Enhanced Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 rounded-full">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
                  <Typography variant="label" className="text-cyan-700">
                    Auto Protection
                  </Typography>
                </div>
                
                <Typography variant="h2">
                  Keep Parents Safe with Auto Repair Service Protection Shop. Save. Protect.
                </Typography>
              </div>
              
              <Typography variant="body-large" className="text-gray-600">
                Our independent marketplace offers 12 different &quot;extended warranty&quot; companies providing an 
                average savings of $2000. Stay safe, stay protected and get peace of mind. No middlemen, 
                no headache, no sales commissions, no salesperson, and no phone calls.
              </Typography>
              
              <div className="pt-4">
                <Button 
                  size="lg" 
                  variant="primary"
                  className="w-full sm:w-auto"
                  asChild
                >
                  <a href="https://www.chaiz.com/" target="_blank" rel="noopener noreferrer">
                    <span>
                      LEARN MORE
                      <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Enhanced Safe4R Driving Safety Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Enhanced Safe4R Image */}
            <div className="relative order-2 lg:order-1">
              <Card variant="glass" className="overflow-hidden group">
                <Image
                  src="/images/Safe4R-Image.png"
                  alt="Safe4R driving safety app connecting families"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </Card>
            </div>
            
            {/* Right - Enhanced Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 rounded-full">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
                  <Typography variant="label" className="text-indigo-700">
                    Driving Safety
                  </Typography>
                </div>
                
                <Typography variant="h2">
                  Keep Mom and Dad Connected When Driving.
                </Typography>
              </div>
              
              <Card variant="soft" className="p-6 mb-6">
                <Typography variant="h4" className="text-accent-purple font-semibold">
                  Over 1 Million+ People Protected
                </Typography>
              </Card>
              
              <Typography variant="body-large" className="text-gray-600">
                Safe4R is the world&apos;s first Application where the power of social community exponentially 
                increases the immediate and direct response to any situation we or our loved ones may be 
                confronted with. Reliable and safe, higher security standards and only $12.99 Monthly.
              </Typography>
              
              <div className="pt-4">
                <Button 
                  size="lg" 
                  variant="primary"
                  className="w-full sm:w-auto"
                  asChild
                >
                  <a href="https://www.safe4r.com/" target="_blank" rel="noopener noreferrer">
                    <span>
                      LEARN MORE
                      <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Premium CTA Section */}
      <section className="relative py-24 sm:py-32 lg:py-40 overflow-hidden">
        {/* Premium gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-purple via-accent-magenta to-accent-green">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20"></div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
          {/* Floating orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float-premium"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float-premium" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <Container className="relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-10">
            {/* Header */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <Typography variant="label" className="text-white/90">
                  Ready to get started?
                </Typography>
              </div>
              
              <Typography variant="h1" className="text-white" weight="bold">
                Need Assistance?
              </Typography>
              
              <Typography variant="body-large" className="text-white/90 max-w-2xl mx-auto leading-relaxed">
                Join thousands of families who trust MyParentsBenefit for their caregiving journey. 
                Get the support, resources, and peace of mind you deserve.
              </Typography>
            </div>
            
            {/* Premium CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="xl" 
                variant="default"
                className="min-w-[200px] bg-white text-accent-purple hover:bg-gray-50"
                asChild
              >
                <Link href="/faq">
                  <span className="flex items-center">
                    Browse FAQs
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                </Link>
              </Button>
              <Button 
                size="xl" 
                variant="primary"
                className="min-w-[200px]"
                asChild
              >
                <Link href="/contact">
                  <span className="flex items-center">
                    Contact Us
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2z" />
                    </svg>
                  </span>
                </Link>
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <Typography variant="body-small" className="text-white">4.9/5 Average Rating</Typography>
              </div>
              <div className="hidden sm:block w-px h-6 bg-white/30"></div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                <Typography variant="body-small" className="text-white">24/7 Support Available</Typography>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Premium Footer */}
      <footer className="relative py-20 bg-gradient-to-b from-white to-gray-50 border-t border-gray-200">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-32 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent blur-3xl"></div>
        </div>
        
        <Container className="relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <div className="space-y-6">
              <Image
                src="/images/MyParentsBenefits.png"
                alt="MyParentsBenefit Logo"
                width={200}
                height={50}
                className="h-12 w-auto object-contain"
              />
              <Typography variant="body-small" className="text-gray-600">
                Empowering families through comprehensive caregiving support and resources.
              </Typography>
              <div className="flex gap-4">
                {/* Social media icons */}
                {['facebook', 'twitter', 'linkedin'].map((social) => (
                  <button
                    key={social}
                    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-accent-purple/10 hover:text-accent-purple transition-all duration-300 flex items-center justify-center"
                    aria-label={`Follow us on ${social}`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.736 6.979C9.208 6.193 9.696 6 10 6c.304 0 .792.193 1.264.979a1 1 0 001.715-1.029C12.279 4.784 11.232 4 10 4s-2.279.784-2.979 1.95c-.285.475-.507 1-.67 1.55H6a1 1 0 000 2h.013a9.358 9.358 0 000 1H6a1 1 0 100 2h.351c.163.55.385 1.075.67 1.55C7.721 15.216 8.768 16 10 16s2.279-.784 2.979-1.95a1 1 0 10-1.715-1.029c-.472.786-.96.979-1.264.979-.304 0-.792-.193-1.264-.979a4.265 4.265 0 01-.264-.521H10a1 1 0 100-2H8.017a7.36 7.36 0 010-1H10a1 1 0 100-2H8.472c.08-.185.167-.36.264-.521z" clipRule="evenodd" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="space-y-6">
              <Typography variant="h5" className="text-gray-900">
                Quick Links
              </Typography>
              <ul className="space-y-3">
                {['Home', 'Services', 'About Us', 'Contact'].map((link) => (
                  <li key={link}>
                    <Link 
                      href={link === 'Services' ? '#services' : `/${link.toLowerCase().replace(' ', '-')}`}
                      className="text-gray-600 hover:text-accent-purple transition-colors duration-300"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Resources */}
            <div className="space-y-6">
              <Typography variant="h5" className="text-gray-900">
                Resources
              </Typography>
              <ul className="space-y-3">
                {['FAQ', 'Blog', 'Support Center', 'Privacy Policy'].map((link) => (
                  <li key={link}>
                    <Link 
                      href={`/${link.toLowerCase().replace(' ', '-')}`}
                      className="text-gray-600 hover:text-accent-purple transition-colors duration-300"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Newsletter */}
            <div className="space-y-6">
              <Typography variant="h5" className="text-gray-900">
                Stay Updated
              </Typography>
              <Typography variant="body-small" className="text-gray-600">
                Get the latest caregiving tips and resources delivered to your inbox.
              </Typography>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-accent-purple focus:ring-2 focus:ring-accent-purple/20 transition-all duration-300"
                />
                <Button 
                  type="submit" 
                  variant="primary" 
                  className="w-full"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
              <Typography variant="caption" className="text-gray-500">
                © 2025 MyParentsBenefit. All rights reserved.
              </Typography>
              <div className="flex gap-6">
                <Link href="/terms" className="text-gray-500 hover:text-accent-purple transition-colors">
                  Terms of Service
                </Link>
                <Link href="/privacy" className="text-gray-500 hover:text-accent-purple transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/cookies" className="text-gray-500 hover:text-accent-purple transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  )
}
