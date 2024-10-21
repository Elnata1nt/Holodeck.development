"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout, Building, Globe, Smartphone, Code, Cog } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Layout,
    title: "Desenvolvimento de LandPages",
    description:
      "LandPages atraentes e otimizadas para conversão, ideais para campanhas e lançamentos.",
    color: "bg-lime-400",
  },
  {
    icon: Building,
    title: "Páginas Corporativas",
    description:
      "Sites corporativos profissionais que refletem a identidade e os valores da sua empresa.",
    color: "bg-lime-500",
  },
  {
    icon: Globe,
    title: "Sistemas Web",
    description:
      "Sistemas web robustos e escaláveis para otimizar seus processos de negócio.",
    color: "bg-lime-600",
  },
  {
    icon: Smartphone,
    title: "Desenvolvimento Mobile",
    description:
      "Aplicativos móveis intuitivos e responsivos para iOS e Android.",
    color: "bg-lime-700",
  },
  {
    icon: Code,
    title: "Integração de APIs",
    description:
      "Integrações seamless com diversas APIs para expandir as funcionalidades do seu sistema.",
    color: "bg-lime-800",
  },
  {
    icon: Cog,
    title: "Automação",
    description:
      "Soluções de automação para otimizar processos e aumentar a eficiência do seu negócio.",
    color: "bg-lime-900",
  },
];

export default function ServicePage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-lime-300 lg:p-8 text-center">
        <div className=" bg-black p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-between">
          <header className="text-lime-500 text-sm sm:text-base">
            VISÃO FUTURA
          </header>
          <main className="flex-grow flex items-center justify-center">
            <span className="inline-block bg-lime-500 mr-2">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                  fill="black"
                />
              </svg>
            </span>
            <h1 className="text-lime-500 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter leading-none text-center">
              ELEVE SUA
              <br />
              EMPRESA SEM
              <br />
              BARREIRAS
            </h1>
            <span className="inline-block bg-lime-500 ml-2">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                  fill="black"
                />
              </svg>
            </span>
          </main>
          <footer className="flex justify-between text-lime-500 text-sm sm:text-base">
            <span>DEVCODER</span>
            <span>© 2024</span>
          </footer>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Tornamos o Processo Simples, Rápido e Econômico
        </h2>
        <h3 className="text-2xl text-lime-500 font-bold text-center mb-8">
          Orçamentos moldado para sua necessidade
        </h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: "Orçamento Básico",
              price: "R$2.500",
              description: "Ideal para Portfólio Pessoal",
            },
            {
              title: "Orçamento Premium",
              price: "R$4.000",
              description: "Perfeito para Pequenas Empresas",
            },
            {
              title: "Orçamento Corporativo",
              price: "R$6.500",
              description: "Adequado para Grandes Empresas",
            },
          ].map((plan, index) => (
            <Card
              key={index}
              className={index === 1 ? "bg-gray-100" : "bg-white"}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
                <p className="text-3xl font-bold text-lime-500 mb-4">
                  {plan.price}
                </p>
                <p className="mb-4">{plan.description}</p>
                <ul className="mb-6 space-y-2">
                  <li>✓ Desenvolvimento Personalizado</li>
                  <li>✓ Design Responsivo</li>
                  <li>✓ Suporte Técnico</li>
                </ul>
                <Button className="w-full bg-lime-500 hover:bg-lime-600">
                  Escolher Orçamento
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>
      <section className="py-16 bg-lime-300">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-lime-900">
            Nossos Serviços
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer flex flex-col"
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                <div className="p-6 relative flex-grow">
                  <div
                    className={`absolute top-0 right-0 w-20 h-20 ${service.color} rounded-bl-full opacity-20`}
                  ></div>
                  <service.icon
                    className={`w-12 h-12 ${service.color.replace(
                      "bg-",
                      "text-"
                    )} mb-4`}
                  />
                  <h3 className="text-xl font-semibold mb-2 text-lime-900">
                    {service.title}
                  </h3>
                  <p className="text-lime-700">{service.description}</p>
                  <div className="flex mt-5 space-x-4">
                    <Link href="/notfound" passHref>
                      <Button variant="default" className="px-6 py-3">
                        Contrate Agora
                      </Button>
                    </Link>
                    <Link href="/notfound" passHref>
                      <Button variant="outline" className="px-6 py-3">
                        Agende uma reunião
                      </Button>
                    </Link>
                  </div>
                </div>
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      className={`h-1 ${service.color}`}
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      exit={{ width: "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
