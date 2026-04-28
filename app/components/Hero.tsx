import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center text-white overflow-hidden">

      {/* 🔥 HIGH QUALITY IMAGE (NO CSS BACKGROUND) */}
      <Image
        src="/Hero3.png"
        alt="Britannia Products"
        fill
        priority
        quality={100}
        className="object-cover object-right"
      />

      {/* 🔥 CLEAN OVERLAY (not killing quality) */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-800/60 to-transparent"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">

        <div className="max-w-xl">

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Britannia Products Distributor
            <span className="block text-blue-200 mt-2">
              in Bangalore
            </span>
          </h1>

          <p className="mt-5 text-blue-100 text-lg">
            Supplying genuine Britannia products to retailers and wholesale businesses.
          </p>

          {/* CTA */}
          <div className="mt-8 flex gap-4">
            <a
              href="tel:9590909089"
              className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition"
            >
              📞 Call Now
            </a>

            <a
              href="https://wa.me/+919590909089"
              className="bg-green-500 px-6 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition"
            >
              💬 WhatsApp
            </a>
          </div>

          {/* TRUST */}
          <div className="mt-6 flex gap-6 text-sm text-blue-200">
            <span>✓ Genuine Products</span>
            <span>✓ Consistent Supply</span>
            <span>✓ Trusted by Retailers</span>
          </div>

        </div>
      </div>
    </section>
  );
}