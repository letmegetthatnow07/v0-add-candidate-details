import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SSC CGL 2024 - Option Cum Preference Form (Practice)',
  description: 'Practice portal for SSC CGL 2024 Option Cum Preference Form - Staff Selection Commission, Government of India',
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
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
