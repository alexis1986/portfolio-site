import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { PainPoints } from '@/components/PainPoints';
import { FeaturedCase } from '@/components/FeaturedCase';
import { HowIWork } from '@/components/HowIWork';
import { Results } from '@/components/Results';
import { Lab } from '@/components/Lab';
import { About } from '@/components/About';
import { FinalCta } from '@/components/FinalCta';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <FeaturedCase />
        <HowIWork />
        <Results />
        <Lab />
        <About />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
