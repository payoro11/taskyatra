import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ArrowRight, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logoPath from "@assets/taskyatra/logo.png";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <header
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-300",
          isScrolled
            ? "bg-white/95 shadow-md backdrop-blur-md"
            : "bg-white/80 backdrop-blur-sm border-b border-gray-100"
        )}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex h-20 items-center justify-between">
            <Link href="/" className="flex items-center" data-testid="nav-logo">
              <img src={logoPath} alt="TaskYatra Logo" className="h-10 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  data-testid={`nav-link-${link.label.toLowerCase()}`}
                  className={cn(
                    "text-sm font-semibold transition-colors hover:text-primary relative group",
                    location === link.href ? "text-primary" : "text-gray-600"
                  )}
                >
                  {link.label}
                  <span className={cn(
                    "absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300",
                    location === link.href ? "w-full" : "w-0 group-hover:w-full"
                  )} />
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <Button variant="outline" asChild className="font-semibold text-primary border-primary hover:bg-primary/5 rounded-full px-6">
                <a href="https://app.taskyatra.com/login" target="_blank" rel="noopener noreferrer" data-testid="btn-nav-login">Login</a>
              </Button>
              <Button asChild className="font-semibold bg-accent hover:bg-orange-600 text-white rounded-full px-6 shadow-md shadow-orange-200">
                <a href="https://app.taskyatra.com/register" target="_blank" rel="noopener noreferrer" data-testid="btn-nav-getstarted">Get Started</a>
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              data-testid="btn-mobile-menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-border absolute w-full shadow-xl">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "block px-4 py-3 text-base font-semibold rounded-xl transition-colors",
                    location === link.href ? "bg-primary/10 text-primary" : "text-gray-700 hover:bg-gray-50"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-border">
                <Button variant="outline" asChild className="w-full justify-center text-primary border-primary rounded-full">
                  <a href="https://app.taskyatra.com/login">Login</a>
                </Button>
                <Button asChild className="w-full justify-center bg-accent hover:bg-orange-600 text-white rounded-full shadow-md">
                  <a href="https://app.taskyatra.com/register">Get Started <ArrowRight className="ml-2 h-4 w-4" /></a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1 pt-20">
        {children}
      </main>

      <footer className="bg-gray-950 text-gray-300 pt-16 pb-0">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">
            <div className="col-span-1 lg:col-span-1">
              <img src={logoPath} alt="TaskYatra" className="h-10 bg-white p-1 rounded-lg mb-3" />
              <p className="text-gray-400 mb-1 font-semibold text-sm">India's #1 Business Automation Platform</p>
              <p className="text-accent text-xs font-medium mb-6">A Brand of Nexaroot Technology India Pvt Ltd</p>
              <div className="flex gap-3">
                <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors text-gray-400 hover:text-white">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors text-gray-400 hover:text-white">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors text-gray-400 hover:text-white">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-accent transition-colors text-gray-400 hover:text-white">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white font-heading font-semibold text-base mb-5">Quick Links</h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-gray-400 hover:text-accent transition-colors text-sm flex items-center gap-1 group">
                      <span className="w-0 group-hover:w-3 h-0.5 bg-accent transition-all duration-200 rounded" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-heading font-semibold text-base mb-5">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-400 text-sm">
                  <Mail className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <a href="mailto:sales@nexaroot.in" className="hover:text-white transition-colors">sales@nexaroot.in</a>
                </li>
                <li className="flex items-start gap-3 text-gray-400 text-sm">
                  <Phone className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <a href="tel:+919998422334" className="hover:text-white transition-colors">+91 9998422334</a>
                </li>
                <li className="flex items-start gap-3 text-gray-400 text-sm">
                  <MapPin className="w-4 h-4 text-primary shrink-0 mt-1" />
                  <span>2nd Floor Vindawashni Trader Building, Amba, Aurangabad (Bihar), India - 824111</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-heading font-semibold text-base mb-5">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-accent transition-colors text-sm flex items-center gap-1 group">
                    <span className="w-0 group-hover:w-3 h-0.5 bg-accent transition-all duration-200 rounded" />
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-accent transition-colors text-sm flex items-center gap-1 group">
                    <span className="w-0 group-hover:w-3 h-0.5 bg-accent transition-all duration-200 rounded" />
                    Privacy Policy
                  </Link>
                </li>
              </ul>

              <div className="mt-8 bg-gray-900 rounded-xl p-4 border border-gray-800">
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-2">Free Trial</p>
                <p className="text-white font-semibold text-sm mb-3">Start 15 days free — no credit card</p>
                <a
                  href="https://app.taskyatra.com/register"
                  className="block text-center text-sm font-bold bg-accent hover:bg-orange-600 text-white py-2 rounded-lg transition-colors"
                  data-testid="footer-trial-btn"
                >
                  Get Started Free
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 py-6 flex flex-col md:flex-row justify-between items-center gap-3">
            <div className="text-center md:text-left">
              <p className="text-gray-500 text-sm">
                © 2024 <span className="text-gray-400 font-medium">Nexaroot Technology India Pvt Ltd</span>. All rights reserved.
              </p>
              <p className="text-gray-600 text-xs mt-0.5">
                TaskYatra is a brand of Nexaroot Technology India Pvt Ltd | GST Registered | Made in India
              </p>
            </div>
            <div className="flex gap-6 text-sm text-gray-500">
              <Link href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-accent transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
