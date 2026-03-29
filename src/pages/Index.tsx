import HeroSection from '@/components/HeroSection';
import LogoCarouselSection from '@/components/LogoCarouselSection';
import { FrameworksSection } from '@/components/FrameworksSection';
import { TryAgentNew } from '@/components/TryAgentNew';
import ProcessSection from '@/components/ProcessSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { ModernNavbar } from '@/components/ui/modern-navbar';
import { SEO } from '@/components/SEO';
import { organizationSchema, faqSchema } from '@/utils/schemas';

const Index = () => {
  return (
    <>
      <SEO
        title="Vextria AI - 24/7 AI Voice Agents & Receptionist for Small Business"
        description="Automate customer calls with AI voice agents. Book appointments, answer FAQs, qualify leads 24/7. Never miss a call again. Try free for 14 days."
        canonical="https://vextriaai.com/"
        ogImage="https://vextriaai.com/v.png"
        schema={[organizationSchema, faqSchema]}
        datePublished="2025-01-15"
        dateModified="2026-03-28"
      />

      {/* Navbar - Outside main container for proper fixed positioning */}
      <ModernNavbar
        logo={{
          url: "/",
          src: "/logo.svg (2).svg",
          alt: "Vextria AI",
          title: "Vextria AI"
        }}
        menu={[
          { title: "Home", url: "#hero" },
          { title: "Products", url: "#frameworks" },
          { title: "Process", url: "#process" },
          { title: "Try Agent", url: "#try-agent" },
          { title: "FAQ", url: "#faq" },
          { title: "Contact", url: "#contact" },
        ]}
        auth={{
          login: { text: "Dashboard", url: "https://clariodashboard.vercel.app/" },
          signup: { text: "Let's Talk", url: "https://calendly.com/vextriaai/30min" },
        }}
      />

      <div className="relative min-h-screen bg-background">
        {/* Main Content */}
        <main className="relative -space-y-12">
        <section id="hero">
          <HeroSection />
        </section>

        {/* Logo Carousel */}
        <section id="partners">
          <LogoCarouselSection />
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
    </>
  );
};

export default Index;
