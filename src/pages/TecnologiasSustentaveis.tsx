
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Droplet, Leaf, Lightbulb, Recycle, Sun, Wind } from "lucide-react";
import { Link } from "react-router-dom";

const TecnologiasSustentaveis = () => {
  const projects = [
    {
      title: "Sistema de Monitoramento de Plantas",
      description: "Monitora em tempo real a umidade do solo, temperatura e luminosidade para otimizar o cultivo e reduzir o desperdício de água e nutrientes.",
      image: "https://projects.arduinocontent.cc/cover-images/98e400e6-c8f8-474b-8517-4ccab4d3c862.png",
      features: ["Sensores de umidade", "Coleta de dados", "Alertas personalizados", "Painel de controle"],
      icon: <Leaf className="h-6 w-6 text-green-500" />,
    },
    {
      title: "Estação Meteorológica de Baixo Consumo",
      description: "Coleta e transmite dados meteorológicos utilizando energia solar, fornecendo informações precisas sobre condições climáticas locais.",
      image: "https://curtocircuito.com.br/pub/media/wysiwyg/blog/Como_fazer_um_Estacao_Meteorologica_conectada_a_Nuvem_com_ESP32/foto_inicio.jpg",
      features: ["Painel solar", "Sensores de temperatura e umidade", "Transmissão sem fio", "Bateria de longa duração"],
      icon: <Sun className="h-6 w-6 text-yellow-500" />,
    },
    {
      title: "Sistema de Captação de Água da Chuva",
      description: "Automação para coleta, filtragem e armazenamento de água pluvial, com monitoramento de nível e qualidade para uso não potável.",
      image: "https://media.printables.com/media/prints/6207/images/40903_502ea870-5ceb-47ca-aa7f-8b71fc270e96/thumbs/inside/1280x960/jpg/001.webp",
      features: ["Filtragem automática", "Medição de volume", "Controle de bombas", "Análise de qualidade"],
      icon: <Droplet className="h-6 w-6 text-blue-500" />,
    },
    {
      title: "Composteira Inteligente",
      description: "Sistema automatizado que controla temperatura, umidade e aeração para otimizar o processo de compostagem e transformar resíduos orgânicos em adubo de qualidade.",
      image: "https://pyxis.nymag.com/v1/imgs/591/eea/e10d3ac5982414f4bc1116cc83abe7cc22-wizard-jr.jpg",
      features: ["Sensores de temperatura", "Controle de umidade", "Sistema de aeração", "Notificações de status"],
      icon: <Recycle className="h-6 w-6 text-green-600" />,
    },
    {
      title: "Iluminação Solar Inteligente",
      description: "Sistema de iluminação alimentado por energia solar que ajusta automaticamente a intensidade luminosa conforme a presença de pessoas e condições de luz natural.",
      image: "https://www.usinainfo.com.br/blog/wp-content/uploads/2020/02/rastreador-solar-com-arduino-e-ldr-1920x1080.jpg",
      features: ["Painel solar integrado", "Sensor de presença", "Ajuste de intensidade", "Bateria recarregável"],
      icon: <Lightbulb className="h-6 w-6 text-yellow-400" />,
    },
    {
      title: "Gerador de Energia Eólica",
      description: "Mini turbina eólica para geração de energia em pequena escala, ideal para complementar sistemas solares em ambientes residenciais ou rurais.",
      image: "https://how2electronics.com/wp-content/uploads/2021/03/Testing-Anemometer.jpg",
      features: ["Design compacto", "Início em baixa velocidade de vento", "Sistema de armazenamento", "Monitoramento de produção"],
      icon: <Wind className="h-6 w-6 text-blue-400" />,
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-navy to-navy/80 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 text-5xl">🌱</div>
            <h1 className="text-4xl font-bold mb-4">Tecnologias Sustentáveis</h1>
            <p className="text-xl max-w-3xl mx-auto">
            Tecnologias inteligentes para gestão precisa de recursos naturais e redução de impactos ambientais. 
            Desenvolvemos soluções práticas que integram inovação e sustentabilidade, gerando economia para produtores e ferramentas adaptáveis a diferentes necessidades.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-navy">Por que investir em tecnologias sustentáveis?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
              <Leaf className="h-12 w-12 text-orange mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-navy">Impacto Ambiental Reduzido</h3>
              <p className="text-gray-600">
                Projetos que diminuem a pegada ecológica com soluções que consomem menos recursos naturais e geram menos resíduos, contribuindo para a preservação do meio ambiente.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
              <Recycle className="h-12 w-12 text-orange mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-navy">Economia a Longo Prazo</h3>
              <p className="text-gray-600">
                Reduzir custos com água, energia e outros recursos, gerando economias significativas ao longo do tempo e retorno sobre o investimento.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
              <Sun className="h-12 w-12 text-orange mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-navy">Autonomia Energética</h3>
              <p className="text-gray-600">
                Independência com sistemas que geram e gerenciam sua própria energia, reduzindo a dependência de redes centralizadas e combustíveis fósseis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-navy">Projetos Sustentáveis</h2>
          
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

      {/* Impact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-navy">Impacto Positivo</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-navy">Ambiental</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500 flex items-center justify-center text-white mr-3">
                    <Leaf className="h-3 w-3" />
                  </div>
                  <p className="text-gray-600">
                    <span className="font-medium text-navy">Redução do consumo de água:</span> Sistemas inteligentes podem reduzir em até 70% o consumo de água em irrigação.
                  </p>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500 flex items-center justify-center text-white mr-3">
                    <Leaf className="h-3 w-3" />
                  </div>
                  <p className="text-gray-600">
                    <span className="font-medium text-navy">Economia de energia:</span> Soluções de iluminação solar podem reduzir em até 90% o consumo de eletricidade para iluminação.
                  </p>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500 flex items-center justify-center text-white mr-3">
                    <Leaf className="h-3 w-3" />
                  </div>
                  <p className="text-gray-600">
                    <span className="font-medium text-navy">Menor geração de resíduos:</span> Composteiras inteligentes transformam resíduos orgânicos em adubo de qualidade, reduzindo o volume enviado para aterros.
                  </p>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-navy">Econômico</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center text-white mr-3">
                    <Recycle className="h-3 w-3" />
                  </div>
                  <p className="text-gray-600">
                    <span className="font-medium text-navy">Redução de custos operacionais:</span> Economia média de 30% em contas de energia e água após implementação de soluções sustentáveis.
                  </p>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center text-white mr-3">
                    <Recycle className="h-3 w-3" />
                  </div>
                  <p className="text-gray-600">
                    <span className="font-medium text-navy">Valorização do imóvel:</span> Propriedades com tecnologias sustentáveis tendem a ter valor de mercado até 10% superior.
                  </p>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center text-white mr-3">
                    <Recycle className="h-3 w-3" />
                  </div>
                  <p className="text-gray-600">
                    <span className="font-medium text-navy">Durabilidade e baixa manutenção:</span> Sistemas projetados para alta durabilidade, que tem manutenção reduzida, minimizando custos a longo prazo.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto para investir em um futuro sustentável?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Converse com nossa equipe e descubra como podemos desenvolver soluções sustentáveis personalizadas para suas necessidades específicas.
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

export default TecnologiasSustentaveis;
