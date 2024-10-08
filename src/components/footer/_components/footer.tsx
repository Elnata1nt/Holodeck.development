import Link from "next/link";
import { Instagram, Linkedin, Github } from "lucide-react"; // Importa apenas os ícones
import Image from "next/image"; // Importa o componente de imagem do Next.js

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-28 text-center md:text-left">
          {/* Left section */}
          <div className="flex flex-col items-center md:items-start">
            <Image 
                src="/logo.png" // substitua pelo caminho correto da sua imagem
                alt="Descrição significativa da imagem" // adicione uma descrição significativa
                width={100} // Defina a largura desejada
                height={100} // Defina a altura desejada
            />
            <Link
              href="/privacy-policy"
              className="text-sm hover:text-lime-500"
            >
              Política de Privacidade
            </Link>
            <p className="text-sm mt-4">&copy; 2024 Elnata Correa</p>
          </div>

          {/* Center section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/nossa-historia"
                  className="text-lime-500 hover:underline"
                >
                  &lt;Minha história&gt;
                </Link>
              </li>
              <li>
                <Link
                  href="/area-do-cliente"
                  className="text-lime-500 hover:underline"
                >
                  &lt;Área do cliente&gt;
                </Link>
              </li>
              <li>
                <Link
                  href="/trabalhe-conosco"
                  className="text-lime-500 hover:underline"
                >
                  &lt;Trabalhe Conosco&gt;
                </Link>
              </li>
            </ul>
          </div>

          {/* Right section */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <p className="mb-2">elnatacorrea@hotmail.com</p>
            <p className="mb-4">(92) 99300-7673</p>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/elnatancorrea/"
                className="text-lime-500 hover:text-lime-400"
              >
                <Instagram size={24} />
              </Link>
              <Link
                href="https://github.com/Elnata1nt"
                className="text-lime-500 hover:text-lime-400"
              >
                <Github size={24} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/elnatan1nt/"
                className="text-lime-500 hover:text-lime-400"
              >
                <Linkedin size={24} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
