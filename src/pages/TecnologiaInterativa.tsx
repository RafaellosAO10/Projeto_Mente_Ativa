
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cpu, Eye, Fingerprint, Joystick, MessageSquare, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

const TecnologiaInterativa = () => {
  const projects = [
    {
      title: "Sistema de Controle por RFID com Display",
      description: "Sistema interativo que identifica usuários através de tags RFID e exibe informações personalizadas em um display LCD, permitindo acesso a funcionalidades específicas.",
      image: "https://images.unsplash.com/photo-1604088069732-ff0249c1e824?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8QWNjZXNzJTIwY29udHJvbCUyMHdpdGglMjBSRklEJTIwYW5kJTIwZGlzcGxheXxlbnwwfDB8MHx8fDA%3D",
      features: ["Leitor RFID", "Display LCD informativo", "Interface personalizável", "Registro de eventos"],
      icon: <Fingerprint className="h-6 w-6 text-purple-500" />,
    },
    {
      title: "Assistente Virtual com Reconhecimento de Voz",
      description: "Sistema que reconhece comandos de voz para executar tarefas específicas, como controlar dispositivos, fornecer informações ou responder a perguntas.",
      image: "https://bytedex.com.br/wp-content/uploads/2022/09/google-assist-featured.jpg",
      features: ["Reconhecimento de voz", "Resposta por áudio", "Integração com IoT", "Personalização de comandos"],
      icon: <MessageSquare className="h-6 w-6 text-blue-500" />,
    },
    {
      title: "Jogo Interativo com Sensores de Movimento",
      description: "Jogo físico que utiliza sensores para detectar movimentos do jogador, criando uma experiência imersiva que combina o mundo real com elementos virtuais.",
      image: "https://bytedex.com.br/wp-content/uploads/2023/09/sensor-movimento-pir-arduino-projetos.jpg",
      features: ["Sensores de movimento", "Feedback visual e sonoro", "Níveis progressivos", "Multiplayer"],
      icon: <Joystick className="h-6 w-6 text-green-500" />,
    },
    {
      title: "Painel de Controle Touch Screen",
      description: "Interface touch screen personalizada para controlar diversos dispositivos e sistemas, oferecendo facilidade de uso e visual intuitivo.",
      image: "https://www.makerguides.com/wp-content/uploads/2019/08/TFT-LCD-with-touch-with-Arduino-1.jpg",
      features: ["Tela touch capacitiva", "Interface gráfica customizada", "Multi-controle", "Feedback visual"],
      icon: <Smartphone className="h-6 w-6 text-indigo-500" />,
    },
    {
      title: "Sistema de Rastreamento Ocular",
      description: "Tecnologia que monitora o movimento dos olhos para permitir interação com computadores e dispositivos, auxiliando pessoas com mobilidade reduzida.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500",
      features: ["Rastreamento preciso", "Calibração simplificada", "Software adaptável", "Baixa latência"],
      icon: <Eye className="h-6 w-6 text-teal-500" />,
    },
    {
      title: "Processador de Gestos para Controle",
      description: "Sistema que reconhece gestos específicos das mãos para controlar dispositivos eletrônicos sem contato físico direto.",
      image: "https://electronicslovers.com/wp-content/uploads/2019/01/Hand-gesture-controlled-car-1200x900.jpg",
      features: ["Reconhecimento de múltiplos gestos", "Aplicação configurável", "Processamento em tempo real", "Baixo consumo de energia"],
      icon: <Cpu className="h-6 w-6 text-red-500" />,
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-navy to-navy/80 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 text-5xl">🤝</div>
            <h1 className="text-4xl font-bold mb-4">Tecnologia Interativa</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Projetos que envolvem sensores, lógica e interação com o usuário, transformando ideias em sistemas inteligentes.
              Nossas soluções interativas criam experiências únicas com respostas em tempo real.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-navy">Vantagens da Tecnologia Interativa</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
              <Fingerprint className="h-12 w-12 text-orange mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-navy">Personalização Avançada</h3>
              <p className="text-gray-600">
                Sistemas que se adaptam às preferências do usuário, proporcionando experiências únicas e personalizadas para cada pessoa.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
              <Cpu className="h-12 w-12 text-orange mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-navy">Automação Inteligente</h3>
              <p className="text-gray-600">
                Dispositivos que aprendem com o uso e tomam decisões baseadas em padrões identificados, aumentando a eficiência.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
              <MessageSquare className="h-12 w-12 text-orange mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-navy">Comunicação Natural</h3>
              <p className="text-gray-600">
                Interfaces que permitem a interação através de voz, gestos ou toque, tornando a tecnologia mais acessível e intuitiva.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-navy">Projetos Interativos</h2>
          
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
              <h3 className="text-xl font-semibold mb-4 text-navy">Ambientes Comerciais</h3>
              <p className="text-gray-600 mb-4">
                Sistemas interativos que melhoram a experiência do cliente em lojas, museus, eventos e espaços públicos, com interfaces intuitivas e personalizadas.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-orange text-white flex items-center justify-center mr-2 mt-0.5 text-xs">✓</span>
                  <span className="text-gray-600">Vitrines interativas com conteúdo dinâmico</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-orange text-white flex items-center justify-center mr-2 mt-0.5 text-xs">✓</span>
                  <span className="text-gray-600">Assistentes virtuais para atendimento</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-orange text-white flex items-center justify-center mr-2 mt-0.5 text-xs">✓</span>
                  <span className="text-gray-600">Quiosques de informação com telas touch</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-navy">Acessibilidade</h3>
              <p className="text-gray-600 mb-4">
                Tecnologias que facilitam a interação de pessoas com necessidades especiais, promovendo maior autonomia e inclusão digital.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-orange text-white flex items-center justify-center mr-2 mt-0.5 text-xs">✓</span>
                  <span className="text-gray-600">Controle de dispositivos por comando de voz</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-orange text-white flex items-center justify-center mr-2 mt-0.5 text-xs">✓</span>
                  <span className="text-gray-600">Sistemas de rastreamento ocular para comunicação</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-orange text-white flex items-center justify-center mr-2 mt-0.5 text-xs">✓</span>
                  <span className="text-gray-600">Interfaces adaptativas para diferentes necessidades</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Vamos transformar sua ideia em realidade</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Nossa equipe está pronta para desenvolver soluções interativas personalizadas que atendam às necessidades específicas do seu projeto.
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

export default TecnologiaInterativa;
