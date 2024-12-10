import React from 'react';
import { Settings, User } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const user = useAuthStore((state) => state.user);
  const navigate = useNavigate();

  const roleTranslations: { [key: string]: string } = {
    tecnico: 'Técnico',
    supervisor: 'Supervisor',
    gerente: 'Gerente'
  };

  return (
    <div className="fixed left-0 top-16 h-full w-64 bg-white border-r border-gray-200 p-4">
      <div className="space-y-6">
        <div className="border-b border-gray-200 pb-4">
          <h3 className="text-sm font-semibold text-gray-500 uppercase">Menu</h3>
        </div>
        
        <div className="space-y-2">
          <button 
            onClick={() => navigate('/settings')}
            className="flex items-center space-x-2 w-full px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
          >
            <Settings className="w-5 h-5" />
            <span>Configurações</span>
          </button>
          
          <button 
            onClick={() => navigate('/profile')}
            className="flex items-center space-x-2 w-full px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
          >
            <User className="w-5 h-5" />
            <span>Meus Dados</span>
          </button>
        </div>

        <div className="border-t border-gray-200 pt-4">
          <div className="px-4">
            <h4 className="text-sm font-medium text-gray-900">Usuário</h4>
            <p className="text-sm text-gray-500 mt-1">{user?.email}</p>
            <p className="text-sm text-gray-500">
              {user?.type === 'partner' ? (
                <>
                  Parceiro - {user.role ? roleTranslations[user.role] : ''}
                </>
              ) : (
                'Cliente'
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;