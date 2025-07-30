'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { Typography } from '@/components/ui/Typography'
import { Container } from '@/components/layout/Container'
import { HiChevronDown } from 'react-icons/hi'

interface FAQItem {
  id: string
  question: string
  answer: string
  category: 'general' | 'services' | 'caregiving' | 'billing' | 'technical'
}

const faqData: FAQItem[] = [
  // General Questions
  {
    id: 'what-is-mpb',
    category: 'general',
    question: 'What is MyParentsBenefit?',
    answer: 'MyParentsBenefit is a comprehensive platform designed to help family caregivers manage and coordinate care for their aging parents. We provide access to healthcare services, Medicare guidance, safety solutions, and caregiving tools all in one place.'
  },
  {
    id: 'who-can-use',
    category: 'general',
    question: 'Who can use MyParentsBenefit services?',
    answer: 'Our services are designed for adult children caring for aging parents, grandparents, or other senior family members. Whether you\'re just starting your caregiving journey or have been caring for a loved one for years, our platform can help streamline and improve your caregiving experience.'
  },
  {
    id: 'how-to-get-started',
    category: 'general',
    question: 'How do I get started with MyParentsBenefit?',
    answer: 'Getting started is easy! Simply create an account on our platform, complete your family profile, and browse our available services. Many of our partner services offer free consultations to help you determine what\'s right for your family\'s needs.'
  },

  // Services Questions
  {
    id: 'lyric-healthcare',
    category: 'services',
    question: 'How does Lyric Healthcare work?',
    answer: 'Lyric Healthcare provides 24/7 dedicated care teams for your senior loved ones. Services include urgent care, primary care, mental health, dermatology, virtual MSK, labs, GLP-1 weight loss programs, and medications. You can schedule and even join your parent\'s doctor appointments virtually.'
  },
  {
    id: 'medicare-help',
    category: 'services',
    question: 'Can you help me understand Medicare options?',
    answer: 'Yes! Through Senior Protect, we provide access to independent licensed Medicare agents who can review current plans and explore other options. With over 100,000 pages of Medicare laws and regulations, our experts help you navigate and choose the best coverage for your loved one.'
  },
  {
    id: 'caring-village',
    category: 'services',
    question: 'What is Caring Village and how does it help?',
    answer: 'Caring Village is an easy-to-use dashboard and mobile application designed specifically for family caregivers. It helps you coordinate care, manage appointments, track medications, and communicate with family members, making caregiving easier, safer, and less stressful.'
  },
  {
    id: 'pet-healthcare',
    category: 'services',
    question: 'Do you provide pet healthcare services?',
    answer: 'Yes! Through REFFEOW, we offer comprehensive pet healthcare with one flat rate, no quotes, no deductibles, no age restrictions, real RX benefits, and quick reimbursements. We also donate 20% of our profits to animal rescue organizations.'
  },
  {
    id: 'auto-protection',
    category: 'services',
    question: 'What auto protection services do you offer?',
    answer: 'Through Chaiz, we provide access to an independent marketplace offering 12 different extended warranty companies with average savings of $2,000. The service has no middlemen, no sales commissions, and no pressure sales calls.'
  },
  {
    id: 'driving-safety',
    category: 'services',
    question: 'How does Safe4R help with driving safety?',
    answer: 'Safe4R is a driving safety app that keeps your parents connected while driving. It uses social community power to provide immediate response to any situation. With over 1 million people protected, it offers higher security standards for just $12.99 monthly.'
  },

  // Caregiving Questions
  {
    id: 'where-to-start-caregiving',
    category: 'caregiving',
    question: 'I\'m new to caregiving. Where should I start?',
    answer: 'Start by assessing your parent\'s current needs in areas like healthcare, safety, daily activities, and financial management. Use our Caring Village platform to organize information and create a care plan. Consider scheduling a consultation with our healthcare partners to establish baseline health information.'
  },
  {
    id: 'managing-medications',
    category: 'caregiving',
    question: 'How can I help manage my parent\'s medications?',
    answer: 'Medication management is crucial for senior safety. Use the Caring Village app to set up medication reminders, track prescriptions, and coordinate with family members. Lyric Healthcare can also provide medication management services and prescription delivery.'
  },
  {
    id: 'doctor-appointments',
    category: 'caregiving',
    question: 'Can I attend my parent\'s doctor appointments?',
    answer: 'Absolutely! Through Lyric Healthcare, you can schedule and join your parent\'s doctor appointments, whether in-person or virtually. This helps ensure you stay informed about their health status and treatment plans.'
  },
  {
    id: 'safety-concerns',
    category: 'caregiving',
    question: 'What if I\'m worried about my parent\'s safety?',
    answer: 'Safety concerns are common in caregiving. Use Safe4R for driving safety monitoring, consider Caring Village for daily check-ins and emergency contacts, and explore Lyric Healthcare for urgent care access. For immediate safety concerns, don\'t hesitate to contact emergency services.'
  },
  {
    id: 'long-distance-caregiving',
    category: 'caregiving',
    question: 'How can I provide care if I live far from my parents?',
    answer: 'Long-distance caregiving is challenging but manageable. Use Caring Village to coordinate with local family members or friends, schedule virtual doctor visits through Lyric Healthcare, set up Safety4R for driving monitoring, and establish regular check-in schedules.'
  },

  // Billing Questions
  {
    id: 'service-costs',
    category: 'billing',
    question: 'How much do your services cost?',
    answer: 'Costs vary by service. Many of our partners offer free consultations and competitive pricing. Safe4R is $12.99/month, REFFEOW offers flat-rate pet healthcare, and Chaiz provides average savings of $2,000 on auto protection. Contact individual service providers for detailed pricing.'
  },
  {
    id: 'insurance-coverage',
    category: 'billing',
    question: 'Will insurance cover these services?',
    answer: 'Coverage varies by insurance plan and service. Lyric Healthcare works with many insurance plans and Medicare. Our Medicare specialists through Senior Protect can help you understand what your current plan covers and explore options for better coverage.'
  },
  {
    id: 'payment-methods',
    category: 'billing',
    question: 'What payment methods do you accept?',
    answer: 'Payment methods vary by service provider. Most accept major credit cards, and some offer payment plans. Contact specific service providers for their accepted payment methods and any available financial assistance programs.'
  },

  // Technical Questions
  {
    id: 'app-requirements',
    category: 'technical',
    question: 'What devices can I use to access your services?',
    answer: 'Our services are accessible through web browsers on computers, tablets, and smartphones. The Caring Village and Safe4R apps are available for both iOS and Android devices. Most services are optimized for mobile use to help you manage care on the go.'
  },
  {
    id: 'data-privacy',
    category: 'technical',
    question: 'How do you protect my family\'s private information?',
    answer: 'We take privacy seriously. All our partner services comply with HIPAA regulations where applicable and use industry-standard encryption to protect your data. We never sell personal information, and you control what information you share with each service provider.'
  },
  {
    id: 'technical-support',
    category: 'technical',
    question: 'What if I need help using the platform?',
    answer: 'We provide comprehensive support through multiple channels. Each service offers customer support, and many provide onboarding assistance. You can also contact our general support team for help navigating between services or understanding how different tools work together.'
  }
]

const categories = [
  { id: 'all', label: 'All Questions', color: 'bg-purple-100 text-purple-800' },
  { id: 'general', label: 'General', color: 'bg-blue-100 text-blue-800' },
  { id: 'services', label: 'Services', color: 'bg-green-100 text-green-800' },
  { id: 'caregiving', label: 'Caregiving', color: 'bg-pink-100 text-pink-800' },
  { id: 'billing', label: 'Billing', color: 'bg-orange-100 text-orange-800' },
  { id: 'technical', label: 'Technical', color: 'bg-cyan-100 text-cyan-800' }
]

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())
  const [searchQuery, setSearchQuery] = useState('')

  const filteredFAQs = faqData.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory
    const matchesSearch = searchQuery === '' || 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id)
    } else {
      newOpenItems.add(id)
    }
    setOpenItems(newOpenItems)
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-green-200 bg-gradient-to-r from-white to-blue-50">
        <Container>
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-2">
              <Link href="/">
                <Image
                  src="/images/MyParentsBenefits.png"
                  alt="MyParentsBenefit Logo"
                  width={200}
                  height={50}
                  priority
                  className="h-auto w-auto max-h-12 object-contain cursor-pointer"
                />
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Image
                src="/images/payactiv.png"
                alt="Payactiv Logo"
                width={150}
                height={40}
                className="h-auto w-auto max-h-10 object-contain"
              />
            </div>
          </div>
        </Container>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-14 md:py-16 bg-gradient-to-br from-purple-50 via-blue-50 to-green-50">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <Typography variant="h1" className="text-[#8427be] mb-6">
              Frequently Asked Questions
            </Typography>
            <Typography variant="body" className="text-xl text-slate-700 mb-8 leading-relaxed">
              Find answers to common questions about MyParentsBenefit services, caregiving support, and managing care for your loved ones.
            </Typography>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto mb-8">
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8427be] focus:border-transparent"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Category Filter */}
      <section className="py-6 sm:py-8 bg-white border-b border-gray-200">
        <Container>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? category.color + ' shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ Content */}
      <section className="py-12 sm:py-14 md:py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            {filteredFAQs.length === 0 ? (
              <Card className="p-8 text-center">
                <Typography variant="h3" className="text-gray-600 mb-4">
                  No questions found
                </Typography>
                <Typography variant="body" className="text-gray-500">
                  Try adjusting your search or selecting a different category.
                </Typography>
              </Card>
            ) : (
              <div className="space-y-4">
                {filteredFAQs.map((item) => (
                  <Card key={item.id} className="overflow-hidden transition-all duration-200 hover:shadow-lg">
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="w-full text-left p-6 hover:bg-gray-50 transition-colors duration-200"
                    >
                      <div className="flex items-center justify-between">
                        <Typography variant="h4" className="text-slate-800 pr-4">
                          {item.question}
                        </Typography>
                        <div className="flex-shrink-0">
                          <HiChevronDown
                            className={`w-6 h-6 text-gray-500 transition-transform duration-200 ${
                              openItems.has(item.id) ? 'rotate-180' : ''
                            }`}
                          />
                        </div>
                      </div>
                    </button>
                    
                    {openItems.has(item.id) && (
                      <div className="px-6 pb-6">
                        <div className="border-t border-gray-200 pt-4">
                          <Typography variant="body" className="text-slate-700 leading-relaxed">
                            {item.answer}
                          </Typography>
                        </div>
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#8427be] via-[#c83fdf] to-[#10b981]">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <Typography variant="h2" className="mb-4 text-white">
              Still Have Questions?
            </Typography>
            <Typography variant="body" className="text-xl mb-8 text-white/90">
              Our support team is here to help you navigate your caregiving journey.
            </Typography>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#8427be] font-bold shadow-xl hover:bg-gray-100 border-2 border-white">
                Contact Support
              </Button>
              <Link href="/">
                <Button size="lg" className="bg-[#10b981] text-white font-bold shadow-xl hover:bg-[#10b981]/90 border-2 border-[#10b981]">
                  Explore Services
                </Button>
              </Link>
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
                Contact
              </button>
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