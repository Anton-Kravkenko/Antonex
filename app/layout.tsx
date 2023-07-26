import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'
const SpaceGrotesk = Space_Grotesk({ subsets: ['latin'] })
interface LayoutProps {
	children: ReactNode
}
export const metadata: Metadata = {
	title: 'Anton K. - Mobile Developer',
	description: 'Anton - Web Developer',
	icons: {
		icon: 'favicon.ico',
		apple: 'favicon.ico'
	}
}

export default function RootLayout({ children }: LayoutProps) {
	return (
		<html lang='en'>
			<body
				suppressHydrationWarning={true}
				className={`${SpaceGrotesk.className} h-[100vh] bg-midnight  text-white`}>
				{children}
			</body>
		</html>
	)
}
