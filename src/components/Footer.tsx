import { Phone, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-amber-100">DA Furniture World</h3>
            <p className="text-amber-50 leading-relaxed">
              Providing quality furniture and home solutions for modern homes and offices. Your trusted partner for elegant, durable, and affordable furniture.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-amber-100">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', path: '/' },
                { label: 'Products', path: '/products' },
                { label: 'About Us', path: '/about' },
                { label: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    className="text-amber-50 hover:text-amber-200 transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="h-1 w-1 bg-amber-300 rounded-full"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-amber-300 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-amber-100 mb-1">Phone</p>
                <div className="space-y-1 text-amber-50">
                  <p>99669 75550</p>
                  <p>95819 47693</p>
                  <p>77805 30170</p>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-amber-300 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-amber-100">Hours</p>
                <p className="text-amber-50">Mon - Sun: 10:00 AM - 9:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-amber-50">
              DA Furniture World | Beside Panchavati Super Market, Hyderabad Road, Vinayak Nagar, Nizamabad, Telangana
            </p>
            <p className="text-amber-100 font-semibold">
              Best Quality... Best Price...
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
