
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Droplet, Home, Lightbulb, ShieldCheck, ThermometerSun } from "lucide-react";
import { Link } from "react-router-dom";
import { smoothScrollToTop } from "../utils/scrollToTop";

const TecnologiaDiaADia = () => {
  const projects = [
    {
      title: "Dispensador Automático de Álcool",
      description: "Sistema que detecta a presença das mãos e libera automaticamente a quantidade ideal de álcool em gel, evitando contato físico e desperdício.",
      image: "https://images.unsplash.com/photo-1584483720412-ce931f4aefa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      features: ["Sensor de proximidade", "Controle de dosagem", "Indicador de nível", "Operação sem contato"],
      icon: <Droplet className="h-6 w-6 text-blue-500" />,
    },
    {
      title: "Sistema de Monitoramento de Temperatura",
      description: "Monitora e registra a temperatura ambiente com envio de alertas quando os valores saem dos limites definidos pelo usuário.",
      image: "https://images.unsplash.com/photo-1526570207772-784d36084510?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      features: ["Sensores de temperatura", "Registro de dados", "Alertas personalizáveis", "Interface intuitiva"],
      icon: <ThermometerSun className="h-6 w-6 text-red-500" />,
    },
    {
      title: "Assistente de Irrigação Inteligente",
      description: "Sistema que monitora a umidade do solo e irriga automaticamente as plantas quando necessário, economizando água e mantendo suas plantas saudáveis.",
      image: "https://images.unsplash.com/photo-1463123081488-789f998ac9c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      features: ["Sensor de umidade do solo", "Controle de válvula solenóide", "Programação por horários", "Economia de água"],
      icon: <Droplet className="h-6 w-6 text-green-500" />,
    },
    {
      title: "Controle de Iluminação Automatizado",
      description: "Sistema que ajusta a iluminação de ambientes baseado na presença de pessoas e na luminosidade natural, proporcionando conforto e economia de energia.",
      image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      features: ["Sensor de presença", "Sensor de luminosidade", "Temporizadores", "Controle via aplicativo"],
      icon: <Lightbulb className="h-6 w-6 text-yellow-500" />,
    },
    {
      title: "Sistema de Controle de Acesso",
      description: "Solução para controle de acesso a ambientes restritos utilizando RFID, senha ou reconhecimento facial, registrando acessos e horários.",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      features: ["Leitura de cartões RFID", "Teclado para senhas", "Registro de acessos", "Configuração de permissões"],
      icon: <ShieldCheck className="h-6 w-6 text-purple-500" />,
    },
    {
      title: "Timer Inteligente para Eletrodomésticos",
      description: "Dispositivo que programa o funcionamento automático de eletrodomésticos em horários específicos, aumentando a praticidade e reduzindo o consumo de energia.",
      image: "https://images.unsplash.com/photo-1586473219010-2ffc57b0d282?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
      features: ["Programação de horários", "Monitoramento de consumo", "Controle via smartphone", "Funções de segurança"],
      icon: <Clock className="h-6 w-6 text-blue-400" />,
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-navy to-navy/80 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 text-5xl">💡</div>
            <h1 className="text-4xl font-bold mb-4">Tecnologia no Dia a Dia</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Soluções simples e criativas que tornam as tarefas cotidianas mais práticas, inteligentes e acessíveis.
              Conheça nossos projetos que facilitam o dia a dia com tecnologia de forma acessível.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-navy">Como nossos projetos facilitam seu dia a dia</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
              <Home className="h-12 w-12 text-orange mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-navy">Automação Residencial Acessível</h3>
              <p className="text-gray-600">
                Transforme sua casa em um ambiente mais inteligente e funcional com soluções que não exigem grandes reformas ou altos investimentos.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
              <ShieldCheck className="h-12 w-12 text-orange mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-navy">Segurança e Tranquilidade</h3>
              <p className="text-gray-600">
                Aumente a segurança do seu lar com projetos que monitoram e controlam acessos, alertam sobre situações imprevistas e protegem seus bens.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
              <Lightbulb className="h-12 w-12 text-orange mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-navy">Economia e Eficiência</h3>
              <p className="text-gray-600">
                Reduza o consumo de recursos como energia e água com sistemas inteligentes que otimizam o uso apenas quando necessário.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-navy">Projetos Realizados</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="project-card overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full object-cover h-48"
                />
                <div className="p-6 content">
                  <div className="flex items-center mb-3">
                    {project.icon}
                    <h3 className="text-xl font-semibold ml-2 text-navy">{project.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4 description">{project.description}</p>
                  <div className="mt-auto">
                    <h4 className="font-medium text-navy mb-2">Funcionalidades:</h4>
                    <ul className="space-y-1 mb-4">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-600 flex items-center">
                          <span className="h-1.5 w-1.5 rounded-full bg-orange mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Quer desenvolver um projeto personalizado?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Nossa equipe está pronta para transformar suas ideias em soluções práticas que tornarão seu dia a dia mais simples e inteligente.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/#contato">
              <Button className="bg-orange hover:bg-orange/90 text-white px-8 py-3 text-lg">
                Solicitar um orçamento
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TecnologiaDiaADia;
