import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Entre em Contato</h2>
          <p className="mt-4 text-lg text-gray-500">
            Estamos aqui para ajudar você a transformar sua casa em um ambiente inteligente.
          </p>
        </div>
        <div className="mt-12 flex justify-center space-x-6">
          <a
            href="mailto:contato@smarthomeai.com"
            className="text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Email</span>
            <Mail className="h-6 w-6" />
          </a>
          <a
            href="https://github.com/smarthomeai"
            className="text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">GitHub</span>
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://linkedin.com/company/smarthomeai"
            className="text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;