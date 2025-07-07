import { useEffect, useState } from "react";

const WelcomeLoader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let start = Date.now();
    const duration = 30000; // 30 seconds
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const percent = Math.min((elapsed / duration) * 100, 100);
      setProgress(percent);
      if (percent >= 100) {
        clearInterval(interval);
        if (onFinish) onFinish();
      }
    }, 100);
    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      background: "#000",
      zIndex: 9999,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <h1
        style={{
          fontSize: "4rem",
          fontWeight: 800,
          background: "linear-gradient(90deg, #B0B0B0, #fff 80%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          textFillColor: "transparent",
          marginBottom: "2rem",
          letterSpacing: "0.1em",
          textTransform: "uppercase"
        }}
      >
        welcome
      </h1>
      <div style={{
        width: "60vw",
        maxWidth: 500,
        height: 18,
        background: "#222",
        borderRadius: 10,
        overflow: "hidden",
        boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
        border: "1px solid #444"
      }}>
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            background: `repeating-linear-gradient(135deg, #fff, #fff 10px, #e0e0e0 10px, #e0e0e0 20px)`,
            transition: "width 0.2s linear"
          }}
        />
      </div>
    </div>
  );
};

export default WelcomeLoader;
