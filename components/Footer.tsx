'use client';

import { useLanguage } from './LanguageProvider';
import { GITHUB_URL, LINKEDIN_URL, siteCopy } from '@/content/site';

const linkClass =
  'font-mono text-xs text-ink/70 underline-offset-4 hover:text-indigo hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo';

export function Footer() {
  const { language } = useLanguage();
  return (
    <footer className="border-t border-line bg-white px-4 py-8 sm:px-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-xs text-ink/70 sm:flex-row">
        <p>{siteCopy.footer.text[language]}</p>
        <nav aria-label={siteCopy.footer.socialAriaLabel[language]} className="flex gap-5">
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
            LinkedIn
          </a>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
            GitHub
          </a>
        </nav>
      </div>
    </footer>
  );
}
