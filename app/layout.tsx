import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SSC CGL 2025 - Option Cum Preference Form',
  description: 'Practice portal for SSC CGL 2025 Option Cum Preference Form - Staff Selection Commission, Government of India',
  icons: {
    icon: '/images/ssc-logo.jpg',
  },
}

export const viewport: Viewport = {
  themeColor: '#8B3A3A',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
