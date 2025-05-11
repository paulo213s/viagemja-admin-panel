
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
          <Link to="/" className="text-gray-700 hover:text-viagemja-blue transition">
            Home
          </Link>
          {currentUser?.tipo === 'admin' && (
            <Link to="/admin" className="text-gray-700 hover:text-viagemja-blue transition">
              Painel Admin
            </Link>
          )}
          {currentUser ? (
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">Olá, {currentUser.nome.split(' ')[0]}</span>
              <Button onClick={logout} variant="outline">
                Sair
              </Button>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link to="/cadastro">
                <Button>Cadastre-se</Button>
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
                <Link to="/" className="text-gray-700 hover:text-viagemja-blue transition text-lg py-2">
                  Home
                </Link>
                {currentUser?.tipo === 'admin' && (
                  <Link to="/admin" className="text-gray-700 hover:text-viagemja-blue transition text-lg py-2">
                    Painel Admin
                  </Link>
                )}
                {currentUser ? (
                  <>
                    <div className="text-gray-700 py-2">Olá, {currentUser.nome.split(' ')[0]}</div>
                    <Button onClick={logout} className="w-full">
                      Sair
                    </Button>
                  </>
                ) : (
                  <>
                    <Link to="/login" className="w-full">
                      <Button variant="outline" className="w-full">Login</Button>
                    </Link>
                    <Link to="/cadastro" className="w-full">
                      <Button className="w-full">Cadastre-se</Button>
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
