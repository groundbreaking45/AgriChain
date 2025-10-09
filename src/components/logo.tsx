"use client";

import { Leaf } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n';

export function Logo() {
  const { t } = useLanguage();
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Leaf className="h-6 w-6 text-primary" />
      <span className="font-bold font-headline text-lg text-foreground">{t('appName')}</span>
    </Link>
  );
}
