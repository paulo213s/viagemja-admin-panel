
import { useState, useCallback } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { Loader2 } from "lucide-react";

// Map container styles
const mapContainerStyle = {
  width: '100%',
  height: '300px',
  borderRadius: '0.5rem',
};

// Center the map on a default location (Brazil)
const center = {
  lat: -15.7801,
  lng: -47.9292,
};

const libraries = ["places"];

const SolicitarCorrida = () => {
  const { toast } = useToast();
  const [origem, setOrigem] = useState("");
  const [destino, setDestino] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [pickupLocation, setPickupLocation] = useState(center);
  const [destinationLocation, setDestinationLocation] = useState({...center, lat: center.lat + 0.02});

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY", // Replace with your Google Maps API key
    libraries: libraries as any,
  });

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

  const onMapClick = useCallback((e: google.maps.MapMouseEvent) => {
    if (!e.latLng) return;
    
    setPickupLocation({
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    });
  }, []);

  // Render loading state
  if (loadError) {
    return (
      <MainLayout>
        <div className="container mx-auto px-6 py-12">
          <div className="text-center">Erro ao carregar o mapa. Por favor, tente novamente mais tarde.</div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">Solicitar uma Corrida</h1>
        
        <div className="max-w-md mx-auto">
          <Card>
            <form onSubmit={handleSubmit} className="p-4 md:p-6 space-y-4 md:space-y-6">
              <div className="space-y-2">
                <Label htmlFor="origem">Origem</Label>
                <Input 
                  id="origem" 
                  placeholder="Digite o endereço de origem" 
                  value={origem}
                  onChange={(e) => setOrigem(e.target.value)}
                  required
                  className="w-full"
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
                  className="w-full"
                />
              </div>
              
              {/* Google Map */}
              <div className="pt-2">
                <Label>Selecione no mapa (clique para marcar sua localização)</Label>
                <div className="mt-2 h-[300px] w-full rounded-md overflow-hidden border border-gray-300">
                  {!isLoaded ? (
                    <div className="flex items-center justify-center h-full bg-gray-100">
                      <Loader2 className="h-8 w-8 animate-spin text-viagemja-blue" />
                    </div>
                  ) : (
                    <GoogleMap
                      mapContainerStyle={mapContainerStyle}
                      zoom={13}
                      center={center}
                      onClick={onMapClick}
                      options={{
                        fullscreenControl: false,
                        streetViewControl: false,
                      }}
                    >
                      <Marker position={pickupLocation} label="A" />
                      <Marker position={destinationLocation} label="B" />
                    </GoogleMap>
                  )}
                </div>
              </div>
              
              <Button type="submit" className="w-full" disabled={carregando}>
                {carregando ? "Procurando motoristas..." : "Solicitar Corrida"}
              </Button>
              
              {/* Installation instructions for mobile app */}
              <div className="mt-6 p-4 bg-viagemja-gray rounded-lg">
                <h3 className="text-lg font-medium mb-2">ViagemJá App</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Baixe nosso aplicativo para uma experiência melhor no seu celular!
                </p>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" className="text-xs" onClick={() => window.open("#", "_blank")}>
                    Download para Android
                  </Button>
                  <Button variant="outline" className="text-xs" onClick={() => window.open("#", "_blank")}>
                    Download para iOS
                  </Button>
                </div>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default SolicitarCorrida;
