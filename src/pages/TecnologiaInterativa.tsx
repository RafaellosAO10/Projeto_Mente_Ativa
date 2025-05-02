
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cpu, QrCode, Fingerprint, Joystick, MessageSquare, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

const TecnologiaInterativa = () => {
  const projects = [
    {
      title: "Sistema de Autenticação Biométrica com Leitor de Impressão Digital",
      description: "Sistema interativo que identifica usuários através de um módulo leitor de impressão digital e exibe informações personalizadas em um display LCD, permitindo acesso a funcionalidades específicas.",
      image: "https://img.freepik.com/free-photo/close-up-fingerprint-reader_1137-5.jpg?ga=GA1.1.212535024.1746222523&semt=ais_hybrid&w=740",
      features: ["Leitor RFID", "Display LCD informativo", "Interface personalizável", "Registro de eventos"],
      icon: <Fingerprint className="h-6 w-6 text-purple-500" />,
    },
    {
      title: "Assistente Virtual com Reconhecimento de Voz",
      description: "Sistema que reconhece comandos de voz para executar tarefas específicas, como controlar dispositivos, fornecer informações ou responder a perguntas.",
      image: "https://i.postimg.cc/PfcV55Kc/voz.png",
      features: ["Reconhecimento de voz", "Resposta por áudio", "Integração com IoT", "Personalização de comandos"],
      icon: <MessageSquare className="h-6 w-6 text-blue-500" />,
    },
    {
      title: "Jogo Interativo com Sensores de Movimento",
      description: "Jogo físico que utiliza sensores para detectar movimentos do jogador, criando uma experiência imersiva que combina o mundo real com elementos virtuais.",
      image: "https://sdmntprwestus2.oaiusercontent.com/files/00000000-e364-61f8-acf7-4852022089d8/raw?se=2025-05-02T23%3A35%3A02Z&sp=r&sv=2024-08-04&sr=b&scid=f7ab5fef-bf5a-5c5f-a615-2a93b2fcbb17&skoid=b53ae837-f585-4db7-b46f-2d0322fce5a9&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-02T20%3A39%3A41Z&ske=2025-05-03T20%3A39%3A41Z&sks=b&skv=2024-08-04&sig=SuWs4QOnYf52nZuO1xegtBvnbZmV%2BDpVayztjXWOGZg%3D",
      features: ["Sensores de movimento", "Feedback visual e sonoro", "Níveis progressivos", "Multiplayer"],
      icon: <Joystick className="h-6 w-6 text-green-500" />,
    },
    {
      title: "Painel de Controle Touch Screen",
      description: "Interface touch screen personalizada para controlar diversos dispositivos e sistemas, oferecendo facilidade de uso e visual intuitivo.",
      image: "https://img4.dhresource.com/webp/m/0x0/f3/albu/jc/s/09/c7fc5821-d734-4bae-a1df-5bb3dad4e995.jpg",
      features: ["Tela touch capacitiva", "Interface gráfica customizada", "Multi-controle", "Feedback visual"],
      icon: <Smartphone className="h-6 w-6 text-indigo-500" />,
    },
    {
      title: "Leitor de Códigos QR",
      description: "Tecnologia que captura imagens e interpreta QR Codes para controle de acesso, automações ou leitura de informações.",
      image: "https://sdmntprwestus2.oaiusercontent.com/files/00000000-9c10-61f8-b75b-5d477e892cc9/raw?se=2025-05-03T00%3A27%3A49Z&sp=r&sv=2024-08-04&sr=b&scid=b85ac446-5d8f-5071-ac25-903b37c2a48d&skoid=fa7966e7-f8ea-483c-919a-13acfd61d696&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-02T20%3A37%3A15Z&ske=2025-05-03T20%3A37%3A15Z&sks=b&skv=2024-08-04&sig=VqADrklO3eXo1mm0RkIZjW%2BYHezVQ/gZGZYniQ8OVnQ%3D",
      features: ["Leitura rápida de QR Codes", "Custo acessível", "Uso de visão computacional", "Integração com automações"],
      icon: <QrCode className="h-6 w-6 text-teal-500" />,
    },
    {
      title: "Processador de Gestos para Controle",
      description: "Sistema que reconhece gestos específicos das mãos para controlar dispositivos eletrônicos sem contato físico direto.",
      image: "https://i0.wp.com/makezine.com/wp-content/uploads/2016/07/Completed2-1.png?fit=2475,1387&ssl=1",
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
                Tecnologias que ampliam a experiência de uso para diversas necessidades e que facilitam o uso para todos.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-orange text-white flex items-center justify-center mr-2 mt-0.5 text-xs">✓</span>
                  <span className="text-gray-600">Controle de dispositivos por comando de voz</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-orange text-white flex items-center justify-center mr-2 mt-0.5 text-xs">✓</span>
                  <span className="text-gray-600">Leitura de QR Codes para facilitar navegação ou autenticação</span>
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
