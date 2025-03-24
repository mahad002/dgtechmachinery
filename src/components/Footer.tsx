import { MapPin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white rounded-t-3xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <img
              src="https://dgtechmachinery.com/wp-content/uploads/2024/08/DG-TRCH-MACHINERY-03-1.webp"
              alt="DG Tech Machinery"
              className="h-12 w-auto mb-6"
            />
            <p className="text-gray-400">
              Leading provider of industrial machinery solutions with a commitment to innovation and excellence.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <p className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-blue-400 flex-shrink-0 mt-1" />
                <span>48-B, Aibak Block, New Garden Town, Lahore.</span>
              </p>
              <p className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-blue-400" />
                <a href="mailto:info@dgtechmachinery.com" className="hover:text-blue-400 transition-colors">
                  info@dgtechmachinery.com
                </a>
              </p>
              <p className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-blue-400" />
                <a href="tel:+924235861737" className="hover:text-blue-400 transition-colors">
                  +92 42 3586 1737
                </a>
              </p>
              <p className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-blue-400" />
                <a href="tel:+924235852010" className="hover:text-blue-400 transition-colors">
                  +92 42 35852010
                </a>
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Products', 'Solutions', 'Partners', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800/50 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} DG Tech Machinery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}