import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html >
      <body className={`custom-scroll ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
