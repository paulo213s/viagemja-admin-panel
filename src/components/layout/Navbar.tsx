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
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsOpen(false);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg border-b border-gray-100 py-3 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <span className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">ViagemJá</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 transition font-medium bg-transparent">
                  Produtos
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid grid-cols-4 gap-6 p-6 w-[800px] bg-white">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Passeios</h3>
                      <ul className="space-y-2">
                        <li><Link to="/seguranca-piloto" className="text-sm text-gray-600 hover:text-blue-600">Segurança do piloto</Link></li>
                        <li><Link to="/torne-se-motorista" className="text-sm text-gray-600 hover:text-blue-600">Torne-se um motorista</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Scooters</h3>
                      <ul className="space-y-2">
                        <li><Link to="/seguranca-scooter" className="text-sm text-gray-600 hover:text-blue-600">Segurança de scooter</Link></li>
                        <li><Link to="/relatar-problema" className="text-sm text-gray-600 hover:text-blue-600">Relatar um problema</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Mercado de parafusos</h3>
                      <ul className="space-y-2">
                        <li><Link to="/torne-se-mensageiro" className="text-sm text-gray-600 hover:text-blue-600">Torne-se um mensageiro</Link></li>
                        <li><Link to="/adicionar-restaurante" className="text-sm text-gray-600 hover:text-blue-600">Adicionar um restaurante ou loja</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">ViagemJá Food</h3>
                      <ul className="space-y-2">
                        <li><Link to="/torne-se-mensageiro-food" className="text-sm text-gray-600 hover:text-blue-600">Torne-se um mensageiro</Link></li>
                        <li><Link to="/adicionar-restaurante-food" className="text-sm text-gray-600 hover:text-blue-600">Adicionar um restaurante ou loja</Link></li>
                      </ul>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 transition font-medium bg-transparent">
                  Ganhe com ViagemJá
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid grid-cols-4 gap-6 p-6 w-[800px] bg-white">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Acionamento por parafuso</h3>
                      <ul className="space-y-2">
                        <li><Link to="/perguntas-frequentes" className="text-sm text-gray-600 hover:text-blue-600">Perguntas frequentes</Link></li>
                        <li><Link to="/denunciar-veiculo" className="text-sm text-gray-600 hover:text-blue-600">Denunciar um veículo</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Negócios de parafusos</h3>
                      <ul className="space-y-2">
                        <li><Link to="/beneficios" className="text-sm text-gray-600 hover:text-blue-600">Benefícios</Link></li>
                        <li><Link to="/perfil-trabalho" className="text-sm text-gray-600 hover:text-blue-600">Perfil de trabalho</Link></li>
                        <li><Link to="/produtos" className="text-sm text-gray-600 hover:text-blue-600">Produtos</Link></li>
                        <li><Link to="/bolt-food-empresas" className="text-sm text-gray-600 hover:text-blue-600">ViagemJá Food para empresas</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Bicicletas elétricas</h3>
                      <ul className="space-y-2">
                        <li><Link to="/laboratorio-seguranca" className="text-sm text-gray-600 hover:text-blue-600">Laboratório de segurança</Link></li>
                        <li><Link to="/relatar-problema-bike" className="text-sm text-gray-600 hover:text-blue-600">Relatar um problema</Link></li>
                        <li><Link to="/perguntas-frequentes-bike" className="text-sm text-gray-600 hover:text-blue-600">Perguntas frequentes</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">ViagemJá Plus</h3>
                      <ul className="space-y-2">
                        <li><Link to="/beneficios-plus" className="text-sm text-gray-600 hover:text-blue-600">Benefícios</Link></li>
                        <li><Link to="/como-participar" className="text-sm text-gray-600 hover:text-blue-600">Como participar</Link></li>
                        <li><Link to="/perguntas-frequentes-plus" className="text-sm text-gray-600 hover:text-blue-600">Perguntas frequentes</Link></li>
                      </ul>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/empresa" className="text-gray-700 hover:text-blue-600 transition font-medium px-4 py-2">
                  Empresa
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/seguranca" className="text-gray-700 hover:text-blue-600 transition font-medium px-4 py-2">
                  Segurança
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/apoiar" className="text-gray-700 hover:text-blue-600 transition font-medium px-4 py-2">
                  Apoiar
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/cidades" className="text-gray-700 hover:text-blue-600 transition font-medium px-4 py-2">
                  Cidades
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="h-6 w-px bg-gray-200"></div>
          
          {currentUser?.tipo === 'admin' && (
            <Link to="/admin" className="text-gray-700 hover:text-blue-600 transition font-medium">
              Painel Admin
            </Link>
          )}
          
          {currentUser ? (
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">Olá, {currentUser.nome.split(' ')[0]}</span>
              <Button onClick={handleLogout} variant="outline" className="hover:bg-gray-50">
                Sair
              </Button>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Link to="/login">
                <Button variant="outline" className="hover:bg-gray-50">Login</Button>
              </Link>
              <Link to="/cadastro-motorista">
                <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
                  Seja um Motorista
                </Button>
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-10 w-10 hover:bg-gray-100 rounded-lg"
              >
                <Menu className="h-6 w-6 text-gray-700" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-white">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                  <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    ViagemJá
                  </span>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => setIsOpen(false)}
                    className="h-8 w-8"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                <div className="flex-1 overflow-y-auto py-4">
                  <div className="space-y-1 px-4">
                    <div className="py-2">
                      <h3 className="font-semibold text-gray-900 mb-2">Produtos</h3>
                      <div className="space-y-1 ml-4">
                        <Link to="/seguranca-piloto" onClick={handleLinkClick} className="block py-2 text-gray-600 hover:text-blue-600">Segurança do piloto</Link>
                        <Link to="/torne-se-motorista" onClick={handleLinkClick} className="block py-2 text-gray-600 hover:text-blue-600">Torne-se um motorista</Link>
                        <Link to="/seguranca-scooter" onClick={handleLinkClick} className="block py-2 text-gray-600 hover:text-blue-600">Segurança de scooter</Link>
                        <Link to="/relatar-problema" onClick={handleLinkClick} className="block py-2 text-gray-600 hover:text-blue-600">Relatar um problema</Link>
                      </div>
                    </div>

                    <div className="py-2 border-t">
                      <h3 className="font-semibold text-gray-900 mb-2">Ganhe com ViagemJá</h3>
                      <div className="space-y-1 ml-4">
                        <Link to="/perguntas-frequentes" onClick={handleLinkClick} className="block py-2 text-gray-600 hover:text-blue-600">Perguntas frequentes</Link>
                        <Link to="/beneficios" onClick={handleLinkClick} className="block py-2 text-gray-600 hover:text-blue-600">Benefícios</Link>
                        <Link to="/produtos" onClick={handleLinkClick} className="block py-2 text-gray-600 hover:text-blue-600">Produtos</Link>
                      </div>
                    </div>

                    <div className="py-2 border-t">
                      <Link to="/empresa" onClick={handleLinkClick} className="block py-2 text-gray-700 hover:text-blue-600 font-medium">
                        Empresa
                      </Link>
                      <Link to="/seguranca" onClick={handleLinkClick} className="block py-2 text-gray-700 hover:text-blue-600 font-medium">
                        Segurança
                      </Link>
                      <Link to="/apoiar" onClick={handleLinkClick} className="block py-2 text-gray-700 hover:text-blue-600 font-medium">
                        Apoiar
                      </Link>
                      <Link to="/cidades" onClick={handleLinkClick} className="block py-2 text-gray-700 hover:text-blue-600 font-medium">
                        Cidades
                      </Link>
                    </div>

                    {currentUser?.tipo === 'admin' && (
                      <div className="py-2 border-t">
                        <Link to="/admin" onClick={handleLinkClick} className="block py-2 text-gray-700 hover:text-blue-600 font-medium">
                          Painel Admin
                        </Link>
                      </div>
                    )}
                  </div>
                </div>

                <div className="border-t p-4 space-y-3">
                  {currentUser ? (
                    <>
                      <div className="text-gray-700 py-2">Olá, {currentUser.nome.split(' ')[0]}</div>
                      <Button onClick={handleLogout} className="w-full" variant="outline">
                        Sair
                      </Button>
                    </>
                  ) : (
                    <>
                      <Link to="/login" onClick={handleLinkClick} className="w-full block">
                        <Button variant="outline" className="w-full">Login</Button>
                      </Link>
                      <Link to="/cadastro-motorista" onClick={handleLinkClick} className="w-full block">
                        <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white w-full font-semibold">
                          Seja um Motorista
                        </Button>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
