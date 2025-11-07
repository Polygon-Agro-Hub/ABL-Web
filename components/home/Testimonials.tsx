import { IoIosStar } from "react-icons/io";

const testimonials = [
  {
    name: "Crystal Maiden",
    role: "UI/UX Designer",
    feedback:
      "The quality of the design is top-notch, and I love how organized the files are. It's easy to find what I need.",
    image: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Dazzle Healer",
    role: "Front End Developer",
    feedback:
      "This kit exceeded my expectations! The components are versatile and make implementation much easier.",
    image: "https://i.pravatar.cc/100?img=2",
  },
  {
    name: "Roshan Pro Max",
    role: "UI/UX Designer",
    feedback:
      "Perfect for quick prototyping! The designs are professional and work seamlessly with my workflow.",
    image: "https://i.pravatar.cc/100?img=3",
  },
  {
    name: "Mirana Marci",
    role: "3D Designer",
    feedback:
      "I was blown away by how complete this UI kit is. It has everything I need, from assets to components.",
    image: "https://i.pravatar.cc/100?img=4",
  },
  {
    name: "Hearts of Taras",
    role: "Logo Designer",
    feedback:
      "Amazing work! The color schemes are vibrant, and the icons fit perfectly with all my projects.",
    image: "https://i.pravatar.cc/100?img=5",
  },
  {
    name: "Nexus Nova",
    role: "Graphic Designer",
    feedback:
      "Absolutely love the simplicity and usability of this kit. It’s a pleasure to work with!",
    image: "https://i.pravatar.cc/100?img=6",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#F6F8FD] py-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-pink-500 font-bold mb-2">Customer Feedback</p>
        <h2 className="text-3xl sm:text-4xl font-semibold text-black mb-12">
          What Our Customers Say About Us
        </h2>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 rounded-full mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-900">
                {item.name}
              </h3>
              <p className="text-sm text-gray-500">{item.role}</p>

              <hr className="my-4 border border-[#E9EFF5] w-full" />
              <p className="text-[#0F1125] text-base mb-6">{item.feedback}</p>
              <div className="flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <IoIosStar
                    key={i}
                    size={18}
                    className="fill-[#FF7F22] text-[#FF7F22]"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
