
import React from "react";
import BrainLogo from "./icons/BrainLogo";
import { Link } from "react-router-dom";
import { BrainCircuit } from "lucide-react";
import { useIsMobile } from "../hooks/use-mobile";
import { Button } from "./ui/button";
import { smoothScrollToTop } from "../utils/scrollToTop";

const Header: React.FC = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const scrollToSection = (id: string, event: React.MouseEvent) => {
    event.preventDefault();
    if (window.location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" onClick={smoothScrollToTop} className="flex items-center gap-2">
            <BrainLogo className="h-10 w-10 text-navy animate-pulse" />
            <span className="text-xl font-bold text-navy">Mente Ativa</span>
          </Link>
        </div>

        {/* Menu Desktop */}
        {!isMobile && (
          <nav className="flex items-center gap-8">
            <a href="/" className="text-gray-800 hover:text-navy font-medium">
              Início
            </a>
            <a href="/#oferecemos" className="text-gray-800 hover:text-navy font-medium">
              O que oferecemos
            </a>
            <a href="/#produtos" className="text-gray-800 hover:text-navy font-medium">
              Nossas Soluções
            </a>
            <Button className="bg-orange hover:bg-orange/90 text-white font-medium">
              <a href="/#contato">Solicitar Projeto</a>
            </Button>
          </nav>
        )}

        {/* Menu Mobile */}
        {isMobile && (
          <>
            <button
              className="p-2 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            {isMenuOpen && (
              <div className="absolute top-full left-0 right-0 bg-white shadow-md p-4 flex flex-col gap-4">
                <Link
                  to="/"
                  className="text-gray-800 hover:text-navy font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Início
                </Link>
                <Link
                  to="/#produtos"
                  className="text-gray-800 hover:text-navy font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Produtos
                </Link>
                <Link
                  to="/#contato"
                  className="text-gray-800 hover:text-navy font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contato
                </Link>
                <Button className="bg-orange hover:bg-orange/90 text-white font-medium">
                  Solicitar Projeto
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
