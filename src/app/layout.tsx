import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from '@/lib/Providers'
import logo from '../assest/favicon.png'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lotus',
  description: 'Professional Mental Services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
      <html lang="en">
      <head>
      <link rel='icon' href='/favicon.png'/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
    </Providers>
  )
}
