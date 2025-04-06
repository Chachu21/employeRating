import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { MainNav } from "@/components/main-nav";
import { SiteFooter } from "@/components/site-footer";

// Optimize font loading with preconnect and fallback
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // CSS variable for flexibility
  display: "swap", // Prevent layout shift by swapping to fallback font
});

// Enhanced metadata for SEO and clarity
export const metadata: Metadata = {
  title: {
    default: "Employee Rating & Recommendation Platform",
    template: "%s | Employee Rating Platform", // Dynamic title support
  },
  description:
    "Find and verify employees with trusted ratings and recommendations.",
  keywords: ["employee ratings", "recommendations", "verification", "platform"],
  openGraph: {
    title: "Employee Rating & Recommendation Platform",
    description:
      "Find and verify employees with trusted ratings and recommendations.",
    url: "https://yourdomain.com", // Replace with your actual domain
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Employee Rating & Recommendation Platform",
    description:
      "Find and verify employees with trusted ratings and recommendations.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to Google Fonts for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${inter.variable} bg-background antialiased min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange // Prevent FOUC (Flash of Unstyled Content)
        >
          <div className="flex flex-col min-h-screen">
            {/* Container with max-width for responsiveness */}
            <div className="px-4 sm:px-6 lg:px-8">
              <header className="">
                <MainNav />
              </header>
              <main className="flex-1 py-6">{children}</main>
              <SiteFooter />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
