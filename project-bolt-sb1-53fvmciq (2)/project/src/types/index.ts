export interface AnalysisResult {
  tumorType: 'meningioma' | 'glioma' | 'pituitary' | 'none';
  confidence: number;
  region: string;
  findings: string[];
}

export interface FileWithPreview extends File {
  preview?: string;
}