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
import { 
  HiArrowRight, 
  HiCheckCircle, 
  HiCheck, 
  HiQuestionMarkCircle, 
  HiMail, 
  HiStar, 
  HiUser
} from 'react-icons/hi'
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'


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
      <section className="relative min-h-[500px] sm:min-h-[650px] md:min-h-[750px] lg:min-h-[850px] flex items-center">
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
          <div className="max-w-3xl py-12 sm:py-16 md:py-24 lg:py-32">
            <div className="text-left space-y-8">
              {/* Overline with premium styling */}
              <div className="space-y-6">

                
                {/* Main heading with gradient effect */}
                <Typography 
                  variant="h1" 
                  className="animate-slide-up overflow-visible text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
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
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <Button 
                  size="lg" 
                  variant="primary"
                  className="group shadow-xl hover:shadow-2xl w-full sm:w-auto"
                  asChild
                >
                  <Link href="#services">
                    <span className="flex items-center justify-center">
                      Explore Services
                      <HiArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Button>

              </div>
              

            </div>
          </div>
        </Container>
      </section>

      {/* Premium Full Width Bar Section */}
      <section className="relative py-10 sm:py-14 md:py-18 lg:py-20 overflow-hidden" id="services">
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
      <section className="py-20 sm:py-24 md:py-32 lg:py-40 relative overflow-hidden bg-gradient-to-br from-purple-50 to-indigo-50">
        
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
                      src="/images/telehealth.jpg"
                      alt="Telehealth consultation for seniors - healthcare services"
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Premium overlay effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </CardContent>
                </Card>
                
                {/* Floating badge */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 animate-float-premium hidden lg:block">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <HiCheckCircle className="w-6 h-6 text-white" />
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
            <div className="order-1 lg:order-2 space-y-8 text-left">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <Typography variant="label" className="text-blue-700">
                    VIRTUAL CARE SERVICES
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
                    <HiCheck className="w-5 h-5 text-accent-green flex-shrink-0" />
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
                  className="group w-full sm:w-auto"
                  asChild
                >
                  <a href="https://getlyric.com/" target="_blank" rel="noopener noreferrer">
                    <span className="flex items-center">
                      LEARN MORE
                      <HiArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Section Divider */}
      <div className="h-1 bg-gradient-to-r from-accent-purple via-accent-magenta to-accent-green"></div>

      {/* Enhanced Senior Protect Medicare Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Enhanced Senior Protect Image */}
            <div className="relative order-2 lg:order-1">
              <Card variant="glass" className="overflow-hidden group">
                <Image
                  src="/images/seniorcare.jpg"
                  alt="Senior care and Medicare benefits consultation"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </Card>
            </div>
            
            {/* Right - Enhanced Content */}
            <div className="order-1 lg:order-2 space-y-6 text-left">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <Typography variant="label" className="text-emerald-700">
                    MEDICARE BENEFITS
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
                  className="group w-full sm:w-auto"
                  asChild
                >
                  <a href="https://myseniorprotect.com/" target="_blank" rel="noopener noreferrer">
                    <span className="flex items-center">
                      LEARN MORE
                      <HiArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Section Divider */}
      <div className="h-1 bg-gradient-to-r from-accent-purple via-accent-magenta to-accent-green"></div>

      {/* Enhanced Caring Village Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden bg-gradient-to-br from-rose-50 to-pink-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Enhanced Caring Village Image */}
            <div className="relative order-2 lg:order-1">
              <Card variant="glass" className="overflow-hidden group">
                <Image
                  src="/images/carevillage.jpg"
                  alt="Care coordination and family caregiving support"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </Card>
            </div>
            
            {/* Right - Enhanced Content */}
            <div className="order-1 lg:order-2 space-y-6 text-left">
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
                  className="group w-full sm:w-auto"
                  asChild
                >
                  <a href="https://caringvillage.com/" target="_blank" rel="noopener noreferrer">
                    <span className="flex items-center">
                      LEARN MORE
                      <HiArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Section Divider */}
      <div className="h-1 bg-gradient-to-r from-accent-green via-accent-magenta to-accent-purple"></div>

      {/* Enhanced REFFEOW Pet Healthcare Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Enhanced Ruffeow Image */}
            <div className="relative order-2 lg:order-1">
              <Card variant="glass" className="overflow-hidden group">
                <Image
                  src="/images/vet.jpg"
                  alt="Veterinary care and pet healthcare services"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </Card>
            </div>
            
            {/* Right - Enhanced Content */}
            <div className="order-1 lg:order-2 space-y-6 text-left">
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
                  className="group w-full sm:w-auto"
                  asChild
                >
                  <a href="https://ruffeow.com/" target="_blank" rel="noopener noreferrer">
                    <span className="flex items-center">
                      LEARN MORE
                      <HiArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Section Divider */}
      <div className="h-1 bg-gradient-to-r from-accent-purple via-accent-magenta to-accent-green"></div>

      {/* Enhanced Chaiz Auto Protection Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Enhanced Chaiz Image */}
            <div className="relative order-2 lg:order-1">
              <Card variant="glass" className="overflow-hidden group">
                <Image
                  src="/images/auto.jpg"
                  alt="Auto protection and vehicle service coverage"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </Card>
            </div>
            
            {/* Right - Enhanced Content */}
            <div className="order-1 lg:order-2 space-y-6 text-left">
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
                  className="group w-full sm:w-auto"
                  asChild
                >
                  <a href="https://www.chaiz.com/" target="_blank" rel="noopener noreferrer">
                    <span className="flex items-center">
                      LEARN MORE
                      <HiArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Section Divider */}
      <div className="h-1 bg-gradient-to-r from-accent-green via-accent-magenta to-accent-purple"></div>

      {/* Enhanced Safe4R Driving Safety Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Enhanced Safe4R Image */}
            <div className="relative order-2 lg:order-1">
              <Card variant="glass" className="overflow-hidden group">
                <Image
                  src="/images/safe.jpg"
                  alt="Driving safety technology and family protection"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </Card>
            </div>
            
            {/* Right - Enhanced Content */}
            <div className="order-1 lg:order-2 space-y-6 text-left">
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
                  className="group w-full sm:w-auto"
                  asChild
                >
                  <a href="https://www.safe4r.com/" target="_blank" rel="noopener noreferrer">
                    <span className="flex items-center">
                      LEARN MORE
                      <HiArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
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
        <div className="absolute inset-0 bg-gradient-to-br from-accent-purple via-accent-magenta to-accent-purple">
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
                className="group w-full sm:min-w-[200px] sm:w-auto bg-white text-accent-purple hover:bg-gray-50"
                asChild
              >
                <Link href="/faq">
                  <span className="flex items-center">
                    Browse FAQs
                    <HiQuestionMarkCircle className="ml-2 w-5 h-5 transition-transform group-hover:scale-110" />
                  </span>
                </Link>
              </Button>
              <Button 
                size="xl" 
                variant="primary"
                className="group w-full sm:min-w-[200px] sm:w-auto bg-gradient-to-r from-[#059669] to-[#10b981] hover:from-[#048655] hover:to-[#059669]"
                asChild
              >
                <Link href="/contact">
                  <span className="flex items-center">
                    Contact Us
                    <HiMail className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Button>
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
                <button
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-accent-purple/10 hover:text-accent-purple transition-all duration-300 flex items-center justify-center"
                  aria-label="Follow us on Facebook"
                >
                  <FaFacebook className="w-5 h-5" />
                </button>
                <button
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-accent-purple/10 hover:text-accent-purple transition-all duration-300 flex items-center justify-center"
                  aria-label="Follow us on Twitter"
                >
                  <FaTwitter className="w-5 h-5" />
                </button>
                <button
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-accent-purple/10 hover:text-accent-purple transition-all duration-300 flex items-center justify-center"
                  aria-label="Follow us on LinkedIn"
                >
                  <FaLinkedin className="w-5 h-5" />
                </button>
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
