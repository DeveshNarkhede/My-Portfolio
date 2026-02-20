import { useState, useEffect } from "react";

export default function SkillBar({ name, level, delay = 0 }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setWidth(level), 400 + delay);
    return () => clearTimeout(t);
  }, [level, delay]);

  return (
    <div style={{ marginBottom: 18 }}>
      <div style={{
        display: "flex", justifyContent: "space-between",
        marginBottom: 6, fontSize: 13, letterSpacing: 2, color: "#aaa",
      }}>
        <span>{name}</span>
        <span style={{ color: "#00ffb3" }}>{level}%</span>
      </div>

      <div style={{
        height: 6, background: "rgba(255,255,255,0.07)",
        borderRadius: 3, overflow: "hidden",
      }}>
        <div style={{
          height: "100%",
          width: `${width}%`,
          background: "linear-gradient(90deg, #00ffb3, #00c9ff)",
          borderRadius: 3,
          transition: "width 1.2s cubic-bezier(.4,0,.2,1)",
        }} />
      </div>
    </div>
  );
}