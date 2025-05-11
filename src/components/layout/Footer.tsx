
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-viagemja-darkblue text-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ViagemJá</h3>
            <p className="text-gray-300">
              Sua plataforma de mobilidade urbana. <br />
              Viaje com segurança e conforto.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-300 hover:text-white transition">
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link to="/motoristas" className="text-gray-300 hover:text-white transition">
                  Seja um motorista
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Email: contato@viagemja.com</li>
              <li>Telefone: (11) 3456-7890</li>
              <li>São Paulo, Brasil</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-6 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} ViagemJá. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
