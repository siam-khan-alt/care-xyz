"use client";

import { useState } from "react";
import Link from "next/link";
import { FaLock, FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in:", formData);
  };

  return (
    <div className="min-h-screen container mx-auto bg-base-200 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md bg-white rounded-[3rem] shadow-2xl p-8 md:p-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-2">
            Welcome <span className="heading-gradient">Back</span>
          </h2>
          <p className="text-gray-500 font-medium">Securely login to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-1">
            <label className="text-xs font-black text-gray-700 ml-2 uppercase tracking-widest">Email</label>
            <div className="relative">
              <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-base-200 border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary font-medium" 
                onChange={(e) => setFormData({...formData, email: e.target.value})} 
                required 
              />
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex justify-between items-center ml-2 mr-2">
              <label className="text-xs font-black text-gray-700 uppercase tracking-widest">Password</label>
              <Link href="#" className="text-[10px] font-bold text-primary hover:underline uppercase tracking-tighter">Forgot Password?</Link>
            </div>
            <div className="relative">
              <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="••••••••" 
                className="w-full bg-base-200 border-none rounded-2xl py-4 pl-12 pr-12 focus:ring-2 focus:ring-primary font-medium" 
                onChange={(e) => setFormData({...formData, password: e.target.value})} 
                required 
              />
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)} 
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition-colors"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <button type="submit" className="btn-gradient w-full py-4 h-auto rounded-2xl text-lg font-black uppercase tracking-widest mt-2">
            Login
          </button>
          
          <p className="text-center text-gray-500 font-bold text-sm">
            Don't have an account? <Link href="/register" className="text-primary hover:underline">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;