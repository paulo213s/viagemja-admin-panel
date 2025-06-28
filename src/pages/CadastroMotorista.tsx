
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent } from '@/components/ui/card';
import MainLayout from '@/components/layout/MainLayout';

const countryCodes = [
  { code: '+55', country: 'Brasil', flag: '🇧🇷' },
  { code: '+1', country: 'Estados Unidos', flag: '🇺🇸' },
  { code: '+1', country: 'Canadá', flag: '🇨🇦' },
  { code: '+54', country: 'Argentina', flag: '🇦🇷' },
  { code: '+56', country: 'Chile', flag: '🇨🇱' },
  { code: '+57', country: 'Colômbia', flag: '🇨🇴' },
  { code: '+51', country: 'Peru', flag: '🇵🇪' },
  { code: '+598', country: 'Uruguai', flag: '🇺🇾' },
  { code: '+595', country: 'Paraguai', flag: '🇵🇾' },
  { code: '+591', country: 'Bolívia', flag: '🇧🇴' },
  { code: '+593', country: 'Equador', flag: '🇪🇨' },
  { code: '+58', country: 'Venezuela', flag: '🇻🇪' },
  { code: '+44', country: 'Reino Unido', flag: '🇬🇧' },
  { code: '+33', country: 'França', flag: '🇫🇷' },
  { code: '+49', country: 'Alemanha', flag: '🇩🇪' },
  { code: '+39', country: 'Itália', flag: '🇮🇹' },
  { code: '+34', country: 'Espanha', flag: '🇪🇸' },
  { code: '+351', country: 'Portugal', flag: '🇵🇹' },
  { code: '+86', country: 'China', flag: '🇨🇳' },
  { code: '+81', country: 'Japão', flag: '🇯🇵' },
  { code: '+82', country: 'Coreia do Sul', flag: '🇰🇷' },
  { code: '+91', country: 'Índia', flag: '🇮🇳' },
  { code: '+61', country: 'Austrália', flag: '🇦🇺' },
  { code: '+27', country: 'África do Sul', flag: '🇿🇦' }
];

const countries = [
  { value: 'brasil', label: 'Brasil', flag: '🇧🇷' },
  { value: 'estados-unidos', label: 'Estados Unidos', flag: '🇺🇸' },
  { value: 'canada', label: 'Canadá', flag: '🇨🇦' },
  { value: 'argentina', label: 'Argentina', flag: '🇦🇷' },
  { value: 'chile', label: 'Chile', flag: '🇨🇱' },
  { value: 'colombia', label: 'Colômbia', flag: '🇨🇴' },
  { value: 'peru', label: 'Peru', flag: '🇵🇪' },
  { value: 'uruguai', label: 'Uruguai', flag: '🇺🇾' },
  { value: 'paraguai', label: 'Paraguai', flag: '🇵🇾' },
  { value: 'bolivia', label: 'Bolívia', flag: '🇧🇴' },
  { value: 'equador', label: 'Equador', flag: '🇪🇨' },
  { value: 'venezuela', label: 'Venezuela', flag: '🇻🇪' },
  { value: 'reino-unido', label: 'Reino Unido', flag: '🇬🇧' },
  { value: 'franca', label: 'França', flag: '🇫🇷' },
  { value: 'alemanha', label: 'Alemanha', flag: '🇩🇪' },
  { value: 'italia', label: 'Itália', flag: '🇮🇹' },
  { value: 'espanha', label: 'Espanha', flag: '🇪🇸' },
  { value: 'portugal', label: 'Portugal', flag: '🇵🇹' },
  { value: 'china', label: 'China', flag: '🇨🇳' },
  { value: 'japao', label: 'Japão', flag: '🇯🇵' },
  { value: 'coreia-do-sul', label: 'Coreia do Sul', flag: '🇰🇷' },
  { value: 'india', label: 'Índia', flag: '🇮🇳' },
  { value: 'australia', label: 'Austrália', flag: '🇦🇺' },
  { value: 'africa-do-sul', label: 'África do Sul', flag: '🇿🇦' }
];

const CadastroMotorista = () => {
  const [formData, setFormData] = useState({
    email: '',
    telefone: '',
    codigoPais: '+55',
    pais: '',
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
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center gap-12">
          {/* Seção da esquerda - Conteúdo promocional */}
          <div className="flex-1 text-white space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Ganhe dinheiro dirigindo com a ViagemJá
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200">
              Torne-se um motorista da ViagemJá, defina seu horário e ganhe dinheiro dirigindo!
            </p>
            <div className="space-y-4 text-lg">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full shadow-lg"></div>
                <span>Flexibilidade total de horários</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full shadow-lg"></div>
                <span>Ganhos atrativos</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full shadow-lg"></div>
                <span>Suporte 24/7</span>
              </div>
            </div>
          </div>

          {/* Seção da direita - Formulário */}
          <div className="flex-1 w-full max-w-md">
            <Card className="bg-white shadow-2xl border-0 rounded-2xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  Torne-se um motorista
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* E-mail */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                      E-mail *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Digite o endereço de e-mail"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>

                  {/* Número de telefone com código do país */}
                  <div className="space-y-2">
                    <Label htmlFor="telefone" className="text-sm font-medium text-gray-700">
                      Número de telefone *
                    </Label>
                    <div className="flex gap-2">
                      <Select 
                        value={formData.codigoPais} 
                        onValueChange={(value) => handleInputChange('codigoPais', value)}
                      >
                        <SelectTrigger className="w-32 px-3 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="max-h-60 bg-white">
                          {countryCodes.map((country, index) => (
                            <SelectItem key={index} value={country.code}>
                              <div className="flex items-center space-x-2">
                                <span>{country.flag}</span>
                                <span>{country.code}</span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Input
                        id="telefone"
                        type="tel"
                        placeholder="Número de telefone"
                        value={formData.telefone}
                        onChange={(e) => handleInputChange('telefone', e.target.value)}
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        required
                      />
                    </div>
                  </div>

                  {/* País */}
                  <div className="space-y-2">
                    <Label htmlFor="pais" className="text-sm font-medium text-gray-700">
                      País onde você irá dirigir *
                    </Label>
                    <Select onValueChange={(value) => handleInputChange('pais', value)}>
                      <SelectTrigger className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <SelectValue placeholder="Selecione seu país" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        {countries.map((country) => (
                          <SelectItem key={country.value} value={country.value}>
                            <div className="flex items-center space-x-2">
                              <span>{country.flag}</span>
                              <span>{country.label}</span>
                            </div>
                          </SelectItem>
                        ))}
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
                      <a href="#" className="text-blue-600 underline hover:text-blue-700">Termos de Serviço</a>,{' '}
                      <a href="#" className="text-blue-600 underline hover:text-blue-700">Política de Privacidade</a>, 
                      e compromete-se a cumprir as obrigações legais e fornecer apenas serviços jurídicos na Plataforma ViagemJá.
                    </Label>
                  </div>

                  <div className="text-xs text-gray-600 leading-relaxed">
                    Após se tornar um motorista, ocasionalmente enviaremos ofertas e promoções relacionadas aos nossos serviços. Você pode cancelar a assinatura a qualquer momento alterando suas preferências de comunicação.
                  </div>

                  {/* Botão de submit */}
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-full font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                    disabled={!formData.aceitaTermos || !formData.email || !formData.telefone || !formData.pais}
                  >
                    Registrar como motorista
                  </Button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-500">
                    Já tem uma conta?{' '}
                    <a href="/login" className="text-blue-600 hover:text-blue-700 font-medium">
                      Faça login
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CadastroMotorista;
