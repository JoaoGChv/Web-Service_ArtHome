import React, { useState } from 'react';
import { Send, MessageCircle, Mail, Instagram } from 'lucide-react';

const Support = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle message submission
    setMessage('');
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Reportar um Problema</h1>

          <form onSubmit={handleSubmit} className="mb-8">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Descreva seu problema ou sugestão..."
              className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              type="submit"
              className="mt-4 flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              <Send className="w-4 h-4 mr-2" />
              Enviar
            </button>
          </form>

          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-gray-900">Outros Canais de Contato</h2>
            
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100"
            >
              <MessageCircle className="w-6 h-6 text-green-500 mr-3" />
              <div>
                <h3 className="font-medium text-gray-900">WhatsApp</h3>
                <p className="text-sm text-gray-500">Atendimento em tempo real</p>
              </div>
            </a>

            <a
              href="https://instagram.com/smarthomeai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100"
            >
              <Instagram className="w-6 h-6 text-purple-500 mr-3" />
              <div>
                <h3 className="font-medium text-gray-900">Instagram</h3>
                <p className="text-sm text-gray-500">@smarthomeai</p>
              </div>
            </a>

            <a
              href="mailto:suporte@smarthomeai.com"
              className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100"
            >
              <Mail className="w-6 h-6 text-blue-500 mr-3" />
              <div>
                <h3 className="font-medium text-gray-900">E-mail</h3>
                <p className="text-sm text-gray-500">suporte@smarthomeai.com</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;