"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Instagram,
  Linkedin,
  Github,
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você adicionaria a lógica para processar o formulário
    console.log("Formulário enviado:", { email, message });
    setEmail("");
    setMessage("");
  };

  return (
    <footer className="bg-black text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black to-blue-900/20 pointer-events-none"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6">DevCoder</h2>
            <p className="text-gray-400 mb-8 max-w-md">
              Transformando ideias em realidade digital. Somos especialistas em
              criar soluções inovadoras que impulsionam o seu negócio para o
              futuro.
            </p>
            <nav className="mb-8">
              <ul className="flex flex-wrap gap-6">
                <li>
                  <Link
                    href="/"
                    className="hover:text-lime-400 transition-colors"
                  >
                    Início
                  </Link>
                </li>
                <li>
                  <Link
                    href="/service"
                    className="hover:text-lime-400 transition-colors"
                  >
                    Serviços
                  </Link>
                </li>

              </ul>
            </nav>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/Elnata1nt"
                className="text-lime-500 hover:text-lime-400"
              >
                <Github size={20} />
              </Link>
              <Link
                href="https://www.instagram.com/elnatancorrea/"
                className="text-lime-500 hover:text-lime-400 transition-colors"
              >
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/elnatan1nt/"
                className="text-lime-500 hover:text-lime-400 transition-colors"
              >
                <Linkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-6 top-0 bottom-0 w-px bg-gradient-to-b from-lime-500 to-lime-800"></div>
            <h3 className="text-xl font-semibold mb-4">Entre em contato</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu e-mail"
                className="w-full px-4 py-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500"
                required
              />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Sua mensagem"
                rows={3}
                className="w-full px-4 py-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-lime-500 hover:bg-lime-600 rounded-lg text-white py-2 px-4 flex items-center justify-center"
              >
                Enviar <ArrowRight size={16} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} DEVCODER. Todos os direitos reservados.
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-lime-500"></div>
    </footer>
  );
}
