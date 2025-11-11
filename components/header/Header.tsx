"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaChevronLeft } from "react-icons/fa";
import Image from "next/image";
import logo from "@/assets/public/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSubHeader, setShowSubHeader] = useState(false);
  const [showMainMenu, setShowMainMenu] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: "Our Services", href: "/our-services" },
    { name: "About Us", href: "/about-us" },
    { name: "Our Approach", href: "/our-approach" },
    { name: "Projects", href: "/projects" },
    { name: "Memberships", href: "/memberships" },
    { name: "Sustainability", href: "/sustainability" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  const subNavigation = [
    { name: "News", href: "/news" },
    { name: "Media & Resources", href: "/media" },
    { name: "Career", href: "/career" },
  ];

  const isActive = (href: string) => pathname === href;

  // Scroll shadow
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Unified toggle handler
  const handleToggleMenu = () => {
    setShowSubHeader((prev) => !prev);
    setShowMainMenu((prev) => !prev);
  };

  return (
    <>
      {/* MAIN HEADER */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-lg py-4`}
      >
        <div className="container mx-auto px-4 sm:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="block"
              onClick={() => {
                setShowSubHeader(false);
                setShowMainMenu(false);
              }}
            >
              <Image
                src={logo}
                alt="Polygon"
                className="h-8 w-auto md:h-10"
                priority
              />
            </Link>

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
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-(--color-primary) transition-all ${
                      isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              ))}
            </nav>

            {/* Bars Icon (always visible) */}
            <button
              onClick={handleToggleMenu}
              className="text-black hover:text-(--color-primary) focus:outline-none p-2 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              <FaBars className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* SUB HEADER (Desktop + LG View) */}
      <div
        className={`fixed top-[70px] left-0 right-0 bg-[#F6F8FD] border-t border-gray-200 shadow-sm z-40 transition-all duration-500 hidden lg:block ${
          showSubHeader
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-10 pointer-events-none"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-8 flex items-center justify-center gap-8 py-4 overflow-x-auto">
          {/* Back Button */}
          <button
            onClick={handleToggleMenu}
            className="flex items-center gap-1 text-gray-700 hover:text-(--color-primary) transition"
          >
            <FaChevronLeft size={14} />
          </button>

          {/* Sub Navigation */}
          {subNavigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`relative text-sm font-medium transition-colors ${
                isActive(item.href)
                  ? "text-(--color-primary)"
                  : "text-[#737F88] hover:text-(--color-primary)"
              }`}
              onClick={() => handleToggleMenu()}
            >
              {item.name}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-(--color-primary) transition-all ${
                  isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
          ))}
        </div>
      </div>

      {/* MOBILE MENU (Navigation + SubNavigation Together) */}
      <div
        className={`lg:hidden fixed top-16 left-0 right-0 bg-white transition-all duration-500 overflow-hidden z-30 ${
          showMainMenu
            ? "max-h-[600px] opacity-100 py-4"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col space-y-3 px-4">
          {/* Main Navigation */}
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`font-medium transition-colors py-2 px-4 rounded-lg ${
                isActive(item.href)
                  ? "text-(--color-primary) border-l-4 border-(--color-primary)"
                  : "text-[#737F88] hover:bg-gray-50 hover:text-(--color-primary)"
              }`}
              onClick={() => handleToggleMenu()}
            >
              {item.name}
            </Link>
          ))}

          {/* Divider */}
          <hr className="my-3 border-gray-200" />

          {/* Sub Navigation */}
          {subNavigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`font-medium transition-colors py-2 px-4 rounded-lg ${
                isActive(item.href)
                  ? "text-(--color-primary) border-l-4 border-(--color-primary)"
                  : "text-[#737F88] hover:bg-gray-50 hover:text-(--color-primary)"
              }`}
              onClick={() => handleToggleMenu()}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;
