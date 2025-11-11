import { FaCheck } from "react-icons/fa";

const MutualImpact = () => {
  const points = [
    "Farmers gain access to affordable credit, insurance, and capital to invest in inputs, equipment, and improvements in their farms.",
    "Sponsors and investors can actively support rural agripreneurs, strengthen livelihoods, and enhance their visibility as development-focused partners.",
    "The ABL ecosystem ensures that farmers are not trapped in cycles of debt but are empowered to grow as sustainable, self-reliant agripreneurs.",
  ];

  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-3">
          Mutual Impact
        </h2>
        <div className="w-28 h-1 bg-(--color-primary) mx-auto mb-10 rounded-full"></div>

        {/* List */}
        <ul className="space-y-6 text-left text-black">
          {points.map((point, index) => (
            <li key={index} className="flex items-start gap-3">
              <FaCheck className="text-(--color-primary) mt-1 text-2xl" />
              <span className="leading-relaxed text-lg">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MutualImpact;
