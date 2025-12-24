// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import LayoutWrapper from '../components/layout/LayoutWrapper'; 
import { Toaster } from "react-hot-toast";
import { QueryProvider } from '../providers/QueryProviders';

// Load Inter font with a CSS variable
const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Evasue Ethiopia - Christian Student Fellowship',
  description: 'Evasue in Ethiopia Christian Student Fellowship - Following Christ together on Ethiopian campuses',
  keywords: 'Christian student fellowship, Ethiopia, university ministry, campus ministry, Evasue',
  authors: [{ name: 'Evasue Ethiopia' }],
  creator: 'Evasue Ethiopia',
  publisher: 'Evasue Ethiopia',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased text-gray-800">
        <QueryProvider>
          <LayoutWrapper>
            {children}
            <Toaster position="top-right" />
          </LayoutWrapper>
        </QueryProvider>
      </body>
    </html>
  );
}
