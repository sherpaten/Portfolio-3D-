import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TNS Dev - Full-Stack Developer & Founder',
  description: 'High-performance digital products. Full-stack developer building the future.',
  keywords: 'developer, react, nodejs, portfolio, startup',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'TNS Dev Portfolio',
  },
  // Add this part:
  twitter: {
    card: 'summary_large_image',
    title: 'TNS Dev - Full-Stack Developer & Founder',
    description: 'High-performance digital products. Full-stack developer building the future.',
  },
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-dark-900 text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
