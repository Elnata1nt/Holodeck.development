"use client";

import * as React from "react";
import {
  ChevronRight,
  Users,
  Brain,
  Sparkles,
  Clock,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import AboutSection from "../../AboutSection/_components/AboutSection";

export default function ProfileSection() {
  const [openItem, setOpenItem] = React.useState<string | null>(null);

  const servicos = [
    {
      id: "mobile",
      title: "Design Mobile & Website",
      description:
        "Nossa equipe de design é especializada em criar websites e interfaces móveis impressionantes, oferecendo uma experiência atraente ao usuário.",
    },
    {
      id: "development",
      title: "Desenvolvimento de Websites",
      description:
        "Nossa equipe de desenvolvimento é especializada em dar vida aos designs com implementações de código limpo e escalável.",
    },
    {
      id: "brand",
      title: "Guia de Marca",
      description:
        "Criamos diretrizes de marca que garantem uma presença consistente e atraente em todos os pontos de contato.",
    },
    {
      id: "product",
      title: "Design de Produto",
      description:
        "Cuidamos do design UX/UI, criando produtos que se destacam no cenário digital.",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">

        <AboutSection />

        {/* Funcionalidades */}
        <section className="py-12 bg-black lg:py-20 md:py-20">
          <div className="container mx-auto lg:px-8 px-4">
            <div className="text-center mb-12">
              <h2 className="lg:text-3xl text-2xl text-white font-bold sm:text-4xl md:text-5xl">
                Criadores, Inovadores e Visionários Apaixonados
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Somos uma equipe de criadores visionários, estrategistas e
                inovadores, com uma paixão compartilhada pela excelência em
                design.
              </p>
            </div>

            <div className="grid gap-8 bg-white rounded-lg md:grid-cols-2 lg:grid-cols-4 p-8">
              {[
                {
                  Icon: Users,
                  title: "Abordagem Centrada no Cliente",
                  description:
                    "Priorizamos a compreensão das necessidades e objetivos dos nossos clientes para entregar resultados.",
                },
                {
                  Icon: Brain,
                  title: "Pensamento Estratégico",
                  description:
                    "Todo projeto começa com pesquisa minuciosa e planejamento estratégico.",
                },
                {
                  Icon: Sparkles,
                  title: "Excelência Criativa",
                  description:
                    "Exploramos limites para criar designs únicos e impactantes.",
                },
                {
                  Icon: Clock,
                  title: "Entrega no Prazo",
                  description:
                    "Entendemos a importância dos prazos e cumprimos com pontualidade.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center space-y-4 bg-muted rounded-lg p-6"
                >
                  <item.Icon className="h-8 w-8 text-lime-500" />
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Serviços */}
        <section className="md:py-20 py-12 bg-muted">
          <div className="container mx-auto px-6 md:px-16">
            <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl mb-12">
              Soluções Personalizadas Para Suas Necessidades
            </h2>

            <div className="space-y-6">
              {servicos.map((servico) => (
                <Collapsible
                  key={servico.id}
                  open={openItem === servico.id}
                  onOpenChange={() =>
                    setOpenItem(openItem === servico.id ? null : servico.id)
                  }
                >
                  <CollapsibleTrigger className="flex items-center justify-between w-full rounded-lg border bg-white p-4 hover:bg-lime-200 transition-colors shadow-sm">
                    <span className="font-semibold text-lg">
                      {servico.title}
                    </span>
                    <ChevronRight
                      className={`h-5 w-5 transition-transform ${
                        openItem === servico.id ? "rotate-90" : ""
                      }`}
                    />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-4 py-3">
                    <p className="text-sm text-muted-foreground">
                      {servico.description}
                    </p>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* Rodapé */}
      <footer className="bg-black text-white">
        <div className="m-8 py-8 md:py-20 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Vamos Criar Juntos
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Pronto para elevar sua presença digital? Conecte-se conosco para
            discutir como a LabAgency pode ajudar você a alcançar resultados.
          </p>
        </div>
        <div className="border-t mx-8 border-gray-800"></div>
      </footer>
    </div>
  );
}
