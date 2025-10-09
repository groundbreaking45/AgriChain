"use client";

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useLanguage } from '@/lib/i18n';
import Link from 'next/link';

export function CreditScoreCard() {
  const { t } = useLanguage();
  const score = 720; // Mock score

  return (
    <Card className="lg:col-span-3">
      <CardHeader>
        <CardTitle>{t('yourCreditScore')}</CardTitle>
        <CardDescription>
          {t('creditScoreDescription')}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline gap-2">
            <span className="text-5xl font-bold tracking-tighter">{score}</span>
            <span className="text-sm text-muted-foreground">/ 900</span>
        </div>
        <Progress value={(score / 900) * 100} className="mt-4" />
      </CardContent>
      <CardFooter>
        <Link href="/loans" className="w-full">
            <Button className="w-full" variant="outline">
                {t('viewDetails')}
            </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
