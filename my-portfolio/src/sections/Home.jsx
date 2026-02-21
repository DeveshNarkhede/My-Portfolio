import Typewriter from "../components/Typewriter";
import { TYPEWRITER_TEXTS, OWNER_NAME } from "../data/portfolioData";

export default function Home({ setActive }) {
  return (
    <div style={{
      minHeight:      "100vh",
      display:        "flex",
      alignItems:     "center",
      justifyContent: "center",
      padding:        "80px 40px 40px",
    }}>
      <div style={{ textAlign: "center", maxWidth: 700 }}>

        <div style={{
          fontFamily:    "'Space Mono', monospace",
          fontSize:      13,
          color:         "#00ffb3",
          letterSpacing: 4,
          marginBottom:  24,
          opacity:       0.8,
        }}>
          &gt; HELLO WORLD_
        </div>

        <h1 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize:   "clamp(48px, 8vw, 90px)",
          fontWeight: 800,
          lineHeight: 1.05,
          color:      "#fff",
          margin:     "0 0 16px",
          textShadow: "0 0 60px rgba(0,255,179,0.2)",
        }}>
          {OWNER_NAME.split(" ")[0]}
          <br />
          <span style={{ color: "#00ffb3" }}>
            {OWNER_NAME.split(" ").slice(1).join(" ") || "Name"}
          </span>
        </h1>

        <div style={{
          fontFamily: "'Space Mono', monospace",
          fontSize:   "clamp(16px, 3vw, 22px)",
          marginBottom: 40,
          height:     36,
        }}>
          <Typewriter texts={TYPEWRITER_TEXTS} />
        </div>

        <p style={{
          color:      "#777",
          fontSize:   16,
          lineHeight: 1.8,
          maxWidth:   480,
          margin:     "0 auto 48px",
        }}>
          I craft elegant digital experiences that live at the intersection of
          design and engineering. Welcome to my corner of the internet.
        </p>

        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <button
            onClick={() => setActive("projects")}
            onMouseEnter={e => {
              e.currentTarget.style.transform  = "translateY(-3px)";
              e.currentTarget.style.boxShadow  = "0 12px 40px rgba(0,255,179,0.35)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform  = "";
              e.currentTarget.style.boxShadow  = "";
            }}
            style={{
              padding:       "14px 36px",
              borderRadius:  10,
              background:    "linear-gradient(135deg, #00ffb3, #00c9ff)",
              color:         "#050a12",
              fontFamily:    "'Space Mono', monospace",
              fontWeight:    700,
              fontSize:      13,
              letterSpacing: 2,
              border:        "none",
              cursor:        "pointer",
              transition:    "transform 0.2s, box-shadow 0.2s",
            }}
          >
            VIEW PROJECTS
          </button>

          <button
            onClick={() => setActive("contact")}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(0,255,179,0.08)"}
            onMouseLeave={e => e.currentTarget.style.background = "transparent"}
            style={{
              padding:       "14px 36px",
              borderRadius:  10,
              background:    "transparent",
              color:         "#00ffb3",
              fontFamily:    "'Space Mono', monospace",
              fontSize:      13,
              letterSpacing: 2,
              border:        "1px solid rgba(0,255,179,0.4)",
              cursor:        "pointer",
              transition:    "background 0.2s",
            }}
          >
            CONTACT ME
          </button>
        </div>

        <div style={{ marginTop: 80, animation: "float 2s ease-in-out infinite" }}>
          <div style={{
            width:      1,
            height:     60,
            background: "linear-gradient(to bottom, #00ffb3, transparent)",
            margin:     "0 auto",
          }} />
        </div>
      </div>
    </div>
  );
}