'use client';

import { useLanguage } from './LanguageProvider';
import { Section } from './ui/Section';
import { siteCopy } from '@/content/site';

export function Lab() {
  const { language } = useLanguage();
  const { lab } = siteCopy;

  return (
    <Section id="lab" eyebrow={lab.eyebrow} heading={lab.heading}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {lab.items.map((item) => (
          <article
            key={item.name}
            className="flex flex-col rounded-lg border border-dashed border-ink/30 bg-white p-5"
          >
            <h3 className="break-words font-mono text-sm font-bold text-ink">{item.name}</h3>
            <p className="mt-2 text-sm text-ink/70">{item.pattern[language]}</p>
            {item.githubUrl && (
              <a
                href={item.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block font-mono text-xs font-semibold text-indigo underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo"
              >
                {lab.viewCode[language]} ↗
              </a>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
