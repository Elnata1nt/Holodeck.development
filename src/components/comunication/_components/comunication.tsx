import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function ComuniationSection() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-24 lg:py-32">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
        <div className="space-y-6">
          <div className="inline-block bg-[#e8ffa8] text-black text-sm font-medium px-3 py-1 rounded-full">
            #1 Sites de primeira linha
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Chegou a hora de
            <span className="relative">
              <span className="relative z-10"> elevar sua marca:</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-[#e8ffa8] -z-10"></span>
            </span>{" "}
            um site feito sob medida para
            <span className="relative">
              <span className="relative z-10">
                {" "}
                impulsionar resultados reais.
              </span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-[#e8ffa8] -z-10"></span>
            </span>
            <span className="inline-block ml-2">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                  fill="black"
                />
              </svg>
            </span>
          </h1>
          <p className="text-xl text-gray-600">
            Transforme suas ideias em realidade com soluções web personalizadas
            e inovadoras, desenvolvidas com as mais recentes tecnologias e
            práticas recomendadas do setor.
          </p>
          <Button
            size="lg"
            className="bg-black text-white hover:bg-gray-800 rounded-full px-6 py-3 text-lg"
          >
            Comece Agora
            <svg
              className="ml-2 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Button>
          <div className="pt-6">
            <p className="text-sm ls:text-center text-gray-500 mb-4">
              Confiado por grandes marcas.
            </p>
            <div className="flex space-x-6 ls:justify-center ls:items-center">
              <Image
                src="/holodecklogo.png"
                alt="Holodeck logo"
                width={60}
                height={30}
                style={{ width: "auto", height: "auto" }}
                className="grayscale"
              />
              {/* <Image
                src="/innyxlog.png"
                alt="Martino"
                width={100}
                height={30}
                style={{ width: "auto", height: "auto" }}
                className="grayscale"
              /> */}
              <Image
                src="/LogoIcon.png"
                alt="askimat"
                width={50}
                height={30}
                style={{ width: "auto", height: "auto" }}
                className="grayscale"
              />

              {/* <Image
                src="/logo.png"
                alt="Rocker"
                width={80}
                height={30}
                className="grayscale"
              /> */}
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="lg:absolute -top-8 -right-8 bg-[#e8ffa8] rounded-full p-4 z-20 lg:w-24 lg:h-24 flex mb-5 items-center justify-center">
            <span className="text-xs font-semibold text-center leading-tight">
              SPECIAL EDITION
            </span>
          </div>
          <Card className="overflow-hidden rounded-[2rem] shadow-2xl">
            <div className="relative">
              <Image
                src="/communithome.jpg"
                alt="Student learning online"
                width={800}
                height={600}
                className="object-cover"
              />
              <div className="lg:absolute top-4 left-4 bg-gray-900 text-white p-4 lg:rounded-2xl">
                <p className="text-xs uppercase mb-1">Desenvolva sua Marca.</p>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-bold">300K+</p>
                  <svg
                    className="w-16 h-8"
                    viewBox="0 0 64 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 30L16 20L30 25L44 5L62 15"
                      stroke="#e8ffa8"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-xs uppercase mt-4 mb-1 ">
                  Trabalho concluído.
                </p>
                <p className="text-2xl font-bold">+60</p>
                <div className="mt-2 flex space-x-1">
                  {[1, 2, 3, 4].map((_, i) => (
                    <div
                      key={i}
                      className="w-2 bg-[#e8ffa8] rounded-full"
                      style={{ height: `${(i + 1) * 6}px` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
