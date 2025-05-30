
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageLoader from "../components/PageLoader";
import { usePageLoading } from "../hooks/usePageLoading";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Droplet, Home, Lightbulb, ShieldCheck, ThermometerSun } from "lucide-react";
import { Link } from "react-router-dom";
import { smoothScrollToTop } from "../utils/scrollToTop";

const TecnologiaCotidiana = () => {
  const isLoading = usePageLoading();

  if (isLoading) {
    return <PageLoader />;
  }
  const projects = [
    {
      title: "Dispensador Automático de Álcool",
      description: "Sistema que detecta a presença das mãos e libera automaticamente a quantidade ideal de álcool em gel, evitando contato físico e desperdício.",
      image: "https://www.usinainfo.com.br/blog/wp-content/uploads/2020/04/Projeto-Distribuidor-Autom%C3%A1tico-de-%C3%81lcool-DIY-Sem-Arduino-1-scaled.jpg",
      features: ["Sensor de proximidade", "Controle de dosagem", "Indicador de nível", "Operação sem contato"],
      icon: <Droplet className="h-6 w-6 text-blue-500" />,
    },
    {
      title: "Sistema de Monitoramento de Temperatura",
      description: "Monitora e registra a temperatura ambiente com envio de alertas quando os valores saem dos limites definidos pelo usuário.",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhiM74Kex5dO1_D734XPHoeCS-YC92pd-MWxQyd4Jx0FJP9NA5qq2265i99jxVVH5tpypIsJH_M84bu6Uq0We4rd4_iRtIDQeheWRsdn_2io4clFVI0A6deAt2JnOlSLmRHjy14xCLIdsniCRMbVQcboMPo2wxfBQm4hWzNFxBvj0LlIr5jPKjcoOw9Ux0Q/w1280-h720-rw/Humidity-Temperature-monitoring-system_Electrothinks.webp",
      features: ["Sensores de temperatura", "Registro de dados", "Alertas personalizáveis", "Interface intuitiva"],
      icon: <ThermometerSun className="h-6 w-6 text-red-500" />,
    },
    {
      title: "Assistente de Irrigação Inteligente",
      description: "Sistema que monitora a umidade do solo e irriga automaticamente as plantas quando necessário, economizando água e mantendo suas plantas saudáveis.",
      image: "https://www.rain.it/wp-content/uploads/controllo-da-smart-phone-impianto-irrigazione.jpg",
      features: ["Sensor de umidade do solo", "Controle de válvula solenóide", "Programação por horários", "Economia de água"],
      icon: <Droplet className="h-6 w-6 text-green-500" />,
    },
    {
      title: "Controle de Iluminação Automatizado",
      description: "Sistema que ajusta a iluminação de ambientes baseado na presença de pessoas e na luminosidade natural, proporcionando conforto e economia de energia.",
      image: "https://img.freepik.com/free-photo/hand-holding-smartphone-home_23-2150639946.jpg?semt=ais_hybrid&w=740",
      features: ["Sensor de presença", "Sensor de luminosidade", "Temporizadores", "Controle via aplicativo"],
      icon: <Lightbulb className="h-6 w-6 text-yellow-500" />,
    },
    {
      title: "Sistema de Controle de Acesso",
      description: "Solução para controle de acesso a ambientes restritos utilizando RFID, senha ou reconhecimento facial, registrando acessos e horários.",
      image: "https://i.postimg.cc/cJgj1NZ0/Chat-GPT-Image-2-de-mai-de-2025-18-27-36.png",
      features: ["Leitura de cartões RFID", "Teclado para senhas", "Registro de acessos", "Configuração de permissões"],
      icon: <ShieldCheck className="h-6 w-6 text-purple-500" />,
    },
    {
      title: "Timer Inteligente para Eletrodomésticos",
      description: "Dispositivo que programa o funcionamento automático de eletrodomésticos em horários específicos, aumentando a praticidade e reduzindo o consumo de energia.",
      image: "https://img.freepik.com/free-photo/close-up-device-with-kitchen-control_23-2148994129.jpg?ga=GA1.1.212535024.1746222523&semt=ais_hybrid&w=740",
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
            <h1 className="text-4xl font-bold mb-4">Tecnologia Cotidiana</h1>
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
              <h3 className="text-xl font-semibold mb-3 text-navy">Tecnologia Útil no Cotidiano</h3>
              <p className="text-gray-600">
                Criamos soluções simples e acessíveis para quem quer tornar tarefas rotineiras mais práticas, seja em casa, no trabalho ou na escola.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
              <ShieldCheck className="h-12 w-12 text-orange mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-navy">Projetos Inteligentes sob Medida</h3>
              <p className="text-gray-600">
                Você tem uma ideia ou precisa de um projeto, mas não sabe por onde começar? Nós ajudamos a transformar necessidades em soluções personalizadas.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
              <Lightbulb className="h-12 w-12 text-orange mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-navy">Inspiração para Criar</h3>
              <p className="text-gray-600">
                Nossos projetos também servem como ideias para quem precisa apresentar algo ou criar um produto funcional e criativo do zero.
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

      {/* Applications Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-navy">Aplicações</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-navy">Residências e Condomínios</h3>
              <p className="text-gray-600 mb-4">
                Soluções práticas para tornar o lar mais inteligente, seguro e eficiente, com sistemas que se integram facilmente à rotina familiar.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-orange text-white flex items-center justify-center mr-2 mt-0.5 text-xs">✓</span>
                  <span className="text-gray-600">Automação de iluminação e climatização</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-orange text-white flex items-center justify-center mr-2 mt-0.5 text-xs">✓</span>
                  <span className="text-gray-600">Sistemas de irrigação automática para jardins</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-orange text-white flex items-center justify-center mr-2 mt-0.5 text-xs">✓</span>
                  <span className="text-gray-600">Controle de acesso e monitoramento de segurança</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-navy">Pequenos Comércios e Escritórios</h3>
              <p className="text-gray-600 mb-4">
                Tecnologias acessíveis que otimizam operações, reduzem custos e melhoram a experiência de clientes e funcionários.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-orange text-white flex items-center justify-center mr-2 mt-0.5 text-xs">✓</span>
                  <span className="text-gray-600">Controle inteligente de energia e climatização</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-orange text-white flex items-center justify-center mr-2 mt-0.5 text-xs">✓</span>
                  <span className="text-gray-600">Sistemas de higienização automática</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-orange text-white flex items-center justify-center mr-2 mt-0.5 text-xs">✓</span>
                  <span className="text-gray-600">Monitoramento de temperatura e umidade</span>
                </li>
              </ul>
            </div>
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
                Iniciar um projeto
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TecnologiaCotidiana;
