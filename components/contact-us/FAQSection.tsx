"use client";

import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

const faqs = [
  {
    question: "How can I contact Agro Benefit Lanka (ABL)?",
    answer:
      "We’d love to hear from you! Whether you are a farmer, consumer, partner, or supporter, Agro Benefit Lanka (ABL) welcomes your questions, ideas, and collaborations. Every message helps us grow our community, strengthen the agricultural ecosystem, and create lasting impact across Sri Lanka.",
  },
  {
    question: "What services does ABL provide to farmers?",
    answer:
      "ABL provides a range of services such as crop consultation, digital tools for farm management, and support in connecting with buyers and markets across Sri Lanka.",
  },
  {
    question: "How can I partner or collaborate with ABL?",
    answer:
      "You can reach out to us via our Contact page or email. We welcome partnerships from both local and international organizations to build a sustainable agricultural ecosystem.",
  },
  {
    question: "Is ABL available for consumers as well?",
    answer:
      "Yes! Consumers can learn about sustainable agriculture and directly support farmers by purchasing products through our partner programs.",
  },
  {
    question: "Where is ABL located?",
    answer:
      "Our head office is located at No.46/42, Nawam Mawatha, Colombo 02, Sri Lanka.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-white px-6">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl text-black font-medium">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600 mt-2 text-lg">
          Got{" "}
          <span className="text-(--color-primary) font-semibold">
            Questions?
          </span>{" "}
          We’ve Got{" "}
          <span className="text-(--color-primary) font-semibold">Answers</span>
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`rounded-4xl border transition-all duration-300 ${
              openIndex === index
                ? "border-[#D3D9E9] bg-white"
                : "bg-[#ECF0FB] border-transparent"
            }`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left"
            >
              <span className="font-semibold text-gray-900 text-base md:text-lg">
                {faq.question}
              </span>
              {openIndex === index ? (
                <IoClose className="w-10 h-10 rounded-full text-black bg-[#ECF0FB] p-2" />
              ) : (
                <IoIosArrowDown className="w-10 h-10 rounded-full text-black bg-white p-2" />
              )}
            </button>

            {openIndex === index && (
              <div className="px-6 pb-5 text-gray-600 text-sm md:text-base">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
