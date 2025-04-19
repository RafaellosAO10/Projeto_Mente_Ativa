
import React from "react";
import { BrainCircuit } from "lucide-react";
import BrainLogo from "./icons/BrainLogo";

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center gap-2 mb-4">
              <BrainLogo className="h-10 w-10 text-orange-500 animate-pulse" />
              <span className="text-xl font-bold">Mente Ativa</span>
            </div>
            <p className="text-gray-300 max-w-md">
            Transformamos ideias em soluções tecnológicas criativas e personalizadas, com foco em eletrônica, automação e sistemas embarcados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/#begin" className="text-gray-300 hover:text-white">
                    Início
                  </a>
                </li>
                <li>
                  <a href="/#oferecemos" className="text-gray-300 hover:text-white">
                    Nosso diferencial
                  </a>
                </li>
                <li>
                  <a href="/#produtos" className="text-gray-300 hover:text-white">
                    Soluções
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <ul className="space-y-2">
                <li className="text-gray-300">contato@menteativa.com.br</li>
                <li className="text-gray-300">(11) 97101-0517</li>
                <li className="text-gray-300">Taboão da Serra, SP</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center md:text-left">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Mente Ativa. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
