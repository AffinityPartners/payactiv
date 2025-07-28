'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Typography } from '@/components/ui/Typography'
import { cn } from '@/lib/utils'

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant', content: string }>>([])
  const [input, setInput] = useState('')

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    setMessages(prev => [...prev, { role: 'user', content: input }])
    
    // Simple response logic
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Thank you for your message! Our team will get back to you soon. For immediate assistance, please visit our Contact page.' 
      }])
    }, 1000)
    
    setInput('')
  }

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-30 transition-all duration-300">
        <Button
          onClick={toggleChat}
          size="icon"
          variant="primary"
          className="h-14 w-14 rounded-full shadow-2xl hover:scale-110 transition-transform"
          aria-label="Open chat"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          )}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-[calc(100vw-3rem)] md:w-96 max-w-md transition-all duration-300">
          <Card variant="glass" className="shadow-2xl">
            {/* Header */}
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-white shadow-lg">
                  <Image
                    src="/images/Hana.png"
                    alt="Hana - AI Assistant"
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div className="flex-1">
                  <Typography variant="h5" className="text-gray-900">
                    Chat with Hana
                  </Typography>
                  <Typography variant="caption" className="text-gray-500">
                    Your AI caregiving assistant
                  </Typography>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-4">
              {messages.length === 0 ? (
                <div className="text-center py-8">
                  <div className="relative w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden ring-2 ring-accent-green/20">
                    <Image
                      src="/images/Hana.png"
                      alt="Hana - AI Assistant"
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <Typography variant="body-small" className="text-gray-500 mb-2">
                    Hi! I&apos;m Hana, your AI caregiving assistant.
                  </Typography>
                  <Typography variant="body-small" className="text-gray-400">
                    How can I help you today?
                  </Typography>
                </div>
              ) : (
                messages.map((message, index) => (
                  <div
                    key={index}
                    className={cn(
                      "flex items-end space-x-2",
                      message.role === 'user' ? 'justify-end' : 'justify-start'
                    )}
                  >
                    {message.role === 'assistant' && (
                      <div className="relative w-8 h-8 rounded-full overflow-hidden ring-1 ring-gray-200 flex-shrink-0">
                        <Image
                          src="/images/Hana.png"
                          alt="Hana"
                          fill
                          className="object-cover"
                          sizes="32px"
                        />
                      </div>
                    )}
                    <div
                      className={cn(
                        "max-w-[80%] rounded-lg px-4 py-2",
                        message.role === 'user'
                          ? 'bg-accent-green text-white'
                          : 'bg-gray-100 text-gray-700'
                      )}
                    >
                      <Typography variant="body-small">
                        {message.content}
                      </Typography>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Input */}
            <form onSubmit={sendMessage} className="p-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask Hana anything about caregiving..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-green"
                />
                <Button type="submit" size="sm" variant="primary">
                  Send
                </Button>
              </div>
            </form>
          </Card>
        </div>
      )}
    </>
  )
} 