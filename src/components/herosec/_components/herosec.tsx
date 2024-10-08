import {
  Braces,
  CodepenIcon,
  DatabaseIcon,
  FigmaIcon,
  GitGraphIcon,
  HashIcon,
  NetworkIcon,
} from "lucide-react";

export default function HeroTag() {
  return (
    <div className="flex flex-col min-h-[70dvh] items-center justify-center">
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
                    <Icon className="h-8 w-8 text-lime-500" />
                    <p className="text-sm font-medium">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
