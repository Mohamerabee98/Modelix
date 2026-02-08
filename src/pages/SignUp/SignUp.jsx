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
    <div className="min-h-screen relative flex flex-col md:flex-row items-center justify-center md:justify-end overflow-hidden auth-bg px-4">
  
  {/* Robot Image */}
  <div className="hidden md:block absolute left-0 bottom-0 w-[25vw] h-auto z-0">
    <img src={robot} className="w-full h-full object-contain" alt="Robot" />
  </div>

  {/* Right Section */}
  <div className="w-full md:w-[60vw] lg:w-[50vw] flex flex-col items-center z-10 relative">
    
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-center">
      Sign Up
    </h1>

    <form
      onSubmit={handleSignup}
      autoComplete="off"
      className="
        w-full 
        sm:w-[90%] 
        md:w-[75%] 
        lg:w-[70%]
        max-w-xl
        glass 
        p-6 
        md:p-8
        rounded-3xl 
        border 
        border-white 
        backdrop-blur-[50px] 
        shadow-lg 
        flex 
        flex-col 
        justify-center
      "
    >
      {/* Full Name */}
      <div className="mb-4 flex flex-col">
        <label className="text-white mb-2 font-medium">Full Name</label>
        <input
          name="name"
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-white/50 text-white placeholder-white/70 outline-none border border-white/40"
          placeholder="Enter Full Name"
        />
      </div>

      {/* Email */}
      <div className="mb-4 flex flex-col">
        <label className="text-white mb-2 font-medium">Email</label>
        <input
          name="email"
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-white/50 text-white placeholder-white/70 outline-none border border-white/40"
          placeholder="Enter Email Address"
        />
      </div>

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

      <button className="w-full mt-4 py-3 rounded-lg bn-sign text-white font-bold">
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
