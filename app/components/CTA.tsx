export default function CTA() {
    return (
      <section className="relative py-24 bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 text-white overflow-hidden">
  
        {/* Glow effects */}
        <div className="absolute top-[-80px] left-[-80px] w-72 h-72 bg-blue-400 opacity-30 blur-3xl rounded-full"></div>
        <div className="absolute bottom-[-80px] right-[-80px] w-72 h-72 bg-purple-500 opacity-20 blur-3xl rounded-full"></div>
  
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
  
          <h2 className="text-3xl md:text-4xl font-bold">
            Contact Us for Bulk Orders
          </h2>
  
          <p className="mt-3 text-blue-100">
            Get the best price and fast delivery for Britannia products
          </p>
  
          {/* Buttons */}
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
  
            <a
              href="tel:9590909089"
              className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
            >
              📞 Call Now
            </a>
  
            <a
               href="https://wa.me/+919590909089"
              className="bg-green-500 px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
            >
              💬 WhatsApp
            </a>
  
          </div>
  
        </div>
  
        {/* Bottom curve */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-white rounded-t-[100%]"></div>
      </section>
    );
  }