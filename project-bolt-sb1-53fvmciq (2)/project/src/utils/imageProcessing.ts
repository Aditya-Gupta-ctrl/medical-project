export const validateImageFile = (file: File): boolean => {
  const validTypes = ['image/jpeg', 'image/png', 'image/dicom'];
  return validTypes.includes(file.type);
};

export const simulateAnalysis = async (): Promise<any> => {
  // Simulate processing delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  return {
    tumorType: ['meningioma', 'glioma', 'pituitary'][Math.floor(Math.random() * 3)],
    confidence: 0.85 + Math.random() * 0.1,
    region: 'Frontal lobe',
    findings: [
      'Tumor detected in frontal lobe region',
      'No signs of hemorrhage',
      'Surrounding tissue appears normal',
      'Tumor size: approximately 2.3cm x 1.8cm'
    ]
  };
};