
import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const SolicitarCorrida = () => {
  const { toast } = useToast();
  const [origem, setOrigem] = useState("");
  const [destino, setDestino] = useState("");
  const [carregando, setCarregando] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCarregando(true);

    // Simulando o processamento do pedido
    setTimeout(() => {
      toast({
        title: "Corrida solicitada com sucesso!",
        description: `De ${origem} para ${destino}. Um motorista está a caminho.`,
      });
      setCarregando(false);
      setOrigem("");
      setDestino("");
    }, 1500);
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-center mb-8">Solicitar uma Corrida</h1>
        
        <div className="max-w-md mx-auto">
          <Card>
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div className="space-y-2">
                <Label htmlFor="origem">Origem</Label>
                <Input 
                  id="origem" 
                  placeholder="Digite o endereço de origem" 
                  value={origem}
                  onChange={(e) => setOrigem(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="destino">Destino</Label>
                <Input 
                  id="destino" 
                  placeholder="Digite o endereço de destino" 
                  value={destino}
                  onChange={(e) => setDestino(e.target.value)}
                  required
                />
              </div>
              
              <Button type="submit" className="w-full" disabled={carregando}>
                {carregando ? "Procurando motoristas..." : "Solicitar Corrida"}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default SolicitarCorrida;
