'use client';

import { Fragment } from 'react';
import { useLanguage } from './LanguageProvider';
import { Section } from './ui/Section';
import { DEMO_URL, siteCopy } from '@/content/site';

export function FeaturedCase() {
  const { language } = useLanguage();
  const { featuredCase: c } = siteCopy;

  const boxes = [
    { key: 'before', label: c.labels.before, text: c.before, style: 'border-line' },
    { key: 'decision', label: c.labels.decision, text: c.decision, style: 'border-dashed border-indigo' },
    { key: 'after', label: c.labels.after, text: c.after, style: 'border-line' },
  ];

  return (
    <Section id="case" variant="grid" eyebrow={c.eyebrow} heading={c.heading}>
      <p className="-mt-6 mb-8 max-w-2xl text-ink/70">{c.context[language]}</p>
      <div className="flex flex-col items-stretch gap-3 lg:flex-row">
        {boxes.map((b, i) => (
          <Fragment key={b.key}>
            {i > 0 && (
              <span
                aria-hidden="true"
                className="hidden items-center font-mono text-xl text-cyan lg:flex"
              >
                →
              </span>
            )}
            <div className={`flex-1 rounded-lg border bg-white p-5 ${b.style}`}>
              <p className="font-mono text-xs font-medium uppercase tracking-wider text-indigo">
                {b.label[language]}
              </p>
              <p className="mt-3 text-sm text-ink">{b.text[language]}</p>
            </div>
          </Fragment>
        ))}
      </div>
      <a
        href={DEMO_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-semibold text-green-800 transition-colors hover:border-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo"
      >
        <span aria-hidden="true" className="h-2 w-2 rounded-full bg-green-600" />
        <span aria-hidden="true" className="font-mono text-xs uppercase">
          {c.liveLabel[language]}
        </span>
        {c.demoLink[language]}
      </a>
    </Section>
  );
}
