
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <MainLayout>
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-6xl font-bold text-viagemja-blue mb-6">404</h1>
        <p className="text-2xl mb-8">Oops! Página não encontrada</p>
        <p className="text-gray-600 mb-8 max-w-lg mx-auto">
          A página que você está procurando parece não existir. Verifique o URL ou retorne para a página inicial.
        </p>
        <Link to="/">
          <Button size="lg">
            Voltar à Página Inicial
          </Button>
        </Link>
      </div>
    </MainLayout>
  );
};

export default NotFound;
