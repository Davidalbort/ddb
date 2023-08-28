import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import '../styles/base/reset.scss'
import '../styles/base/base.scss'

const poppins = Poppins({ weight: ['400', '600', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DDB',
  description: 'Challenge of DDB for get a job as Frontend developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
