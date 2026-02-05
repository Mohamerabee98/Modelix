import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const PasswordInput = ({ id, name, value, onChange, placeholder }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="mb-4 flex flex-col relative">
      <label htmlFor={id} className="text-white mb-2 font-medium">
        {name === "confirm" ? "Confirm Password" : "Password"}
      </label>
      <div className="relative">
        <input
          id={id}
          name={name}
          type={show ? "text" : "password"}
          value={value}
          onChange={onChange}
          autoComplete="new-password"
          placeholder={placeholder}
          className="w-full px-4 py-3 pr-12 rounded-lg bg-white/50 text-white placeholder-white/70 outline-none border border-white/40"
        />
        <span
          className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-white"
          onClick={() => setShow(!show)}
        >
          {show ? <AiFillEye size={22} /> : <AiFillEyeInvisible size={22} />}
        </span>
      </div>
    </div>
  );
};

export default PasswordInput