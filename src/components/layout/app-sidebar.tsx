
import Link from 'next/link';
import {
  LayoutDashboard,
  Landmark,
  ShoppingBasket,
  BookText,
  Sprout,
  User,
  Settings,
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from '@/components/ui/sidebar';
import { Logo } from '../logo';
import { useLanguage } from '@/lib/i18n';

interface AppSidebarProps {
  pathname: string;
}

export function AppSidebar({ pathname }: AppSidebarProps) {
  const { t } = useLanguage();

  const menuItems = [
    { href: '/dashboard', label: t('dashboard'), icon: LayoutDashboard },
    { href: '/loans', label: t('loans'), icon: Landmark },
    { href: '/market', label: t('market'), icon: ShoppingBasket },
    { href: '/orders', label: t('orders'), icon: BookText },
    { href: '/rewards', label: t('rewards'), icon: Sprout },
  ];

  const bottomMenuItems = [
    { href: '/profile', label: 'Profile', icon: User },
    { href: '/settings', label: 'Settings', icon: Settings },
  ];

  return (
    <Sidebar>
      <SidebarHeader>
        <Logo />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <Link href={item.href} passHref>
                <SidebarMenuButton
                  isActive={pathname === item.href}
                  tooltip={{
                    children: item.label,
                  }}
                >
                  <item.icon />
                  <span>{item.label}</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          {bottomMenuItems.map((item) => (
             <SidebarMenuItem key={item.href}>
              <Link href={item.href} passHref>
                <SidebarMenuButton
                  isActive={pathname === item.href}
                  tooltip={{
                    children: item.label,
                  }}
                >
                  <item.icon />
                  <span>{item.label}</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
