// components/home/CallToActionSection.tsx
"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";

export default function CallToActionSection() {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
          Ready to Get Started?
        </h2>
        <p className="max-w-[600px] mx-auto text-slate-500 md:text-xl dark:text-slate-400 mb-8">
          Join thousands of employers and employees today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="w-full sm:w-auto gap-2">
            <Link href="/search">
              <SearchIcon className="h-4 w-4" />
              Search Employees
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full sm:w-auto"
          >
            <Link href="/employers/register">Register as Employer</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full sm:w-auto"
          >
            <Link href="/employees/register">Register as Employee</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
