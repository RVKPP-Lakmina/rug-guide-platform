import useMainContainer from "../hooks/useMainContainer";
import { CheckCircle, Loader2, Play, Upload } from "lucide-react";

const FileUpload = () => {
  const {
    file,
    isUploading,
    isAnalyzing,
    handleUploadClick,
    handleFileChange,
    handleAnalyze,
    fileInputRef,
  } = useMainContainer();

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={handleUploadClick}
          className="relative flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 text-white py-3 px-6 rounded-lg transition-colors duration-200 overflow-hidden group"
        >
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="video/*"
            className="hidden"
          />
          <Upload className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
          <span>{file ? "Change video" : "Click here to upload video"}</span>
        </button>

        <button
          onClick={handleAnalyze}
          disabled={!file || isUploading || isAnalyzing}
          className={`flex items-center justify-center gap-2 py-3 px-8 rounded-lg transition-all duration-200 ${
            !file || isUploading || isAnalyzing
              ? "bg-slate-600 text-slate-400 cursor-not-allowed"
              : "bg-emerald-600 hover:bg-emerald-500 text-white"
          }`}
        >
          {isUploading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Uploading...</span>
            </>
          ) : isAnalyzing ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Analyzing...</span>
            </>
          ) : (
            <>
              <Play className="w-5 h-5" />
              <span>Analyze</span>
            </>
          )}
        </button>
      </div>

      {file && (
        <div className="text-sm text-slate-300 flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-emerald-400" />
          <span>Selected: {file.name}</span>
        </div>
      )}
    </>
  );
};

export default FileUpload;
