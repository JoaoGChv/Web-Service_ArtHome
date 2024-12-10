import React from 'react';
import { useAuthStore } from '../../store/authStore';
import { CreditCard, Calendar, X } from 'lucide-react';

const Subscription = () => {
  const user = useAuthStore((state) => state.user);

  const roleTranslations: { [key: string]: string } = {
    tecnico: 'Técnico',
    supervisor: 'Supervisor',
    gerente: 'Gerente'
  };

  const getPlanDisplay = () => {
    if (user?.type === 'partner') {
      return `Plano Funcionário - ${roleTranslations[user.role || '']}`;
    }
    return `Plano ${user?.plan?.charAt(0).toUpperCase()}${user?.plan?.slice(1)}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Minha Assinatura</h1>
          
          <div className="space-y-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h2 className="font-semibold text-gray-900">Plano Atual</h2>
              <p className="text-lg text-gray-700 mt-2">{getPlanDisplay()}</p>
            </div>

            {user?.type !== 'partner' && (
              <>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h2 className="font-semibold text-gray-900">Cartão Cadastrado</h2>
                  <div className="flex items-center mt-2">
                    <CreditCard className="w-5 h-5 text-gray-500 mr-2" />
                    <span className="text-gray-700">•••• •••• •••• 1234</span>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <h2 className="font-semibold text-gray-900">Registro de Pagamentos</h2>
                  <div className="mt-2 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Fevereiro 2024</span>
                      <span className="text-green-600">Pago</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Janeiro 2024</span>
                      <span className="text-green-600">Pago</span>
                    </div>
                  </div>
                </div>
              </>
            )}

            <div className="p-4 bg-gray-50 rounded-lg">
              <h2 className="font-semibold text-gray-900">Data de Registro</h2>
              <div className="flex items-center mt-2">
                <Calendar className="w-5 h-5 text-gray-500 mr-2" />
                <span className="text-gray-700">
                  {new Date(user?.registrationDate || '').toLocaleDateString('pt-BR')}
                </span>
              </div>
            </div>

            {user?.type !== 'partner' && (
              <div className="flex justify-end">
                <button className="flex items-center px-4 py-2 text-red-600 hover:bg-red-50 rounded-md">
                  <X className="w-5 h-5 mr-2" />
                  Cancelar Plano
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;