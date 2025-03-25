import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "py-3 bg-black/80 backdrop-blur-md border-b border-white/10"
          : "py-5 bg-transparent"
      )}
    >
      <div className="container px-4 md:px-6 mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
          <img
            src="/logo/white-logo.png"
            alt="Touchstone Digital Solutions"
            className="h-8 lg:h-10 w-auto"
          />
          {/* <span className="font-display text-sm md:text-base lg:text-lg font-medium truncate max-w-[150px] sm:max-w-[180px] md:max-w-[200px] lg:max-w-none">
            TOUCHSTONE DIGITAL SOLUTIONS
          </span> */}
        </Link>

        <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
          <a
            href="#about"
            className="text-sm lg:text-base opacity-80 hover:opacity-100 transition-opacity whitespace-nowrap"
          >
            About Us
          </a>
          <a
            href="#products"
            className="text-sm lg:text-base opacity-80 hover:opacity-100 transition-opacity whitespace-nowrap"
          >
            Features
          </a>
          {/* <a
            href="#solutions"
            className="text-sm lg:text-base opacity-80 hover:opacity-100 transition-opacity whitespace-nowrap"
          >
            Solutions
          </a>
          <a
            href="#testimonials"
            className="text-sm lg:text-base opacity-80 hover:opacity-100 transition-opacity whitespace-nowrap"
          >
            Testimonials
          </a> */}
          <a
            href="#contact"
            className="text-sm lg:text-base opacity-80 hover:opacity-100 transition-opacity whitespace-nowrap"
          >
            Contact
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <button className="hidden md:block bg-purple-500 text-white font-medium rounded-full px-4 lg:px-5 py-2 text-sm lg:text-base transition-all hover:bg-purple-600 whitespace-nowrap">
            SCHEDULE A DEMO
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile menu overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-black/95 z-50 md:hidden transition-transform duration-300",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-4 right-4 p-2 text-white hover:opacity-80 transition-opacity"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <a
              href="#about"
              className="text-xl font-medium opacity-80 hover:opacity-100 transition-opacity"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </a>
            <a
              href="#products"
              className="text-xl font-medium opacity-80 hover:opacity-100 transition-opacity"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Products
            </a>
            <a
              href="#solutions"
              className="text-xl font-medium opacity-80 hover:opacity-100 transition-opacity"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Solutions
            </a>
            <a
              href="#testimonials"
              className="text-xl font-medium opacity-80 hover:opacity-100 transition-opacity"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="text-xl font-medium opacity-80 hover:opacity-100 transition-opacity"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <button
              className="bg-purple-500 text-white font-medium rounded-full px-6 py-3 text-lg transition-all hover:bg-purple-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              SCHEDULE A DEMO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
