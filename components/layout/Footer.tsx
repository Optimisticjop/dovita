export default function Footer() {
  return (
    <footer className="bg-green-950 text-white mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-lg font-bold">Dovita Organics</h2>
          <p className="text-sm text-gray-300 mt-2">
            Premium skincare and haircare solutions for natural beauty.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Shop</li>
            <li>Results</li>
            <li>Consultation</li>
            <li>Wholesale</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>Terms</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 py-4 border-t border-green-900">
        © {new Date().getFullYear()} Dovita Organics. All rights reserved.
      </div>
    </footer>
  );
}
