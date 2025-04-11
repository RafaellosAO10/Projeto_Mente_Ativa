import React from "react";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import { Bot, Box, Smartphone, Wifi, FileText, PiggyBank, Headset } from "lucide-react";

const Index = () => {
  const products = [
    {
      title: "Planta Inteligente",
      description:
        "Planta monitorada por sensores e controlada via WiFi com ESP32. Monitore umidade, temperatura e receba alertas no smartphone.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
      hasWifi: true,
    },
    {
      title: "Robô 4WD",
      description:
        "Robô com estrutura 4WD e braço robótico articulado em acrílico. Controlado por aplicativo via WiFi com ESP32.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      hasWifi: true,
    },
    {
      title: "Kit Arduino Iniciante",
      description:
        "Kit completo para iniciantes com Arduino, sensores, atuadores e guia didático para projetos educacionais.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      hasWifi: false,
    },
  ];

  const features = [
    {
      title: "Acessível para Todos",
      description:
        "Criamos projetos acessíveis, com preço justo e qualidade, pra que mais pessoas possam explorar e aprender com a tecnologia embarcada.",
      icon: <PiggyBank className="h-12 w-12 text-orange" />,
    },
    {
      title: "Conectividade",
      description: "Conectividade flexível para controlar seus projetos de onde estiver, com suporte a WiFi, Bluetooth, LoRa e muito mais.",
      icon: <Wifi className="h-12 w-12 text-orange" />,
    },
    {
      title: "Controle Multiplataforma",
      description: "Controle e monitore seu projeto direto do celular, tablet ou computador, com suporte a múltiplas plataformas.",
      icon: <Smartphone className="h-12 w-12 text-orange" />,
    },
    {
      title: "Materiais Resistentes",
      description: "Estruturas resistentes produzidas com impressão 3D e outros materiais de qualidade, ideais para proteger e personalizar o seu projeto.",
      icon: <Box className="h-12 w-12 text-orange" />,
    },
    {
      title: "Documentação Completa",
      description:
        "Fornecemos diagramas, fluxogramas e explicações visuais de todo o funcionamento do seu projeto, facilitando o entendimento até mesmo para iniciantes.",
      icon: <FileText className="h-12 w-12 text-orange" />,
    },
    {
      title: "Suporte Personalizado",
      description:
        "Nosso time de desenvolvedores acompanha você em cada etapa, do entendimento do escopo à entrega do projeto pronto para uso.",
      icon: <Headset className="h-12 w-12 text-orange" />,
    },       
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-navy text-white py-16 md:py-24" id="begin">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Transformamos ideias em projetos reais
              </h1>
              <p className="text-lg mb-8 text-gray-200 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Desenvolvemos soluções personalizadas em automação e tecnologia embarcada, com diferentes formas de comunicação. Da ideia ao projeto pronto para uso com documentação visual e suporte dedicado em cada etapa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <a href="#contato" className="btn-secondary">
                Desenvolver meu projeto
              </a>
              <a href="#produtos" className="btn-outline-secondary">
                Ver produtos prontos
              </a>
            </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="rounded-lg overflow-hidden shadow-xl animate-fade-in" style={{ animationDelay: "0.6s" }}>
                <img
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80"
                  alt="Projetos Robóticos"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50" id="oferecemos">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">O que você encontra no Mente Ativa?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-lg shadow-md text-center flex flex-col items-center"
              >
                {feature.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2 text-navy">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produtos" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Nossos Produtos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                description={product.description}
                image={product.image}
                hasWifi={product.hasWifi}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contato" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title text-center">Transforme sua Ideia em Projeto</h2>
            <p className="text-gray-600 text-center mb-8">
            Conte com nossa equipe para transformar sua ideia em um projeto funcional e bem documentado. Preencha o formulário, envie os detalhes, que nós cuidamos da parte técnica para entregar uma solução completa e acessível.
            </p>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
