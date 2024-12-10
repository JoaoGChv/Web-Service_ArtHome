import React from 'react';
import { Shield, Zap, Crown, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PlansPage = () => {
  const navigate = useNavigate();
  const plans = [
    {
      name: 'Bronze',
      price: 'R$ 79/mês',
      features: [
        'Uso de IA sugestiva: até 5 vezes/mês',
        'Controle básico de dispositivos',
        'Monitoramento de temperatura',
        'Controle de iluminação',
        'Suporte por email'
      ],
      icon: Shield,
      color: 'from-amber-600 to-amber-800'
    },
    {
      name: 'Prata',
      price: 'R$ 149/mês',
      features: [
        'Uso de IA sugestiva: até 15 vezes/mês',
        'Funcionalidades intermediárias',
        'Cenários manuais personalizáveis',
        'Automação básica',
        'Suporte prioritário'
      ],
      icon: Zap,
      color: 'from-gray-400 to-gray-600',
      highlighted: true
    },
    {
      name: 'Ouro',
      price: 'R$ 299/mês',
      features: [
        'Uso ilimitado da IA',
        'Cenários personalizados avançados',
        'Automação completa',
        'Integração com todos dispositivos',
        'Suporte 24/7 dedicado'
      ],
      icon: Crown,
      color: 'from-yellow-400 to-yellow-600'
    }
  ];

  const handleSelectPlan = (planName: string) => {
    navigate(`/payment/${planName.toLowerCase()}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Escolha seu plano
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Selecione o melhor plano para automatizar sua casa
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg shadow-lg bg-white overflow-hidden transform transition-all duration-200 hover:scale-105 ${
                plan.highlighted ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              <div className={`px-6 py-3 bg-gradient-to-r ${plan.color}`}>
                <div className="flex items-center justify-center">
                  <plan.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="mt-2 text-xl font-bold text-center text-white">
                  Plano {plan.name}
                </h3>
              </div>
              <div className="px-6 py-8">
                <p className="text-center text-3xl font-bold text-gray-900">{plan.price}</p>
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <ArrowRight className="h-5 w-5 text-green-500" />
                      <span className="ml-3 text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <button
                    onClick={() => handleSelectPlan(plan.name)}
                    className="w-full px-4 py-3 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                  >
                    Selecionar Plano
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlansPage;