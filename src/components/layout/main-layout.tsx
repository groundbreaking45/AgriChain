"use client";

import React, { ReactNode, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { AppSidebar } from './app-sidebar';
import { AppHeader } from './header';

export function MainLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Read sidebar state from cookie on client
  const getInitialSidebarState = () => {
    if (typeof window === 'undefined') return true;
    const cookieValue = document.cookie
      .split('; ')
      .find((row) => row.startsWith('sidebar_state='))
      ?.split('=')[1];
    return cookieValue ? cookieValue === 'true' : true;
  };

  if (!isClient) {
    return null; // or a loading skeleton
  }

  return (
    <SidebarProvider defaultOpen={getInitialSidebarState()}>
      <AppSidebar pathname={pathname} />
      <SidebarInset>
        <AppHeader />
        <main className="flex-1 p-4 md:p-8 pt-6">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
