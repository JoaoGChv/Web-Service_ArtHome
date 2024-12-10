import React from 'react';
import { Brain, Shield, Zap } from 'lucide-react';

const Features = () => {
  return (
    <div id="features" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Por que escolher nossa solução?
          </h2>
        </div>
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-md shadow-lg">
                    <Brain className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900">Inteligência Avançada</h3>
                  <p className="mt-5 text-base text-gray-500">
                    Algoritmos de IA que aprendem seus hábitos e preferências para otimizar o ambiente.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-md shadow-lg">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900">Segurança Máxima</h3>
                  <p className="mt-5 text-base text-gray-500">
                    Monitoramento 24/7 com alertas inteligentes e proteção contra invasões.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-md shadow-lg">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900">Eficiência Energética</h3>
                  <p className="mt-5 text-base text-gray-500">
                    Otimização automática do consumo de energia para redução de custos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;