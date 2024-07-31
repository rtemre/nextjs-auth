import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
// import './globals.css';
import React from 'react';
import { cn } from '@/libs/utils';
import { LAYOUT_MESSAGES } from '@/messages/layout';
import SessionProvider from '@/providers/auth-provider';
import TanstackProvider from '@/providers/tanstack-query-provider';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: LAYOUT_MESSAGES.METADATA_TITLE,
  description: LAYOUT_MESSAGES.METADATA_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SessionProvider>
        <TanstackProvider>
          <body
            className={cn(
              'min-h-screen bg-background font-sans antialiased',
              inter.variable,
            )}
          >
            {children}
          </body>
        </TanstackProvider>
      </SessionProvider>
    </html>
  );
}
