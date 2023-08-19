'use client';

import * as React from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Playlist',
    href: '/docs/primitives/alert-dialog',
    description: 'Manage and organize your music collections with ease.',
  },
  {
    title: 'Song',
    href: '/docs/primitives/hover-card',
    description: 'Discover detailed song information with a simple hover.',
  },
  {
    title: 'Made for You',
    href: '/docs/primitives/progress',
    description:
      'Track your progress and stay motivated on your musical journey.',
  },
  {
    title: 'Artist',
    href: '/docs/primitives/scroll-area',
    description:
      'Explore the world of artists that shape your musical universe.',
  },
  {
    title: 'Albums',
    href: '/docs/primitives/tabs',
    description:
      'Navigate through collections of music effortlessly using tab panels.',
  },
];
const dashboardComp: { title: string; href: string; description: string }[] = [
  {
    title: 'Recently Played',
    href: '/docs/primitives/alert-dialog',
    description: `Display a history of your recently played tracks`,
  },
  {
    title: ' Profile Overview',
    href: '/docs/primitives/hover-card',
    description: `Display Your profile Overview`,
  },
  {
    title: 'Personalized Discoveries',
    href: '/docs/primitives/progress',
    description:
      'Create a personalized Discover Weekly-like feature that curates a playlist based on your preferences and habits.',
  },
  {
    title: ' Data Insights',
    href: '/docs/primitives/scroll-area',
    description: `Provide visualizations of the Your listening habits, like most played genres, time spent listening, and favorite tracks.`,
  },
];

export function NavigationMenuComp() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Dashboard</NavigationMenuTrigger>

          <NavigationMenuContent>
            <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
              {dashboardComp.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Playlist</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
