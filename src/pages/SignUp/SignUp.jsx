import { useNavigate } from "react-router-dom";
import "../../styles/auth.css";
import robot from "../../assets/robot.jpg";
import { useState } from "react";
import { toast } from "react-toastify";
import PasswordInput from "../../components/PasswordInput ";
import { loginUser } from "../../utils/auth";

const SignUp = ({setFromSignup}) => {
  const navigate = useNavigate();
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30";
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password || !form.confirm) {
      toast.error("All fields are required");
      return;
    }

    if (form.password !== form.confirm) {
      toast.error("Passwords do not match");
      return;
    }

    const userData = {
      name: form.name,
      email: form.email,
      password: form.password,
    };

    loginUser(userData, token);
    setFromSignup(true);
    toast.success("Account created successfully 🎉");

    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  return (
    <div className="min-h-screen relative flex items-center justify-end overflow-hidden auth-bg">
      <div className="absolute left-0 bottom-0 w-[25vw] h-auto z-0">
        <img src={robot} className="w-full h-full object-contain" alt="Robot" />
      </div>

      <div className="w-[50vw] flex flex-col justify-start items-center z-10 relative">
        <h1 className="text-[3vw] md:text-[3vw] lg:text-[3vw] font-bold text-white mb-6 w-full text-center">
          Sign Up
        </h1>

        <form
          onSubmit={handleSignup}
          autoComplete="off"
          className="w-[70%] h-[550px] glass p-8 rounded-3xl border border-white backdrop-blur-[50px] shadow-lg flex flex-col justify-center"
        >
          <div className="mb-4 flex flex-col">
            <label htmlFor="name" className="text-white mb-2 font-medium">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/50 text-white placeholder-white/70 outline-none border border-white/40"
              placeholder="Enter Full Name"
            />
          </div>

          <div className="mb-4 flex flex-col">
            <label htmlFor="email" className="text-white mb-2 font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/50 text-white placeholder-white/70 outline-none border border-white/40"
              placeholder="Enter Email Address"
            />
          </div>

          {/* <div className="mb-4 flex flex-col">
            <label htmlFor="password" className="text-white mb-2 font-medium">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/70 outline-none border border-white/40"
              placeholder="Enter Password"
            />
          </div>

       
          <div className="mb-6 flex flex-col">
            <label htmlFor="confirm" className="text-white mb-2 font-medium">
              Confirm Password
            </label>
            <input
              id="confirm"
              name="confirm"
              type="password"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/70 outline-none border border-white/40"
              placeholder="Confirm Password"
            />
          </div> */}
          <PasswordInput
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter Password"
          />

          <PasswordInput
            id="confirm"
            name="confirm"
            value={form.confirm}
            onChange={handleChange}
            placeholder="Confirm Password"
          />

          <button className="w-full cursor-pointer py-3 rounded-lg bn-sign transition-colors text-white font-bold">
            Create Account
          </button>

          <p className="text-sm text-white/80 text-center mt-6">
            Already have an account?{" "}
            <span
              className="text-white font-bold cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
