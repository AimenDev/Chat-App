import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="text-center p-6 rounded-lg bg-transparent shadow-lg border  max-w-md mx-auto">
        {/* Title */}
        <h1 className="text-5xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-lg text-gray-600 mb-6">Oops! Page not found.</p>

        {/* Illustration (optional) */}
        

        {/* Button to redirect */}
      </div>
    </div>
  );
};

export default NotFound;
