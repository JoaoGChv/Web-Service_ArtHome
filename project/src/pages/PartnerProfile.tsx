import React, { useState } from 'react';
import { useAuthStore } from '../store/authStore';
import { User, Mail, Phone, Calendar, CreditCard, Briefcase, Lock, Save, X } from 'lucide-react';

const PartnerProfile = () => {
  const { user, setUser } = useAuthStore();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    cpf: user?.cpf || '',
    email: user?.email || '',
    phone: user?.phone || '',
    role: user?.role || ''
  });

  const roleTranslations: { [key: string]: string } = {
    tecnico: 'Técnico',
    supervisor: 'Supervisor',
    gerente: 'Gerente'
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    setUser({
      ...user!,
      ...formData
    });
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Meus Dados</h1>
            {!isEditing && (
              <button
                onClick={() => setIsEditing(true)}
                className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-md"
              >
                Editar Dados
              </button>
            )}
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <User className="w-6 h-6 text-blue-600" />
              <div className="flex-1">
                <p className="text-sm text-gray-500">Nome Completo</p>
                {isEditing ? (
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                ) : (
                  <p className="text-lg font-medium text-gray-900">{user?.name}</p>
                )}
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <CreditCard className="w-6 h-6 text-blue-600" />
              <div className="flex-1">
                <p className="text-sm text-gray-500">CPF</p>
                {isEditing ? (
                  <input
                    type="text"
                    name="cpf"
                    value={formData.cpf}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                ) : (
                  <p className="text-lg font-medium text-gray-900">{user?.cpf}</p>
                )}
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <Briefcase className="w-6 h-6 text-blue-600" />
              <div className="flex-1">
                <p className="text-sm text-gray-500">Cargo</p>
                {isEditing ? (
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="tecnico">Técnico</option>
                    <option value="supervisor">Supervisor</option>
                    <option value="gerente">Gerente</option>
                  </select>
                ) : (
                  <p className="text-lg font-medium text-gray-900">
                    {user?.role ? roleTranslations[user.role] : ''}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <Mail className="w-6 h-6 text-blue-600" />
              <div className="flex-1">
                <p className="text-sm text-gray-500">Email</p>
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                ) : (
                  <p className="text-lg font-medium text-gray-900">{user?.email}</p>
                )}
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <Phone className="w-6 h-6 text-blue-600" />
              <div className="flex-1">
                <p className="text-sm text-gray-500">Celular</p>
                {isEditing ? (
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                ) : (
                  <p className="text-lg font-medium text-gray-900">{user?.phone}</p>
                )}
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <Calendar className="w-6 h-6 text-blue-600" />
              <div>
                <p className="text-sm text-gray-500">Data de Registro</p>
                <p className="text-lg font-medium text-gray-900">
                  {new Date(user?.registrationDate || '').toLocaleDateString('pt-BR')}
                </p>
              </div>
            </div>

            {isEditing && (
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setIsEditing(false)}
                  className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
                >
                  <X className="w-5 h-5 mr-2" />
                  Cancelar
                </button>
                <button
                  onClick={handleSubmit}
                  className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  <Save className="w-5 h-5 mr-2" />
                  Salvar
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerProfile;