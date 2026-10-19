'use client';

import Image from 'next/image';
import { useLanguage } from './LanguageProvider';
import { Section } from './ui/Section';
import { siteCopy } from '@/content/site';

export function About() {
  const { language } = useLanguage();
  const { about } = siteCopy;

  return (
    <Section
      id="about"
      variant="grid"
      eyebrow={about.eyebrow}
      heading={{ es: about.name, en: about.name }}
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
        <Image
          src="/images/alexis-castellano.jpg"
          alt={about.photoAlt[language]}
          width={160}
          height={160}
          sizes="(min-width:768px) 160px, 120px"
          className="h-[120px] w-[120px] shrink-0 rounded-2xl border border-line object-cover object-[50%_30%] md:h-40 md:w-40"
        />
        <p className="max-w-2xl text-base leading-relaxed text-ink/80">{about.bio[language]}</p>
      </div>
    </Section>
  );
}
