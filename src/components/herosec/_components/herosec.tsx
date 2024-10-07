import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Braces,
  CodepenIcon,
  DatabaseIcon,
  FigmaIcon,
  GitGraphIcon,
  HashIcon,
  NetworkIcon,
} from "lucide-react";
import Link from "next/link";

export default function HeroTag() {
  return (
    <div className="flex flex-col min-h-[100dvh] items-center justify-center">
      <main className="flex-1 w-full">
        <section
          id="skills"
          className="w-full items-center justify-center py-12 md:py-24 lg:py-32"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Minhas Skills
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Tenho experiência abrangente em desenvolvimento web, com
                  conhecimento em tecnologias de front-end e back-end. Aqui
                  estão algumas das principais habilidades que aprimorei ao
                  longo do tempo:
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full max-w-4xl mx-auto">
                {[
                  { Icon: HashIcon, label: "HTML" },
                  { Icon: CodepenIcon, label: "CSS" },
                  { Icon: Braces, label: "JavaScript" },
                  { Icon: CodepenIcon, label: "React" },
                  { Icon: NetworkIcon, label: "Node.js" },
                  { Icon: DatabaseIcon, label: "SQL" },
                  { Icon: GitGraphIcon, label: "Git" },
                  { Icon: FigmaIcon, label: "Figma" },
                ].map(({ Icon, label }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center justify-center space-y-2 p-4 bg-muted rounded-md"
                  >
                    <Icon className="h-8 w-8 text-lime-500" />{" "}
                    {/* Aqui aplicamos a cor verde */}
                    <p className="text-sm font-medium">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="portfolio"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Meus Projetos
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Aqui estão alguns dos meus projetos recentes que demonstram
                  minhas habilidades em desenvolvimento web.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-5xl mx-auto">
                {[
                  {
                    title: "JOV Education",
                    description: "Plataforma de educação tecnológica",
                    link: "https://tistto-repo.vercel.app/",
                    image: "https://tistto-repo.vercel.app/assets/Tistto_principal.png",
                  },
                  {
                    title: "Tistto",
                    description:
                      "Site de uma empresa de verificação de notícias falsas",
                    link: "https://tistto-repo.vercel.app/",
                    image:
                      "https://tistto-repo.vercel.app/assets/Tistto_principal.png",
                  },
                  {
                    title: "Vitrine Nova Moda fFitness",
                    description: "Vitrine da loja Nova Moda Fitness",
                    link: "https://nova-moda-fitness.vercel.app/",
                    image:
                      "https://lh3.googleusercontent.com/p/AF1QipOa2xrQojeAm2RoBM20SQLF70U_A43W5RzYPUvk=s1360-w1360-h1020",
                  },
                ].map(({ title, description, link, image }) => (
                  <Card key={title}>
                    <CardHeader>
                      <CardTitle>{title}</CardTitle>
                      <CardDescription>{description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <img
                        src={image}
                        alt={title}
                        className="rounded-t-md"
                        width="300"
                        height="200"
                        style={{ aspectRatio: "300/200", objectFit: "cover" }}
                      />
                    </CardContent>
                    <CardFooter>
                      <Link
                        href={link}
                        className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        prefetch={false}
                      >
                        Ver Projeto
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl text-lime-500 font-bold tracking-tighter sm:text-5xl">
                  Entre em Contato
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Fique à vontade para me contatar se tiver alguma dúvida ou se
                  quiser discutir um projeto.
                </p>
              </div>
              <form className="w-full max-w-md space-y-4 mx-auto">
                <Input type="text" placeholder="Name" className="w-full" />
                <Input type="email" placeholder="Email" className="w-full" />
                <Textarea placeholder="Message" rows={4} className="w-full" />
                <Button type="submit" className="w-full">
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
