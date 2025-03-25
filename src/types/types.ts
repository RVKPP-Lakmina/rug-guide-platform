export type Techniques = Array<{
  id: string;
  name: string;
  checked: boolean;
}>;

export interface ContainerContextType {
  techniques: Techniques;
  selectedTechnique: string;
  handleTechniqueSelect: (id: string) => void;
  setFile: (file: File) => void;
  file: File | null;
  isUploading: boolean;
  isAnalyzing: boolean;
  results: null | {
    success: boolean;
    message: string;
  };
  handleUploadClick: () => void;
  handleAnalyze: () => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fileInputRef: React.RefObject<HTMLInputElement> | React.RefObject<null>;
}

export interface ContainerProps {
  children: React.ReactNode;
}
