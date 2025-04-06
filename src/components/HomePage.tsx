// components/HomePage.tsx
"use client";
import HeroSection from "./home/HeroSection";
import TrustedBySection from "./home/TrustedBySection";
import FeaturesSection from "./home/FeaturesSection";
import HowItWorksSection from "./home/HowItWorksSection";
import TestimonialsSection from "./home/TestimonialsSection";
import CallToActionSection from "./home/CallToActionSection";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <HeroSection />
        <TrustedBySection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <CallToActionSection />
      </main>
    </div>
  );
}
