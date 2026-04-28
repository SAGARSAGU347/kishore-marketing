export default function Footer() {
    return (
      <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
  
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
  
          {/* BRAND */}
          <div>
            <h2 className="text-xl font-bold text-white">
              Kishore Marketing
            </h2>
            <p className="mt-3 text-gray-400">
              Trusted Britannia distributor supplying quality products across Bangalore.
            </p>
          </div>
  
          <br/>
  
          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <p className="mt-3">📞 +91 9590909089</p>
            <p className="mt-1">📍 Bangalore, Karnataka</p>
          </div>
  
        </div>
  
        {/* Divider */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
          © 2026 Kishore Marketing • Britannia Distributor
        </div>
      </footer>
    );
  }