// src/components/layout/LayoutWrapper.tsx
import { ReactNode } from 'react';
import TopHeader from './TopHeader';
import Navigation from './Navigation';
import { Footer } from './Footer';

interface LayoutWrapperProps {
  children: ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  return (
    <div className="flex min-h-screen flex-col bg-white">

      {/* Header */}
      <header className="relative z-50">
        <TopHeader />
        <Navigation />
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer (placeholder, safe to remove later) */}
      <Footer />

    </div>
  );
}
