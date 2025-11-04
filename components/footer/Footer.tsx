import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/public/logo.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaTelegramPlane,
} from "react-icons/fa";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Sustainability", href: "/sustainability" },
    { name: "Memberships", href: "/memberships" },
  ];

  const aboutLinks = [
    { name: "About Us", href: "/about-us" },
    { name: "Our Services", href: "/our-services" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  const mediaLinks = [
    { name: "News", href: "/news" },
    { name: "Media & Resources", href: "/media-resources" },
    { name: "Career", href: "/career" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms-conditions" },
  ];

  const socialLinks = [
    { icon: FaFacebookF, href: "https://facebook.com", label: "Facebook" },
    { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
    { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
    { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: FaTelegramPlane, href: "https://telegram.com", label: "Telegram" },
  ];

  return (
    <footer className="bg-[#0A142F] text-white relative overflow-hidden">
      {/* Partner Design Image */}
      <div className="absolute right-0 top-0 h-full w-1/3 opacity-40 pointer-events-none z-0">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          {/* Big outer triangle (no bottom line) */}
          <path
            d="M5,85 L50,0 L95,85"
            stroke="#919EA8"
            strokeWidth="0.1"
            fill="none"
          />

          {/* Middle triangle */}
          <path
            d="M20,85,L50,25 L80,85"
            stroke="#919EA8"
            strokeWidth="0.1"
            fill="none"
          />

          {/* Inner triangle */}
          <path
            d="M35,85 L50,50 L65,85"
            stroke="#919EA8"
            strokeWidth="0.1"
            fill="none"
          />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section - Logo and Company Info */}
          <div className="space-y-6">
            {/* Logo and Company Name */}
            <div className="flex items-center space-x-4">
              <div>
                <Image
                  src={logo}
                  alt="Agro Benefit Lanka"
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
              <h2 className="text-2xl font-bold mb-2">
                Agro Benefit Lanka Pvt Ltd
              </h2>
            </div>

            {/* Company Description */}
            <p className="text-(--color-secondary) text-sm leading-relaxed max-w-lg">
              This area is reserved for the ABL company's <br /> short
              introduction that fits in to the footer <br /> section.
            </p>
          </div>

          {/* Right Section - Navigation Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Quick Link */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">
                Quick Link
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-(--color-secondary) hover:text-(--color-primary) transition-colors text-sm block py-1"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* About */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">About</h3>
              <ul className="space-y-3">
                {aboutLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-(--color-secondary) hover:text-(--color-primary) transition-colors text-sm block py-1"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Media */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Media</h3>
              <ul className="space-y-3">
                {mediaLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-(--color-secondary) hover:text-(--color-primary) transition-colors text-sm block py-1"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-(--color-secondary) hover:text-(--color-primary) transition-colors text-sm block py-1"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Social Media Links */}
      <div className="flex flex-col justify-center items-center gap-4 space-x-3 mb-4">
        <div className="text-(--color-secondary) text-sm">
          © 2020 ABL (Pvt) Ltd. All rights reserved.
        </div>
        <div className="flex justify-center space-x-6">
          {socialLinks.map((social, index) => (
            <Link
              key={index}
              href={social.href}
              className="w-10 h-10 rounded-full border-2 border-(--color-secondary) hover:bg-(--color-primary) transition-all duration-300 flex items-center justify-center group"
              aria-label={social.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <social.icon className="w-4 h-4 text-white group-hover:text-white" />
            </Link>
          ))}
        </div>
      </div>
      {/* Horizontal Line */}
      <hr className="border-(--color-secondary)" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Legal Links */}
        <div className="flex justify-between items-center gap-6 text-sm">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-40">
            <Link
              href="/terms-conditions"
              className="text-white hover:text-(--color-primary) transition-colors"
            >
              TERMS & CONDITIONS
            </Link>
            <Link
              href="/privacy-policy"
              className="text-white hover:text-(--color-primary) transition-colors"
            >
              PRIVACY POLICY
            </Link>
          </div>
          <div className="text-(--color-secondary)">
            Copyright © 2024 ABL (Pvt) Ltd
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
