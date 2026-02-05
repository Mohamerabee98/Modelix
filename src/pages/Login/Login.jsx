import { useNavigate } from "react-router-dom";
import "../../styles/auth.css";
import robot from "../../assets/robot.jpg";
import { toast } from "react-toastify";

import { useState } from "react";
import PasswordInput from "../../components/PasswordInput ";
import { loginUser } from "../../utils/auth";
const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

   const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30"
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


const handleLogin = (e) => {
  e.preventDefault();

  if (!form.email || !form.password) {
    toast.error("Email & Password are required");
    return;
  }

  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (!storedUser) {
    toast.warning("No account found, please sign up first");
    return;
  }

  if (
    form.email !== storedUser.email ||
    form.password !== storedUser.password
  ) {
    toast.error("Invalid email or password");
    return;
  }

  

  loginUser(storedUser, token);
  toast.success("Login successful 🚀");

  setTimeout(() => {
    navigate("/"); 
  }, 500);
};
  return (
<div className="min-h-screen relative flex items-center justify-end overflow-hidden auth-bg">

  <div className="absolute left-0 bottom-0 w-[25vw] h-auto z-0">
    <img
      src={robot}
      className="w-full h-full object-contain"
      alt="Robot"
    />
  </div>

 
  <div className="w-[50vw] flex flex-col justify-start items-center z-10 relative">

   
    <h1 className="text-[3vw] md:text-[3vw] lg:text-[3vw] font-bold text-white mb-6 w-full text-center">
      Login
    </h1>

    <form
      onSubmit={handleLogin}
        autoComplete="off"
      className="w-[70%] h-[500px] glass p-8 rounded-3xl border border-white backdrop-blur-[50px] shadow-lg flex flex-col justify-center"
    >
   
     <p className="font-nunito font-bold text-[35px]  text-white mb-8 text-center">
  Welcome back to Modelix
</p>


<div className="mb-4 flex flex-col">
  <label htmlFor="email" className="text-white mb-2 font-medium">
    Email 
  </label>
  <input
    id="email"
    name="email"
    onChange={handleChange}
    className="w-full px-4 py-3 rounded-lg bg-white/50 text-white placeholder-white/70 outline-none border border-white/40"
    placeholder="Enter Email address"
  />
</div>

<PasswordInput
  id="password"
  name="password"
  value={form.password}
  onChange={handleChange}
  placeholder="Enter Password"
/>


      <button className="w-full cursor-pointer py-3 rounded-lg  bn-sign transition-colors text-white font-bold">
        Sign In
      </button>

      <p className="text-sm text-white/80 text-center mt-6">
        Don’t have an account?{" "}
        <span
          className="text-white font-bold cursor-pointer"
          onClick={() => navigate("/SignUp")}
        >
          Sign Up
        </span>
      </p>
    </form>
  </div>
</div>


  );
};

export default Login;