import { useNavigate } from "react-router-dom";
import "./Result.css";
import { MdTipsAndUpdates } from "react-icons/md";

const PredictionResult = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-gradient-to-br from-[#1b102f] via-[#3a1657] to-[#7b2fa1] px-4 py-6">
      {/* Container الرئيسي */}
      <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl p-4 sm:p-6 lg:p-8 formRes rounded-2xl space-y-6 text-white shadow-xl">

        {/* Predict Result */}
        <div className="bg-purple-600 rounded-xl p-4 text-center">
          <button className="bg-purple-500 px-3 sm:px-4 py-1 sm:py-2 rounded-full font-semibold mb-2 text-sm sm:text-base">
            Predict Result
          </button>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold">$234,900</p>
        </div>

        {/* Model Explanation */}
        <div className="bg-purple-700/50 rounded-xl p-4 space-y-4">
          <h2 className="text-lg sm:text-xl font-semibold text-center">
            Model Explanation (XAI)
          </h2>

          {/* Features */}
          <div className="space-y-2">
            {[
              { name: "Area", color: "green", width: "w-32", arrow: "↗", sign: "+" },
              { name: "Location", color: "green", width: "w-28", arrow: "↗", sign: "+" },
              { name: "Rooms", color: "green", width: "w-24", arrow: "↗", sign: "+" },
              { name: "House Age", color: "red", width: "w-24", arrow: "↘", sign: "-" },
              { name: "Distance to City", color: "red", width: "w-20", arrow: "↘", sign: "-" },
            ].map((feature, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between">
                <span className="text-sm sm:text-base">
                  {feature.name} <span className={`text-${feature.color}-400`}>({feature.sign})</span>
                </span>
                <div className="flex items-center space-x-2 mt-1 sm:mt-0">
                  <div className={`h-3 ${feature.width} rounded-full bg-${feature.color}-500 sm:bg-${feature.color}-400`}></div>
                  <span className={`text-${feature.color}-400 text-lg`}>{feature.arrow}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Explanation */}
          <div className="mt-4 sm:mt-6">
            <h4 className="text-sm sm:text-base font-semibold mb-2">Explanation:</h4>
            <div className="p-3 rounded-lg text-xs sm:text-sm flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
              <span className="flex items-center justify-center text-lg p-2 rounded-full bg-purple-500">
                <MdTipsAndUpdates className="text-white" />
              </span>
              <p className="text-white/90">
                The house price increased mainly due to the large area and good
                location, while the age of the house slightly reduced the final
                predicted value.
              </p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0">
          <button className="btn-color w-full sm:w-1/2 cursor-pointer px-4 py-2 sm:py-3 rounded-full font-semibold hover:bg-purple-600 transition text-sm sm:text-base">
            Save Prediction
          </button>
          <button
            onClick={() => navigate('/chooseModel')}
            className="btn-color w-full sm:w-1/2 cursor-pointer px-4 py-2 sm:py-3 rounded-full font-semibold hover:bg-purple-600 transition text-sm sm:text-base"
          >
            Try Another Model
          </button>
        </div>

      </div>
    </div>
  );
};

export default PredictionResult;
