"use client";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, BrainCircuit, Coins, Smartphone } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

const features = [
  {
    icon: ShieldCheck,
    titleKey: 'securePayments',
    id: 'feature-escrow',
  },
  {
    icon: BrainCircuit,
    titleKey: 'creditScore',
    id: 'feature-credit',
  },
  {
    icon: Coins,
    titleKey: 'rewards',
    id: 'feature-rewards',
  },
  {
    icon: Smartphone,
    titleKey: 'fastAndLight',
    id: 'feature-mobile',
  },
];

export function FeaturesSection() {
  const { t } = useLanguage();

  return (
    <section className="py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t('ourFeatures')}</h2>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-4 mt-12">
          {features.map((feature) => (
            <Card key={feature.id} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="items-center">
                <div className="bg-primary/10 p-4 rounded-full">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="mt-4 !text-xl font-headline">{t(feature.titleKey as any)}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
