export default function Location() {
    return (
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
  
          {/* MAP */}
          <div className="relative group">
          <iframe
  src="https://www.google.com/maps?q=13.0588653,77.4909148&output=embed"
  className="w-full h-80 rounded-2xl shadow-lg border border-gray-200"
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
  
            {/* Hover border */}
            <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-blue-400 transition"></div>
          </div>
  
          {/* CONTENT */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              Our Location
            </h2>
  
            <p className="mt-4 text-gray-600">
              We supply Britannia products across Bangalore including Whitefield,
              Hosakerehalli, and nearby areas.
            </p>
  
            {/* Info Cards */}
            <div className="mt-6 space-y-4">
              
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white shadow-md text-gray-800 font-medium hover:shadow-xl transition">
                <span className="text-xl">📍</span>
                Bangalore, Karnataka
              </div>
  
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white shadow-md text-gray-800 font-medium hover:shadow-xl transition">
                <span className="text-xl">🚚</span>
                Fast delivery available
              </div>
  
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white shadow-md text-gray-800 font-medium hover:shadow-xl transition">
                <span className="text-xl">🏪</span>
                Serving retail & wholesale shops
              </div>
  
            </div>
  
            {/* CTA */}
            <a
              href="https://maps.google.com"
              target="_blank"
              className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-md"
            >
              Open in Google Maps
            </a>
          </div>
  
        </div>
      </section>
    );
  }