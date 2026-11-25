import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Senai - Blog Next.js',
  description: 'Blog desenvolvido com Next.js App Router',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <nav className="nav">
          <a href="/">Início</a>
          <a href="/sobre">Sobre</a>
        </nav>
        {children}
        <footer className="footer">
          © 2026 Senai Blog Next.js
        </footer>
      </body>
    </html>
  )
}
