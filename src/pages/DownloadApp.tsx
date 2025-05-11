
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowDownToLine, Smartphone, Globe, Info } from "lucide-react";

const DownloadApp = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
          ViagemJá App - Instale em seu dispositivo
        </h1>

        <div className="max-w-3xl mx-auto">
          <Tabs defaultValue="pwa" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="pwa">Instalação Rápida (PWA)</TabsTrigger>
              <TabsTrigger value="native">App Nativo</TabsTrigger>
            </TabsList>
            
            <TabsContent value="pwa" className="mt-6">
              <Card>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Globe className="h-8 w-8 text-viagemja-blue" />
                    <h2 className="text-xl font-semibold">Instalação como Web App</h2>
                  </div>
                  
                  <p className="mb-6 text-gray-600">
                    Você pode instalar o ViagemJá diretamente do seu navegador, sem precisar baixar da loja de aplicativos.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="border-l-4 border-viagemja-blue pl-4">
                      <h3 className="font-medium mb-2">No Android (Chrome):</h3>
                      <ol className="list-decimal list-inside space-y-2 text-gray-700">
                        <li>Abra o site ViagemJá no Chrome</li>
                        <li>Clique no menu (três pontos) no canto superior direito</li>
                        <li>Selecione "Adicionar à tela inicial"</li>
                        <li>Confirme a adição do aplicativo</li>
                      </ol>
                    </div>
                    
                    <div className="border-l-4 border-viagemja-blue pl-4">
                      <h3 className="font-medium mb-2">No iPhone (Safari):</h3>
                      <ol className="list-decimal list-inside space-y-2 text-gray-700">
                        <li>Abra o site ViagemJá no Safari</li>
                        <li>Toque no ícone de compartilhamento (retângulo com seta)</li>
                        <li>Role para baixo e toque em "Adicionar à Tela de Início"</li>
                        <li>Toque em "Adicionar" para confirmar</li>
                      </ol>
                    </div>
                  </div>
                  
                  <div className="mt-6 bg-viagemja-gray p-4 rounded-md flex items-start gap-3">
                    <Info className="h-5 w-5 text-viagemja-blue shrink-0 mt-1" />
                    <p className="text-sm">
                      Após a instalação, você poderá acessar o ViagemJá diretamente do ícone na sua tela inicial, sem precisar abrir o navegador.
                    </p>
                  </div>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="native" className="mt-6">
              <Card>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Smartphone className="h-8 w-8 text-viagemja-blue" />
                    <h2 className="text-xl font-semibold">App Nativo ViagemJá</h2>
                  </div>
                  
                  <p className="mb-6 text-gray-600">
                    Baixe nosso aplicativo nativo para ter a melhor experiência possível em seu dispositivo móvel.
                  </p>
                  
                  <div className="space-y-4">
                    <Button className="w-full justify-start gap-3" onClick={() => window.open("#", "_blank")}>
                      <ArrowDownToLine className="h-5 w-5" />
                      <span>Download para Android</span>
                    </Button>
                    
                    <Button className="w-full justify-start gap-3" onClick={() => window.open("#", "_blank")}>
                      <ArrowDownToLine className="h-5 w-5" />
                      <span>Download para iOS</span>
                    </Button>
                  </div>
                  
                  <div className="mt-6 grid gap-4">
                    <h3 className="font-medium">Benefícios do aplicativo nativo:</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Melhor desempenho e velocidade</li>
                      <li>Notificações em tempo real</li>
                      <li>Acesso a recursos exclusivos</li>
                      <li>Melhor experiência do usuário</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </MainLayout>
  );
};

export default DownloadApp;
