import {
  MdEmail,
  MdBuild,
  MdHandshake,
  MdAccessTime
} from "react-icons/md";

const Contact_2 = () => {
  return (
    <section
      className="
        w-full min-h-[70vh] pt-6 lg:pt-0 flex justify-center items-center px-6
        bg-[radial-gradient(circle_at_70%_30%,#7B2FA1_0%,#3A1657_35%,#22102F_65%,#160B23_100%)]
        text-white"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-start justify-center gap-12 relative">

        {/* LEFT COLUMN */}
        <div className="flex-1 flex flex-col items-center text-left md:text-left">
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left">Contact Information</h2>
          <div className="flex flex-col space-y-6">
            <InfoItem
              icon={<MdEmail size={22} />}
              title="Email Support"
              value="support@modelix.com"
            />
            <InfoItem
              icon={<MdBuild size={22} />}
              title="Technical Support"
              value="tech@modelix.com"
            />
            <InfoItem
              icon={<MdHandshake size={22} />}
              title="Business & Collaboration"
              value="business@yourproject.com"
            />
            <InfoItem
              icon={<MdAccessTime size={22} />}
              title="Response Time"
              value="Usually within 24 hours"
            />
          </div>
        </div>

        {/* DIVIDER */}
        <div className="hidden md:block w-px bg-white/50 self-stretch" />

        {/* RIGHT COLUMN */}
       <div className="flex-1 flex flex-col  items-start">
  <h2 className="text-2xl font-bold mb-8">FAQ Quick Links</h2>
  <ul className="flex flex-col space-y-4 text-lg font-bold">
    {[
      "How to upload my dataset?",
      "How to train a model?",
      "What is the supported file format?",
      "How does prediction work?",
    ].map((item, i) => (
      <li key={i} className="flex items-center gap-3">
        <span className="text-wight text-lg flex-shrink-0">•</span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
</div>
      </div>
    </section>
  );
};


export default Contact_2;

/* Reusable Item */
const InfoItem = ({ icon, title, value }) => {
  return (
    <div className="flex items-start gap-4">
      <div className="text-wight mt-1 flex-shrink-0">
        {icon}
      </div>
      <div className="text-lg">
        <p className="font-semibold">{title}</p>
        <p className="text-gray-300 text-sm">{value}</p>
      </div>
    </div>
  );
};