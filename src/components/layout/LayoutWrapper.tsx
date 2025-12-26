// src/components/layout/LayoutWrapper.tsx
import { ReactNode } from 'react';
import TopHeader from './TopHeader';
import Navigation from './Navigation';

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
      <footer className="border-t bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-6 text-sm text-gray-600">
          © {new Date().getFullYear()} EvaSUE Ethiopia. All rights reserved.
        </div>
      </footer>

    </div>
  );
}
