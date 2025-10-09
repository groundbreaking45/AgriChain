"use client";
import { useLanguage } from "@/lib/i18n";

const steps = [
  {
    titleKey: "step1Title",
    descriptionKey: "step1Desc",
  },
  {
    titleKey: "step2Title",
    descriptionKey: "step2Desc",
  },
  {
    titleKey: "step3Title",
    descriptionKey: "step3Desc",
  },
];

export function HowItWorksSection() {
  const { t } = useLanguage();

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">{t('howItWorks')}</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t('howItWorks')}</h2>
        </div>
        <div className="relative grid gap-10 sm:grid-cols-3">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2 hidden sm:block" />
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center">
              <div className="absolute top-1/2 left-1/2 w-0.5 h-full bg-border -translate-x-1/2 sm:hidden" />
              <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold font-headline mb-4 border-4 border-card">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold font-headline mb-2">{t(step.titleKey as any)}</h3>
              <p className="text-muted-foreground">{t(step.descriptionKey as any)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
