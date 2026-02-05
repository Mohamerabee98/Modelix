import { useEffect, useState } from "react";
import "./prediction.css";
import { useNavigate } from "react-router-dom";

const Prediction = () => {
  const navigate = useNavigate("");

  const [modelName, setModelName] = useState("");
  const [dataset, setDataset] = useState("");

  useEffect(() => {
    const savedModels = JSON.parse(localStorage.getItem("savedModels")) || [];
    if (savedModels.length > 0) {
      const lastModel = savedModels[savedModels.length - 1];
      setModelName(lastModel.modelName);
      setDataset(lastModel.dataset);
    }
  }, []);

  const [formData, setFormData] = useState({
    area: "",
    rooms: "",
    age: "",
    location: "",
    bathrooms: "",
    garage: false,
    selectLocation: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1b102f] via-[#3a1657] to-[#7b2fa1] px-4 py-6">
      <div className="w-full max-w-md sm:max-w-lg bg-purple-900/40 border border-white/30 rounded-2xl p-6 sm:p-10 text-white shadow-xl">
        
        {/* Header */}
        <div className="mb-6 bg-purple-800/40 p-4 rounded-xl space-y-1 text-sm">
          <p>
            Model: <span className="font-bold">{modelName}</span>
          </p>
          <p>
            Dataset: <span className="font-bold">{dataset}</span>
          </p>
          <p>
            Target: <span className="font-bold">price</span>
          </p>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">
          Predict
        </h2>

        {/* Form */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="area"
            placeholder="Area"
            value={formData.area}
            onChange={handleChange}
            className="p-2 rounded-md bg-purple-700 placeholder-purple-300 border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="text"
            name="rooms"
            placeholder="Rooms"
            value={formData.rooms}
            onChange={handleChange}
            className="p-2 rounded-md bg-purple-700 placeholder-purple-300 border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="text"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            className="p-2 rounded-md bg-purple-700 placeholder-purple-300 border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            className="p-2 rounded-md bg-purple-700 placeholder-purple-300 border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="text"
            name="bathrooms"
            placeholder="Bathrooms"
            value={formData.bathrooms}
            onChange={handleChange}
            className="p-2 rounded-md bg-purple-700 placeholder-purple-300 border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <select
            name="selectLocation"
            value={formData.selectLocation}
            onChange={handleChange}
            className="p-2 rounded-md bg-purple-700 border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            <option value="">Select location</option>
            <option value="location1">Location 1</option>
            <option value="location2">Location 2</option>
          </select>
        </div>

        {/* Garage Toggle */}
        <div className="flex items-center justify-between mt-6">
          <span className="px-4 py-1 rounded-md bg-purple-700 text-sm">
            Garage
          </span>

          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              name="garage"
              checked={formData.garage}
              onChange={handleChange}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-purple-500 rounded-full peer-checked:bg-purple-700 transition-all"></div>
            <div
              className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                formData.garage ? "translate-x-5" : ""
              }`}
            ></div>
          </label>
        </div>

        {/* Button */}
        <button
          onClick={() => navigate("/PredictionResult")}
          className="mt-8 w-full py-2 rounded-lg font-semibold bg-purple-600 hover:bg-purple-700 transition"
        >
          Predict Result
        </button>
      </div>
    </div>
  );
};

export default Prediction;
