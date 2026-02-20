import { OWNER_NAME } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer style={{
      position:   "relative",
      zIndex:     1,
      textAlign:  "center",
      padding:    "32px",
      borderTop:  "1px solid rgba(255,255,255,0.05)",
    }}>
      <div style={{
        fontFamily:    "'Space Mono', monospace",
        fontSize:      11,
        color:         "#444",
        letterSpacing: 2,
      }}>
        DESIGNED & BUILT BY{" "}
        <span style={{ color: "#00ffb3" }}>{OWNER_NAME.toUpperCase()}</span>
        {" "}· {new Date().getFullYear()}
      </div>
    </footer>
  );
}