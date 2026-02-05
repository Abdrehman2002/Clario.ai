import HeroSection from '@/components/HeroSection';
import LogoCarouselSection from '@/components/LogoCarouselSection';
import FeaturesDetail from '@/components/ui/features-detail';
import { FrameworksSection } from '@/components/FrameworksSection';
import { TryAgentNew } from '@/components/TryAgentNew';
import ProcessSection from '@/components/ProcessSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { ModernNavbar } from '@/components/ui/modern-navbar';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">

      {/* Navbar */}
      <ModernNavbar
        logo={{
          url: "/",
          src: "/logo.svg (2).svg",
          alt: "Vextria AI",
          title: "Vextria AI"
        }}
        menu={[
          { title: "Home", url: "#hero" },
          { title: "Features", url: "#features" },
          { title: "Process", url: "#process" },
          { title: "Frameworks", url: "#frameworks" },
          { title: "Try Agent", url: "#try-agent" },
          { title: "FAQ", url: "#faq" },
        ]}
        auth={{
          login: { text: "Dashboard", url: "https://clariodashboard.vercel.app/" },
          signup: { text: "Let's Talk", url: "https://calendly.com/abdurrehman1711/30min" },
        }}
      />

      {/* Main Content */}
      <main className="relative -space-y-12">
        <section id="hero">
          <HeroSection />
        </section>

        {/* Logo Carousel */}
        <section id="partners">
          <LogoCarouselSection />
        </section>

        {/* Features Detail with Dashboard */}
        <section id="features">
          <FeaturesDetail />
        </section>

        <section id="try-agent">
          <TryAgentNew />
        </section>

        <section id="frameworks">
          <FrameworksSection />
        </section>

        <section id="process">
          <ProcessSection />
        </section>

        <section id="faq">
          <FAQSection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
