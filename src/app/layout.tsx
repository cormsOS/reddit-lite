import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Providers from '@/app/providers';
import Header from '@/components/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Reddit Lite',
  description: 'A lightweight Reddit clone built with Next.js by Cormac O\'Sullivan',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-slate-50 via-white to-blue-50 min-h-screen`}>
        <div className="min-h-screen">
          <Providers>
            <Header />
            <main className="container mx-auto px-4 max-w-7xl">
              <div className="animate-fade-in-up">
                {children}
              </div>
            </main>

            {/* Decorative background elements */}
            <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-reddit-orange/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-reddit-blue/5 rounded-full blur-3xl"></div>
            </div>
          </Providers>
        </div>
      </body>
    </html>
  );
}
