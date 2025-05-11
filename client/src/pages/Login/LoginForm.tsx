import { MdAlternateEmail } from "react-icons/md";
import { FaFingerprint, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { BsApple } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const togglePasswordView = () => setShowPassword(!showPassword);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/home");
  };

  const animations = {
    normal: {
      scale: [1, 1.02, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop" as const,
        ease: "easeInOut",
      },
    },
    hover: {
      scale: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="w-full bg-black h-screen flex items-center justify-center">
      <motion.div
        className="w-[90%] max-w-sm md:max-w-md p-6 bg-[#111111] flex-col flex items-center gap-4 rounded-xl shadow-md shadow-black"
        initial="normal"
        animate={isHovered ? "hover" : "normal"}
        variants={animations}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src="/images/logo3.png" alt="logo" className="w-56" />

        <h1 className="text-xl font-semibold text-white">Welcome Back</h1>

        <p className="text-sm text-gray-400 text-center">
          Don't have an account?{" "}
          <Link to="/Register" className="text-white underline">
            Sign up
          </Link>
        </p>

        <div className="w-full flex flex-col gap-3">
          <div className="flex items-center gap-2 bg-[#1e1e1e] p-3 rounded-lg">
            <MdAlternateEmail className="text-gray-400" />
            <input
              type="email"
              placeholder="Email address"
              className="bg-transparent border-0 w-full outline-none text-white placeholder-gray-500"
            />
          </div>

          <div className="flex items-center gap-2 bg-[#1e1e1e] p-3 rounded-lg relative">
            <FaFingerprint className="text-gray-400" />
            <input
              type={showPassword ? "password" : "text"}
              placeholder="Password"
              className="bg-transparent border-0 w-full outline-none text-white placeholder-gray-500"
            />
            {showPassword ? (
              <FaRegEyeSlash
                className="absolute right-4 cursor-pointer text-gray-400"
                onClick={togglePasswordView}
              />
            ) : (
              <FaRegEye
                className="absolute right-4 cursor-pointer text-gray-400"
                onClick={togglePasswordView}
              />
            )}
          </div>
        </div>

        <button
          onClick={handleButtonClick}
          className="w-full p-3 bg-white text-black rounded-lg mt-3 font-semibold hover:bg-gray-300 transition"
        >
          Login
        </button>

        <div className="relative w-full flex items-center justify-center py-4">
          <div className="w-2/5 h-[1px] bg-gray-700" />
          <span className="text-sm px-4 text-gray-400">Or</span>
          <div className="w-2/5 h-[1px] bg-gray-700" />
        </div>

        <div className="w-full flex items-center justify-center gap-6">
          <div className="p-3 bg-[#1e1e1e] rounded-lg cursor-pointer hover:bg-[#2a2a2a] transition">
            <BsApple className="text-xl text-white" />
          </div>
          <div className="p-3 bg-[#1e1e1e] rounded-lg cursor-pointer hover:bg-[#2a2a2a] transition">
            <FaXTwitter className="text-xl text-white" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginForm;


