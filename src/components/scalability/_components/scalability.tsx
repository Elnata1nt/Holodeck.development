import Image from "next/image"
import { JSX, SVGProps } from "react"

export default function ScalabilityPage() {
    return (
      <div className="w-full">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container mx-auto px-6 md:px-8 lg:px-10 text-center text-primary-foreground">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Escale sua aplicação com facilidade
            </h1>
            <p className="max-w-[800px] mx-auto mt-4 text-lg md:text-xl">
              Sua aplicação pode crescer sem preocupações com infraestrutura. Descubra como nossa plataforma suporta o
              aumento de tráfego e demanda sem esforço.
            </p>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-6 md:px-8 lg:px-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div>
                <h2 className="text-3xl text-lime-400 font-bold tracking-tighter sm:text-4xl">Escalabilidade Horizontal</h2>
                <p className="mt-4 text-muted-foreground">
                  Sua aplicação pode ser facilmente escalada horizontalmente, adicionando mais instâncias conforme a
                  demanda aumenta. Isso garante que seu aplicativo sempre tenha a capacidade necessária para atender aos
                  seus usuários.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-lg border p-4">
                    <CpuIcon className="h-8 w-8 text-primary" />
                    <h3 className="mt-2 text-lg font-medium">Escalabilidade Automática</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Adicione instâncias de forma automática conforme a demanda aumenta.
                    </p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <ZapIcon className="h-8 w-8 text-primary" />
                    <h3 className="mt-2 text-lg font-medium">Desempenho Otimizado</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Sua aplicação sempre terá os recursos necessários para um desempenho ideal.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <Image
                  src="/scalateman.jpg"
                  width="550"
                  height="400"
                  alt="Escalabilidade Horizontal"
                  className="mx-auto rounded-xl object-cover"
                  style={{ aspectRatio: "550/400", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container mx-auto px-6 md:px-8 lg:px-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div>
                <Image
                  src="/codeman.jpg"
                  width="550"
                  height="400"
                  alt="Escalabilidade Vertical"
                  className="mx-auto rounded-xl object-cover"
                  style={{ aspectRatio: "550/400", objectFit: "cover" }}
                />
              </div>
              <div>
                <h2 className="text-3xl text-lime-400 font-bold tracking-tighter sm:text-4xl">Escalabilidade Vertical</h2>
                <p className="mt-4 text-muted-foreground">
                  Além da escalabilidade horizontal, sua aplicação também pode ser escalada verticalmente, aumentando os
                  recursos de hardware (CPU, memória, armazenamento) conforme necessário. Isso garante que sua aplicação
                  tenha o poder de processamento necessário para lidar com cargas de trabalho intensivas.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-lg border p-4">
                    <DatabaseIcon className="h-8 w-8 text-primary" />
                    <h3 className="mt-2 text-lg font-medium">Escalabilidade de Banco de Dados</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Aumente a capacidade de armazenamento e processamento do seu banco de dados conforme necessário.
                    </p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <CpuIcon className="h-8 w-8 text-primary" />
                    <h3 className="mt-2 text-lg font-medium">Escalabilidade de Computação</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Aumente a capacidade de processamento da sua aplicação conforme a demanda aumenta.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-6 md:px-8 lg:px-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div>
                <h2 className="text-3xl text-lime-400 font-bold tracking-tighter sm:text-4xl">Desempenho Aprimorado</h2>
                <p className="mt-4 text-muted-foreground">
                  Sua aplicação terá um desempenho excepcional, com tempos de carregamento rápidos e uma experiência
                  fluida para seus usuários. Veja como a escalabilidade melhora o desempenho da sua aplicação.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-lg border p-4">
                    <ClockIcon className="h-8 w-8 text-primary" />
                    <h3 className="mt-2 text-lg font-medium">Tempos de Carregamento Rápidos</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Sua aplicação carrega instantaneamente, mesmo com picos de tráfego.
                    </p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <GaugeIcon className="h-8 w-8 text-primary" />
                    <h3 className="mt-2 text-lg font-medium">Desempenho Consistente</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Seu aplicativo mantém um desempenho excepcional, independentemente da carga.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <Image
                  src="/dashboradman.jpg"
                  width="550"
                  height="400"
                  alt="Desempenho Aprimorado"
                  className="mx-auto rounded-xl object-cover"
                  style={{ aspectRatio: "550/400", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container mx-auto px-6 md:px-8 lg:px-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div>
                <Image
                  src="/mockappage.jpg"
                  width="550"
                  height="400"
                  alt="Melhores Práticas"
                  className="mx-auto rounded-xl object-cover"
                  style={{ aspectRatio: "550/400", objectFit: "cover" }}
                />
              </div>
              <div>
                <h2 className="text-3xl text-lime-400 font-bold tracking-tighter sm:text-4xl">
                  Melhores Práticas para Aplicações Escaláveis
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Siga estas dicas e melhores práticas para garantir que sua aplicação seja projetada para escalar com
                  facilidade:
                </p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start gap-4">
                    <CheckIcon className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-medium">Arquitetura Modular</h3>
                      <p className="text-muted-foreground">
                        Divida sua aplicação em componentes independentes e escaláveis.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckIcon className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-medium">Caching Inteligente</h3>
                      <p className="text-muted-foreground">
                        Implemente estratégias de caching para reduzir a carga no servidor.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckIcon className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-medium">Monitoramento Contínuo</h3>
                      <p className="text-muted-foreground">
                        Monitore o desempenho e a utilização de recursos da sua aplicação.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckIcon className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-medium">Testes de Carga</h3>
                      <p className="text-muted-foreground">
                        Realize testes de carga para identificar e resolver gargalos de desempenho.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
  
  function CheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="green"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
    )
  }
  
  
  function ClockIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="green"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    )
  }
  
  
  function CpuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="green"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="16" height="16" x="4" y="4" rx="2" />
        <rect width="6" height="6" x="9" y="9" rx="1" />
        <path d="M15 2v2" />
        <path d="M15 20v2" />
        <path d="M2 15h2" />
        <path d="M2 9h2" />
        <path d="M20 15h2" />
        <path d="M20 9h2" />
        <path d="M9 2v2" />
        <path d="M9 20v2" />
      </svg>
    )
  }
  
  
  function DatabaseIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="green"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5V19A9 3 0 0 0 21 19V5" />
        <path d="M3 12A9 3 0 0 0 21 12" />
      </svg>
    )
  }
  
  
  function GaugeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="green"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m12 14 4-4" />
        <path d="M3.34 19a10 10 0 1 1 17.32 0" />
      </svg>
    )
  }
  
  
  function ZapIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="green"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
      </svg>
    )
  }