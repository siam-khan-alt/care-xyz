import { FaHeartbeat } from "react-icons/fa";

const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-100">
      <div className="relative flex items-center justify-center">
        
        <div className="w-24 h-24 border-4 border-primary/10 border-t-primary rounded-full animate-spin"></div>
        
        <div className="absolute w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center">
          <FaHeartbeat className="text-primary text-3xl animate-pulse" />
        </div>
      </div>
      
      <div className="mt-10">
        <h2 className="text-3xl font-black heading-gradient animate-pulse tracking-tighter">
          Care.xyz
        </h2>
        
        <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-2 opacity-50"></div>
      </div>
    </div>
  );
};

export default Loading;