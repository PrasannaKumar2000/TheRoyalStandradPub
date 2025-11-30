import { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, Beer } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navbar = ({ currentPage, onNavigate }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { getCartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'Menu', 'Services', 'Events', 'About', 'Contact'];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-slate-900/95 backdrop-blur-md shadow-2xl'
          : 'bg-gradient-to-r from-slate-900/80 to-slate-800/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => onNavigate('Home')}
          >
            <div className="relative">
              <Beer className="h-10 w-10 text-amber-500 group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute -inset-1 bg-amber-500/20 rounded-full blur-xl group-hover:bg-amber-500/40 transition-all duration-300" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              The Royal Pint
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => onNavigate(link)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 relative group ${
                  currentPage === link
                    ? 'text-amber-400'
                    : 'text-gray-300 hover:text-amber-400'
                }`}
              >
                {link}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 transform origin-left transition-transform duration-300 ${
                    currentPage === link ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </button>
            ))}
            <button
              onClick={() => onNavigate('Cart')}
              className="ml-4 relative p-2 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 transition-all duration-300 group"
            >
              <ShoppingCart className="h-6 w-6 text-amber-400 group-hover:scale-110 transition-transform duration-300" />
              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                  {getCartCount()}
                </span>
              )}
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => onNavigate('Cart')}
              className="relative p-2 rounded-lg bg-amber-500/10"
            >
              <ShoppingCart className="h-6 w-6 text-amber-400" />
              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-amber-400 transition-colors duration-300"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 bg-slate-900/95 backdrop-blur-md">
          {navLinks.map((link, index) => (
            <button
              key={link}
              onClick={() => {
                onNavigate(link);
                setIsOpen(false);
              }}
              className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 transform ${
                currentPage === link
                  ? 'bg-amber-500/20 text-amber-400'
                  : 'text-gray-300 hover:bg-slate-800 hover:text-amber-400 hover:translate-x-2'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {link}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
