export default function Navbar() {
    return (
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
  
          {/* LEFT - LOGO */}
          <div className="flex items-center gap-3">
            {/* <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-sm shadow">
              
            </div> */}
            <span className="font-semibold text-gray-800 text-2xl ">
              Kishore Marketing
            </span>
          </div>
  
          {/* CENTER - NAV LINKS */}
          
  
          {/* RIGHT - CTA */}
          <a
            href="tel:9590909089"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium shadow hover:bg-blue-700 transition"
          >
            Call Now
          </a>
  
        </div>
      </header>
    );
  }