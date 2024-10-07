/**
 * v0 by Vercel.
 * @see https://v0.dev/t/EEzWYfcesaa
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";

export default function Component() {
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
      <Link href="#" className="mr-6 hidden lg:flex" prefetch={false}>
        <Link href="#" className="flex items-center" prefetch={false}>
          <img
            src="/logo.png" // Substitua pelo caminho da sua imagem
            alt="Logo" // Descrição da imagem para acessibilidade
            className="h-auto w-14" // Ajuste a largura e altura conforme necessário
          />
        </Link>
      </Link>
      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList>
          <NavigationMenuLink asChild>
            <Link
              href="#"
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
              prefetch={false}
            >
              Inicio
            </Link>
          </NavigationMenuLink>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Recursos</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[400px] p-2">
                <NavigationMenuLink asChild>
                  <Link
                    href="#"
                    className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    prefetch={false}
                  >
                    <div className="text-sm font-medium leading-none group-hover:underline">
                      Analises
                    </div>
                    <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Melhore seus relatórios com análises avançadas.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    href="#"
                    className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    prefetch={false}
                  >
                    <div className="text-sm font-medium leading-none group-hover:underline">
                      Desenvolvimento de ChatBoot
                    </div>
                    <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Expanda sua aplicação com nossas ferramentas para
                      desenvolvedores.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    href="#"
                    className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    prefetch={false}
                  >
                    <div className="text-sm font-medium leading-none group-hover:underline">
                      Segurança &amp; Conformidade
                    </div>
                    <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Mantenha seus dados seguros com nossos recursos de
                      segurança.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    href="#"
                    className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    prefetch={false}
                  >
                    <div className="text-sm font-medium leading-none group-hover:underline">
                      Escalabilidade
                    </div>
                    <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Sua aplicação desenvolvidade forma escalavel com nossa
                      infraestrutura.
                    </div>
                  </Link>
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="#"
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
              prefetch={false}
            >
              Serviço
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              href="#"
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
              prefetch={false}
            >
              Contato
            </Link>
          </NavigationMenuLink>
        </NavigationMenuList>
      </NavigationMenu>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Alternar menu de navegação</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link href="#" className="flex items-center" prefetch={false}>
            <img
              src="/logo.png" // Substitua pelo caminho da sua imagem
              alt="Logo" // Descrição da imagem para acessibilidade
              className="h-auto w-14" // Ajuste a largura e altura conforme necessário
            />
          </Link>
          <div className="grid gap-2 py-6">
            <Link
              href="#"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              Inico
            </Link>
            <Collapsible className="grid gap-4">
              <CollapsibleTrigger className="flex w-full items-center text-lg font-semibold [&[data-state=open]>svg]:rotate-90">
                Recursos{" "}
                <ChevronRightIcon className="ml-auto h-5 w-5 transition-all" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="-mx-6 grid gap-6 bg-muted p-6">
                  <Link
                    href="#"
                    className="group grid h-auto w-full justify-start gap-1"
                    prefetch={false}
                  >
                    <div className="text-sm font-medium leading-none group-hover:underline">
                     Analise
                    </div>
                    <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Melhore seus relatórios com análises avançadas.
                    </div>
                  </Link>
                  <Link
                    href="#"
                    className="group grid h-auto w-full justify-start gap-1"
                    prefetch={false}
                  >
                    <div className="text-sm font-medium leading-none group-hover:underline">
                    Desenvolvimento de ChatBoot
                    </div>
                    <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Expanda sua aplicação com nossas ferramentas para
                    desenvolvedores.
                    </div>
                  </Link>
                  <Link
                    href="#"
                    className="group grid h-auto w-full justify-start gap-1"
                    prefetch={false}
                  >
                    <div className="text-sm font-medium leading-none group-hover:underline">
                    Segurança &amp; Conformidade
                    </div>
                    <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Mantenha seus dados seguros com nossos recursos de
                    segurança.
                    </div>
                  </Link>
                  <Link
                    href="#"
                    className="group grid h-auto w-full justify-start gap-1"
                    prefetch={false}
                  >
                    <div className="text-sm font-medium leading-none group-hover:underline">
                    Escalabilidade
                    </div>
                    <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Sua aplicação desenvolvidade forma escalavel com nossa
                    infraestrutura.
                    </div>
                  </Link>
                </div>
              </CollapsibleContent>
            </Collapsible>
            <Link
              href="#"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              Serviços
            </Link>
            <Link
              href="#"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              Contato
            </Link>
          </div>
        </SheetContent>
      </Sheet>
      <div className="ml-auto">
        <Button>Começar</Button>
      </div>
    </header>
  );
}

function ChevronRightIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
