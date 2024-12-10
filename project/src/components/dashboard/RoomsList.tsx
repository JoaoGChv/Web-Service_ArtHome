import React from 'react';
import { Home, Tv, Bed, Bath } from 'lucide-react';

const rooms = [
  { id: 1, name: 'Sala de Estar', icon: Tv, devices: 5 },
  { id: 2, name: 'Quarto Principal', icon: Bed, devices: 3 },
  { id: 4, name: 'Banheiro', icon: Bath, devices: 2 },
];

const RoomsList = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Cômodos</h2>
        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
          Adicionar Cômodo
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {rooms.map((room) => (
          <div
            key={room.id}
            className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 transition-colors cursor-pointer"
          >
            <div className="flex items-center space-x-3">
              <room.icon className="w-6 h-6 text-blue-600" />
              <div>
                <h3 className="text-lg font-medium text-gray-900">{room.name}</h3>
                <p className="text-sm text-gray-500">
                  {room.devices} dispositivos conectados
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomsList;