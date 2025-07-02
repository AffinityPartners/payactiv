import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { Typography } from '@/components/ui/Typography'
import { Container } from '@/components/layout/Container'
import { Grid } from '@/components/layout/Grid'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-green-200 bg-gradient-to-r from-white to-blue-50">
        <Container>
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/MyParentsBenefits.png"
                alt="MyParentsBenefit Logo"
                width={200}
                height={50}
                priority
                className="h-auto w-auto max-h-12 object-contain"
              />
            </div>
            <div className="flex items-center space-x-2">
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
      <section className="relative h-[500px] md:h-[600px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/mom-and-daughter.png"
            alt="Mother and daughter spending quality time together - representing family support and connection"
            fill
            priority
            className="object-cover object-right-center"
            quality={100}
          />
          {/* White gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/40 to-transparent"></div>
        </div>
        
        {/* Hero Content */}
        <Container className="relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center h-full py-20">
            {/* Left - Text Content (50%) */}
            <div className="text-left">
              <div className="mb-6 max-w-none">
                <Typography variant="h1" className="drop-shadow-lg text-[#8427be] text-4xl md:text-5xl lg:text-6xl leading-tight mb-2 pt-2">
                  Helping You Help
                </Typography>
                <Typography variant="h1" className="drop-shadow-lg text-[#8427be] text-4xl md:text-5xl lg:text-6xl leading-tight mb-2 pt-2">
                  Your Parents
                </Typography>
                <Typography variant="h1" className="drop-shadow-lg text-[#8427be] text-4xl md:text-5xl lg:text-6xl leading-tight mb-2 pt-2">
                  with Caregiving
                </Typography>
              </div>
            </div>
            
            {/* Right - Empty space for image visibility (50%) */}
            <div></div>
          </div>
        </Container>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Full Width Bar Section */}
      <section className="py-8" style={{ backgroundColor: '#c83fdf' }}>
        <Container>
          <div className="text-center">
            <Typography variant="body" className="text-3xl md:text-4xl text-white font-medium leading-relaxed">
              Helping Mom or Dad Begins with Managing their Care Including Doctor Visits, Prescription Reminders, and Safety Alerts Supporting Everyday Life.
            </Typography>
          </div>
        </Container>
      </section>

      {/* Lyric Healthcare Services Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Lyric Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl w-4/5 mx-auto">
                <Image
                  src="/images/lyric-image.png"
                  alt="Lyric healthcare services for seniors"
                  width={480}
                  height={320}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            {/* Right - Content */}
            <div className="order-1 lg:order-2">
              {/* Lyric Logo */}
              <div className="mb-6">
                <Image
                  src="/images/Lyric-Logo.png"
                  alt="Lyric Logo"
                  width={150}
                  height={60}
                  className="h-auto w-auto max-h-16 object-contain"
                />
              </div>
              
              {/* Content */}
              <Typography variant="h2" className="mb-6">
                You can Schedule and Join Your Parent&apos;s Doctor Appointments.
              </Typography>
              
              <Typography variant="body" className="text-lg text-slate-700 mb-8 leading-relaxed">
                Have a 24/7 dedicated care team for your parents, grandparents and other loved ones. 
                Our national network of providers is here for senior loved ones. Healthcare services 
                include Urgent Care, Primary Care, Mental Health, Dermatology, Virtual MSK, Labs 
                GLP-1 Weight Loss Program and Medications.
              </Typography>
              
              <Button size="lg" className="bg-[#9cd58c] text-white font-bold shadow-lg hover:bg-[#9cd58c]/90 border-2 border-[#9cd58c]" asChild>
                <a href="https://getlyric.com/" target="_blank" rel="noopener noreferrer">
                  LEARN MORE
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Senior Protect Medicare Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Senior Protect Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl w-4/5 mx-auto">
                <Image
                  src="/images/senior-protect-image.png"
                  alt="Senior Protect Medicare and health benefits services"
                  width={480}
                  height={320}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            {/* Right - Content */}
            <div className="order-1 lg:order-2">
              {/* Senior Protect Logo */}
              <div className="mb-6">
                <Image
                  src="/images/senior-protect-logo.png"
                  alt="Senior Protect Logo"
                  width={150}
                  height={60}
                  className="h-auto w-auto max-h-16 object-contain"
                />
              </div>
              
              {/* Content */}
              <Typography variant="h2" className="mb-6">
                Medicare and Other Senior Health Benefits Can Impact Family Caregiving.
              </Typography>
              
              <Typography variant="body" className="text-lg text-slate-700 mb-8 leading-relaxed">
                According to the Kaiser Foundation there&apos;s over 100,000 pages of Medicare laws and regulations 
                for Medicare Part A, B, C and D – We help you navigate and choose the best coverage. Now, you can 
                speak to an independent licensed Medicare agent to review your current plan and other options.
              </Typography>
              
              <Button size="lg" className="bg-[#9cd58c] text-white font-bold shadow-lg hover:bg-[#9cd58c]/90 border-2 border-[#9cd58c]" asChild>
                <a href="https://myseniorprotect.com/" target="_blank" rel="noopener noreferrer">
                  LEARN MORE
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Caring Village Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-rose-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Caring Village Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl w-4/5 mx-auto">
                <Image
                  src="/images/caring-village-image.png"
                  alt="Caring Village family caregiving dashboard and mobile app"
                  width={480}
                  height={320}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            {/* Right - Content */}
            <div className="order-1 lg:order-2">
              {/* Caring Village Logo */}
              <div className="mb-6">
                <Image
                  src="/images/Caring-Village-Logo.png"
                  alt="Caring Village Logo"
                  width={150}
                  height={60}
                  className="h-auto w-auto max-h-16 object-contain"
                />
              </div>
              
              {/* Content */}
              <Typography variant="h2" className="mb-6">
                Save Time. Eliminate Frustration. And Keep Care Coordinated.
              </Typography>
              
              <Typography variant="body" className="text-lg text-slate-700 mb-8 leading-relaxed">
                Caring Village is the only easy-to-use dashboard and senior support mobile application 
                designed specifically for family caregivers, like you, making it easier, safer, and less 
                stressful to care for an aging loved one.
              </Typography>
              
              <Button size="lg" className="bg-[#9cd58c] text-white font-bold shadow-lg hover:bg-[#9cd58c]/90 border-2 border-[#9cd58c]" asChild>
                <a href="https://caringvillage.com/" target="_blank" rel="noopener noreferrer">
                  LEARN MORE
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* REFFEOW Pet Healthcare Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Ruffeow Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl w-4/5 mx-auto">
                <Image
                  src="/images/Ruffeow-image.png"
                  alt="REFFEOW pet healthcare services for family pets"
                  width={480}
                  height={320}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            {/* Right - Content */}
            <div className="order-1 lg:order-2">
              {/* REFFEOW Logo */}
              <div className="mb-6">
                <Image
                  src="/images/REFFEOW-logo.png"
                  alt="REFFEOW Logo"
                  width={150}
                  height={60}
                  className="h-auto w-auto max-h-16 object-contain"
                />
              </div>
              
              {/* Content */}
              <Typography variant="h2" className="mb-6">
                Healthcare for All Family (Furry) Loved Ones.
              </Typography>
              
              <Typography variant="body" className="text-lg text-slate-700 mb-8 leading-relaxed">
                You and your loved ones can enjoy access to pet healthcare with one flat rate, no quotes, 
                no deductibles, no age restrictions, real RX benefits, quick reimbursements, competitive 
                pricing and compassionate giving. We donate 20% of our profits to animal rescue organizations.
              </Typography>
              
              <Button size="lg" className="bg-[#9cd58c] text-white font-bold shadow-lg hover:bg-[#9cd58c]/90 border-2 border-[#9cd58c]" asChild>
                <a href="https://ruffeow.com/" target="_blank" rel="noopener noreferrer">
                  LEARN MORE
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Chaiz Auto Protection Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Chaiz Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl w-4/5 mx-auto">
                <Image
                  src="/images/chaiz-image.png"
                  alt="Chaiz auto repair service protection for families"
                  width={480}
                  height={320}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            {/* Right - Content */}
            <div className="order-1 lg:order-2">
              {/* Chaiz Logo */}
              <div className="mb-6">
                <Image
                  src="/images/Chaiz-Logo.png"
                  alt="Chaiz Logo"
                  width={150}
                  height={60}
                  className="h-auto w-auto max-h-16 object-contain"
                />
              </div>
              
              {/* Content */}
              <Typography variant="h2" className="mb-6">
                Keep Parents Safe with Auto Repair Service Protection Shop. Save. Protect.
              </Typography>
              
              <Typography variant="body" className="text-lg text-slate-700 mb-8 leading-relaxed">
                Our independent marketplace offers 12 different &quot;extended warranty&quot; companies providing an 
                average savings of $2000. Stay safe, stay protected and get peace of mind. No middlemen, 
                no headache, no sales commissions, no salesperson, and no phone calls.
              </Typography>
              
              <Button size="lg" className="bg-[#9cd58c] text-white font-bold shadow-lg hover:bg-[#9cd58c]/90 border-2 border-[#9cd58c]" asChild>
                <a href="https://www.chaiz.com/" target="_blank" rel="noopener noreferrer">
                  LEARN MORE
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Safe4R Driving Safety Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Safe4R Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl w-4/5 mx-auto">
                <Image
                  src="/images/Safe4R-Image.png"
                  alt="Safe4R driving safety app connecting families"
                  width={480}
                  height={320}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            {/* Right - Content */}
            <div className="order-1 lg:order-2">
              {/* Safe4R Logo */}
              <div className="mb-6">
                <Image
                  src="/images/Safe4R-Logo.png"
                  alt="Safe4R Logo"
                  width={150}
                  height={60}
                  className="h-auto w-auto max-h-16 object-contain"
                />
              </div>
              
              {/* Content */}
              <Typography variant="h2" className="mb-6">
                Keep Mom and Dad Connected When Driving.
              </Typography>
              
              <div className="mb-6">
                <Typography variant="h4" className="text-accent-magenta font-semibold">
                  Over 1 Million+ People Protected
                </Typography>
              </div>
              
              <Typography variant="body" className="text-lg text-slate-700 mb-8 leading-relaxed">
                Safe4R is the world&apos;s first Application where the power of social community exponentially 
                increases the immediate and direct response to any situation we or our loved ones may be 
                confronted with. Reliable and safe, higher security standards and only $12.99 Monthly.
              </Typography>
              
              <Button size="lg" className="bg-[#9cd58c] text-white font-bold shadow-lg hover:bg-[#9cd58c]/90 border-2 border-[#9cd58c]" asChild>
                <a href="https://www.safe4r.com/" target="_blank" rel="noopener noreferrer">
                  LEARN MORE
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent-purple via-accent-magenta to-accent-green">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <Typography variant="h2" className="mb-4 text-white">
              Ready to Get Started?
            </Typography>
            <Typography variant="body" className="text-xl mb-8 text-white/90">
              Join thousands of families who trust MyParentsBenefit for their parenting journey.
            </Typography>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-accent-purple font-bold shadow-xl hover:bg-gray-100 border-2 border-white">
                Create Account
              </Button>
              <Button size="lg" className="bg-accent-green text-white font-bold shadow-xl hover:bg-accent-green/90 border-2 border-accent-green">
                Contact Us
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-purple-200 bg-gradient-to-br from-slate-50 to-gray-50">
        <Container>
          <div className="text-center">
            <Typography variant="caption">
              © 2025 MyParentsBenefit. All rights reserved.
            </Typography>
          </div>
        </Container>
      </footer>
    </div>
  )
}
