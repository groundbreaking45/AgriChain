'use client';
import { CreditScoreCard } from '@/components/dashboard/credit-score-card';
import { StatsCards } from '@/components/dashboard/stats-cards';
import { WelcomeHeader } from '@/components/dashboard/welcome-header';

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <WelcomeHeader />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCards />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <CreditScoreCard />
      </div>
    </div>
  );
}
