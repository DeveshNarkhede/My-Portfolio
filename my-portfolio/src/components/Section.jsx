export default function Section({ title, subtitle, children }) {
  return (
    <div style={{
      minHeight: "100vh",
      padding:   "120px 40px 80px",
      maxWidth:  1100,
      margin:    "0 auto",
    }}>
      <div style={{ marginBottom: 52 }}>
        <div style={{
          fontFamily:  "'Space Mono', monospace",
          fontSize:    11,
          color:       "#00ffb3",
          letterSpacing: 4,
          marginBottom: 10,
        }}>
          {subtitle}
        </div>

        <h2 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize:   "clamp(36px, 6vw, 64px)",
          fontWeight: 800,
          color:      "#fff",
          margin:     0,
          lineHeight: 1,
        }}>
          {title}
        </h2>

        <div style={{
          width:        48,
          height:       3,
          background:   "linear-gradient(90deg, #00ffb3, #00c9ff)",
          marginTop:    20,
          borderRadius: 2,
        }} />
      </div>

      {children}
    </div>
  );
}