import { MdAlternateEmail } from "react-icons/md";
import { FaFingerprint, FaUser } from "react-icons/fa";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { BsApple } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const RegisterForm = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const togglePasswordView = () => setShowPassword(!showPassword);
    const [isHovered, setIsHovered] = useState(false);
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
        <div className="w-full bg-[url('/images/background.jpg')] h-screen flex items-center justify-center">
            <motion.div
                className="w-[90%] max-w-sm md:max-w-md lg:max-w-md p-5 bg-gray-900 flex-col flex items-center gap-3 rounded-xl shadow-slate-500 shadow-lg"
                initial="normal"
                animate={isHovered ? "hover" : "normal"}
                variants={animations}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <img src="/images/logo2.png" alt="logo" className="w-42 md:w-42" />

                <h1 className="text-lg md:text-xl font-semibold text-[#4A3F75]">Create Account</h1>

                <p className="text-xs md:text-sm text-[#6B5CA5] text-center">
                    Already have an account?{" "}
                    <Link to="/" className="text-[#4A3F75] underline">
                        Sign in
                    </Link>
                </p>

                <div className="w-full flex flex-col gap-3">
                    <div className="w-full flex items-center gap-2 bg-gray-800 p-2 rounded-xl">
                        <FaUser className="text-[#6B5CA5]" />
                        <input
                            type="text"
                            placeholder="Username"
                            className="bg-transparent border-0 w-full outline-none text-sm md:text-base text-white placeholder-[#6B5CA5]"
                        />
                    </div>

                    <div className="w-full flex items-center gap-2 bg-gray-800 p-2 rounded-xl">
                        <MdAlternateEmail className="text-[#6B5CA5]" />
                        <input
                            type="email"
                            placeholder="Email address"
                            className="bg-transparent border-0 w-full outline-none text-sm md:text-base text-white placeholder-[#6B5CA5]"
                        />
                    </div>

                    <div className="w-full flex items-center gap-2 bg-gray-800 p-2 rounded-xl relative">
                        <FaFingerprint className="text-[#6B5CA5]" />
                        <input
                            type={showPassword ? "password" : "text"}
                            placeholder="Password"
                            className="bg-transparent border-0 w-full outline-none text-sm md:text-base text-white placeholder-[#6B5CA5]"
                        />
                        {showPassword ? (
                            <FaRegEyeSlash
                                className="absolute right-5 cursor-pointer text-[#6B5CA5]"
                                onClick={togglePasswordView}
                            />
                        ) : (
                            <FaRegEye
                                className="absolute right-5 cursor-pointer text-[#6B5CA5]"
                                onClick={togglePasswordView}
                            />
                        )}
                    </div>
                </div>

                <button className="w-full p-2 bg-[#4A3F75] rounded-xl mt-3 hover:bg-[#6B5CA5] text-sm md:text-base text-white">
                    Register
                </button>

                <div className="relative w-full flex items-center justify-center py-3">
                    <div className="w-2/5 h-[2px] bg-gray-800"></div>
                    <h3 className="font-lora text-xs md:text-sm px-4 text-[#6B5CA5]">
                        Or
                    </h3>
                    <div className="w-2/5 h-[2px] bg-gray-800"></div>
                </div>

                <div className="w-full flex items-center justify-center gap-10">
                    <div className="p-2 md:px-6 lg:px-10 bg-[#4A3F75] cursor-pointer rounded-xl hover:bg-[#6B5CA5]">
                        <BsApple className="text-lg md:text-xl text-white" />
                    </div>
                    <div className="p-2 md:px-6 lg:px-10 bg-[#4A3F75] cursor-pointer rounded-xl hover:bg-[#6B5CA5]">
                        <FaXTwitter className="text-lg md:text-xl text-white" />
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default RegisterForm;
