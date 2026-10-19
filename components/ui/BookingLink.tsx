'use client';

import { useLanguage } from '@/components/LanguageProvider';
import { BOOKING_URL } from '@/content/site';
import { Localized } from '@/content/types';

const variants = {
  primary:
    'inline-flex items-center gap-2 rounded-lg bg-indigo px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
  compact:
    'inline-flex shrink-0 items-center whitespace-nowrap rounded-md bg-indigo px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-indigo/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
} as const;

const focusByTone = {
  light: 'focus-visible:outline-indigo',
  dark: 'focus-visible:outline-white',
} as const;

export function BookingLink({
  label,
  variant = 'primary',
  tone = 'light',
}: {
  label: Localized<string>;
  variant?: 'primary' | 'compact';
  tone?: 'light' | 'dark';
}) {
  const { language } = useLanguage();
  const external = BOOKING_URL !== '';
  return (
    <a
      data-testid="booking-cta"
      href={BOOKING_URL || '#contact'}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`${variants[variant]} ${focusByTone[tone]}`}
    >
      {label[language]}
      {variant === 'primary' && <span aria-hidden="true">→</span>}
    </a>
  );
}
