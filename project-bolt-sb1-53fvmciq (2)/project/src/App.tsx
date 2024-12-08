import React, { useState } from 'react';
import Header from './components/Header';
import ImageUploader from './components/ImageUploader';
import LoadingSpinner from './components/LoadingSpinner';
import AnalysisResults from './components/AnalysisResults';
import RecentScans from './components/RecentScans';
import { validateImageFile, simulateAnalysis } from './utils/imageProcessing';
import { FileWithPreview, AnalysisResult } from './types';

function App() {
  const [file, setFile] = useState<FileWithPreview | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileSelect = async (selectedFile: FileWithPreview) => {
    setError(null);
    setResult(null);
    
    if (!validateImageFile(selectedFile)) {
      setError('Please upload a valid image file (DICOM, JPG, or PNG)');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      selectedFile.preview = reader.result as string;
      setFile(selectedFile);
      processImage();
    };
    reader.readAsDataURL(selectedFile);
  };

  const processImage = async () => {
    setIsAnalyzing(true);
    try {
      const analysisResult = await simulateAnalysis();
      setResult(analysisResult);
    } catch (err) {
      setError('An error occurred during analysis. Please try again.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Header />
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {error && (
            <div className="mb-6 bg-red-900/20 border border-red-700/50 text-red-400 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}
          
          {!file && !result && (
            <>
              <div className="mb-12">
                <h1 className="text-5xl font-bold mb-4">Brain Tumor Detection</h1>
                <p className="text-xl text-gray-400">Upload your MRI scan for instant AI-powered analysis</p>
              </div>
              <ImageUploader onFileSelect={handleFileSelect} />
            </>
          )}
          
          {isAnalyzing && <LoadingSpinner />}
          
          {result && file?.preview && (
            <AnalysisResults 
              result={result}
              originalImage={file.preview}
            />
          )}

          <RecentScans />
        </div>
      </div>
    </div>
  );
}

export default App;