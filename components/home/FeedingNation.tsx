import Link from "next/link";

const FeedingNation = () => {
  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-semibold text-black mb-3">
          Empowering Farmers, Feeding the Nation
        </h2>
        <div className="lg:w-[700px] h-1 bg-(--color-primary) mx-auto mb-6 "></div>

        {/* Description */}
        <p className="mx-auto mb-6 leading-relaxed text-[#53595E] max-w-7xl">
          Agro Benefit Lanka is transforming the way Sri Lanka grows and shares
          its harvest. We empower farmers to become successful agripreneurs,
          connecting their hard work directly to the homes and hearts of our
          people. Through technology and trust, we bring fresh, wholesome
          produce from our fields to your table, building a fair, sustainable,
          and proudly local food movement.
        </p>

        {/* Learn More Button */}
        <Link href="/about-us">
          <button className="text-(--color-primary) underline font-medium cursor-pointer">
            Learn More
          </button>
        </Link>
      </div>
    </section>
  );
};

export default FeedingNation;
