import Link from 'next/link'
import { Typography } from '@/components/ui/Typography'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/layout/Container'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50">
      <Container>
        <div className="text-center">
          <Typography variant="h1" className="text-[#8427be] mb-4">
            404
          </Typography>
          <Typography variant="h2" className="mb-6">
            Page Not Found
          </Typography>
          <Typography variant="body" className="text-gray-600 mb-8">
            The page you&apos;re looking for doesn&apos;t exist.
          </Typography>
          <Link href="/">
            <Button className="bg-[#8427be] text-white">
              Return Home
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  )
} 