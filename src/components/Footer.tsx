
import { Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Join Us', href: '#join' },
    { name: 'Events', href: '#events' },
    { name: 'Contact', href: '#contact' },
    { name: 'Donate', href: '#donate' }
  ];

  return (
    <footer className="bg-footer-shadow text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Club Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-accent-pink to-purple-highlight rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Rotaract BMSY</h3>
                <p className="text-sm text-gray-400">Service Above Self</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Empowering youth to create positive change in the community through service, leadership, and fellowship.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-accent-pink">Quick Links</h4>
            <div className="grid grid-cols-2 gap-3">
              {quickLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-accent-pink transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-accent-pink">Connect With Us</h4>
            <div className="space-y-3 mb-6">
              <p className="text-gray-300">
                📧 rotaract@bmsinstitute.com
              </p>
              <p className="text-gray-300">
                📱 +91 99999 99999
              </p>
              <p className="text-gray-300">
                📍 BMS Institute of Technology, Yelahanka, Bangalore
              </p>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-gradient-to-r from-purple-highlight to-button-active rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gradient-to-r from-purple-highlight to-button-active rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-highlight/20 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Rotaract Club of BMS Institute of Technology, Yelahanka. All rights reserved.
          </p>
          <p className="text-gray-500 mt-2">
            Made with ❤️ by the Web Team of Rotaract BMSY
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
