'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

export default function AboutHero() {
  return (
    <section className="relative min-h-[70vh] bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/codeman.jpg"
          alt="Background texture"
          layout="fill"
          objectFit="cover"
          className="mix-blend-overlay"
          priority
        />
      </div>
      <div className="container mx-auto px-4 py-8 sm:py-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-green-600"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Conheça a nossa Startup!
            </motion.h1>
            <motion.p
              className="text-xl sm:text-2xl font-semibold mb-8 text-lime-300"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Inovação, Excelência e Compromisso
            </motion.p>
            <motion.div
              className="text-lg mb-10 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Buscamos a todo instante estarmos atualizados diante ao avanço da tecnologia, assim, proporcionamos aos nossos clientes entregas de ponta e de alta qualidade e eficiência.
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Button size="lg" className="bg-lime-500 text-gray-900 hover:bg-lime-600 transition-colors duration-300">
                Saiba Mais
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full aspect-square max-w-sm mx-auto">
              <Image
                src="/logowhite.png"
                alt="Startup logo"
                layout="fill"
                objectFit="contain"
                className="drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </section>
  )
}