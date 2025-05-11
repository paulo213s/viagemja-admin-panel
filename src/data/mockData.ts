
import { User, Ride } from '@/types';

export const mockUsers: User[] = [
  {
    id: '1',
    nome: 'João Silva',
    email: 'joao.silva@example.com',
    telefone: '(11) 98765-4321',
    tipo: 'cliente',
    createdAt: '2023-01-15T10:30:00Z',
  },
  {
    id: '2',
    nome: 'Maria Oliveira',
    email: 'maria.oliveira@example.com',
    telefone: '(21) 98765-1234',
    tipo: 'cliente',
    createdAt: '2023-02-10T14:45:00Z',
  },
  {
    id: '3',
    nome: 'Carlos Santos',
    email: 'carlos.santos@example.com',
    telefone: '(31) 97654-3210',
    tipo: 'motorista',
    createdAt: '2023-01-05T09:15:00Z',
  },
  {
    id: '4',
    nome: 'Ana Pereira',
    email: 'ana.pereira@example.com',
    telefone: '(41) 99876-5432',
    tipo: 'motorista',
    createdAt: '2023-03-20T16:20:00Z',
  },
  {
    id: '5',
    nome: 'Roberto Almeida',
    email: 'roberto.almeida@example.com',
    telefone: '(51) 98765-9876',
    tipo: 'admin',
    createdAt: '2023-01-01T08:00:00Z',
  },
  {
    id: '6',
    nome: 'Juliana Costa',
    email: 'juliana.costa@example.com',
    telefone: '(61) 99999-8888',
    tipo: 'cliente',
    createdAt: '2023-04-05T11:30:00Z',
  },
  {
    id: '7',
    nome: 'Fernando Gomes',
    email: 'fernando.gomes@example.com',
    telefone: '(71) 98888-7777',
    tipo: 'motorista',
    createdAt: '2023-02-28T13:45:00Z',
  },
];

export const mockRides: Ride[] = [
  {
    id: '1',
    clientId: '1',
    driverId: '3',
    origin: {
      address: 'Av. Paulista, 1000, São Paulo',
      lat: -23.5673,
      lng: -46.6482,
    },
    destination: {
      address: 'Rua Augusta, 500, São Paulo',
      lat: -23.5521,
      lng: -46.6544,
    },
    status: 'completed',
    price: 25.50,
    distance: 3.2,
    duration: 15,
    createdAt: '2023-05-10T14:30:00Z',
  },
  {
    id: '2',
    clientId: '2',
    driverId: '4',
    origin: {
      address: 'Rua Oscar Freire, 300, São Paulo',
      lat: -23.5616,
      lng: -46.6709,
    },
    destination: {
      address: 'Shopping Ibirapuera, São Paulo',
      lat: -23.6109,
      lng: -46.6660,
    },
    status: 'in-progress',
    price: 32.75,
    distance: 5.8,
    duration: 25,
    createdAt: '2023-05-11T09:45:00Z',
  },
  {
    id: '3',
    clientId: '6',
    origin: {
      address: 'Aeroporto de Congonhas, São Paulo',
      lat: -23.6266,
      lng: -46.6636,
    },
    destination: {
      address: 'Hotel Maksoud Plaza, São Paulo',
      lat: -23.5639,
      lng: -46.6529,
    },
    status: 'pending',
    price: 45.20,
    distance: 8.3,
    duration: 30,
    createdAt: '2023-05-11T16:20:00Z',
  },
];
