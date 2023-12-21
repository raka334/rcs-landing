import { Inter } from 'next/font/google'

import './globals.css'
import Navbar from '@/components/ui/Navbar'
import FooterSection from '@/components/FooterSection'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'RCS CTF 2024',
    description:
        'A template for frontend developers created By Chirag Bhalotia',
}

interface RootLayoutProps {
    children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body className={`${inter.className} text-text bg-background`}>
                <Navbar />
                {children}
                <FooterSection />
            </body>
        </html>
    )
}
