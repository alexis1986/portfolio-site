'use client';

import { useLanguage } from './LanguageProvider';
import { Section } from './ui/Section';
import { siteCopy } from '@/content/site';

export function Results() {
  const { language } = useLanguage();
  const { results } = siteCopy;

  return (
    <Section id="results" variant="grid" eyebrow={results.eyebrow} heading={results.heading}>
      <div className="grid gap-4 md:grid-cols-3">
        {results.items.map((item) => (
          <article key={item.title.es} className="rounded-lg border border-line bg-white p-5">
            <h3 className="font-mono text-2xl font-bold text-indigo">{item.title[language]}</h3>
            <p className="mt-3 text-sm text-ink/70">{item.body[language]}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
