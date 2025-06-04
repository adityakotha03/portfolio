import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface NavBarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const NavBar: React.FC<NavBarProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const handleScroll = (sectionId: string) => {
    setIsMenuOpen(false);
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navItems = [
    { label: 'About', sectionId: 'about', pageLink: '/' },
    { label: 'Experience', sectionId: 'experience', pageLink: '/' },
    { label: 'Publications', sectionId: 'publications', pageLink: '/' },
    { label: 'Projects', sectionId: 'projects', pageLink: '/' },
    // { label: 'Blog', sectionId: null, pageLink: '/blog' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-medium text-gray-900 hover:text-gray-600 transition-colors">
            Aditya Kotha
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.sectionId && isHomePage ? (
                <button
                  key={item.label}
                  onClick={() => handleScroll(item.sectionId)}
                  className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.label}
                  to={item.pageLink}
                  className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 hover:text-gray-900 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-gray-200">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navItems.map((item) => (
              item.sectionId && isHomePage ? (
                <button
                  key={item.label}
                  onClick={() => handleScroll(item.sectionId)}
                  className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors font-medium"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.label}
                  to={item.pageLink}
                  className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
