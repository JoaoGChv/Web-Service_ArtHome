import React from 'react';
import { Brain, Home, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-blue-50 to-white pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Transforme sua casa com</span>
            <span className="block text-blue-600">Inteligência Artificial</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Automatize sua residência com tecnologia de ponta. Nossa solução integra IA para criar
            um ambiente mais inteligente, seguro e confortável para você e sua família.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a href="#features" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                Saiba Mais
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;