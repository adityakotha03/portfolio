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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-white hover:text-sky-400 transition-colors">
            Aditya Kotha
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.sectionId && isHomePage ? (
                <button
                  key={item.label}
                  onClick={() => handleScroll(item.sectionId)}
                  className="text-slate-300 hover:text-sky-400 transition-colors"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.label}
                  to={item.pageLink}
                  className="text-slate-300 hover:text-sky-400 transition-colors"
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-300 hover:text-sky-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-md">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navItems.map((item) => (
              item.sectionId && isHomePage ? (
                <button
                  key={item.label}
                  onClick={() => handleScroll(item.sectionId)}
                  className="block px-3 py-2 text-slate-300 hover:text-sky-400 transition-colors"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.label}
                  to={item.pageLink}
                  className="block px-3 py-2 text-slate-300 hover:text-sky-400 transition-colors"
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
