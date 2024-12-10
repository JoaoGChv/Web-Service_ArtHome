import React from 'react';
import { FileText } from 'lucide-react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-6">
            <FileText className="w-8 h-8 text-blue-600 mr-3" />
            <h1 className="text-2xl font-bold text-gray-900">Termos e Políticas</h1>
          </div>

          <div className="prose max-w-none">
            <h2 className="text-xl font-semibold mb-4">Termos de Uso</h2>
            
            <section className="mb-6">
              <h3 className="text-lg font-medium mb-2">1. Aceitação dos Termos</h3>
              <p className="text-gray-700">
                Ao acessar e usar o SmartHome AI, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis.
              </p>
            </section>

            <section className="mb-6">
              <h3 className="text-lg font-medium mb-2">2. Uso da Licença</h3>
              <p className="text-gray-700">
                É concedida permissão para usar temporariamente o SmartHome AI em um único dispositivo para uso pessoal, não comercial, sujeito a estas condições.
              </p>
            </section>

            <section className="mb-6">
              <h3 className="text-lg font-medium mb-2">3. Privacidade e Proteção de Dados</h3>
              <p className="text-gray-700">
                Nos comprometemos a proteger sua privacidade. Todas as informações pessoais coletadas serão usadas apenas para melhorar sua experiência com nosso serviço.
              </p>
            </section>

            <section className="mb-6">
              <h3 className="text-lg font-medium mb-2">4. Limitações</h3>
              <p className="text-gray-700">
                Em nenhum caso o SmartHome AI ou seus fornecedores serão responsáveis por quaisquer danos decorrentes do uso ou incapacidade de usar o serviço.
              </p>
            </section>

            <section className="mb-6">
              <h3 className="text-lg font-medium mb-2">5. Modificações do Serviço</h3>
              <p className="text-gray-700">
                O SmartHome AI reserva-se o direito de modificar ou descontinuar, temporária ou permanentemente, o serviço com ou sem aviso prévio.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;