
export interface User {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  tipo: 'cliente' | 'motorista' | 'admin';
  createdAt: string;
}

export interface Ride {
  id: string;
  clientId: string;
  driverId?: string;
  origin: {
    address: string;
    lat: number;
    lng: number;
  };
  destination: {
    address: string;
    lat: number;
    lng: number;
  };
  status: 'pending' | 'accepted' | 'in-progress' | 'completed' | 'cancelled';
  price: number;
  distance: number;
  duration: number;
  createdAt: string;
}
