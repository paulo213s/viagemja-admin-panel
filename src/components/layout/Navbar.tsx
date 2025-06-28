
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { ChevronDown } from 'lucide-react';

export const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-md py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-viagemja-blue rounded-full p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <span className="font-bold text-2xl text-viagemja-darkblue">ViagemJá</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-viagemja-blue transition font-medium">
                  Produtos
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid grid-cols-4 gap-6 p-6 w-[800px]">
                    {/* Passeios */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Passeios</h3>
                      <ul className="space-y-2">
                        <li><Link to="/seguranca-piloto" className="text-sm text-gray-600 hover:text-viagemja-blue">Segurança do piloto</Link></li>
                        <li><Link to="/torne-se-motorista" className="text-sm text-gray-600 hover:text-viagemja-blue">Torne-se um motorista</Link></li>
                      </ul>
                    </div>

                    {/* Scooters */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Scooters</h3>
                      <ul className="space-y-2">
                        <li><Link to="/seguranca-scooter" className="text-sm text-gray-600 hover:text-viagemja-blue">Segurança de scooter</Link></li>
                        <li><Link to="/relatar-problema" className="text-sm text-gray-600 hover:text-viagemja-blue">Relatar um problema</Link></li>
                      </ul>
                    </div>

                    {/* Mercado de parafusos */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Mercado de parafusos</h3>
                      <ul className="space-y-2">
                        <li><Link to="/torne-se-mensageiro" className="text-sm text-gray-600 hover:text-viagemja-blue">Torne-se um mensageiro</Link></li>
                        <li><Link to="/adicionar-restaurante" className="text-sm text-gray-600 hover:text-viagemja-blue">Adicionar um restaurante ou loja</Link></li>
                      </ul>
                    </div>

                    {/* Bolt Food */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">ViagemJá Food</h3>
                      <ul className="space-y-2">
                        <li><Link to="/torne-se-mensageiro-food" className="text-sm text-gray-600 hover:text-viagemja-blue">Torne-se um mensageiro</Link></li>
                        <li><Link to="/adicionar-restaurante-food" className="text-sm text-gray-600 hover:text-viagemja-blue">Adicionar um restaurante ou loja</Link></li>
                      </ul>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-viagemja-blue transition font-medium">
                  Ganhe com ViagemJá
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid grid-cols-4 gap-6 p-6 w-[800px]">
                    {/* Acionamento por parafuso */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Acionamento por parafuso</h3>
                      <ul className="space-y-2">
                        <li><Link to="/perguntas-frequentes" className="text-sm text-gray-600 hover:text-viagemja-blue">Perguntas frequentes</Link></li>
                        <li><Link to="/denunciar-veiculo" className="text-sm text-gray-600 hover:text-viagemja-blue">Denunciar um veículo</Link></li>
                      </ul>
                    </div>

                    {/* Negócios de parafusos */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Negócios de parafusos</h3>
                      <ul className="space-y-2">
                        <li><Link to="/beneficios" className="text-sm text-gray-600 hover:text-viagemja-blue">Benefícios</Link></li>
                        <li><Link to="/perfil-trabalho" className="text-sm text-gray-600 hover:text-viagemja-blue">Perfil de trabalho</Link></li>
                        <li><Link to="/produtos" className="text-sm text-gray-600 hover:text-viagemja-blue">Produtos</Link></li>
                        <li><Link to="/bolt-food-empresas" className="text-sm text-gray-600 hover:text-viagemja-blue">ViagemJá Food para empresas</Link></li>
                      </ul>
                    </div>

                    {/* Bicicletas elétricas */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Bicicletas elétricas</h3>
                      <ul className="space-y-2">
                        <li><Link to="/laboratorio-seguranca" className="text-sm text-gray-600 hover:text-viagemja-blue">Laboratório de segurança</Link></li>
                        <li><Link to="/relatar-problema-bike" className="text-sm text-gray-600 hover:text-viagemja-blue">Relatar um problema</Link></li>
                        <li><Link to="/perguntas-frequentes-bike" className="text-sm text-gray-600 hover:text-viagemja-blue">Perguntas frequentes</Link></li>
                      </ul>
                    </div>

                    {/* Parafuso Plus */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">ViagemJá Plus</h3>
                      <ul className="space-y-2">
                        <li><Link to="/beneficios-plus" className="text-sm text-gray-600 hover:text-viagemja-blue">Benefícios</Link></li>
                        <li><Link to="/como-participar" className="text-sm text-gray-600 hover:text-viagemja-blue">Como participar</Link></li>
                        <li><Link to="/perguntas-frequentes-plus" className="text-sm text-gray-600 hover:text-viagemja-blue">Perguntas frequentes</Link></li>
                      </ul>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/empresa" className="text-gray-700 hover:text-viagemja-blue transition font-medium px-4 py-2">
                  Empresa
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/seguranca" className="text-gray-700 hover:text-viagemja-blue transition font-medium px-4 py-2">
                  Segurança
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/apoiar" className="text-gray-700 hover:text-viagemja-blue transition font-medium px-4 py-2">
                  Apoiar
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/cidades" className="text-gray-700 hover:text-viagemja-blue transition font-medium px-4 py-2">
                  Cidades
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Divisor visual */}
          <div className="h-6 w-px bg-gray-300"></div>
          
          {currentUser?.tipo === 'admin' && (
            <Link to="/admin" className="text-gray-700 hover:text-viagemja-blue transition font-medium">
              Painel Admin
            </Link>
          )}
          
          {currentUser ? (
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">Olá, {currentUser.nome.split(' ')[0]}</span>
              <Button onClick={handleLogout} variant="outline">
                Sair
              </Button>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Link to="/login">
                <Button variant="outline" className="w-full">Login</Button>
              </Link>
              <Link to="/cadastro-motorista">
                <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-semibold">
                  Seja um Motorista
                </Button>
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="h-10 w-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-6">
                <Link to="/produtos" className="text-gray-700 hover:text-viagemja-blue transition text-lg py-2">
                  Produtos
                </Link>
                <Link to="/ganhe-com-viagemja" className="text-gray-700 hover:text-viagemja-blue transition text-lg py-2">
                  Ganhe com ViagemJá
                </Link>
                <Link to="/empresa" className="text-gray-700 hover:text-viagemja-blue transition text-lg py-2">
                  Empresa
                </Link>
                <Link to="/seguranca" className="text-gray-700 hover:text-viagemja-blue transition text-lg py-2">
                  Segurança
                </Link>
                <Link to="/apoiar" className="text-gray-700 hover:text-viagemja-blue transition text-lg py-2">
                  Apoiar
                </Link>
                <Link to="/cidades" className="text-gray-700 hover:text-viagemja-blue transition text-lg py-2">
                  Cidades
                </Link>
                {currentUser?.tipo === 'admin' && (
                  <Link to="/admin" className="text-gray-700 hover:text-viagemja-blue transition text-lg py-2">
                    Painel Admin
                  </Link>
                )}
                {currentUser ? (
                  <>
                    <div className="text-gray-700 py-2">Olá, {currentUser.nome.split(' ')[0]}</div>
                    <Button onClick={handleLogout} className="w-full">
                      Sair
                    </Button>
                  </>
                ) : (
                  <>
                    <Link to="/login" className="w-full">
                      <Button variant="outline" className="w-full">Login</Button>
                    </Link>
                    <Link to="/cadastro-motorista" className="w-full">
                      <Button className="bg-green-500 hover:bg-green-600 text-white w-full">
                        Seja um Motorista
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
