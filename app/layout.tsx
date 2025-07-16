import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Todo App',
  description: 'Simple full-stack todo app built using Next.js, Prisma, and Planetscale.',
  keywords: ['Kathie Huang', 'Software Engineer', 'Portfolio', 'Duke University', 'Warner Bros. Discovery', 'Ford Motor Company', 'Computer Science Student', 'Todo app', 'full stack development', 'Next.js', 'Prisma', 'Planetscale', 'Projects'],
  twitter: {
    card: 'summary_large_image',
    title: 'Kathie Huang',
    description: 'Simple full-stack todo app built using Next.js, Prisma, and Planetscale.',
    creator: '@KathieHuang',
    images: {
      url: 'icon.jpeg',
      alt: 'Kathie Huang Photo'
    },
  },
  appleWebApp: {
    title: 'Todo App',
    statusBarStyle: 'black-translucent',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
        <body className={inter.className}>
          {children}
          <Analytics />
        </body>
    </html>
  )
}
