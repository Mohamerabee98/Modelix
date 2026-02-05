import "./Contact.css"
const Contact = () => {
  return (
    <section
      className="
        min-h-screen w-full flex items-center justify-center px-4
        bg-[radial-gradient(circle_at_70%_25%,#7B2FA1_0%,#3A1657_35%,#22102F_65%,#160B23_100%)]
      "
      id="Contact"
    >
      <div className="w-full max-w-xl text-center text-white">
        
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Contact Us
        </h1>

        {/* Description */}
        <p className="text-gray-200 text-sm md:text-base mb-2">
          If you have any questions, feedback, or need help with your dataset
          or model training, feel free to contact us using the form below.
        </p>

        <p className="font-semibold mb-8">
          Our team will get back to you as soon as possible
        </p>

        {/* Form Card */}
        <div
          className="
            mx-auto rounded-2xl p-6 md:p-8
            bg-white/10 backdrop-blur-xl
            border border-white/50"
        >
          <form className="space-y-4  text-left">
            
            {/* Full Name */}
            <div>
              <label className="text-sm mb-1 block">Full Name</label>
              <input
                type="text"
                className="
                  w-full rounded-lg px-4 py-2
                  bg-[#2a1840] text-white
                  border border-white/20
                  focus:outline-none focus:border-purple-400
                "
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm mb-1 block">Email</label>
              <input
                type="email"
                className="
                  w-full rounded-lg px-4 py-2
                  bg-[#2a1840] text-white
                  border border-white/20
                  focus:outline-none focus:border-purple-400
                "
              />
            </div>

  
            <div>
              <label className="text-sm mb-1 block">Message</label>
              <textarea
                rows="4"
                className="
                  w-full rounded-lg px-4 py-2
                  bg-[#2a1840] text-white
                  border border-white/20
                  resize-none
                  focus:outline-none focus:border-purple-400
                "
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="
                w-full  mt-4 py-2 rounded-lg
                cursor-pointer
                btn-send
                font-semibold">
              Send Messeage
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;