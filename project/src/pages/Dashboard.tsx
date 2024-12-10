import React, { useState } from 'react';
import { useAuthStore } from '../store/authStore';
import { Brain } from 'lucide-react';
import Sidebar from '../components/dashboard/Sidebar';
import AIAssistant from '../components/dashboard/AIAssistant';
import DevicesList from '../components/dashboard/DevicesList';

const Dashboard = () => {
  const user = useAuthStore((state) => state.user);
  const [showAI, setShowAI] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className="pl-64 pt-16">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Bem-vindo ao seu Smart Home
            </h1>
            <p className="mt-2 text-gray-600">
              {user?.type === 'partner' 
                ? 'Gerencie as funcionalidades do sistema'
                : 'Controle sua casa inteligente e aproveite as funcionalidades do seu plano'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Brain className="h-8 w-8 text-blue-600" />
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">IA Sugestiva</h3>
                      <p className="text-sm text-gray-500">
                        Use a IA para otimizar sua casa
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowAI(true)}
                    className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
                  >
                    Ativar IA
                  </button>
                </div>
              </div>
            </div>

            <DevicesList />
          </div>
        </div>
      </div>

      {showAI && <AIAssistant onClose={() => setShowAI(false)} />}
    </div>
  );
};

export default Dashboard;