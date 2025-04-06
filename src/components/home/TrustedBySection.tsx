"use client";
import Image from "next/image";
import { Company } from "@/components/types/home";

const TRUSTED_COMPANIES: Company[] = [
  { name: "Acme Inc", logo: "/placeholder.svg" },
  { name: "TechCorp", logo: "/placeholder.svg" },
  { name: "Globex", logo: "/placeholder.svg" },
  { name: "Initech", logo: "/placeholder.svg" },
  { name: "Umbrella Corp", logo: "/placeholder.svg" },
  { name: "Stark Industries", logo: "/placeholder.svg" },
  { name: "Wayne Enterprises", logo: "/placeholder.svg" },
  { name: "Cyberdyne Systems", logo: "/placeholder.svg" },
];

export default function TrustedBySection() {
  return (
    <section className="w-full py-8 border-b bg-slate-50 dark:bg-slate-950">
      <div className="w-full">
        <h2 className="text-center text-lg font-medium mb-6">
          Trusted by Leading Companies
        </h2>
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-8 px-4">
            {[...TRUSTED_COMPANIES, ...TRUSTED_COMPANIES].map(
              (company, index) => (
                <div key={`${company.name}-${index}`} className="flex-shrink-0">
                  <div className="w-32 h-16 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center">
                    <Image
                      src={company.logo}
                      alt={`${company.name} logo`}
                      width={80}
                      height={40}
                      className="max-h-8 w-auto"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-xs text-center mt-2 text-muted-foreground">
                    {company.name}
                  </p>
                </div>
              )
            )}
          </div>
          <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-slate-50 to-transparent dark:from-slate-950 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-slate-50 to-transparent dark:from-slate-950 pointer-events-none" />
        </div>
      </div>
      <style jsx>{`
        .animate-scroll {
          display: flex;
          animation: scroll 20s linear infinite;
        }
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
