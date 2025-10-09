"use client";

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { checkCreditScoreAction } from '@/app/actions';
import { useLanguage } from '@/lib/i18n';
import { Loader2, ThumbsUp, ThumbsDown } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';

const initialState = {
  message: '',
  errors: null,
  data: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  const { t } = useLanguage();

  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          {t('calculating')}
        </>
      ) : (
        t('calculateScore')
      )}
    </Button>
  );
}

export function CreditScoreChecker() {
  const [state, formAction] = useActionState(checkCreditScoreAction, initialState);
  const { t } = useLanguage();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Card>
        <CardHeader>
          <CardTitle>{t('checkYourCreditScore')}</CardTitle>
          <CardDescription>{t('creditScoreDescription')}</CardDescription>
        </CardHeader>
        <form action={formAction}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="onTimeRate">{t('onTimeDeliveryRate')}</Label>
              <Input
                id="onTimeRate"
                name="onTimeRate"
                type="number"
                placeholder="e.g., 98"
                min="0"
                max="100"
                required
                defaultValue="95"
              />
               {state.errors?.onTimeRate && (
                <p className="text-sm font-medium text-destructive">{state.errors.onTimeRate[0]}</p>
               )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="salesCount">{t('totalSalesCount')}</Label>
              <Input
                id="salesCount"
                name="salesCount"
                type="number"
                placeholder="e.g., 50"
                min="0"
                required
                defaultValue="110"
              />
              {state.errors?.salesCount && (
                <p className="text-sm font-medium text-destructive">{state.errors.salesCount[0]}</p>
               )}
            </div>
          </CardContent>
          <CardFooter>
            <SubmitButton />
          </CardFooter>
        </form>
      </Card>
      
      {state.data && (
        <Card className="bg-secondary">
          <CardHeader>
            <CardTitle>{t('creditScoreResult')}</CardTitle>
            <CardDescription>{t('yourNewScoreIs')}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <p className="text-7xl font-bold font-headline text-primary">{state.data.score}</p>
              <p className="text-2xl text-muted-foreground">{t('grade')}: <span className="font-semibold">{state.data.grade}</span></p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">{t('keyFactors')}</h4>
              <ul className="space-y-2">
                {state.data.reasons.map((reason: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    {reason.toLowerCase().includes('negative') || reason.toLowerCase().includes('low') ? 
                        <ThumbsDown className="h-4 w-4 text-destructive mt-1 shrink-0" /> :
                        <ThumbsUp className="h-4 w-4 text-primary mt-1 shrink-0" />
                    }
                    <span className="text-sm text-muted-foreground">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      )}

      {state.message && !state.data && !state.errors && (
         <Alert>
            <AlertTitle>Notice</AlertTitle>
            <AlertDescription>{state.message}</AlertDescription>
         </Alert>
      )}
    </div>
  );
}
