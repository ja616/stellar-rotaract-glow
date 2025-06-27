
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

  const handleNavClick = () => {
    setIsMenuOpen(false);
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-accent-pink/10">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4" onClick={handleNavClick}>
            <img 
              src="/lovable-uploads/dfeb900c-11c2-44c7-a969-fea7575cdb95.png" 
              alt="Rotaract Club of BMS Yelahanka" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={handleNavClick}
                className={`transition-all duration-300 font-medium font-heading text-sm tracking-wide ${
                  isActive(item.href) 
                    ? 'text-accent-pink border-b-2 border-accent-pink pb-1' 
                    : 'text-gray-300 hover:text-accent-pink hover:border-b-2 hover:border-accent-pink hover:pb-1'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/donate" onClick={handleNavClick}>
              <Button 
                className="bg-gradient-to-r from-purple-highlight to-button-active hover:from-button-active hover:to-purple-highlight text-white px-6 py-2 font-semibold font-heading text-sm tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-button-active/30 rounded-full"
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
                  className={`transition-colors duration-300 font-medium py-2 font-heading ${
                    isActive(item.href) 
                      ? 'text-accent-pink' 
                      : 'text-gray-300 hover:text-accent-pink'
                  }`}
                  onClick={handleNavClick}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/donate" onClick={handleNavClick}>
                <Button 
                  className="bg-gradient-to-r from-purple-highlight to-button-active text-white w-full mt-4 rounded-full font-heading"
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
