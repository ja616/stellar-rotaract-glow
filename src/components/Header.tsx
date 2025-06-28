
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-deep-base/90 backdrop-blur-xl border-b border-accent-pink/20">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4 transform hover:scale-105 transition-all duration-300" onClick={handleNavClick}>
            <img 
              src="/lovable-uploads/f993c44b-d4fd-4f34-bca0-651a08316ee6.png" 
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
                className={`transition-all duration-300 font-medium font-poppins text-sm tracking-wide transform hover:scale-105 ${
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
                className="bg-gradient-to-r from-bright-purple to-pink-bright hover:from-accent-pink hover:to-bright-purple text-white px-6 py-2 font-semibold font-poppins text-sm tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-accent-pink/30 rounded-full transform hover:scale-105"
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
          <nav className="lg:hidden mt-4 pb-4 border-t border-accent-pink/20">
            <div className="flex flex-col space-y-4 mt-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`transition-colors duration-300 font-medium py-2 font-poppins ${
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
                  className="bg-gradient-to-r from-bright-purple to-pink-bright text-white w-full mt-4 rounded-full font-poppins"
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
