import React, { useCallback, useState } from 'react';
import { Upload, FileType, X } from 'lucide-react';
import { FileWithPreview } from '../types';

interface Props {
  onFileSelect: (file: FileWithPreview) => void;
}

export default function ImageUploader({ onFileSelect }: Props) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) onFileSelect(file);
  }, [onFileSelect]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) onFileSelect(file);
  };

  return (
    <div className="max-w-3xl mx-auto transform transition-all duration-500 hover:scale-[1.01]">
      <div
        className={`relative overflow-hidden gradient-border rounded-xl transition-all duration-300 ${
          isDragging ? 'scale-[1.02]' : ''
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="glass-card p-16 text-center cursor-pointer group">
          <div className="flex flex-col items-center relative z-10">
            <div className="p-6 bg-gradient-to-br from-red-500/20 to-purple-500/20 rounded-full mb-6 group-hover:from-red-500/30 group-hover:to-purple-500/30 transition-all duration-300">
              <Upload className="h-16 w-16 text-red-500 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="mt-4 flex flex-col items-center">
              <label htmlFor="file-upload" className="cursor-pointer">
                <span className="text-3xl font-medium text-white mb-3 block">
                  Drop your MRI scan here
                </span>
                <span className="text-gray-400 block mb-6 text-lg">
                  or click to browse files
                </span>
                <input
                  id="file-upload"
                  type="file"
                  className="hidden"
                  accept=".jpg,.jpeg,.png,.dcm"
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="mt-8 flex items-center justify-center space-x-8">
              {['DICOM', 'JPG', 'PNG'].map((format) => (
                <div key={format} className="flex items-center space-x-2 px-4 py-2 rounded-full glass-card">
                  <FileType className="h-5 w-5 text-red-500" />
                  <span className="text-gray-300">{format}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}