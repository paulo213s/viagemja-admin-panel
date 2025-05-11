
import { Button } from '@/components/ui/button';
import MainLayout from '@/components/layout/MainLayout';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const Index = () => {
  const { currentUser } = useAuth();

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-viagemja-blue to-viagemja-darkblue text-white py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Viaje com segurança e conforto
              </h1>
              <p className="text-xl mb-8">
                Com o ViagemJá, você chega ao seu destino com rapidez, segurança e pelo melhor preço.
              </p>
              {!currentUser ? (
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link to="/login">
                    <Button size="lg" className="bg-white text-viagemja-blue hover:bg-gray-100">
                      Fazer Login
                    </Button>
                  </Link>
                  <Link to="/cadastro">
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                      Cadastrar
                    </Button>
                  </Link>
                </div>
              ) : (
                <Link to="/solicitar-corrida">
                  <Button size="lg" className="bg-white text-viagemja-blue hover:bg-gray-100">
                    Solicitar corrida
                  </Button>
                </Link>
              )}
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://placehold.co/600x400/1E88E5/FFFFFF?text=Viagem+App" 
                alt="ViagemJá App" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Por que escolher ViagemJá?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-viagemja-gray rounded-lg p-6 text-center">
              <div className="bg-viagemja-blue inline-block p-3 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Rápido e Confiável</h3>
              <p className="text-gray-600">
                Viagens rápidas com os melhores motoristas da sua cidade.
              </p>
            </div>
            
            <div className="bg-viagemja-gray rounded-lg p-6 text-center">
              <div className="bg-viagemja-blue inline-block p-3 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="16" height="16" x="4" y="4" rx="2" />
                  <path d="m9 9 6 6" />
                  <path d="m15 9-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Preços Acessíveis</h3>
              <p className="text-gray-600">
                As melhores tarifas do mercado, sem surpresas no final.
              </p>
            </div>
            
            <div className="bg-viagemja-gray rounded-lg p-6 text-center">
              <div className="bg-viagemja-blue inline-block p-3 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Segurança Total</h3>
              <p className="text-gray-600">
                Motoristas verificados e sistema de avaliação em tempo real.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-viagemja-gray py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto para viajar?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de usuários que já estão aproveitando os benefícios do ViagemJá.
          </p>
          <Link to={currentUser ? "/solicitar-corrida" : "/cadastro"}>
            <Button size="lg">
              {currentUser ? "Solicitar uma corrida" : "Criar uma conta agora"}
            </Button>
          </Link>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
