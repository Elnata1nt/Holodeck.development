import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Airplay,
  AirVentIcon,
  BookOpenIcon,
  CameraIcon,
  CodeIcon,
  CodepenIcon,
  GitGraphIcon,
  MountainIcon,
  Music,
  Music2Icon,
  NetworkIcon,
  TreesIcon,
  TypeIcon,
  WindIcon,
} from "lucide-react";

export default function ProfileSection() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full bg-black py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-6 md:px-8 lg:px-10 grid gap-8 lg:grid-cols-2 lg:gap-16">
            {/* Centralizando o conteúdo */}
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <Avatar className="h-24 w-24 mb-4">
                <AvatarImage src="/user-perfil.jpg" alt="@shadcn" />
                <AvatarFallback>ET</AvatarFallback>
              </Avatar>
              <h1 className="text-3xl text-white font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Elnatã Corrêa
              </h1>
              <p
                className="max-w-[600px] text-muted-foreground md:text-lg"
                style={{ textAlign: "justify" }}
              >
                Oi, sou Elnata Correa, tenho 24 anos e moro em Manaus. Sou
                desenvolvedora fullstack com experiência em criar aplicações que
                fazem a diferença. Adoro explorar novas tecnologias e me
                conectar com pessoas que compartilham interesses semelhantes.
                Quando não estou programando, gosto de aproveitar a natureza e a
                cultura da minha cidade. Vamos trocar ideias!
              </p>
            </div>

            <div className="grid gap-8">
              {" "}
              {/* Removido ml-5 aqui */}
              <div className="grid gap-2">
                <h2 className="text-2xl text-white font-bold">Background</h2>
                <p
                  className="text-muted-foreground"
                  style={{ textAlign: "justify" }}
                >
                  Sou graduada em Ciência da Computação e atuo como engenheira
                  de software há 5 anos. Ao longo da minha carreira, tive a
                  chance de colaborar em projetos diversos, abrangendo desde
                  startups inovadoras até soluções empresariais complexas. Minha
                  paixão por tecnologia me impulsiona a explorar novas
                  ferramentas e frameworks, sempre buscando otimizar a
                  experiência do usuário e a eficiência do sistema. Estou
                  comprometida em entregar código de alta qualidade e em
                  trabalhar de forma colaborativa em equipes ágeis para resolver
                  desafios técnicos e criar aplicações impactantes.
                </p>
              </div>
              <div className="grid gap-2">
                <h2 className="text-2xl text-white font-bold">Skills</h2>
                <div className="flex flex-wrap gap-3">
                  {/* Aumentei o gap aqui */}
                  <div className="inline-flex items-center gap-2 rounded-lg bg-muted px-3 py-1 text-sm">
                    <CodepenIcon className="h-5 w-5" />
                    React
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-lg bg-muted px-3 py-1 text-sm">
                    <NetworkIcon className="h-5 w-5" />
                    Node.js
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-lg bg-muted px-3 py-1 text-sm">
                    <TypeIcon className="h-5 w-5" />
                    TypeScript
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-lg bg-muted px-3 py-1 text-sm">
                    <WindIcon className="h-5 w-5" />
                    Tailwind CSS
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-lg bg-muted px-3 py-1 text-sm">
                    <GitGraphIcon className="h-5 w-5" />
                    Git
                  </div>
                </div>
              </div>
              <div className="grid gap-2">
                <h2 className="text-2xl font-bold">Interesses</h2>
                <div className="flex flex-wrap gap-3">
                  {/* Aumentei o gap aqui */}
                  <div className="inline-flex items-center gap-2 rounded-lg bg-muted px-3 py-1 text-sm">
                    <CodeIcon className="h-5 w-5" /> Programação
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-lg bg-muted px-3 py-1 text-sm">
                    <BookOpenIcon className="h-5 w-5" /> Leitura
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-lg bg-muted px-3 py-1 text-sm">
                    <TreesIcon className="h-5 w-5" /> Passeios na Natureza
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-lg bg-muted px-3 py-1 text-sm">
                    <AirVentIcon className="h-5 w-5" /> Viagens
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-lg bg-muted px-3 py-1 text-sm">
                    <Music className="h-5 w-5" /> Música
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

function BookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2h9A2.5 2.5 0 0 1 18 4.5v15" />
      <path d="M4 18.5h13.5a2.5 2.5 0 0 1 2.5 2.5v0" />
    </svg>
  );
}
