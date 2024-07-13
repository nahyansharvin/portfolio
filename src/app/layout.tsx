import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

const rubik = Rubik({ subsets: ['latin'], variable: '--font-rubik' })
const clashDisplay = localFont({ src: '/fonts/ClashDisplay.woff2', variable: '--font-clash-display'})

export const metadata: Metadata = {
  title: "Nahyan Sharvin",
  description: "Nahyan Sharvin's personal portfolio",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.variable} ${clashDisplay.variable} font-sans min-h-dvh`}>{children}</body>
    </html>
  );
}
