"use client";

import { useState } from "react";
import { newsData } from "@/data/news-data";
import Image from "next/image";
import { MdKeyboardArrowLeft } from "react-icons/md";

import { FaCalendarAlt, FaArrowLeft } from "react-icons/fa";

const NewsSection = () => {
  const [selectedNews, setSelectedNews] = useState<number | null>(null);

  // Function to truncate description to 100 words
  const truncateDescription = (text: string, maxWords: number) => {
    const words = text.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    }
    return text;
  };

  // Function to format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Get selected news item
  const selectedNewsItem = selectedNews
    ? newsData.find((news) => news.id === selectedNews)
    : null;

  // Get other news items (excluding selected one)
  const otherNews = selectedNews
    ? newsData.filter((news) => news.id !== selectedNews)
    : newsData;

  if (selectedNewsItem) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-black mb-4">
              Explore Our Latest News
            </h2>
          </div>
          {/* Go Back Button */}
          <div className="mb-8">
            <button
              onClick={() => setSelectedNews(null)}
              className="flex items-center gap-2 text-black hover:text-(--color-primary) font-semibold transition-colors group mb-6 underline cursor-pointer"
            >
              <MdKeyboardArrowLeft className="w-6 h-6" />
              Go back to view all news
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Full News Preview - 2/3 width */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                {/* News Image */}
                <div className="relative h-80 w-full mb-6">
                  <Image
                    src={selectedNewsItem.image}
                    alt={selectedNewsItem.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* News Content */}
                <div className="space-y-4 px-6">
                  {/* Title */}
                  <h1 className="text-3xl font-bold text-black">
                    {selectedNewsItem.title}
                  </h1>

                  {/* Date */}
                  <div className="flex items-center gap-2 text-sm text-[#595959] font-semibold">
                    <span>{formatDate(selectedNewsItem.date)}</span>
                  </div>

                  {/* Full Description */}
                  <div className="prose max-w-none pb-6">
                    <p
                      className="text-[#393939] leading-relaxed text-lg"
                      dangerouslySetInnerHTML={{
                        __html: selectedNewsItem.description,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Other News Sidebar - 1/3 width */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <div className="space-y-6 max-h-screen overflow-y-auto pr-2">
                  {otherNews.map((news) => (
                    <div
                      key={news.id}
                      className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-[#ECECEF]"
                      onClick={() => setSelectedNews(news.id)}
                    >
                      {/* News Image */}
                      <div className="relative h-48 w-full">
                        <Image
                          src={news.image}
                          alt={news.title}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* News Content */}
                      <div className="p-6 pb-0">
                        {/* Title */}
                        <h3 className="text-xl font-semibold text-black mb-3 line-clamp-2">
                          {news.title}
                        </h3>

                        {/* Description */}
                        <p className="text-[#5F5F5F] leading-relaxed mb-4 line-clamp-3">
                          {truncateDescription(news.description, 20)}
                        </p>
                      </div>

                      <hr className="border border-[#ECECEF] mb-4" />

                      <div className="px-6 pt-0 pb-4">
                        <div className="flex justify-between items-center">
                          {/* Date */}
                          <div className="flex items-center text-sm text-black font-semibold">
                            <span>{formatDate(news.date)}</span>
                          </div>
                          {/* See More Button */}
                          <button
                            onClick={() => setSelectedNews(news.id)}
                            className="flex items-center text-(--color-primary) font-semibold transition-colors group cursor-pointer"
                          >
                            See more
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-black mb-4">
            Explore Our Latest News
          </h2>
        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((news) => (
            <div
              key={news.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-[#ECECEF]"
            >
              {/* News Image */}
              <div className="relative h-48 w-full">
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* News Content */}
              <div className="p-6 pb-0">
                {/* Title */}
                <h3 className="text-xl font-semibold text-black mb-3 line-clamp-2">
                  {news.title}
                </h3>

                {/* Description */}
                <p className="text-[#5F5F5F] leading-relaxed mb-4 line-clamp-3">
                  {truncateDescription(news.description, 20)}
                </p>
              </div>
              <hr className="border border-[#ECECEF] mb-4" />
              <div className="px-6 pt-0 pb-4">
                <div className="flex justify-between items-center">
                  {/* Date */}
                  <div className="flex items-center text-sm text-black font-semibold">
                    <span>{formatDate(news.date)}</span>
                  </div>
                  {/* See More Button */}
                  <button
                    onClick={() => setSelectedNews(news.id)}
                    className="flex items-center text-(--color-primary) font-semibold transition-colors group  cursor-pointer"
                  >
                    See more
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
