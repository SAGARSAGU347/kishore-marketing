export default function WhyUs() {
    const points = [
      {
        title: "Genuine Products",
        desc: "100% original Britannia products",
        icon: "✔️",
      },
      {
        title: "Wholesale Pricing",
        desc: "Best rates for retailers & bulk buyers",
        icon: "💰",
      },
      {
        title: "Fast Delivery",
        desc: "Quick and reliable supply across Bangalore",
        icon: "🚚",
      },
      {
        title: "Trusted Supply",
        desc: "Serving multiple shops consistently",
        icon: "🏪",
      },
    ];
  
    return (
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
  
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Why Choose Us
          </h2>
  
          <p className="text-gray-500 mt-2">
            Reliable distribution with quality and consistency
          </p>
  
          {/* Cards */}
          <div className="grid md:grid-cols-4 gap-8 mt-12">
            {points.map((item) => (
              <div
                key={item.title}
                className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition text-center"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
  
                <h3 className="font-semibold text-lg text-gray-800">
                  {item.title}
                </h3>
  
                <p className="text-gray-500 text-sm mt-2">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
  
        </div>
      </section>
    );
  }