import React, { useState } from 'react';
import { Wifi, Bluetooth, Circle, Laptop, Trash2, Plus } from 'lucide-react';

interface Device {
  id: number;
  name: string;
  type: 'wifi' | 'bluetooth';
  status: 'connected' | 'disconnected';
  room: string;
}

const DevicesList = () => {
  const [devices, setDevices] = useState<Device[]>([
    {
      id: 1,
      name: 'Smart TV Samsung',
      type: 'wifi',
      status: 'connected',
      room: 'Sala de Estar',
    },
    {
      id: 2,
      name: 'Lâmpada Inteligente',
      type: 'bluetooth',
      status: 'connected',
      room: 'Quarto Principal',
    },
    {
      id: 3,
      name: 'Ar Condicionado',
      type: 'wifi',
      status: 'disconnected',
      room: 'Sala de Estar',
    },
  ]);

  const [showAddDevice, setShowAddDevice] = useState(false);

  const handleAddDevice = () => {
    const newDevice: Device = {
      id: devices.length + 1,
      name: 'Note',
      type: 'wifi',
      status: 'connected',
      room: 'Escritório',
    };
    setDevices([...devices, newDevice]);
    setShowAddDevice(false);
  };

  const handleRemoveDevice = (id: number) => {
    setDevices(devices.filter(device => device.id !== id));
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Dispositivos Ativos</h2>
        <button 
          onClick={() => setShowAddDevice(true)}
          className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center"
        >
          <Plus className="w-4 h-4 mr-1" />
          Adicionar Dispositivo
        </button>
      </div>

      {showAddDevice && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4">Adicionar Novo Dispositivo</h3>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg mb-4">
              <div className="flex items-center space-x-3">
                <Laptop className="w-6 h-6 text-blue-600" />
                <div>
                  <p className="font-medium">Note</p>
                  <p className="text-sm text-gray-500">Dispositivo disponível</p>
                </div>
              </div>
              <button
                onClick={handleAddDevice}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Conectar
              </button>
            </div>
            <button
              onClick={() => setShowAddDevice(false)}
              className="w-full px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {devices.map((device) => (
          <div
            key={device.id}
            className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {device.type === 'wifi' ? (
                  <Wifi className="w-5 h-5 text-blue-600" />
                ) : (
                  <Bluetooth className="w-5 h-5 text-blue-600" />
                )}
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{device.name}</h3>
                  <p className="text-sm text-gray-500">{device.room}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Circle
                    className={`w-3 h-3 ${
                      device.status === 'connected' ? 'text-green-500' : 'text-red-500'
                    }`}
                    fill="currentColor"
                  />
                  <span className="text-sm text-gray-500">
                    {device.status === 'connected' ? 'Conectado' : 'Desconectado'}
                  </span>
                </div>
                <button
                  onClick={() => handleRemoveDevice(device.id)}
                  className="text-red-500 hover:text-red-600"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DevicesList;