"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ChevronDown,
  Award,
  Users,
  Target,
} from "lucide-react";

export default function AboutSection() {
  const [, setActiveTab] = useState("mission");

  return (
    <div className="min-h-screen bg-muted">
      <header className="container mx-auto px-4 py-12">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Sobre a Nossa Empresa
        </motion.h1>
        <motion.p
          className="text-xl text-center text-muted-foreground"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Inovação, Excelência e Compromisso
        </motion.p>
      </header>

      <main className="container mx-auto px-4 py-4">
        <Tabs defaultValue="mission" className="mb-12">
          <TabsList className="grid w-full grid-cols-3 bg-lime-300">
            <TabsTrigger
              value="mission"
              onClick={() => setActiveTab("mission")}
            >
              Nossa Missão
            </TabsTrigger>
            <TabsTrigger value="team" onClick={() => setActiveTab("team")}>
              Nossa Equipe
            </TabsTrigger>
            <TabsTrigger
              value="projects"
              onClick={() => setActiveTab("projects")}
            >
              Projetos & Objetivos
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="mission">
            <Card>
              <CardHeader>
                <CardTitle>Nossa Missão</CardTitle>
                <CardDescription>
                  Transformando o futuro através da inovação
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Na nossa empresa, nos dedicamos a fornecer soluções
                  tecnológicas inovadoras que transformam positivamente a
                  maneira como as pessoas interagem com o mundo digital. Nosso
                  compromisso com a excelência e o crescimento sustentável nos
                  impulsiona a constantemente superar limites, sempre colocando
                  as necessidades de nossos clientes em primeiro lugar.
                </p>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader>
                      <Award className="w-8 h-8 text-primary mb-2" />
                      <CardTitle>Excelência</CardTitle>
                    </CardHeader>
                    <CardContent>
                      Buscamos a excelência em tudo o que fazemos, desde o
                      desenvolvimento de produtos até o atendimento ao cliente.
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <Users className="w-8 h-8 text-primary mb-2" />
                      <CardTitle>Colaboração</CardTitle>
                    </CardHeader>
                    <CardContent>
                      Acreditamos no poder da colaboração, tanto internamente
                      quanto com nossos parceiros e clientes.
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <Target className="w-8 h-8 text-primary mb-2" />
                      <CardTitle>Inovação</CardTitle>
                    </CardHeader>
                    <CardContent>
                      A inovação está no coração de tudo o que fazemos,
                      impulsionando-nos a criar soluções revolucionárias.
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="team">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card>
                    <CardHeader>
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={100}
                        height={100}
                        className="rounded-lg mb-4"
                      />
                      <CardTitle>{member.name}</CardTitle>
                      <CardDescription>{member.role}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>{member.bio}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="projects">
            <Card>
              <CardHeader>
                <CardTitle>Nossos Projetos e Objetivos</CardTitle>
                <CardDescription>
                  Realizações que nos orgulham e metas que nos inspiram
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {projectsAndGoals.map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start space-x-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <ChevronDown className="w-5 h-5 text-primary mt-1" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

const teamMembers = [
  {
    name: "Elnatã Correa",
    role: "CEO & Fundador",
    bio: "Com mais de 15 anos de experiência em tecnologia, Ana lidera nossa empresa com visão e paixão pela inovação.",
    image: "/user-perfil.jpg?height=100&width=100",
  },
  {
    name: "Carlos Oliveira",
    role: "CTO & C0-Fundador",
    bio: "Carlos é o cérebro por trás de nossas soluções tecnológicas, sempre buscando as últimas tendências em desenvolvimento.",
    image: "/user-perfil.jpg?height=100&width=100",
  },
  {
    name: "Mariana Santos",
    role: "Diretora de Marketing",
    bio: "Mariana traz criatividade e estratégia para nossas campanhas, ajudando a ampliar nosso alcance no mercado.",
    image: "/user-perfil.jpg?height=100&width=100",
  },
  {
    name: "Pedro Almeida",
    role: "Líder de Desenvolvimento",
    bio: "Pedro lidera nossa equipe de desenvolvimento, garantindo a entrega de produtos de alta qualidade e performance.",
    image: "/user-perfil.jpg?height=100&width=100",
  },
  {
    name: "Luísa Ferreira",
    role: "Gerente de Produto",
    bio: "Luísa transforma ideias em produtos incríveis, sempre focada na experiência do usuário e nas necessidades do mercado.",
    image: "/user-perfil.jpg?height=100&width=100",
  },
  {
    name: "Rafael Costa",
    role: "Especialista em UX/UI",
    bio: "Rafael cria interfaces intuitivas e atraentes, melhorando constantemente a experiência dos usuários em nossos produtos.",
    image: "/user-perfil.jpg?height=100&width=100",
  },
];

const projectsAndGoals = [
  "Lançamento do nosso aplicativo móvel inovador, alcançando mais de 100.000 downloads no primeiro mês.",
  "Expansão para novos mercados internacionais, estabelecendo parcerias em 5 novos países.",
  "Implementação de um programa de sustentabilidade, reduzindo nossa pegada de carbono em 30%.",
  "Desenvolvimento de uma plataforma de e-learning, capacitando mais de 10.000 profissionais.",
  "Criação de um laboratório de inovação interno, gerando 15 novas patentes no último ano.",
  "Lançamento de um programa de mentoria para startups, apoiando 50 empresas emergentes.",
  "Implementação de um sistema de IA para otimização de processos, aumentando a eficiência em 40%.",
];
