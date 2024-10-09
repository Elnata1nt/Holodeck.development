import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
// import {
//   AirVentIcon,
//   BookOpenIcon,
//   CodeIcon,
//   CodepenIcon,
//   GitGraphIcon,
//   Music,
//   NetworkIcon,
//   TreesIcon,
//   TypeIcon,
//   WindIcon,
// } from "lucide-react";

export default function ProfileSection() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full bg-black py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-6 md:px-8 lg:px-10">
            {/* Centralizando o conteúdo */}
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <Avatar className="h-24 w-24 mb-4">
                <AvatarImage src="/user-perfil.jpg" alt="Elnatã Corrêa" />
                <AvatarFallback>ET</AvatarFallback>
              </Avatar>
              <h1 className="text-3xl text-white font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Elnatã Corrêa
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-lg text-justify">
                Oi, sou Elnata Correa, tenho 24 anos e atualmente estou cursando
                Engenharia da Computação. Com 2 anos de experiência no
                desenvolvimento web fullstack, já atuei em projetos que vão
                desde soluções personalizadas até plataformas escaláveis. Tenho
                um grande interesse por tecnologias inovadoras e sempre busco
                aprender algo novo para aprimorar minhas habilidades. Sou
                apaixonada por desenvolver aplicações que proporcionam impacto
                real.
              </p>
              <p className="max-w-[700px] text-muted-foreground md:text-lg text-justify">
                Quando não estou programando, gosto de explorar a natureza e a
                cultura de Manaus, onde moro. Acredito no poder da colaboração e
                estou sempre aberta para trocar ideias e aprender com outros
                profissionais. Vamos construir algo incrível juntos!
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-6 md:px-8 lg:px-10 grid gap-8 lg:gap-16">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Minhas Habilidades
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Aqui estão algumas das tecnologias e ferramentas que domino.
                </p>
              </div>
            </div>
            <div className="mx-auto grid gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-between space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <div>
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                    Linguagens de Programação
                  </div>
                  <div className="space-y-2 pt-4">
                    <h3 className="text-xl font-bold">Linguagens</h3>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>JavaScript</li>
                      <li>Python</li>
                      <li>Java</li>
                      <li>C++</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <div>
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                    Frameworks e Bibliotecas
                  </div>
                  <div className="space-y-2 pt-4">
                    <h3 className="text-xl font-bold">Frameworks</h3>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>React</li>
                      <li>Angular</li>
                      <li>Vue.js</li>
                      <li>Node.js</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <div>
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                    Ferramentas e Tecnologias
                  </div>
                  <div className="space-y-2 pt-4">
                    <h3 className="text-xl font-bold">Ferramentas</h3>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>Git</li>
                      <li>GitHub</li>
                      <li>Visual Studio Code</li>
                      <li>Docker</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container mx-auto px-6 md:px-8 lg:px-10 grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Entre em Contato
                </h2>
                <p
                  className="max-w-[600px] text-muted-foreground md:text-xl"
                  style={{ textAlign: "justify" }}
                >
                  Estou sempre animado para me conectar com novas pessoas e
                  explorar colaborações potenciais. Sinta-se à vontade para me
                  contatar através de qualquer um dos canais abaixo.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="mailto:elnatacorrea@hotmail.com"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                  aria-label="Send an email to Elnata Correa"
                >
                  Email
                </Link>

                <Link
                  href="https://www.linkedin.com/in/elnatan1nt/"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  LinkedIn
                </Link>
                <Link
                  href="https://github.com/Elnata1nt"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  GitHub
                </Link>
              </div>
            </div>
            <div className="grid gap-6">
              <div className="grid gap-1">
                <h2 className="text-2xl font-bold">Educação</h2>
                <p className="text-muted-foreground">
                  Estou estudando Engenharia da Computação na Fametro.
                </p>
              </div>
              <div className="grid gap-1">
                <h2 className="text-2xl font-bold">Experiência de Trabalho</h2>
                <div className="grid gap-4">
                  <div className="grid gap-1">
                    <h3 className="text-lg font-semibold">
                      Fundador, Holodeck Technologies
                    </h3>
                    <p className="text-muted-foreground">
                      Data de Início - Presente
                    </p>
                    <p
                      className="text-muted-foreground"
                      style={{ textAlign: "justify" }}
                    >
                      Como fundador da Holodeck Technologies, estou envolvido no
                      desenvolvimento de soluções inovadoras e tecnológicas.
                    </p>
                  </div>
                  <div className="grid gap-1">
                    <h3 className="text-lg font-semibold">
                      Fundador Sócio, JOV
                    </h3>
                    <p className="text-muted-foreground">
                      Data de Início - Presente
                    </p>
                    <p
                      className="text-muted-foreground"
                      style={{ textAlign: "justify" }}
                    >
                      A JOV é uma plataforma digital desenvolvida pela HOLO,
                      focada no crescimento pessoal, profissional e social de
                      jovens. Com uma abordagem centrada no usuário, oferece
                      recursos como mentorias, cursos, networking e
                      oportunidades de emprego. A plataforma utiliza tecnologia
                      avançada com uma arquitetura em camadas, baseada em
                      microservices e design orientado a eventos, garantindo
                      escalabilidade e flexibilidade para atender as
                      necessidades dos usuários.
                    </p>
                  </div>
                  <div className="grid gap-1">
                    <h3 className="text-lg font-semibold">
                      Gestor de projetos, Innyx.
                    </h3>
                    <p className="text-muted-foreground">Verão de 2024</p>
                    <p
                      className="text-muted-foreground"
                      style={{ textAlign: "justify" }}
                    >
                      Durante meu trabalho, trabalhei na construção de uma nova
                      aplicação web do zero. Ganhei experiência valiosa em
                      desenvolvimento full-stack, metodologias ágeis e trabalho
                      em um ambiente de startup acelerado, alem de aprimorar
                      minhas habilidades em desenvolvimento pessoal e de
                      pessoas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
