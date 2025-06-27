
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Team', href: '/team' },
    { name: 'Join Us', href: '/join' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-purple-highlight/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-accent-pink to-purple-highlight rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">R</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Rotaract BMSY</h1>
              <p className="text-xs text-gray-400">Service Above Self</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`transition-colors duration-300 font-medium ${
                  isActive(item.href) 
                    ? 'text-accent-pink' 
                    : 'text-gray-300 hover:text-accent-pink'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/donate">
              <Button 
                className="bg-gradient-to-r from-purple-highlight to-button-active hover:from-button-active hover:to-purple-highlight text-white px-6 py-2 font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-button-active/50 animate-pulse"
              >
                Donate Now
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-purple-highlight/20">
            <div className="flex flex-col space-y-4 mt-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`transition-colors duration-300 font-medium py-2 ${
                    isActive(item.href) 
                      ? 'text-accent-pink' 
                      : 'text-gray-300 hover:text-accent-pink'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/donate" onClick={() => setIsMenuOpen(false)}>
                <Button 
                  className="bg-gradient-to-r from-purple-highlight to-button-active text-white w-full mt-4"
                >
                  Donate Now
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
