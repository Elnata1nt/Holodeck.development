import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { SVGProps } from "react";

// Componente principal para agendamento de reuniões
export default function SchedulingMeet() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-lime-300">
      <section className=" bg-primary-foreground rounded-2xl flex flex-col justify-center items-center max-w-2xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-lime-600 sm:text-4xl">
            Agendar uma Reunião
          </h1>
          <p className="text-muted-foreground">
            Agende uma reunião facilmente e adicione-a diretamente ao seu Google
            Calendar.
          </p>
        </div>
        <form className="mt-8 space-y-6">
          <div>
            <Label htmlFor="name">Nome</Label>
            <Input
              id="name"
              type="text"
              placeholder="Digite seu nome"
              required
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Digite seu email"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="date">Data</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start font-normal"
                  >
                    <CalendarDaysIcon className="mr-2 h-4 w-4" />
                    Escolha uma data.
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 flex justify-center">
                  <div className="flex justify-center items-center">
                    <Calendar mode="single" />
                  </div>
                </PopoverContent>
              </Popover>
            </div>
            <div>
              <Label htmlFor="time">Hora</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start font-normal"
                  >
                    <ClockIcon className="mr-2 h-4 w-4" />
                    Escolha uma hora.
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 flex justify-center">
                  <div />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <Button type="submit" className="w-full">
            Adicionar ao Google Calendar
          </Button>
        </form>
      </section>
    </div>
  );
}

// Ícone de calendário com props
function CalendarDaysIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props} // Permitir a passagem de props, como className
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  );
}

// Ícone de relógio com props
function ClockIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props} // Permitir a passagem de props, como className
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export { CalendarDaysIcon, ClockIcon };
