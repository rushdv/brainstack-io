import React from "react";
import { useNavigate } from "react-router-dom";
import notFoundImg from "../assets/error-404.png";

const Notfound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-6 bg-[#f5f5f5]">
      <img src={notFoundImg} alt="404 Not Found" className="w-64 md:w-80 mb-8" />
      <h1 className="text-2xl md:text-3xl font-black text-gray-800 mb-3">Oops, page not found!</h1>
      <p className="text-gray-500 mb-8 text-sm">The page you are looking for is not available.</p>
      <button
        onClick={() => navigate("/")}
        className="bg-[#7c3aed] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#6d28d9] transition-all"
      >
        Go Back!
      </button>
    </div>
  );
};

export default Notfound;
