
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent } from '@/components/ui/card';
import MainLayout from '@/components/layout/MainLayout';

const CadastroMotorista = () => {
  const [formData, setFormData] = useState({
    email: '',
    telefone: '',
    cidade: '',
    aceitaTermos: false
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
    // Aqui você processaria o cadastro do motorista
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center gap-12">
          {/* Seção da esquerda - Conteúdo promocional */}
          <div className="flex-1 text-white space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Ganhe dinheiro dirigindo com a ViagemJá
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300">
              Torne-se um motorista da ViagemJá, defina seu horário e ganhe dinheiro dirigindo!
            </p>
          </div>

          {/* Seção da direita - Formulário */}
          <div className="flex-1 w-full max-w-md">
            <Card className="bg-white shadow-2xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  Torne-se um motorista
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* E-mail */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                      E-mail
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Digite o endereço de e-mail"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-viagemja-blue focus:border-transparent"
                      required
                    />
                  </div>

                  {/* Número de telefone */}
                  <div className="space-y-2">
                    <Label htmlFor="telefone" className="text-sm font-medium text-gray-700">
                      Número de telefone
                    </Label>
                    <div className="flex gap-2">
                      <div className="flex items-center bg-gray-50 border border-gray-300 rounded-lg px-3 py-3 min-w-[80px]">
                        <span className="text-sm">🇺🇸 +1</span>
                      </div>
                      <Input
                        id="telefone"
                        type="tel"
                        placeholder="Número de telemóvel"
                        value={formData.telefone}
                        onChange={(e) => handleInputChange('telefone', e.target.value)}
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-viagemja-blue focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  {/* Cidade */}
                  <div className="space-y-2">
                    <Label htmlFor="cidade" className="text-sm font-medium text-gray-700">
                      Cidade
                    </Label>
                    <Select onValueChange={(value) => handleInputChange('cidade', value)}>
                      <SelectTrigger className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-viagemja-blue focus:border-transparent">
                        <SelectValue placeholder="Cidade onde você irá dirigir" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sao-paulo">São Paulo</SelectItem>
                        <SelectItem value="rio-de-janeiro">Rio de Janeiro</SelectItem>
                        <SelectItem value="belo-horizonte">Belo Horizonte</SelectItem>
                        <SelectItem value="brasilia">Brasília</SelectItem>
                        <SelectItem value="salvador">Salvador</SelectItem>
                        <SelectItem value="fortaleza">Fortaleza</SelectItem>
                        <SelectItem value="curitiba">Curitiba</SelectItem>
                        <SelectItem value="recife">Recife</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Checkbox de termos */}
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="termos"
                      checked={formData.aceitaTermos}
                      onCheckedChange={(checked) => handleInputChange('aceitaTermos', checked as boolean)}
                      className="mt-1"
                    />
                    <Label htmlFor="termos" className="text-xs text-gray-600 leading-relaxed">
                      Ao se registrar, você concorda com nossos{' '}
                      <a href="#" className="text-green-500 underline">Termos de Serviço</a>,{' '}
                      <a href="#" className="text-green-500 underline">Política de Privacidade</a>, 
                      comprometem-se a cumprir as obrigações da União Europeia e a legislação local e fornecer apenas serviços e conteúdos jurídicos na Plataforma ViagemJá.
                    </Label>
                  </div>

                  <div className="text-xs text-gray-600 leading-relaxed">
                    Após se tornar um motorista, ocasionalmente enviaremos ofertas e promoções relacionadas aos nossos serviços. Você pode cancelar a assinatura a qualquer momento alterando suas preferências de comunicação.
                  </div>

                  {/* Botão de submit */}
                  <Button
                    type="submit"
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-full font-semibold text-lg transition-colors"
                    disabled={!formData.aceitaTermos}
                  >
                    Registre-se como motorista
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CadastroMotorista;
