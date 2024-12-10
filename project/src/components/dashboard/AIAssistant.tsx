import React, { useState } from 'react';
import { Brain, X, Tv, Wind, Home } from 'lucide-react';

interface AIAssistantProps {
  onClose: () => void;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ onClose }) => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [scenario, setScenario] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);

    if (prompt.toLowerCase().includes('monte um cinema')) {
      setTimeout(() => {
        setScenario([
          'Fechando as cortinas automaticamente...',
          'Ajustando o ar condicionado para 23°C...',
          'Ligando a Smart TV...',
          'Abrindo o Netflix...',
          'Ajustando o modo de som para surround...',
          'Diminuindo a intensidade das luzes para 20%...',
          'Cenário de cinema configurado com sucesso!'
        ]);
        setIsGenerating(false);
      }, 2000);
    } else {
      setTimeout(() => {
        setScenario(['Por favor, tente o comando "monte um cinema"']);
        setIsGenerating(false);
      }, 1000);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex items-center space-x-3 mb-6">
          <Brain className="w-8 h-8 text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-900">IA Sugestiva</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Descreva o cenário desejado
            </label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="w-full h-32 px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder='Digite "monte um cinema" para criar um ambiente de cinema'
            />
          </div>

          <button
            type="submit"
            disabled={isGenerating}
            className={`w-full py-2 px-4 rounded-md text-white font-medium ${
              isGenerating
                ? 'bg-blue-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {isGenerating ? 'Gerando sugestões...' : 'Gerar Sugestões'}
          </button>
        </form>

        {scenario.length > 0 && (
          <div className="mt-6 p-4 bg-gray-50 rounded-md">
            <h3 className="text-lg font-medium text-gray-900 mb-3">
              Configurando Cenário
            </h3>
            <div className="space-y-2">
              {scenario.map((step, index) => (
                <div key={index} className="flex items-center text-gray-700">
                  {step.includes('cortinas') && <Home className="w-4 h-4 mr-2" />}
                  {step.includes('ar condicionado') && <Wind className="w-4 h-4 mr-2" />}
                  {step.includes('TV') && <Tv className="w-4 h-4 mr-2" />}
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIAssistant;
