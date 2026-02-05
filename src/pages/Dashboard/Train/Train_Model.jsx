import { useEffect, useState } from "react";
import "./train.css";
import {  useNavigate } from "react-router-dom";

const Train_Model = () => {
const fileName = localStorage.getItem("datasetFileName");

  const [isTraining, setIsTraining] = useState(false);
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isTraining) return;

    setProgress(0);
    setDone(false);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setDone(true);
          setIsTraining(false);
          return 100;
        }
        return prev + 2;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [isTraining]);

  const handleSaveModel = () => {
    const savedModels =
      JSON.parse(localStorage.getItem("savedModels")) || [];

    const newModel = {
      id: Date.now(),
      modelName: "Random Forest",
      dataset: "blog",
      hyperparameters: {
        trees: 100,
        maxDepth: 100,
        learningRate: 100,
      },
      results: {
        mse: 4.81,
        mae: 1.83,
        r2: 0.82,
      },
      createdAt: new Date().toISOString(),
    };

    savedModels.push(newModel);
    localStorage.setItem("savedModels", JSON.stringify(savedModels));
    alert("Model saved successfully");
  };

  return (
    <div className="min-h-screen py-10 flex items-center justify-center bg-gradient-to-br from-[#1b102f] via-[#3a1657] to-[#7b2fa1] px-4 text-white">
      <div className="w-full max-w-5xl">

        {/* Header */}
        <div className="flex flex-col sm:flex-row gap-4 sm:justify-between sm:items-center mb-8 text-center sm:text-left">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold">Train Model</h1>
            <p className="text-sm text-white/70">
              You can change model from the
              <span className="font-bold text-white">Choose Model</span> page
            </p>
          </div>

          <span className="self-center sm:self-auto px-4 py-2 rounded-full bg-purple-700 border border-purple-400 text-sm">
            Selected: <span className="font-bold">Random Forest</span>
          </span>
        </div>

        {/* Dataset Summary */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold mb-4 text-center sm:text-left">
            Dataset Summary
          </h3>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center sm:justify-start">
            {[`Dataset: ${fileName}`, "Rows: 2120", "Target: price"].map(
              (item) => (
                <div
                  key={item}
                  className="px-4 py-2 text-center bg-purple-700/40 border border-purple-400/40 rounded-lg text-sm"
                >
                  {item}
                </div>
              )
            )}
          </div>
        </div>

        {/* Hyperparameters */}
        <div className="info rounded-2xl p-6 border border-white/40 mx-auto max-w-md">
          <h2 className="text-lg sm:text-xl font-semibold text-center mb-6">
            Hyperparameters
          </h2>

          <div className="space-y-4">
            {[
              { label: "Number of Trees", value: 100 },
              { label: "Max Depth", value: 100 },
              { label: "Learning Rate", value: 100 },
            ].map((item) => (
              <div key={item.label}>
                <label className="block mb-1 text-sm">{item.label}</label>
                <input
                  type="number"
                  defaultValue={item.value}
                  className="w-full bg-black/30 border border-white/40 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Start Training */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setIsTraining(true)}
            disabled={isTraining}
            className="px-10 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition font-semibold disabled:opacity-50"
          >
            {isTraining ? "Training..." : "Start Training"}
          </button>
        </div>

        {/* Progress */}
        {(isTraining || done) && (
          <div className="mt-8 max-w-2xl mx-auto px-2">
            <div className="h-3 w-full bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-purple-400 to-purple-600 transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>

            <p className="mt-3 text-xs sm:text-sm text-white/80 text-center">
              {progress < 30 && "Preprocessing ..."}
              {progress >= 30 && progress < 90 &&
                "Training in progress — do not close this page"}
              {progress >= 90 && "Finalizing model ..."}
            </p>
          </div>
        )}

        {/* Results */}
        {done && (
          <div className="mt-16 text-center">
            <h3 className="text-lg sm:text-xl font-semibold mb-6">
              Training Result
            </h3>

            <div className="flex justify-center mb-10 px-2">
              <div className="res rounded-xl px-6 py-6 flex flex-col sm:flex-row gap-6 sm:gap-12">
                {[
                  { label: "MSE", value: "4.81" },
                  { label: "MAE", value: "1.83" },
                  { label: "R²", value: "0.82" },
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <p className="text-sm text-white/70">{item.label}</p>
                    <p className="text-xl font-bold mt-1">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
              <button
                onClick={handleSaveModel}
                className="px-8 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition font-semibold"
              >
                Save Model
              </button>
              <button
                onClick={() => navigate("/Prediction")}
                className="px-8 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition font-semibold"
              >
                Start Prediction
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Train_Model;
