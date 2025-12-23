"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaHome, FaArrowLeft } from "react-icons/fa";

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-white container mx-auto px-4">
      <div className="max-w-3xl w-full text-center">
        
        <h1 className="text-3xl md:text-5xl md:text-[250px] font-black leading-none tracking-tighter heading-gradient select-none">
          404
        </h1>

        <div className="relative -mt-4 md:-mt-8 mb-10">
          <h2 className="text-3xl md:text-5xl font-black text-gray-800 mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-500 text-lg md:text-xl font-medium max-w-md mx-auto mb-12">
            The page you are looking for doesn't exist. Let's get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              href="/" 
              className="btn-gradient px-12 py-4 h-auto rounded-2xl flex items-center justify-center gap-3 text-base font-black uppercase tracking-widest no-underline group w-full sm:w-auto  shadow-lg shadow-primary/20"
            >
              <FaHome className="text-xl group-hover:-translate-y-1 transition-transform" /> 
              Return Home
            </Link>
            
            <button 
              onClick={() => router.back()}
              className="px-12 py-4 h-auto rounded-2xl bg-secondary/10 border-2 border-secondary/20 text-secondary hover:bg-secondary hover:text-white flex items-center gap-3 text-base font-black uppercase tracking-widest transition-all w-full sm:w-auto justify-center group"
            >
              <FaArrowLeft className="group-hover:-translate-x-2 transition-transform" /> 
              Go Back
            </button>
          </div>
        </div>

        <p className=" text-gray-400 font-bold text-[10px] uppercase tracking-[0.4em]">
          Care.xyz — Reliable Caregiving Platform
        </p>
      </div>
    </div>
  );
};

export default NotFound;