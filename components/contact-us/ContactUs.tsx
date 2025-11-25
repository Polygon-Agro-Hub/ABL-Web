/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaCheckCircle,
  FaExclamationTriangle,
  FaTimes,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";

import bgShape from "@/assets/contact-us/leaf.png";

const ContactUs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState<{
    show: boolean;
    type: "success" | "error";
    message: string;
  }>({ show: false, type: "success", message: "" });

  const showAlert = (type: "success" | "error", message: string) => {
    setAlert({ show: true, type, message });
    // Auto hide after 5 seconds
    setTimeout(() => {
      setAlert((prev) => ({ ...prev, show: false }));
    }, 5000);
  };

  const closeAlert = () => {
    setAlert((prev) => ({ ...prev, show: false }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;

    const firstName = (form.elements[0] as HTMLInputElement).value;
    const lastName = (form.elements[1] as HTMLInputElement).value;
    const phone = (form.elements[2] as HTMLInputElement).value;
    const company = (form.elements[3] as HTMLInputElement).value;
    const email = (form.elements[4] as HTMLInputElement).value;
    const message = (form.elements[5] as HTMLTextAreaElement).value;

    const formData = { firstName, lastName, phone, company, email, message };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        showAlert(
          "success",
          "Message sent successfully! We will get back to you soon."
        );
        form.reset();
      } else {
        showAlert(
          "error",
          data.error || "Failed to send message. Please try again."
        );
      }
    } catch (error) {
      console.error(error);
      showAlert(
        "error",
        "An error occurred. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative">
      {/* Custom Alert Popup */}
      {alert.show && (
        <div className="fixed top-4 right-4 z-50 animate-slide-in">
          <div
            className={`relative flex items-center gap-4 p-6 rounded-2xl shadow-2xl min-w-80 max-w-md border-l-4 ${
              alert.type === "success"
                ? "bg-green-50 border-green-500 text-green-800"
                : "bg-red-50 border-red-500 text-red-800"
            }`}
          >
            {/* Icon */}
            <div
              className={`shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                alert.type === "success"
                  ? "bg-green-100 text-green-600"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {alert.type === "success" ? (
                <FaCheckCircle className="w-6 h-6" />
              ) : (
                <FaExclamationTriangle className="w-6 h-6" />
              )}
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-1">
                {alert.type === "success" ? "Success!" : "Oops!"}
              </h3>
              <p className="text-sm opacity-90">{alert.message}</p>
            </div>

            {/* Close Button */}
            <button
              onClick={closeAlert}
              className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center hover:scale-110 transition-transform ${
                alert.type === "success"
                  ? "hover:bg-green-200 text-green-600"
                  : "hover:bg-red-200 text-red-600"
              }`}
            >
              <FaTimes className="w-4 h-4" />
            </button>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-current opacity-20">
              <div
                className={`h-full ${
                  alert.type === "success" ? "bg-green-500" : "bg-red-500"
                } animate-progress`}
              />
            </div>
          </div>
        </div>
      )}

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
                <div className="flex items-center gap-3 md:gap-4 bg-white border border-[#D5D8E4] rounded-lg px-3 md:px-4 py-3 shadow-sm">
                  <div className="bg-black p-2 rounded-lg">
                    <FaPhoneAlt className="text-white text-lg md:text-xl w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm font-medium">Hotline :</p>
                    {/* Mobile View – 2 lines, NO "|" */}
                    <div className="block md:hidden text-black font-semibold text-sm">
                      <p>(+94) 770 111 111</p>
                      <p>(+94) 770 111 112</p>
                    </div>
                    {/* Desktop/Tablet – 1 line WITH "|" */}
                    <p className="hidden md:block text-black font-semibold text-base">
                      (+94) 770 111 111 &nbsp; | &nbsp; (+94) 770 111 112
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 md:gap-4 bg-white border border-[#D5D8E4] rounded-lg px-3 md:px-4 py-3 shadow-sm">
                  <div className="bg-black p-2 rounded-lg">
                    <MdEmail className="text-white text-lg md:text-xl w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm font-medium">Email :</p>
                    <p className="text-black font-semibold text-sm md:text-base">
                      info@polygon.lk
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 md:gap-4 bg-white border border-[#D5D8E4] rounded-lg px-3 md:px-4 py-3 shadow-sm">
                  <div className="bg-black p-2 rounded-lg">
                    <MdLocationOn className="text-white text-lg md:text-xl w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm font-medium">Address :</p>
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
                  href="https://www.tiktok.com/@govimart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-[#0F182A] text-white hover:bg-[#00F0FF] transition text-sm md:text-base"
                >
                  <FaTiktok />
                </a>
                <a
                  href="https://www.youtube.com/@GovimartSriLanka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-[#0F182A] text-white hover:bg-[#FF0000] transition text-sm md:text-base"
                >
                  <FaYoutube />
                </a>
                <a
                  href="https://www.instagram.com/govimart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-[#0F182A] text-white hover:bg-[#DD2A7B] transition text-sm md:text-base"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="relative border border-[#B6BDD2] rounded-2xl p-4 md:p-6 lg:p-8 shadow-md overflow-hidden">
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 md:gap-4 relative z-10"
              >
                <input
                  type="text"
                  placeholder="First Name"
                  required
                  className="border border-[#77809D] rounded-full px-4 py-3 md:py-4 focus:outline-none focus:border-(--color-primary) text-sm md:text-base"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  required
                  className="border border-[#77809D] rounded-full px-4 py-3 md:py-4 focus:outline-none focus:border-(--color-primary) text-sm md:text-base"
                />
                <input
                  type="number"
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
                  required
                  className="col-span-1 md:col-span-2 border border-[#77809D] rounded-full px-4 py-3 md:py-4 focus:outline-none focus:border-(--color-primary) text-sm md:text-base"
                />
                <textarea
                  placeholder="Message"
                  rows={4}
                  required
                  className="col-span-1 md:col-span-2 border border-[#77809D] rounded-2xl px-4 py-3 md:py-4 focus:outline-none focus:border-(--color-primary) text-sm md:text-base"
                />
                <div className="col-span-1 md:col-span-2 flex justify-center mt-3 md:mt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`bg-(--color-primary) hover:bg-[#F12672] text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-full transition-all text-sm md:text-base w-full md:w-auto ${
                      isSubmitting
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:scale-105"
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* Background Image */}
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

      {/* Add custom animations to your global CSS */}
      <style jsx>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes progress {
          from {
            width: 100%;
          }
          to {
            width: 0%;
          }
        }

        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }

        .animate-progress {
          animation: progress 5s linear forwards;
        }
      `}</style>
    </section>
  );
};

export default ContactUs;
