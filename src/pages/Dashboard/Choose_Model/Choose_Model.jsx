import { models } from "./Model";
import { useState, useEffect } from "react";
import {  useNavigate } from "react-router-dom";

import "./choose.css";

export default function Choose_Model() {
  const fileName = localStorage.getItem("datasetFileName");

  const [selectedModel, setSelectedModel] = useState(null);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const savedModel = localStorage.getItem("selectedModel");
    if (savedModel) {
      setSelectedModel(JSON.parse(savedModel));
    }
  }, []);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#1b102f] via-[#3a1657] to-[#7b2fa1] px-4 py-8">
      <div className="w-full max-w-6xl text-white text-center">

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">Choose a Model</h1>
        <p className="text-white/70 mb-6 text-sm sm:text-base">
          Select a machine learning model to train on your dataset
        </p>

        {/* Dataset Info */}
        <div className="inline-block mb-10 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white/10 border border-white/20 backdrop-blur text-xs sm:text-sm">
          <p>
            Dataset: <span className="font-semibold">{fileName}</span>
            &nbsp;|&nbsp; Rows: <span className="font-semibold">987</span>
            &nbsp;|&nbsp; Columns: <span className="font-semibold">12</span>
          </p>
          <p className="mt-1">Target: <span className="font-semibold">price</span></p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {models.map((model, index) => (
            <div
              key={index}
              className="relative rounded-2xl p-4 sm:p-6 bg-white/10 backdrop-blur border border-white/60 flex flex-col min-h-[300px] sm:min-h-[320px]"
            >
              <div>
                <h2 className="text-lg sm:text-xl font-semibold mb-2">{model.title}</h2>
                <p className="text-sm text-white/70 mb-4">{model.desc}</p>

                <ul className="text-sm text-left space-y-2 sm:space-y-3 mt-8 sm:mt-10">
                  {model.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Select Button */}
              <button
                onClick={() => {
                  setSelectedModel(model);
                  localStorage.setItem("selectedModel", JSON.stringify(model));
                  setError("");
                }}
                className={`
                  mt-auto py-2 cursor-pointer rounded-lg transition-all absolute -bottom-3 left-1/2 -translate-x-1/2 w-36 sm:w-40 font-medium
                  ${selectedModel?.title === model.title
                    ? "bg-purple-700 border border-purple-400 scale-105"
                    : "bg-purple-600 hover:bg-purple-700"
                  }
                `}
              >
                {selectedModel?.title === model.title
                  ? "Selected ✓"
                  : "Select Model"}
              </button>
            </div>
          ))}
        </div>

        {/* Error */}
        {error && (
          <p className="mt-3 text-sm pb-2 text-red-400 animate-pulse">
            {error}
          </p>
        )}

        {/* Continue */}
        <button
          onClick={() => {
            if (!selectedModel) {
              setError("Please select a model before continuing");
              return;
            }
            navigate("/Train");
          }}
          className="px-8 sm:px-12 py-2 sm:py-3 cursor-pointer rounded-xl btn-model transition text-lg sm:text-xl font-semibold"
        >
          Continue
        </button>

      </div>
    </div>
  );
}
