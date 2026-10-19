import type { Metadata } from 'next';
import { Bricolage_Grotesque, JetBrains_Mono } from 'next/font/google';
import { LanguageProvider } from '@/components/LanguageProvider';
import './globals.css';

const sans = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const description =
  'Arquitecto de Soluciones: plataformas que escalan para banca y finanzas, telecomunicaciones, marketing, turismo y ventas digitales, con IA aplicada.';

export const metadata: Metadata = {
  metadataBase: new URL('https://alexdevvv.com'),
  title: 'Alexis Castellano · Arquitecto de Soluciones',
  description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    alternateLocale: 'en_US',
    title: 'Alexis Castellano · Arquitecto de Soluciones',
    description,
    url: '/',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${sans.variable} ${mono.variable}`}>
      <body className="bg-white font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
