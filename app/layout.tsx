import './globals.css'
import type { Metadata } from 'next'
import { fontMono, fontSans } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/ThemeProvider'

export const metadata: Metadata = {
  title: 'Current UI',
  description: 'Beautiful UI Components',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='' suppressHydrationWarning={true}>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
          fontMono.variable
        )}
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
