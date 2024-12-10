import React, { useState } from 'react';
import { Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const PartnerDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 px-4 py-2 rounded-md hover:bg-gray-100"
      >
        <Briefcase className="w-5 h-5" />
        <span>É parceiro</span>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 w-48 mt-2 bg-white rounded-md shadow-lg">
          <Link
            to="/partner/login"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Login Parceiro
          </Link>
          <Link
            to="/partner/register"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Cadastro Parceiro
          </Link>
        </div>
      )}
    </div>
  );
};

export default PartnerDropdown;