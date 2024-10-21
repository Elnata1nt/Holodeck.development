import { Shield, Server, Cloud, Monitor } from "lucide-react";

type HeroTagProps = {
  titulo: string;
  icone: React.ReactNode;
  corFundo: string;
  corTexto: string;
  conteudo: string;
};

function HeroTag() {
  const cartoes = [
    {
      titulo: "Segurança Cibernética",
      icone: <Shield className="w-6 h-6" />,
      corFundo: "bg-gray-800",
      corTexto: "text-white",
      conteudo:
        "Garantimos a proteção dos seus dados e sistemas contra ameaças cibernéticas com soluções avançadas.",
    },
    {
      titulo: "Gestão de TI",
      icone: <Server className="w-6 h-6" />,
      corFundo: "bg-lime-300",
      corTexto: "text-gray-800",
      conteudo:
        "Oferecemos uma gestão eficaz de toda a infraestrutura de TI, garantindo performance e eficiência.",
    },
    {
      titulo: "Computação em Nuvem",
      icone: <Cloud className="w-6 h-6" />,
      corFundo: "bg-white",
      corTexto: "text-gray-800",
      conteudo:
        "Nossos serviços de computação em nuvem permitem escalabilidade, segurança e agilidade para o seu negócio.",
    },
    {
      titulo: "Desenvolvimento de Software",
      icone: <Monitor className="w-6 h-6" />,
      corFundo: "bg-muted",
      corTexto: "text-gray-800",
      conteudo:
        "Desenvolvemos soluções sob medida para atender às necessidades específicas do seu negócio.",
    },
  ];

  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Nossa Missão é Melhorar Seu{" "}
          <span className="bg-lime-300 text-black px-2">Negócio</span> Através
          da Tecnologia
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cartoes.map((cartao, index) => (
            <CartaoServico
              key={index}
              titulo={cartao.titulo}
              icone={cartao.icone}
              corFundo={cartao.corFundo}
              corTexto={cartao.corTexto}
              conteudo={cartao.conteudo}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CartaoServico({ titulo, icone, corFundo, corTexto, conteudo }: HeroTagProps) {
  return (
    <div className={`${corFundo} ${corTexto} p-6 rounded-lg shadow-md`}>
      <div className="flex items-center mb-4">
        {icone}
        <h2 className="text-xl font-semibold ml-2">{titulo}</h2>
      </div>
      <p className="text-sm">{conteudo}</p>
    </div>
  );
}

export default HeroTag;
