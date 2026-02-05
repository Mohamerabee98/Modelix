import {  useNavigate } from "react-router-dom";
import "./Data.css";

const DatasetDetails = () => {
 const fileName = localStorage.getItem("datasetFileName");

  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex justify-center px-4 py-6 bg-gradient-to-br from-[#1b102f] via-[#3a1657] to-[#7b2fa1] text-white">
      <div className="w-full max-w-5xl">

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8">
          Dataset Details
        </h1>

        {/* ===== TOP SECTION ===== */}
        <div className="flex flex-col md:flex-row gap-4 sm:gap-6 mb-6">
          {/* File Info */}
          <div className="flex-1 text-center bg-purple-600/40 border border-white/20 rounded-2xl p-4 sm:p-6">
            <p className="text-sm sm:text-base text-white/80">
              File Name: <span className="font-semibold">{fileName}</span>
            </p>
            <p className="text-xs sm:text-sm text-white/70 mt-1">
              <span className="font-bold">Uploaded on:</span> 25 Jan 2025 – 12:30 PM
            </p>

            <button className="mt-4 px-4 sm:px-6 py-2 sm:py-3 cursor-pointer rounded-xl bg-[#7A3DF0] hover:bg-[#8a52ff] transition text-sm sm:text-base font-medium">
              Delete Dataset
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row gap-2 mt-4 md:mt-0">
            <div className="flex-1 bg-purple-600/40 border border-white/20 rounded-2xl p-3 sm:p-4 text-center">
              <p className="text-xs sm:text-sm text-white/70">Rows</p>
              <p className="text-lg sm:text-xl font-bold">987</p>
            </div>

            <div className="flex-1 bg-purple-600/40 border border-white/20 rounded-2xl p-3 sm:p-4 text-center">
              <p className="text-xs sm:text-sm text-white/70">Columns</p>
              <p className="text-lg sm:text-xl font-bold">4</p>
            </div>

            <div className="flex-1 bg-purple-600/40 border border-white/20 rounded-2xl p-3 sm:p-4 text-center">
              <p className="text-xs sm:text-sm text-white/70">File Size</p>
              <p className="text-lg sm:text-xl font-bold">1.2 MB</p>
            </div>
          </div>
        </div>

        {/* ===== BOTTOM SECTION ===== */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Preview Table */}
          <div className="flex-1 bg-purple-700/40 border border-white/20 rounded-2xl overflow-x-auto">
            <h3 className="text-center font-semibold py-3 border-b border-white/20 text-sm sm:text-base">
              Preview (First 6 Rows)
            </h3>

            <table className="w-full text-sm sm:text-base text-center min-w-[400px]">
              <thead className="bg-white/10">
                <tr>
                  <th className="py-2 px-2">area</th>
                  <th className="py-2 px-2">rooms</th>
                  <th className="py-2 px-2">bathrooms</th>
                  <th className="py-2 px-2">price</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [120, 3, 2, "120k"],
                  [140, 4, 3, "140k"],
                  [140, 4, 3, "140k"],
                  [160, 6, 3, "160k"],
                  [180, 7, 3, "180k"],
                  [200, 8, 2, "200k"],
                ].map((row, i) => (
                  <tr key={i} className="border-t border-white/10">
                    {row.map((cell, j) => (
                      <td key={j} className="py-2 px-2">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Column Types */}
          <div className="flex-1 bg-purple-700/40 border border-white/20 rounded-2xl overflow-x-auto">
            <h3 className="text-center font-semibold py-3 border-b border-white/20 text-sm sm:text-base">
              Column Types
            </h3>

            <table className="w-full text-sm sm:text-base text-center min-w-[400px]">
              <thead className="bg-white/10">
                <tr>
                  <th className="py-2 px-2">Column</th>
                  <th className="py-2 px-2">Type</th>
                  <th className="py-2 px-2">Missing Value</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["area", "numeric", 0],
                  ["rooms", "numeric", 0],
                  ["city", "numeric", 12],
                  ["price", "numeric", 0],
                ].map((row, i) => (
                  <tr key={i} className="border-t border-white/10">
                    {row.map((cell, j) => (
                      <td key={j} className="py-2 px-2">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-xs sm:text-sm text-white/70 mt-6">
          Choose a machine learning model and start training
        </p>

        <div className="flex justify-center mt-4">
          <button
            onClick={() => navigate("/chooseModel")}
            className="px-8 sm:px-12 py-2 sm:py-3 cursor-pointer rounded-xl bg-[#7A3DF0] hover:bg-[#8a52ff] transition font-semibold text-sm sm:text-base"
          >
            Continue
          </button>
        </div>

      </div>
    </div>
  );
};

export default DatasetDetails;
