"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const dashboardImage =
    mounted && resolvedTheme === "dark"
      ? "/dashboard-preview.svg"
      : "/dashboard-light.svg";
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 min-h-[60vh] flex items-center">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl">
              Discover Top Talent
            </h1>
            <p className="max-w-[600px] text-slate-500 md:text-xl dark:text-slate-400">
              Find verified employees with trusted ratings and recommendations
              from previous employers.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="gap-2">
                <Link href="/search">
                  <SearchIcon className="h-4 w-4" />
                  Search Employees
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/employers/register">Register as Employer</Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-square max-w-[500px] mx-auto">
            <Image
              src={dashboardImage}
              alt="Platform Statistics Dashboard"
              fill
              className="object-cover rounded-xl"
              sizes="(max-width: 768px) 100vw, 500px"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
