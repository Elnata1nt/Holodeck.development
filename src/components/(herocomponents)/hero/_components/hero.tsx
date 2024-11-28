import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function HeroData() {
  return (
    <section className="flex flex-col items-center justify-center w-full px-4 py-16 space-y-8 bg-lime-300">
      <Badge variant="secondary" className="px-4 py-2">
        Holodeck Development Technology
      </Badge>
      <h1 className="text-4xl lg:max-w-3xl font-bold text-center md:text-5xl">
        Desenvolvimento de Soluções para seus projetos
      </h1>
      <p className="max-w-2xl text-center text-muted-foreground">
        Precisa de uma consultoria ou desenvolvedores para criar, otimizar e escalar
        sua aplicação web ou precisa de uma automação? Oferecemos serviços de desenvolvimento sob medida
        que cobrem todo o ciclo de vida do seu projeto, da concepção ao lançamento.
      </p>
      <div className="flex space-x-4">
      <Link href="/notfound" passHref>
        <Button variant="default" className="px-6 py-3">
          Contrate Agora
        </Button>
      </Link>
      <Link href="/scheduling" passHref>
        <Button variant="outline" className="px-6 py-3">
          Agende uma reunião
        </Button>
      </Link>
    </div>
      <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-3">
        <Card className="flex items-center justify-center p-4 bg-gray-100">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">+100</div>
            <p className="mt-2 text-sm font-medium">Projetos completos</p>
            <p className="text-xs text-muted-foreground">
              Mais de 100 projetos web entregues com sucesso
            </p>
          </div>
        </Card>
        <Card className="flex items-center justify-center p-4 bg-primary">
          <div className="text-center">
            <div className="text-3xl font-bold text-white">+30%</div>
            <p className="mt-2 text-sm font-medium text-white">
              Aumento de eficiência com soluções fullstack personalizadas
            </p>
          </div>
        </Card>
        <Card className="flex items-center justify-center p-4 bg-gray-100">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">5.0</div>
            <p className="mt-2 text-sm font-medium">Avaliação dos clientes</p>
            <p className="text-xs text-muted-foreground">
              Classificação média com base nas avaliações dos clientes
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
