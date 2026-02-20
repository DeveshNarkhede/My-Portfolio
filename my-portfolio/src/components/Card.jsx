import { useState, useEffect } from "react";

export default function Card({ children, delay = 0, glow = false }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div style={{
      background:     "rgba(10,20,30,0.7)",
      border:         `1px solid ${glow ? "#00ffb3" : "rgba(0,255,179,0.15)"}`,
      borderRadius:   16,
      padding:        "24px 28px",
      backdropFilter: "blur(12px)",
      boxShadow:      glow ? "0 0 30px rgba(0,255,179,0.15)" : "none",
      opacity:        visible ? 1 : 0,
      transform:      visible ? "translateY(0)" : "translateY(30px)",
      transition:     "opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1)",
    }}>
      {children}
    </div>
  );
}