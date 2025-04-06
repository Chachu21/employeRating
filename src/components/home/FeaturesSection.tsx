// components/home/FeaturesSection.tsx
"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Star, FileText, Users } from "lucide-react";
import FeatureCard from "./FeatureCard";

export default function FeaturesSection() {
  return (
    <section className="w-full py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Key Features
          </h2>
          <p className="max-w-[900px] mx-auto text-slate-500 md:text-xl dark:text-slate-400">
            Powerful tools for employers and employees.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={Shield}
            title="Verified Employers"
            description="All employers undergo a strict verification process."
          />
          <FeatureCard
            icon={Star}
            title="Trusted Ratings"
            description="Transparent ratings based on verified experiences."
          />
          <FeatureCard
            icon={FileText}
            title="Official Certificates"
            description="Stamped experience certificates and recommendations."
          />
          <FeatureCard
            icon={Users}
            title="Easy Search"
            description="Find employees by name, phone, or industry."
          />
        </div>
        <div className="flex justify-center mt-8">
          <Button asChild variant="outline" className="gap-2">
            <Link href="/features">
              Explore All Features
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
