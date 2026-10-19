'use client';

import { Fragment } from 'react';
import { useLanguage } from './LanguageProvider';
import { BookingLink } from './ui/BookingLink';
import { siteCopy } from '@/content/site';

export function Hero() {
  const { language } = useLanguage();
  const { hero } = siteCopy;

  return (
    <section id="hero" className="bg-blueprint px-6 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <span className="inline-block rounded-full border border-indigo/20 bg-indigo/10 px-3 py-1 font-mono text-xs font-medium text-indigo">
          {hero.tag[language]}
        </span>
        <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-ink md:text-6xl">
          {hero.titleLine1[language]}
          <br />
          <span className="text-indigo">{hero.titleLine2[language]}</span>
        </h1>
        <p className="sr-only">
          {hero.flow.map((step) => step[language]).join(' → ')}
        </p>
        <div
          aria-hidden="true"
          className="mt-8 flex flex-wrap items-center gap-2 font-mono text-xs text-ink/70 sm:text-sm"
        >
          {hero.flow.map((step, i) => (
            <Fragment key={step.es}>
              {i > 0 && <span className="text-cyan">→</span>}
              <span className="rounded-md border border-dashed border-ink/30 bg-white px-3 py-1.5">
                {step[language]}
              </span>
            </Fragment>
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-lg text-ink/70">{hero.subtitle[language]}</p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <BookingLink label={hero.primaryCta} />
          <a
            href="#case"
            className="rounded-lg border border-line bg-white px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-indigo hover:text-indigo focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo"
          >
            {hero.secondaryCta[language]}
          </a>
        </div>
        <dl className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {hero.stats.map((s) => (
            <div key={s.value.es} className="rounded-lg border border-line bg-white p-4">
              <dt className="font-mono text-2xl font-bold text-indigo md:text-3xl">
                {s.value[language]}
              </dt>
              <dd className="mt-1 text-sm text-ink/70">{s.label[language]}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
