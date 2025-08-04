
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import ThemeToggle from "./ThemeToggle";
import { Menu } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-montserrat font-bold text-vodrak-navy dark:text-white">
              Vodrak<span className="text-vodrak-gold">Comptable</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="font-medium text-gray-700 hover:text-vodrak-navy dark:text-gray-200 dark:hover:text-white transition-colors">
              Accueil
            </Link>
            <Link to="/articles" className="font-medium text-gray-700 hover:text-vodrak-navy dark:text-gray-200 dark:hover:text-white transition-colors">
              Articles
            </Link>
            <Link to="/delais-fiscaux" className="font-medium text-gray-700 hover:text-vodrak-navy dark:text-gray-200 dark:hover:text-white transition-colors">
              Délais Fiscaux
            </Link>
            <Link to="/carrieres" className="font-medium text-gray-700 hover:text-vodrak-navy dark:text-gray-200 dark:hover:text-white transition-colors">
              Carrières
            </Link>
            <div className="flex items-center space-x-3">
              <ThemeToggle />
              <Link to="/espace-client">
                <Button className="bg-vodrak-navy hover:bg-opacity-90 text-white">
                  Espace Client
                </Button>
              </Link>
            </div>
          </nav>

          {/* Mobile Navigation Button */}
          <div className="flex items-center space-x-3 md:hidden">
            <ThemeToggle />
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu}
              aria-label="Menu principal"
            >
              <Menu size={24} />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="px-2 py-1 text-lg font-medium text-gray-700 hover:text-vodrak-navy dark:text-gray-200 dark:hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link 
                to="/articles" 
                className="px-2 py-1 text-lg font-medium text-gray-700 hover:text-vodrak-navy dark:text-gray-200 dark:hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Articles
              </Link>
              <Link 
                to="/delais-fiscaux" 
                className="px-2 py-1 text-lg font-medium text-gray-700 hover:text-vodrak-navy dark:text-gray-200 dark:hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Délais Fiscaux
              </Link>
              <Link 
                to="/carrieres" 
                className="px-2 py-1 text-lg font-medium text-gray-700 hover:text-vodrak-navy dark:text-gray-200 dark:hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Carrières
              </Link>
              <Link 
                to="/espace-client" 
                className="px-2 py-1 text-lg font-medium text-gray-700 hover:text-vodrak-navy dark:text-gray-200 dark:hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Espace Client
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
