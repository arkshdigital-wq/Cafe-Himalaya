import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const bwFusiona = localFont({
  src: '../public/fonts/bw-fusiona-medium.otf',
  weight: '500',
  style: 'normal',
  variable: '--font-bw-fusiona',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Café Himalaya — Slow Chai in JVM, Dubai',
  description:
    'Café Himalaya is a neighbourhood chai house in Jumeirah Village, Dubai. Karak brewed low and slow, buns, samosas and long conversations.',
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#f3ece0',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${bwFusiona.variable}`}>
      <body className="grain antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
