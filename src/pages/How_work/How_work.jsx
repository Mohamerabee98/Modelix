import {
  MdCloudUpload,
  MdPsychology,
  MdQueryStats
} from "react-icons/md";

const How_Work = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12 py-16 bg-gradient-to-br from-[#1b102f] via-[#3a1657] to-[#7b2fa1]">
      <div className="max-w-7xl w-full text-center text-white">
        
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          How It Works
        </h2>
        <p className="max-w-2xl mx-auto text-base sm:text-lg mb-12">
          A simple 3-step process to train and use Machine Learning models
          without writing any code.
        </p>

        {/* Cards Wrapper */}
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 md:gap-6 lg:gap-8">
          
          {/* Card */}
          <div className="flex-1 max-w-sm w-full mx-auto rounded-3xl p-6 sm:p-8 bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg hover:scale-105 transition-transform duration-300">
            <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-xl bg-purple-600">
              <MdCloudUpload size={28} />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3">
              1. Upload Your Dataset
            </h3>
            <p className="text-gray-50 text-sm mb-6 sm:mb-8">
              Upload your CSV or TXT file. Preview your data and choose the target column you want to predict.
            </p>
            <ul className="text-gray-50 text-sm space-y-2 text-left leading-6">
              <li>• Any dataset format (CSV / TXT)</li>
              <li>• Automatic column detection</li>
              <li>• View first rows instantly</li>
            </ul>
          </div>

          {/* Card */}
          <div className="flex-1 max-w-sm w-full mx-auto rounded-3xl p-6 sm:p-8 bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg hover:scale-105 transition-transform duration-300">
            <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-xl bg-purple-600">
              <MdPsychology size={28} />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3">
              2. Train a Model
            </h3>
            <p className="text-gray-50 text-sm mb-6 sm:mb-8">
              Choose a model like Linear Regression, Random Forest, or Neural Network. Set hyperparameters and start training with one click.
            </p>
            <ul className="text-gray-50 text-sm space-y-2 text-left leading-6">
              <li>• Multiple ML models</li>
              <li>• Automatic preprocessing</li>
              <li>• Performance metrics & charts</li>
            </ul>
          </div>

          {/* Card */}
          <div className="flex-1 max-w-sm w-full mx-auto rounded-3xl p-6 sm:p-8 bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg hover:scale-105 transition-transform duration-300">
            <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-xl bg-purple-600">
              <MdQueryStats size={28} />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3">
              3. Make Predictions
            </h3>
            <p className="text-gray-50 text-sm mb-6 sm:mb-8">
              After training, enter new values using the dynamic form and get instant predictions based on your trained model.
            </p>
            <ul className="text-gray-50 text-sm space-y-2 text-left leading-6">
              <li>• Dynamic form based on dataset</li>
              <li>• Real-time predictions</li>
              <li>• Save and reuse your models</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default How_Work;