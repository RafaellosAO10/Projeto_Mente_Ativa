
import React from 'react';
import { Loader2 } from 'lucide-react';

const PageLoader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center animate-fade-in">
        <Loader2 className="h-12 w-12 animate-spin text-orange mx-auto mb-4" />
        <p className="text-lg text-navy font-medium">Carregando...</p>
      </div>
    </div>
  );
};

export default PageLoader;
