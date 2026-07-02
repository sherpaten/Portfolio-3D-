import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TNS Dev - Full-Stack Developer & Founder',
  description: 'High-performance digital products. Full-stack developer building the future.',
  keywords: 'developer, react, nodejs, portfolio, startup',
  icons: {
    icon: '/logo.png', // Points to your logo in public folder
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'TNS Dev Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TNS Dev - Full-Stack Developer & Founder',
    description: 'High-performance digital products. Full-stack developer building the future.',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#020408', // Matches your dark-900 color
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-dark-900 text-white overflow-x-hidden selection:bg-neon-cyan/30">
        {children}
      </body>
    </html>
  )
}