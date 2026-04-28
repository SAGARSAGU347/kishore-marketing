export default function StickyBar() {
    return (
      <div className="fixed bottom-0 left-0 right-0 flex md:hidden">
        <a
          href=" tel:9590909089"
          className="w-1/2 bg-blue-600 text-white text-center py-3"
        >
          Call
        </a>
  
        <a
          href="https://wa.me/+919590909089"
          className="w-1/2 bg-green-500 text-white text-center py-3"
        >
          WhatsApp
        </a>
      </div>
    );
  }