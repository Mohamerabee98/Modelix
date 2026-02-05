import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
import robotImage from "../../assets/HomeImg.png";
import { MdArrowOutward } from "react-icons/md";
import { isLoggedIn } from "./../../utils/auth";

const Home = ({ showUploadButton = true }) => {
  const navigate = useNavigate();

  return (
    <div
      id="Home"
      className="w-full min-h-screen flex items-center pt-10 pb-10 justify-center bg-gradient-to-r from-gray-900 via-purple-900 to-gray-800 px-4 sm:px-6 lg:px-12"
    >
      <div className="max-w-6xl w-full flex flex-col-reverse lg:flex-row items-center justify-between">
        {/* النصوص */}
        <div className="text-center lg:text-left lg:w-1/2 mt-10 lg:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-snug sm:leading-tight md:leading-[1.3]">
            Train Machine <br /> Learning Models <br /> Without Code
          </h1>

          <p className="text-gray-300 mb-8 text-base sm:text-lg md:text-lg leading-relaxed sm:leading-7">
            Upload your dataset, train a model, and generate <br />
            predictions instantly.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            {/* Get Started */}
            <button
              onClick={() => navigate("/dashboard")}
              className="button-gradient text-white cursor-pointer w-50 px-6 py-3 text-lg sm:text-xl rounded-full font-medium flex items-center gap-2 transition-all duration-300"
            >
              Get Started
              <MdArrowOutward className="text-xl  sm:text-2xl" />
            </button>

            {/* Upload Dataset */}
            {showUploadButton && (
              <button
                onClick={() => navigate("/upload")}
                className="bg-white text-purple-700 px-6 cursor-pointer py-3 text-lg sm:text-xl rounded-full font-medium flex items-center gap-2 hover:bg-gray-100 transition-all duration-300"
              >
                Upload Dataset
                <MdArrowOutward className="text-xl sm:text-2xl" />
              </button>
            )}
          </div>
        </div>

    
      {/* الصورة */}
<div className="lg:w-1/2 flex justify-center lg:justify-end">
  <img
    src={robotImage}
    alt="Robot"
    className="w-64 sm:w-80 md:w-96 lg:w-[80%] max-w-[500px] object-contain"
  />
</div>
      </div>
    </div>
  );
};

export default Home;