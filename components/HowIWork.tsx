'use client';

import { useLanguage } from './LanguageProvider';
import { Section } from './ui/Section';
import { siteCopy } from '@/content/site';

export function HowIWork() {
  const { language } = useLanguage();
  const { howIWork } = siteCopy;

  return (
    <Section id="how-i-work" eyebrow={howIWork.eyebrow} heading={howIWork.heading}>
      <div className="grid gap-4 lg:grid-cols-3">
        {howIWork.steps.map((step) => (
          <article key={step.title.es} className="flex flex-col rounded-lg border border-line bg-white p-5">
            <span className="self-start rounded-full border border-indigo/20 bg-indigo/10 px-3 py-1 font-mono text-xs font-medium text-indigo">
              {step.badge[language]}
            </span>
            <h3 className="mt-4 text-lg font-bold text-ink">{step.title[language]}</h3>
            <p className="mt-2 text-sm text-ink/70">{step.body[language]}</p>
            <p className="mt-4 border-t border-dashed border-indigo/40 pt-4 font-mono text-xs text-indigo">
              {step.ai[language]}
            </p>
          </article>
        ))}
      </div>
      <p className="mt-8 flex items-start gap-3 rounded-lg border border-line bg-mist p-4 text-sm text-ink/70">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="mt-0.5 h-5 w-5 shrink-0 text-indigo"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="4" y="11" width="16" height="10" rx="2" />
          <path d="M8 11V7a4 4 0 0 1 8 0v4" />
        </svg>
        <span>{howIWork.confidentiality[language]}</span>
      </p>
    </Section>
  );
}
