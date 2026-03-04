import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img className="h-12 md:h-16 w-auto" src="https://res.cloudinary.com/dfc5smckf/image/upload/v1772642394/Eurostarlogon_tfgvah.png" alt="School Logo" />
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Shaping tomorrow's leaders today through excellence in education and holistic development.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#643288] transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#643288] transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#643288] transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#643288] transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-blue-400 transition-colors">Facilities</a>
              </li>
              <li>
                <a href="#activities" className="hover:text-blue-400 transition-colors">Activities</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-blue-400 transition-colors">Gallery</a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-white font-bold mb-4">Programs</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">Nursery & Kindergarten</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">Primary School</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">Middle School</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">High School</a>
              </li>
              <li>
                <a href="#activities" className="hover:text-blue-400 transition-colors">Extracurricular</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2">
                <MapPin className="w-5 h-5 text-[#843288] flex-shrink-0" />
                <span>Koteshwor, Gaurighat, Gothatar, Chuchchepati</span>
              </li>
              <li className="flex gap-2">
                <Phone className="w-5 h-5 text-[#843288] flex-shrink-0" />
                <span>9851181927, 9860112013</span>
              </li>
              <li className="flex gap-2">
                <Mail className="w-5 h-5 text-[#843288] flex-shrink-0" />
                <span>info@eurostarschool.edu.np</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-gray-400">
              © 2026 Euro Star School. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
