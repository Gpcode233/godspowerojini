import React from "react";

const ModelLoaderOverlay = ({ progress, visible }) => {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-80">
      <h1
        className="text-5xl md:text-7xl font-bold mb-10 text-center"
        style={{
          background: "linear-gradient(90deg, #B0B0B0, #fff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        welcome
      </h1>
      <div className="w-3/4 max-w-xl h-6 rounded-lg overflow-hidden bg-gray-300 relative">
        <div
          className="h-full transition-all duration-300"
          style={{
            width: `${progress}%`,
            backgroundImage:
              "repeating-linear-gradient(135deg, #fff 0 10px, #e5e5e5 10px 20px)",
            backgroundColor: "#fff",
          }}
        ></div>
      </div>
      <p className="mt-4 text-white text-lg">Loading... {progress}%</p>
    </div>
  );
};

export default ModelLoaderOverlay;
