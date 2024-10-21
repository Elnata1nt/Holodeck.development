import { AnimatedBeamMultipleOutputDemo } from "@/components/(features)/pagechat/multoutputs/_components/multoutputs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Users, Shield, Zap, ChevronRight, Star, Download } from "lucide-react"

export default function PageChatsection() {
  return (
    <div className="min-h-screen bg-primary-foreground">
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Desenvolvimento de Chatbot
          </h1>
          <p className="text-base md:text-xl text-gray-600 mb-8">
            Automatize conversas e crie experiências interativas para seus usuários com o poder de um Chatbot inteligente.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="bg-black hover:bg-slate-800 text-white">
              Comece Agora
            </Button>
            <Button size="lg" variant="outline">
              Saiba Mais
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card>
            <CardHeader>
              <Users className="w-10 h-10 text-lime-600 mb-2" />
              <CardTitle>Interação Colaborativa</CardTitle>
            </CardHeader>
            <CardContent>
              Desenvolva um chatbot que permita conversas em grupo, respondendo a múltiplos usuários de forma eficiente.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Shield className="w-10 h-10 text-lime-600 mb-2" />
              <CardTitle>Segurança de Dados</CardTitle>
            </CardHeader>
            <CardContent>
              Garanta que as interações no chatbot estejam seguras e criptografadas, protegendo as informações dos usuários.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Zap className="w-10 h-10 text-lime-600 mb-2" />
              <CardTitle>Respostas Instantâneas</CardTitle>
            </CardHeader>
            <CardContent>
              Respostas em tempo real tornam as interações mais fluidas, mantendo seus usuários engajados.
            </CardContent>
          </Card>
        </div>

        <div className="bg-lime-100 rounded-lg p-8 mb-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Acompanhe o Desempenho do Seu Chatbot</h2>
              <p className="text-gray-600 mb-4">
                Monitore as interações, analise os diálogos e veja o impacto do seu chatbot em tempo real.
              </p>
              <Button variant="link" className="text-lime-600 hover:text-lime-700">
                Explore Recursos <ChevronRight className="w-4 h-4 ml-1 inline" />
              </Button>
            </div>
            <div className="md:w-1/2 md:pl-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold">Suporte de Atendimento ao Cliente</span>
                  <span className="text-sm text-gray-500">10 interações diárias</span>
                </div>
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Progresso</span>
                    <span>80%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-lime-600 h-2.5 rounded-full" style={{ width: "80%" }}></div>
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  400 / 500 interações concluídas
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Seja Parte da Revolução dos Chatbots
          </h2>
          <div className="flex justify-center items-center space-x-2 mb-4">
            <Star className="w-6 h-6 text-yellow-400 fill-current" />
            <Star className="w-6 h-6 text-yellow-400 fill-current" />
            <Star className="w-6 h-6 text-yellow-400 fill-current" />
            <Star className="w-6 h-6 text-yellow-400 fill-current" />
            <Star className="w-6 h-6 text-yellow-400 fill-current" />
            <span className="text-2xl font-bold text-gray-900 ml-2">5.0</span>
          </div>
          <p className="text-gray-600 mb-8">
            Mais de 5.000 empresas já utilizam nosso chatbot para aprimorar a experiência dos usuários.
          </p>
          <div className="flex justify-center items-center">
            <Download className="w-6 h-6 mr-2" />
            <span className="text-xl font-semibold">50.000+ Downloads</span>
          </div>
        </div>

        <AnimatedBeamMultipleOutputDemo />

        <div className="bg-gray-100 mt-10 rounded-lg p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
            Pronto para Criar Seu Chatbot Personalizado?
          </h2>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Input type="email" placeholder="Insira seu e-mail" className="flex-grow" />
              <Button className="bg-lime-600 hover:bg-lime-700 text-white">
                Comece Agora
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
