import React from 'react';
import { Brain } from 'lucide-react';

export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center p-16">
      <div className="relative">
        <div className="w-24 h-24 rounded-full glass-card flex items-center justify-center">
          <Brain className="h-12 w-12 text-red-500 animate-pulse" />
        </div>
        <div className="absolute inset-0 rounded-full border-4 border-red-500/20 animate-spin border-t-red-500"></div>
      </div>
      <div className="mt-12 space-y-3 text-center">
        <p className="text-3xl font-semibold bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
          Analyzing Scan
        </p>
        <p className="text-lg text-gray-400">Processing image and detecting anomalies...</p>
      </div>
      <div className="mt-8 flex space-x-2">
        <div className="w-3 h-3 rounded-full bg-red-500 animate-bounce" style={{ animationDelay: '0ms' }}></div>
        <div className="w-3 h-3 rounded-full bg-red-500 animate-bounce" style={{ animationDelay: '150ms' }}></div>
        <div className="w-3 h-3 rounded-full bg-red-500 animate-bounce" style={{ animationDelay: '300ms' }}></div>
      </div>
    </div>
  );
}