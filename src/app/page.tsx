import Header from '@/components/sections/header';
import HeroSection from '@/components/sections/hero';
import Services from '@/components/sections/services';
import AboutUsSection from '@/components/sections/about-us';
import StatsSection from '@/components/sections/stats';
import ImpactSection from '@/components/sections/impact';
import HowItWorks from '@/components/sections/how-it-works';
import Faq from '@/components/sections/faq';
import Footer from '@/components/sections/footer';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Offset for fixed header heights across breakpoints */}
      <main className="pt-[72px] sm:pt-[80px] lg:pt-[86px]">
        <HeroSection />
        
        {/* Services */}
        <div id="services" className="scroll-mt-28">
          <Services />
        </div>
        
        {/* About Us */}
        <div id="about-us" className="scroll-mt-28">
          <AboutUsSection />
        </div>
        <div className="bg-background">
          <div className="container mx-auto px-6">
            <StatsSection />
          </div>
        </div>
        <ImpactSection />
        <HowItWorks />
        
        {/* FAQs */}
        <div id="faq" className="scroll-mt-28">
          <Faq />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}