'use client';

import { useLanguage } from './LanguageProvider';
import { BookingLink } from './ui/BookingLink';
import { EMAIL, siteCopy } from '@/content/site';

export function FinalCta() {
  const { language } = useLanguage();
  const { finalCta } = siteCopy;

  return (
    <section id="contact" className="scroll-mt-20 bg-ink px-4 py-16 text-white sm:px-8 sm:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{finalCta.heading[language]}</h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-white/75">{finalCta.body[language]}</p>
        <div className="mt-8 flex flex-col items-center gap-4">
          <BookingLink label={finalCta.primary} tone="dark" />
          <p className="text-sm text-white/70">
            {finalCta.emailAlt[language]}{' '}
            <a
              href={`mailto:${EMAIL}`}
              className="break-all font-mono text-cyan underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {EMAIL}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
