import { useRef, useState } from "react";
import { ContainerProps } from "../types/types";
import ContainerContext from "../context/ContainerContext";
import { uploadVedio } from "../services/api";
import { errorMessage, successMessage } from "../utility/messages";

const Container: React.FC<ContainerProps> = ({ children }: ContainerProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<null | {
    success: boolean;
    error: boolean;
    message: string;
  }>(null);
  const [selectedTechnique, setSelectedTechnique] = useState("spin-pass");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleAnalyze = async () => {
    if (!file) return;

    setIsUploading(true);
    try {
      setIsAnalyzing(true);
      const response = await uploadVedio(file);
      setIsUploading(false);

      await new Promise((resolve) => setTimeout(resolve, 1500));

      if (response.status === 0) {
        setResults({
          success: true,
          error: false,
          message: successMessage,
        });
      } else {
        setResults({
          success: false,
          error: true,
          message: errorMessage,
        });
      }

      setIsAnalyzing(false);
    } catch {
      console.log("Error uploading file");
    }
  };

  const handleTechniqueSelect = (techniqueId: string) => {
    setSelectedTechnique(techniqueId);
    setResults(null);
  };

  const openModal = () => {
    setIsOpen(true);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current
          .play()
          .catch((err) => console.error("Error playing video:", err));
      }
    }, 100);
  };

  const closeModal = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setIsOpen(false);
  };

  return (
    <ContainerContext.Provider
      value={{
        file,
        isUploading,
        isAnalyzing,
        results,
        selectedTechnique,
        techniques: [],
        handleTechniqueSelect,
        setFile,
        handleUploadClick,
        handleAnalyze,
        handleFileChange,
        fileInputRef,
        openModal,
        closeModal,
        isOpen,
        videoRef,
      }}
    >
      {children}
    </ContainerContext.Provider>
  );
};

export default Container;
