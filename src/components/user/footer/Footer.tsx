import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">SaiFashionZone</h3>
            <p className="text-sm">
              Your one-stop destination for trendy fashion wear. Quality meets style at
              affordable prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm hover:text-purple-400">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-purple-400">Contact</Link>
              </li>
              <li>
                <Link to="/shipping" className="text-sm hover:text-purple-400">Shipping Policy</Link>
              </li>
              <li>
                <Link to="/returns" className="text-sm hover:text-purple-400">Returns & Exchanges</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+91 1234567890</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">contact@saifashionzone.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">123 Fashion Street, Mumbai, India</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-purple-400">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-purple-400">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-purple-400">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} SaiFashionZone. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;