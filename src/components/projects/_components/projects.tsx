import Image from "next/image"; // Certifique-se de importar o componente Image
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"; // Certifique-se de que o caminho para os componentes de cartão está correto
import Link from "next/link";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
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
                image: "https://tistto-repo.vercel.app/assets/Tistto_principal.png",
              },
              {
                title: "Vitrine Nova Moda Fitness",
                description: "Vitrine da loja Nova Moda Fitness",
                link: "https://nova-moda-fitness.vercel.app/",
                image: "https://lh3.googleusercontent.com/p/AF1QipOa2xrQojeAm2RoBM20SQLF70U_A43W5RzYPUvk=s1360-w1360-h1020",
              },
            ].map(({ title, description, link, image }) => (
              <Card key={title}>
                <CardHeader>
                  <CardTitle>{title}</CardTitle>
                  <CardDescription>{description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src={image}
                    alt={title}
                    className="rounded-t-md"
                    width={300}
                    height={200}
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
  );
}
