import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactSection() {
  return (
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
            <Input type="text" placeholder="Nome" className="w-full" />
            <Input type="email" placeholder="Email" className="w-full" />
            <Textarea placeholder="Mensagem" rows={4} className="w-full" />
            <Button type="submit" className="w-full">
              Enviar Mensagem
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
