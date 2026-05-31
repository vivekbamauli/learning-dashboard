import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NexLearn — Student Dashboard',
  description: 'Next-generation learning platform with real-time progress tracking',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-bg-base antialiased">
        {children}
      </body>
    </html>
  )
}
