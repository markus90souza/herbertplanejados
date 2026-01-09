
import { Footer } from '@/components/footer';
import { HeroSlider } from '@/components/hero';
import { Navbar } from '@/components/navbar';
import { AmbientesSection } from '@/components/ambientes';
import { ContactSection } from '@/components/contato';
import { DiferenciaisSection } from '@/components/diferencial';
import { ProcessSection } from '@/components/processos';

export default function HomePage() {
  return (
    <div className="font-sans text-gray-900 selection:bg-black selection:text-white antialiased">
      <Navbar />
      <HeroSlider />
      <AmbientesSection />
      <ProcessSection />
      <DiferenciaisSection />
      <ContactSection />
      <Footer />
    </div>
  );
}