import React from 'react';
import { AlertCircle, Brain, Target, BarChart2, MapPin, ZoomIn } from 'lucide-react';
import { AnalysisResult } from '../types';
import ConfidenceBar from './ConfidenceBar';

interface Props {
  result: AnalysisResult;
  originalImage: string;
}

export default function AnalysisResults({ result, originalImage }: Props) {
  return (
    <div className="glass-card rounded-xl shadow-2xl p-8 text-white transform transition-all duration-500 hover:scale-[1.01]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent flex items-center">
            <Brain className="h-7 w-7 mr-3 text-red-500" />
            MRI Scan Analysis
          </h3>
          <div className="relative group rounded-lg overflow-hidden gradient-border">
            <img
              src={originalImage}
              alt="Original MRI Scan"
              className="w-full aspect-square object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-3 rounded-full glass-effect text-white">
                  <ZoomIn className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-8">
          <div className="glass-card rounded-lg p-8 space-y-8">
            <div>
              <div className="flex items-center mb-3">
                <Target className="h-6 w-6 text-red-500 mr-3" />
                <h4 className="text-base font-medium text-gray-400">Tumor Classification</h4>
              </div>
              <p className="text-3xl font-bold bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent capitalize">
                {result.tumorType}
              </p>
            </div>
            
            <div>
              <div className="flex items-center mb-3">
                <BarChart2 className="h-6 w-6 text-red-500 mr-3" />
                <h4 className="text-base font-medium text-gray-400">Confidence Score</h4>
              </div>
              <ConfidenceBar confidence={result.confidence} />
            </div>
            
            <div>
              <div className="flex items-center mb-3">
                <MapPin className="h-6 w-6 text-red-500 mr-3" />
                <h4 className="text-base font-medium text-gray-400">Anatomical Region</h4>
              </div>
              <p className="text-2xl font-semibold bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
                {result.region}
              </p>
            </div>
          </div>
          
          <div className="glass-card rounded-lg p-8">
            <h4 className="text-base font-medium text-gray-400 mb-6">Detailed Findings</h4>
            <ul className="space-y-4">
              {result.findings.map((finding, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 h-2 w-2 rounded-full bg-gradient-to-r from-red-500 to-purple-600 mt-2 mr-3" />
                  <span className="text-base text-gray-300">{finding}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mt-8 glass-card rounded-lg p-6">
        <div className="flex">
          <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0" />
          <div className="ml-4">
            <h3 className="text-base font-medium text-red-500">
              Medical Disclaimer
            </h3>
            <div className="mt-2 text-base text-gray-400">
              <p>
                This tool is designed to assist medical professionals and should not
                be used as a replacement for professional medical diagnosis. Always
                consult with qualified healthcare providers for medical decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}