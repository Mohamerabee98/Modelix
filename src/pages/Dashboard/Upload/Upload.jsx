import { useState } from "react";
import { FiUploadCloud } from "react-icons/fi";
import { BsCheckLg } from "react-icons/bs";
import "./upload.css";
import { useNavigate } from "react-router-dom";

const Upload = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (!selected) return;

    const allowedTypes = ["text/csv", "text/plain"];
    const maxSize = 50 * 1024 * 1024;

    if (!allowedTypes.includes(selected.type)) {
      alert("Only CSV or TXT files are allowed");
      return;
    }

    if (selected.size > maxSize) {
      alert("Max file size is 50MB");
      return;
    }

    setFile(selected);
    localStorage.setItem("datasetFileName", selected.name);

    

  };

  const removeFile = () => setFile(null);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-[#1b102f] via-[#3a1657] to-[#7b2fa1]">
      <div className="w-full max-w-2xl text-center text-white">

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          Upload Your Dataset
        </h1>

        <p className="text-sm sm:text-base text-white/80 mb-4">
          Upload your CSV or TXT file to start training your model
        </p>

        <p className="text-xs sm:text-sm text-white/70 mb-8">
          Accepted formats: .csv, .txt <br />
          Max size: 50 MB
        </p>

        {/* ============ BEFORE UPLOAD ============ */}
        {!file && (
          <label className="block bg-white/10 label backdrop-blur-xl border border-white/40 rounded-2xl px-4 sm:px-6 py-8 sm:py-10 cursor-pointer hover:bg-white/20 transition">
            <div className="flex flex-col items-center gap-4">

              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/20 flex items-center justify-center">
                <FiUploadCloud className="text-2xl sm:text-3xl" />
              </div>

              <p className="font-semibold text-sm sm:text-base">
                Drag & Drop your dataset here
              </p>

              <p className="text-sm sm:text-lg font-bold text-white">
                or <br />
                <span className="underline BrowseFiles">Browse files</span>
              </p>

              <p className="text-xs text-white/60">
                CSV, TXT only · Max file size 50 MB
              </p>
            </div>

            <input
              type="file"
              accept=".csv,.txt"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
        )}

        {/* ============ AFTER UPLOAD ============ */}
        {file && (
          <>
            <div className="w-full max-w-xl mx-auto bg-purple-600/40 border border-white/20 rounded-2xl px-4 sm:px-6 py-4 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
              
              <div className="flex items-center gap-3 break-all">
                <div className="w-6 h-6 rounded-full bg-white text-purple-700 flex items-center justify-center">
                  <BsCheckLg className="text-sm" />
                </div>
                <span className="font-bold text-sm sm:text-base">
                  {file.name}
                </span>
              </div>

              <button
                onClick={removeFile}
                className="remove transition cursor-pointer text-sm"
              >
                Remove
              </button>
            </div>

            <button
              onClick={() =>
                navigate("/DatasetDetails")
              }
              className="w-full sm:w-auto px-8 sm:px-10 py-3 rounded-xl bg-[#7A3DF0] hover:bg-[#8a52ff] cursor-pointer transition font-semibold"
            >
              Continue..
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Upload;
