import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import SearchBar from './SearchBar';
import { useAuth } from '../../../hooks/useAuth';
import UserMenu from '../../common/UserMenu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAuth();

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-purple-600">SaiFashionZone</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/shop" className="nav-link">Shop</Link>
            <Link to="/occasions" className="nav-link">Occasions</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <SearchBar />
            {user ? (
              <div className="flex items-center space-x-4">
                <Link to="/cart" className="p-2 hover:bg-gray-100 rounded-full">
                  <ShoppingCart className="h-6 w-6" />
                </Link>
                <UserMenu />
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <SearchBar />
            <Link to="/" className="mobile-nav-link">Home</Link>
            <Link to="/shop" className="mobile-nav-link">Shop</Link>
            <Link to="/occasions" className="mobile-nav-link">Occasions</Link>
            <Link to="/about" className="mobile-nav-link">About</Link>
            <Link to="/contact" className="mobile-nav-link">Contact</Link>
            {user ? (
              <>
                <Link to="/cart" className="mobile-nav-link">Cart</Link>
                <Link to="/profile" className="mobile-nav-link">Profile</Link>
                {user.role === 'admin' && (
                  <Link to="/admin" className="mobile-nav-link">Admin Dashboard</Link>
                )}
              </>
            ) : (
              <Link to="/login" className="mobile-nav-link">Login</Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;