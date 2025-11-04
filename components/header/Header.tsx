"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars } from "react-icons/fa";
import Image from "next/image";
import logo from "@/assets/public/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: "Our Services", href: "/our-services" },
    { name: "About Us", href: "/about-us" },
    { name: "Our Approach", href: "/our-approach" },
    { name: "Projects", href: "/projects" },
    { name: "Memberships", href: "/memberships" },
    { name: "Sustainability", href: "/sustainability" },
    { name: "Contact Us", href: "/contact" },
  ];

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg py-2" : "bg-white shadow-md py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="">
            <Link
              href="/"
              className="block"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Image
                src={logo}
                alt="Agro Benefit Lanka"
                className="h-8 w-auto md:h-10"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors relative group py-1 ${
                  isActive(item.href)
                    ? "text-(--color-primary)"
                    : "text-[#737F88] hover:text-(--color-primary)"
                }`}
              >
                {item.name}
                {/* Active/ Hover underline */}
                <span
                  className={`absolute -bottom-1 left-0 h-1 bg-(--color-primary) transition-all ${
                    isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-black hover:text-(--color-primary) focus:outline-none focus:ring-2 focus:ring-(--color-primary) p-2 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <FaBars className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden bg-white ${
            isMobileMenuOpen
              ? "max-h-96 opacity-100 py-4 "
              : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col space-y-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors py-2 px-4 rounded-lg ${
                  isActive(item.href)
                    ? "text-(--color-primary) border-l-4 border-(--color-primary)"
                    : "text-(--color-secondary) hover:bg-gray-50 hover:text-(--color-primary)"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
