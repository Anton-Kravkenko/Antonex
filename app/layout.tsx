import type {Metadata} from 'next'
import {Space_Grotesk} from 'next/font/google'
import './globals.css'
import {ReactNode} from "react";
const SpaceGrotesk = Space_Grotesk({ subsets: ['latin'] })
interface LayoutProps {
  children: ReactNode
}
export const metadata: Metadata = {
  title: 'Antonex',
  description: 'Anton - Web Developer',
  icons: {
    icon: 'public/favicon.ico',
  }
}

export default function RootLayout({
  children,
}: LayoutProps) {
  return (
    <html lang="en">
      <body  suppressHydrationWarning={true} className={`${SpaceGrotesk.className} bg-midnight text-white  h-[100vh]`}>{children}</body>
    </html>
  )
}
