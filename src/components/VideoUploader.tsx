import { Play, CheckCircle, AlertCircle } from "lucide-react";
import useMainContainer from "../hooks/useMainContainer";
import FileUpload from "./FileUpload";
import CheckResultBox from "./CheckResultBox";

export default function VideoUploader() {
  const { results } = useMainContainer();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white p-6">
      <header className=" flex border-b border-slate-700 pb-4 mb-8 gap-2">
        <img src="/rugby.png" alt="Rug-Guide Logo" className="w-10 h-10" />
        <h1 className="text-3xl font-bold tracking-tight text-emerald-400">
          RUG-GUIDE
        </h1>
      </header>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-slate-200">
          Technique Analysis
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <FileUpload />
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 min-h-[200px] flex items-center justify-center">
              {results ? (
                <div className="text-center">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                      results.success
                        ? "bg-emerald-500/20 text-emerald-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {results.success ? (
                      <CheckCircle className="w-8 h-8" />
                    ) : (
                      <AlertCircle className="w-8 h-8" />
                    )}
                  </div>
                  <h3 className="text-xl font-medium mb-2">Results</h3>
                  <p className="text-slate-300">{results.message}</p>
                </div>
              ) : (
                <div className="text-center text-slate-400">
                  <Play className="w-12 h-12 mx-auto mb-4 opacity-30" />
                  <p>Upload a video and click Analyze to see results</p>
                </div>
              )}
            </div>
          </div>
          <CheckResultBox />
        </div>
      </div>
    </div>
  );
}
