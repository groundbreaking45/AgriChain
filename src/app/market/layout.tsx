import { MainLayout } from '@/components/layout/main-layout';

export default function MarketLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainLayout>{children}</MainLayout>;
}
