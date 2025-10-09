"use client";
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useLanguage } from '@/lib/i18n';
import Link from 'next/link';

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');
  const { t } = useLanguage();

  return (
    <section className="relative w-full h-[80vh] min-h-[500px] flex items-center justify-center text-center text-white">
      <div className="absolute inset-0 bg-black/60 z-10" />
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          data-ai-hint={heroImage.imageHint}
          priority
        />
      )}
      <div className="relative z-20 container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
            {t('heroTitle')}
          </h1>
          <p className="max-w-[700px] text-lg md:text-xl text-primary-foreground/90">
            {t('heroSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link href="/dashboard">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                {t('shopAsBuyer')}
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button size="lg" variant="secondary">
                {t('joinAsFarmer')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
