import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { Features } from "@/components/site/features";
import { Roles } from "@/components/site/roles";
import { HowItWorks } from "@/components/site/how-it-works";
import { AccessModel } from "@/components/site/access-model";
import { Pricing } from "@/components/site/pricing";
import { Faq } from "@/components/site/faq";
import { Cta } from "@/components/site/cta";
import { Footer } from "@/components/site/footer";
import { WhatsappPopup } from "@/components/site/whatsapp-popup";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Roles />
        <HowItWorks />
        <AccessModel />
        <Pricing />
        <Faq />
        <Cta />
      </main>
      <Footer />
      <WhatsappPopup />
    </>
  );
}
