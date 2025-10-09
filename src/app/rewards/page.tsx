'use client';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Sprout, Award, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

const sustainableActions = [
    { id: 1, action: "Used organic fertilizer", points: 10, claimed: true },
    { id: 2, action: "Implemented water-saving irrigation", points: 20, claimed: false },
    { id: 3, action: "Reduced plastic packaging", points: 15, claimed: true },
    { id: 4, action: "Used renewable energy source", points: 25, claimed: false },
]

export default function RewardsPage() {
    const { t } = useLanguage();
    const totalPoints = sustainableActions.reduce((acc, item) => item.claimed ? acc + item.points : acc, 0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-1 space-y-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">{t('tokenBalance')}</CardTitle>
            <Sprout className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalPoints} AGRI</div>
            <p className="text-xs text-muted-foreground">
              + {sustainableActions.filter(a => !a.claimed).reduce((acc, item) => acc + item.points, 0)} points available to claim
            </p>
          </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle>{t('claimTokens')}</CardTitle>
                <CardDescription>Log sustainable actions to earn more tokens.</CardDescription>
            </CardHeader>
            <CardContent>
                <Button className="w-full">{t('logAction')}</Button>
            </CardContent>
        </Card>
      </div>
      <div className="md:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your logged sustainable actions and rewards.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
                {sustainableActions.map(action => (
                    <li key={action.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <Award className="h-6 w-6 text-primary" />
                            <div>
                                <p className="font-medium">{action.action}</p>
                                <p className="text-sm text-muted-foreground">{action.points} points</p>
                            </div>
                        </div>
                        {action.claimed ? (
                             <div className="flex items-center gap-2 text-sm text-green-600">
                                <CheckCircle className="h-4 w-4" />
                                Claimed
                            </div>
                        ) : (
                            <Button variant="secondary" size="sm">Claim</Button>
                        )}
                    </li>
                ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
