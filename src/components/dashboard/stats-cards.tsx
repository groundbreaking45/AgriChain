"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, List, Truck } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

export function StatsCards() {
  const { t } = useLanguage();

  const stats = [
    { titleKey: 'totalSales', value: '$45,231.89', icon: DollarSign },
    { titleKey: 'activeListings', value: '12', icon: List },
    { titleKey: 'onTimeDeliveries', value: '98%', icon: Truck },
  ];

  return (
    <>
      {stats.map((stat, index) => (
        <Card key={index} className="col-span-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{t(stat.titleKey as any)}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
