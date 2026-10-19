'use client';

import { ReactNode } from 'react';
import { useLanguage } from '@/components/LanguageProvider';
import { Localized } from '@/content/types';

export function Section({
  id,
  eyebrow,
  heading,
  variant = 'plain',
  children,
}: {
  id: string;
  eyebrow: Localized<string>;
  heading: Localized<string>;
  variant?: 'plain' | 'grid';
  children: ReactNode;
}) {
  const { language } = useLanguage();
  return (
    <section
      id={id}
      className={`scroll-mt-20 border-t border-line px-4 py-16 sm:px-8 sm:py-20 ${
        variant === 'grid' ? 'bg-blueprint' : 'bg-white'
      }`}
    >
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 font-mono text-xs uppercase tracking-wider text-indigo">
          {eyebrow[language]}
        </p>
        <h2 className="mb-10 max-w-3xl text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          {heading[language]}
        </h2>
        {children}
      </div>
    </section>
  );
}
