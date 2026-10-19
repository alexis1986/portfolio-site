'use client';

import { useLanguage } from './LanguageProvider';
import { Section } from './ui/Section';
import { siteCopy } from '@/content/site';

export function PainPoints() {
  const { language } = useLanguage();
  const { problems } = siteCopy;

  return (
    <Section id="problems" eyebrow={problems.eyebrow} heading={problems.heading}>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {problems.items.map((item) => (
          <li key={item.title.es} className="rounded-lg border border-line bg-white p-5">
            <p className="font-mono text-xs font-medium text-red-700">{item.signal[language]}</p>
            <h3 className="mt-3 text-base font-bold text-ink">{item.title[language]}</h3>
            <p className="mt-2 text-sm text-ink/70">{item.body[language]}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
