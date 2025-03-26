import { CheckCircle, Circle } from "lucide-react";
import { techniques } from "../utility/util";
import useMainContainer from "../hooks/useMainContainer";

const CheckResultBox = () => {
  const { selectedTechnique, results, openModal } = useMainContainer();

  return (
    <div className="space-y-3">
      {techniques.map((technique) => (
        <div
          key={technique.id}
          //   onClick={() => handleTechniqueSelect(technique.id)}
          className={`flex items-center justify-between p-4 rounded-lg transition-colors duration-200 ${
            selectedTechnique === technique.id && results?.success
              ? "bg-emerald-500/20 border border-emerald-500/30 cursor-pointer"
              : "bg-slate-700/50 border border-slate-700 hover:bg-slate-700 cursor-not-allowed"
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-sm  flex items-center justify-center">
              {results?.success && selectedTechnique === technique.id ? (
                <CheckCircle className="w-4 h-4 text-emerald-500" />
              ) : (
                <Circle className="w-4 h-4 text-slate-400" />
              )}
            </div>

            <span className="font-medium">{technique.name}</span>
          </div>

          <div className="flex items-center gap-3">
            <span
              className="text-sm text-emerald-400 hover:underline cursor-pointer"
              onClick={() => {
                if (selectedTechnique === technique.id) {
                  console.log("Open modal");
                  openModal();
                }
              }}
            >
              Learn
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CheckResultBox;
