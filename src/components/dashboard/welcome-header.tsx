"use client";

import { useLanguage } from "@/lib/i18n";

export function WelcomeHeader() {
  const { t } = useLanguage();

  return (
    <div>
      <h2 className="text-3xl font-bold tracking-tight">{t('welcomeBack')}!</h2>
      <p className="text-muted-foreground">{t('dashboardOverview')}</p>
    </div>
  );
}
