
import robot from "../../assets/About2.png"; // غير المسار حسب مشروعك

const About_2 = () => {
  return (
    <section className="w-full p-15 flex  items-center justify-center bg-[radial-gradient(circle_at_70%_30%,#5A1E7A_0%,#3A1657_35%,#22102F_65%,#160B23_100%)]
 px-6">
      <div className="relative w-full max-w-6xl  lg:h-[600px]">

       {/* Key Features Card */}
<div className="w-full lg:w-[420px] rounded-3xl 
                bg-white/10 backdrop-blur-xl border border-white/50
                p-4 sm:p-6 text-white text-center shadow-xl
                static lg:absolute lg:left-40 lg:top-10">
  <span className="inline-block mb-4 px-3 sm:px-4 py-1 rounded-4xl 
                   bg-purple-600 text-[15px] sm:text-[17px] font-medium">
    Key Features
  </span>

  <ul className="space-y-2 sm:space-y-3 text-start text-[13px] sm:text-[15px]">
    {[
      "No coding required",
      "Simple and user-friendly interface",
      "Upload any dataset (CSV / TXT)",
      "Multiple ML models (Linear Regression,",
      "Random Forest, Neural Network, etc.)",
      "Real-time predictions",
      "Automatic preprocessing",
      "Clean visual charts and performance metrics",
    ].map((item, index) => (
      <li key={index} className="flex items-start gap-2 sm:gap-3">
        <span className="text-purple-400 text-base sm:text-lg">✔</span>
        <span className="text-gray-200">{item}</span>
      </li>
    ))}
  </ul>
</div>

{/* Robot Image */}
<div className="w-full flex items-center justify-center my-6 lg:absolute lg:left-[180px] lg:bottom-[200px]">
  <img
    src={robot}
    alt="AI Robot"
    className="w-full max-w-xs sm:max-w-sm lg:w-[100%] drop-shadow-2xl"
  />
</div>

{/* Why we built it Card */}
<div className="w-full lg:w-[420px] rounded-4xl 
                bg-white/10 backdrop-blur-xl border border-white/50
                p-6 text-white shadow-xl text-center
                 lg:absolute lg:right-70 lg:-bottom-5  lg:mt-0">
  <span className="inline-block mb-4 px-3 sm:px-4 py-1 rounded-full 
                   bg-purple-600 text-[15px] sm:text-[17px] font-medium">
    Why we built it
  </span>

  <p className="text-sm sm:text-base text-gray-200 leading-[22px] sm:leading-[25px]">
    Machine Learning is powerful, but often complicated. We created Modelix to simplify the entire process and help users focus on solving problems — not coding algorithms.
  </p>
</div>
      </div>
    </section>
  );
};

export default About_2;