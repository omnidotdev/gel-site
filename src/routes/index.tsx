import { createFileRoute } from "@tanstack/react-router";

import {
  Background,
  CTASection,
  ConfigSection,
  Footer,
  Header,
  HeroSection,
  WhatSection,
  WhyNotNixSection,
} from "@/components/landing";

/**
 * Landing page for gel.
 */
const LandingPage = () => (
  <div className="relative">
    <Background />
    <Header />

    <div className="relative z-10 flex min-h-dvh w-full flex-col">
      <main className="flex-1">
        <HeroSection />
        <WhatSection />
        <ConfigSection />
        <WhyNotNixSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  </div>
);

export const Route = createFileRoute("/")({
  component: LandingPage,
});

export default LandingPage;
