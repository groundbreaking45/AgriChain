'use client';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search, PlusCircle, Filter } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/lib/i18n';

const products = [
  {
    id: 1,
    name: 'Organic Tomatoes',
    farmer: 'Green Valley Farms',
    price: 2.5,
    unit: 'kg',
    imageUrl: 'https://picsum.photos/seed/tomato/400/300',
    imageHint: 'fresh tomatoes',
  },
  {
    id: 2,
    name: 'Fresh Carrots',
    farmer: 'Sunshine Gardens',
    price: 1.8,
    unit: 'kg',
    imageUrl: 'https://picsum.photos/seed/carrot/400/300',
    imageHint: 'fresh carrots',
  },
  {
    id: 3,
    name: 'Crisp Apples',
    farmer: 'Orchard Fresh',
    price: 3.0,
    unit: 'kg',
    imageUrl: 'https://picsum.photos/seed/apple/400/300',
    imageHint: 'crisp apples',
  },
  {
    id: 4,
    name: 'Spinach Bunch',
    farmer: 'Leafy Greens Co.',
    price: 1.5,
    unit: 'bunch',
    imageUrl: 'https://picsum.photos/seed/spinach-leaves/400/300',
    imageHint: 'spinach bunch',
  },
];

export default function MarketPage() {
  const { t } = useLanguage();
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
        <div className="relative w-full md:w-1/3">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder={t('search')} className="pl-9" />
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            {t('filters')}
          </Button>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            {t('addListing')}
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <CardHeader className="p-0">
              <div className="relative w-full h-48">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  className="object-cover"
                  data-ai-hint={product.imageHint}
                />
              </div>
            </CardHeader>
            <CardContent className="p-4 space-y-1">
              <CardTitle className="text-xl">{product.name}</CardTitle>
              <CardDescription>{product.farmer}</CardDescription>
              <p className="text-lg font-semibold text-primary">
                ${product.price.toFixed(2)} / {product.unit}
              </p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button className="w-full">{t('buy')}</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
