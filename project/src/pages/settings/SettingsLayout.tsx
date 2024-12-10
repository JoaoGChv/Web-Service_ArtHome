import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { CreditCard, MessageCircle, FileText } from 'lucide-react';

const SettingsLayout = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64">
            <nav className="space-y-1">
              <Link
                to="/settings/subscription"
                className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                  isActive('/settings/subscription')
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-900 hover:bg-gray-50'
                }`}
              >
                <CreditCard className="w-5 h-5 mr-3" />
                Minha Assinatura
              </Link>

              <Link
                to="/settings/support"
                className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                  isActive('/settings/support')
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-900 hover:bg-gray-50'
                }`}
              >
                <MessageCircle className="w-5 h-5 mr-3" />
                Reportar um Problema
              </Link>

              <Link
                to="/settings/terms"
                className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                  isActive('/settings/terms')
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-900 hover:bg-gray-50'
                }`}
              >
                <FileText className="w-5 h-5 mr-3" />
                Termos e Políticas
              </Link>
            </nav>
          </aside>

          <div className="flex-1">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsLayout;