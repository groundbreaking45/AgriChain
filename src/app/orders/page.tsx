'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/lib/i18n';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const orders = [
  {
    id: 'ORD001',
    product: 'Organic Tomatoes',
    date: '2023-10-26',
    farmer: 'Green Valley Farms',
    total: 25.0,
    status: 'Delivered',
  },
  {
    id: 'ORD002',
    product: 'Fresh Carrots',
    date: '2023-10-25',
    farmer: 'Sunshine Gardens',
    total: 18.0,
    status: 'Shipped',
  },
  {
    id: 'ORD003',
    product: 'Crisp Apples',
    date: '2023-10-24',
    farmer: 'Orchard Fresh',
    total: 30.0,
    status: 'Processing',
  },
  {
    id: 'ORD004',
    product: 'Spinach Bunch',
    date: '2023-10-22',
    farmer: 'Leafy Greens Co.',
    total: 15.0,
    status: 'Cancelled',
  },
];

const statusVariant: { [key: string]: 'default' | 'secondary' | 'destructive' | 'outline' } = {
  Delivered: 'default',
  Shipped: 'secondary',
  Processing: 'outline',
  Cancelled: 'destructive',
};


export default function OrdersPage() {
  const { t } = useLanguage();
  return (
    <Card>
      <CardHeader>
        <CardTitle>{t('orders')}</CardTitle>
        <CardDescription>
          View and manage your recent orders.
        </CardDescription>
      </CardHeader>
      <CardContent>
      <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="processing">Processing</TabsTrigger>
            <TabsTrigger value="shipped">Shipped</TabsTrigger>
            <TabsTrigger value="delivered">Delivered</TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Product</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Farmer</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">{order.id}</TableCell>
                    <TableCell>{order.product}</TableCell>
                    <TableCell>{order.date}</TableCell>
                    <TableCell>{order.farmer}</TableCell>
                    <TableCell>${order.total.toFixed(2)}</TableCell>
                    <TableCell>
                      <Badge variant={statusVariant[order.status]}>{order.status}</Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
