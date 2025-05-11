
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useToast } from '@/components/ui/use-toast';
import MainLayout from '@/components/layout/MainLayout';
import { useAuth } from '@/contexts/AuthContext';
import { mockUsers } from '@/data/mockData';
import { User } from '@/types';

const Admin = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [filter, setFilter] = useState('todos');
  const [search, setSearch] = useState('');

  useEffect(() => {
    // Check if user is an admin
    if (!currentUser || currentUser.tipo !== 'admin') {
      toast({
        title: 'Acesso restrito',
        description: 'Você não tem permissão para acessar esta página.',
        variant: 'destructive',
      });
      navigate('/');
      return;
    }

    // Load users
    setUsers(mockUsers);
  }, [currentUser, navigate, toast]);

  useEffect(() => {
    // Apply filters and search
    const filtered = users.filter((user) => {
      const matchesType = filter === 'todos' || user.tipo === filter;
      const matchesSearch = 
        user.nome.toLowerCase().includes(search.toLowerCase()) || 
        user.email.toLowerCase().includes(search.toLowerCase()) ||
        user.telefone.toLowerCase().includes(search.toLowerCase());
      
      return matchesType && matchesSearch;
    });
    
    setFilteredUsers(filtered);
  }, [users, filter, search]);

  const handleDeleteUser = (id: string) => {
    // In a real app, this would call an API
    setUsers(users.filter(user => user.id !== id));
    
    toast({
      title: 'Usuário excluído',
      description: 'O usuário foi excluído com sucesso.',
    });
  };

  const handlePromoteUser = (id: string) => {
    // In a real app, this would call an API
    setUsers(users.map(user => 
      user.id === id ? { ...user, tipo: 'admin' as const } : user
    ));
    
    toast({
      title: 'Usuário promovido',
      description: 'O usuário foi promovido para administrador.',
    });
  };

  return (
    <MainLayout>
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8">Painel Administrativo</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Buscar usuário
              </label>
              <Input
                placeholder="Buscar por nome, email ou telefone"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Filtrar por tipo
              </label>
              <Select
                value={filter}
                onValueChange={setFilter}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecionar tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">Todos os usuários</SelectItem>
                  <SelectItem value="cliente">Clientes</SelectItem>
                  <SelectItem value="motorista">Motoristas</SelectItem>
                  <SelectItem value="admin">Administradores</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Telefone</TableHead>
                  <TableHead>Tipo</TableHead>
                  <TableHead>Data de Cadastro</TableHead>
                  <TableHead>Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.length > 0 ? (
                  filteredUsers.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="font-medium">{user.nome}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.telefone}</TableCell>
                      <TableCell>
                        <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                          user.tipo === 'admin' 
                            ? 'bg-purple-100 text-purple-800' 
                            : user.tipo === 'motorista'
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-green-100 text-green-800'
                        }`}>
                          {user.tipo === 'admin' ? 'Admin' : user.tipo === 'motorista' ? 'Motorista' : 'Cliente'}
                        </span>
                      </TableCell>
                      <TableCell>
                        {new Date(user.createdAt).toLocaleDateString()}
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => handleDeleteUser(user.id)}
                          >
                            Excluir
                          </Button>
                          
                          {user.tipo === 'motorista' && (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handlePromoteUser(user.id)}
                            >
                              Promover
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-4">
                      Nenhum usuário encontrado
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          
          <div className="mt-4 text-sm text-gray-500">
            Total: {filteredUsers.length} usuários encontrados
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Admin;
