"use client";

import Image from "next/image";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaTelegramPlane,
} from "react-icons/fa";
import bgShape from "@/assets/contact-us/leaf.png";

const ContactUs = () => {
  return (
    <section>
      <div className="mx-auto text-center">
        {/* Title */}
        <div className="bg-[#F6F8FD] py-16 px-6">
          <h1 className="text-4xl text-black font-medium">Contact Us</h1>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start relative z-10 mt-12 lg:mt-20">
            {/* Left: Contact Details */}
            <div className="text-left">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6 text-black">
                Get in Touch with Us
              </h3>
              <p className="text-[#555] leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                We'd love to hear from you! Whether you are a farmer, consumer,
                partner, or supporter, Agro Benefit Lanka (ABL) welcomes your
                questions, ideas, and collaborations. Every message helps us
                grow our community, strengthen the agricultural ecosystem, and
                create lasting impact across Sri Lanka.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center gap-3 md:gap-4 bg-white border border-gray-200 rounded-lg px-3 md:px-4 py-3 shadow-sm">
                  <FaPhone className="text-(--color-primary) text-lg md:text-xl" />
                  <div>
                    <p className="text-xs md:text-sm font-medium text-gray-600">
                      Hotline :
                    </p>
                    <p className="text-black font-semibold text-sm md:text-base">
                      (+94) 770 111 111 &nbsp; | &nbsp; (+94) 770 111 112
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 md:gap-4 bg-white border border-gray-200 rounded-lg px-3 md:px-4 py-3 shadow-sm">
                  <FaEnvelope className="text-(--color-primary) text-lg md:text-xl" />
                  <div>
                    <p className="text-xs md:text-sm font-medium text-gray-600">
                      Email :
                    </p>
                    <p className="text-black font-semibold text-sm md:text-base">
                      info@polygon.lk
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 md:gap-4 bg-white border border-gray-200 rounded-lg px-3 md:px-4 py-3 shadow-sm">
                  <FaMapMarkerAlt className="text-(--color-primary) text-lg md:text-xl" />
                  <div>
                    <p className="text-xs md:text-sm font-medium text-gray-600">
                      Address :
                    </p>
                    <p className="text-black font-semibold text-sm md:text-base">
                      No.46/42, Nawam Mawatha, Colombo 02
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 md:gap-4 mt-6 md:mt-8">
                <a
                  href="https://www.facebook.com/profile.php?id=61582676188251"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-[#0F182A] text-white hover:bg-[#1877F2] transition text-sm md:text-base"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.instagram.com/govimart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-[#0F182A] text-white hover:bg-[#833AB4] transition text-sm md:text-base"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-[#0F182A] text-white hover:bg-[#1DA1F2] transition text-sm md:text-base"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-[#0F182A] text-white hover:bg-[#0A66C2] transition text-sm md:text-base"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://t.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-[#0F182A] text-white hover:bg-[#0088CC] transition text-sm md:text-base"
                >
                  <FaTelegramPlane />
                </a>
              </div>
            </div>
            {/* Right: Contact Form */}
            <div className="relative border border-gray-200 rounded-2xl p-4 md:p-6 lg:p-8 shadow-md overflow-hidden">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 relative z-10">
                <input
                  type="text"
                  placeholder="First Name"
                  className="border border-[#77809D] rounded-full px-4 py-3 md:py-4 focus:outline-none focus:border-(--color-primary) text-sm md:text-base"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border border-[#77809D] rounded-full px-4 py-3 md:py-4 focus:outline-none focus:border-(--color-primary) text-sm md:text-base"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="border border-[#77809D] rounded-full px-4 py-3 md:py-4 focus:outline-none focus:border-(--color-primary) text-sm md:text-base"
                />
                <input
                  type="text"
                  placeholder="Company (If Applicable)"
                  className="border border-[#77809D] rounded-full px-4 py-3 md:py-4 focus:outline-none focus:border-(--color-primary) text-sm md:text-base"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="col-span-2 border border-[#77809D] rounded-full px-4 py-3 md:py-4 focus:outline-none focus:border-(--color-primary) text-sm md:text-base"
                />
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="col-span-2 border border-[#77809D] rounded-2xl px-4 py-3 md:py-4 focus:outline-none focus:border-(--color-primary) text-sm md:text-base"
                />
                <div className="col-span-2 flex justify-center mt-3 md:mt-4">
                  <button
                    type="submit"
                    className="bg-(--color-primary) hover:bg-[#F12672] text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-full transition-all text-sm md:text-base w-full md:w-auto"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            {/* Background Image - Positioned on the right side for desktop only */}
            <div className="hidden lg:block absolute -right-40 -bottom-10 w-1/2 h-full -z-10">
              <Image
                src={bgShape}
                alt="Background Leaf"
                fill
                className="object-contain object-bottom-right pointer-events-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
