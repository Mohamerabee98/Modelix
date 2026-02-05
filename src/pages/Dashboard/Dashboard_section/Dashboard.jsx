import { FiUpload } from "react-icons/fi";

import dashImg from "../../../assets/dashboard.png";
import Model_img from "../../../assets/dashboard_model.png";
import dashboard_latest from "../../../assets/dashboard_latest.png";
import train_Model from "../../../assets/train_Model.png";
import "./dashboard.css";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const username = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="min-h-screen w-full flex justify-center bg-gradient-to-br from-[#1b102f] via-[#3a1657] to-[#7b2fa1] px-4 py-6">
      <div className="w-full max-w-6xl bg-purple-800/40 backdrop-blur-xl rounded-3xl border border-white/20 p-4 sm:p-6 md:p-8">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 sm:gap-6 bg-purple-700/40 p-4 sm:p-6 rounded-2xl border border-white/20">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-purple-600 flex items-center justify-center text-white">
              <img src={dashImg} alt="Dashboard Icon" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
            </div>
            <div>
              <h2 className="text-white text-sm sm:text-base font-semibold">
                Hi, {username.name} 👋 <br />
                <span className="text-white/70 text-xs sm:text-sm">Welcome back to Modelix!</span>
              </h2>
              <p className="text-white/80 text-xs sm:text-sm mt-1">
                Manage your datasets, train models, and make predictions—all from one place.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full sm:max-w-md mt-4 lg:mt-0">
            <StatCard
              icon={<FiUpload className="text-lg sm:text-xl" />}
              value="7"
              title="Datasets"
              desc="Uploaded"
            />
            <StatCard
              icon={<img src={Model_img} alt="model" className="w-4 h-4 sm:w-5 sm:h-5 object-contain" />}
              value="3"
              title="Models"
              desc="Trained"
            />
            <StatCard
              icon={<img src={dashboard_latest} alt="latest" className="w-4 h-4 sm:w-5 sm:h-5 object-contain" />}
              value="Latest"
              title="Model"
              desc="R² = 0.89"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 mt-4 sm:mt-6">
          <button
            onClick={() => navigate("/upload")}
            className="flex items-center gap-2 sm:gap-3 w-full sm:w-1/3 px-4 py-3 sm:px-6 sm:py-4 bg-purple-600/40 hover:bg-purple-600/60 text-white rounded-xl transition active:scale-95 justify-center"
          >
            <FiUpload className="text-xl sm:text-2xl" />
            <span className="text-sm sm:text-base">Upload Dataset</span>
          </button>

          <button className="flex items-center gap-2 sm:gap-3 w-full sm:w-1/3 px-4 py-3 sm:px-6 sm:py-4 bg-purple-600/40 hover:bg-purple-600/60 text-white rounded-xl transition active:scale-95 justify-center">
            <img src={train_Model} alt="train_Model" className="w-5 sm:w-6" />
            <span className="text-sm sm:text-base">Train Model</span>
          </button>

          <button className="flex items-center gap-2 sm:gap-3 w-full sm:w-1/3 px-4 py-3 sm:px-6 sm:py-4 bg-purple-600/40 hover:bg-purple-600/60 text-white rounded-xl transition active:scale-95 justify-center">
            <img src={dashboard_latest} alt="dashboard_train" className="w-4 sm:w-5" />
            <span className="text-sm sm:text-base">Make Prediction</span>
          </button>
        </div>

        {/* Recent Models Table */}
        <div className="mt-6 sm:mt-8 bg-purple-700/30 rounded-2xl border border-white/20 overflow-hidden">
          <h3 className="text-white text-center font-semibold px-4 sm:px-6 py-3 border-b border-white/20 text-sm sm:text-base">
            Recent Models
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-white text-xs sm:text-sm">
              <thead>
                <tr>
                  <th className="px-4 sm:px-6 py-2">Model</th>
                  <th className="px-4 sm:px-6 py-2">Type</th>
                  <th className="px-4 sm:px-6 py-2">Dataset</th>
                  <th className="px-4 sm:px-6 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "model_1", type: "Linear", data: "housing.csv", Action: "view" },
                  { name: "model_2", type: "XGBoost", data: "prices.csv", Action: "Predict" },
                  { name: "model_3", type: "Neural Network", data: "sales.csv", Action: "view" },
                ].map((m, i) => (
                  <tr key={i} className="border-t border-white/10 hover:bg-purple-600/20 transition">
                    <td className="px-4 sm:px-6 py-2">{m.name}</td>
                    <td className="px-4 sm:px-6 py-2">{m.type}</td>
                    <td className="px-4 sm:px-6 py-2">{m.data}</td>
                    <td className="px-4 sm:px-6 py-2">{m.Action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;

/* ===== Small Components ===== */
const StatCard = ({ icon, value, title, desc }) => {
  return (
    <div className="w-full bg-gradient-to-b from-purple-600/40 to-purple-800/40 border border-white/20 rounded-2xl px-4 sm:px-5 py-3 flex flex-col items-center gap-1.5 text-white">
      <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-lg bg-purple-500/40">
        {icon}
      </div>
      <h2 className="text-lg sm:text-xl font-bold leading-none">{value}</h2>
      <p className="text-xs sm:text-sm font-semibold leading-tight">{title}</p>
      <p className="text-[10px] sm:text-[11px] text-white/70 leading-tight">{desc}</p>
    </div>
  );
};
