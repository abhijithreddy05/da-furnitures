import { useState } from 'react';
import { Menu, X, LogIn } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const navItems = [
    { label: 'Home', emoji: '🏠', path: '/' },
    { label: 'About Us', emoji: 'ℹ️', path: '/about' },
    { label: 'Products', emoji: '�️', path: '/products' },
    { label: 'Contact', emoji: '📞', path: '/contact' },
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-gradient-to-r from-amber-50 to-stone-50 shadow-lg z-50 border-b border-amber-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-1">
            <button
              onClick={() => handleNavigation('/')}
              className="group"
            >
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-900 via-amber-700 to-amber-900 bg-clip-text text-transparent hover:from-amber-800 hover:to-amber-800 transition-all duration-300">
                DA Furniture World
              </h1>
              <div className="h-1 w-0 bg-gradient-to-r from-amber-700 to-amber-600 group-hover:w-full transition-all duration-500 rounded-full"></div>
            </button>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className="group relative px-4 py-2 text-stone-800 font-semibold hover:text-amber-800 transition-colors duration-300 flex items-center gap-2"
              >
                <span>{item.emoji}</span>
                <span>{item.label}</span>
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-amber-700 to-amber-600 group-hover:w-full transition-all duration-500 rounded-full"></div>
              </button>
            ))}
          </nav>

          {/* Admin Button */}
          <button
            onClick={() => handleNavigation(isAuthenticated ? '/admin/dashboard' : '/admin/login')}
            className="hidden md:flex items-center gap-2 ml-4 px-4 py-2.5 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300"
          >
            <LogIn className="w-4 h-4" />
            {isAuthenticated ? 'Admin Panel' : 'Admin Login'}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-stone-800 hover:text-amber-800 transition-colors duration-300"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className="w-full text-left px-4 py-3 text-stone-800 font-semibold hover:bg-amber-100 hover:text-amber-800 transition-all duration-300 rounded-lg flex items-center gap-2"
              >
                <span>{item.emoji}</span>
                <span>{item.label}</span>
              </button>
            ))}
            <button
              onClick={() => handleNavigation(isAuthenticated ? '/admin/dashboard' : '/admin/login')}
              className="w-full text-left px-4 py-3 text-white font-semibold bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 transition-all duration-300 rounded-lg flex items-center gap-2"
            >
              <LogIn className="w-4 h-4" />
              <span>{isAuthenticated ? 'Admin Panel' : 'Admin Login'}</span>
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
