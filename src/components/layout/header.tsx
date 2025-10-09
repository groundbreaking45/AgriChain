"use client";
import Link from 'next/link';
import {
  CircleUser,
  Home,
  Menu,
  Package2,
  Search,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { SidebarTrigger } from '../ui/sidebar';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/lib/i18n';
import { LanguageSwitcher } from '../language-switcher';

export function AppHeader() {
  const pathname = usePathname();
  const { t } = useLanguage();

  const getBreadcrumb = () => {
    const path = pathname.split('/').pop();
    if (!path) return t('dashboard');
    return t(path as any) || path.charAt(0).toUpperCase() + path.slice(1);
  };
  
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
       <SidebarTrigger className="md:hidden"/>
      <div className="w-full flex-1">
        <h1 className="font-semibold text-lg">{getBreadcrumb()}</h1>
      </div>
      <LanguageSwitcher />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" size="icon" className="rounded-full">
            <CircleUser className="h-5 w-5" />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>{t('logout')}</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
