import Link from "next/link";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Employee Excellence</h3>
            <p className="text-sm text-muted-foreground">
              Empowering organizations with actionable insights to recognize,
              reward, and develop top talent.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <FaLinkedin className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <FaTwitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <FaGithub className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/features"
                  className="text-sm text-muted-foreground hover:underline"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-sm text-muted-foreground hover:underline"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="text-sm text-muted-foreground hover:underline"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-muted-foreground hover:underline"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/help-center"
                  className="text-sm text-muted-foreground hover:underline"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/api-docs"
                  className="text-sm text-muted-foreground hover:underline"
                >
                  API Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/community"
                  className="text-sm text-muted-foreground hover:underline"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  href="/webinars"
                  className="text-sm text-muted-foreground hover:underline"
                >
                  Webinars
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-muted-foreground hover:underline"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-muted-foreground hover:underline"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/security"
                  className="text-sm text-muted-foreground hover:underline"
                >
                  Security
                </Link>
              </li>
              <li>
                <Link
                  href="/compliance"
                  className="text-sm text-muted-foreground hover:underline"
                >
                  Compliance
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-16 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Employee Excellence Platform. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link
                href="/contact"
                className="text-sm text-muted-foreground hover:underline"
              >
                Contact Us
              </Link>
              <Link
                href="/careers"
                className="text-sm text-muted-foreground hover:underline"
              >
                Careers
              </Link>
              <Link
                href="/status"
                className="text-sm text-muted-foreground hover:underline"
              >
                System Status
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
