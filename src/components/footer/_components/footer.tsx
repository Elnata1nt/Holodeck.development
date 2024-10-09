import Link from "next/link";
import { Instagram, Linkedin, Github } from "lucide-react"; // Importa apenas os ícones

const Footer = () => {
  return (
    <footer className="flex bg-black flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-lime-400">
        &copy; Elnata Correa, Fullstack Developer | © 2024. All rights reserved.
      </p>
      <nav className="sm:ml-auto text-white items-center flex gap-4 sm:gap-6">
        <Link
          href="/terms"
          className="text-xs hover:underline underline-offset-4"
          prefetch={false}
        >
          Terms of Service
        </Link>
        <Link
          href="/privacy"
          className="text-xs hover:underline underline-offset-4"
          prefetch={false}
        >
          Privacy
        </Link>
        <div className="flex space-x-4">
          <Link
            href="https://www.instagram.com/elnatancorrea/"
            className="text-lime-500 hover:text-lime-400"
          >
            <Instagram size={20} />
          </Link>
          <Link
            href="https://github.com/Elnata1nt"
            className="text-lime-500 hover:text-lime-400"
          >
            <Github size={20} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/elnatan1nt/"
            className="text-lime-500 hover:text-lime-400"
          >
            <Linkedin size={20} />
          </Link>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
