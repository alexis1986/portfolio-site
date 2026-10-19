'use client';

import { useLanguage } from './LanguageProvider';
import { BookingLink } from './ui/BookingLink';
import { siteCopy } from '@/content/site';

export function Header() {
  const { language, toggleLanguage } = useLanguage();
  const { nav } = siteCopy;
  const links = [
    { href: '#problems', label: nav.problems },
    { href: '#case', label: nav.case },
    { href: '#how-i-work', label: nav.howIWork },
    { href: '#about', label: nav.about },
  ];

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-line bg-white/90 px-4 py-3 backdrop-blur sm:px-6">
      <span className="min-w-0 truncate font-semibold text-ink">{siteCopy.about.name}</span>
      <nav aria-label={nav.ariaLabel[language]} className="hidden gap-6 text-sm text-ink/70 md:flex">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="rounded hover:text-indigo focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo"
          >
            {l.label[language]}
          </a>
        ))}
      </nav>
      <div className="flex shrink-0 items-center gap-2">
        <BookingLink label={nav.book} variant="compact" />
        <button
          type="button"
          onClick={toggleLanguage}
          className="rounded-md border border-line px-3 py-1 font-mono text-xs font-medium text-ink/70 hover:border-indigo hover:text-indigo focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo"
          aria-label={siteCopy.languageToggleAriaLabel[language]}
          data-testid="language-toggle"
        >
          {siteCopy.languageToggleLabel[language]}
        </button>
      </div>
    </header>
  );
}
