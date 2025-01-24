import React, { useState } from "react";
import { CircleUser, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="h-screen max-w-full flex items-center justify-center bg-gray-100">
      <div className="h-full w-full mx-auto shadow-lg md:flex">
        {/* Left Side - Decorative Section (Tablet and Above) */}
        <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-blue-600 to-purple-600 text-white h-full flex-col justify-center p-12">
          <h2 className="text-4xl font-bold mb-6">Welcome Back</h2>
          <p className="text-xl mb-8 opacity-80">
            Discover a world of possibilities with our secure login platform.
          </p>
          <div className="bg-white/10 rounded-xl p-6">
            <blockquote className="italic text-lg">
              {`"`}Simplicity is the ultimate sophistication{`"`} - Leonardo da Vinci
            </blockquote>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full md:w-1/2 bg-white h-full flex items-center justify-center p-8 md:p-12">
          <div className="w-full max-w-md">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Login
            </h1>

            <form className="space-y-4">
              {/* Username Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <CircleUser className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                />
              </div>

              {/* Password Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="text-gray-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              {/* Forgot Password */}
              <div className="flex justify-end">
                <a href="#" className="text-sm text-blue-600 hover:underline">
                  Forgot Password?
                </a>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg hover:opacity-90 transition duration-300 flex items-center justify-center"
              >
                Login <ArrowRight className="ml-2" />
              </button>

              {/* Sign Up Option */}
              <div className="text-center mt-4">
                <p className="text-sm text-gray-600">
                  Don{"'"}t have an account?{" "}
                  <a
                    href="#"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    Sign Up
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
