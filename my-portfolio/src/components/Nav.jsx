import { useState, useEffect } from "react";
import { SOCIAL, OWNER_NAME } from "../data/portfolioData";

const NAV_LINKS = ["home", "skills", "achievements", "projects", "contact"];

function GitHubIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.234c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.775.42-1.305.763-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.468-2.382 1.235-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3-.405c1.02.005 2.045.138 3 .405 2.29-1.552 3.296-1.23 3.296-1.23.653 1.652.242 2.873.12 3.176.77.838 1.233 1.91 1.233 3.22 0 4.61-2.807 5.625-5.48 5.92.43.372.823 1.102.823 2.222v3.293c0 .32.192.694.8.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Nav({ active, setActive }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav style={{
      position:     "fixed",
      top: 0, left: 0, right: 0,
      zIndex:       100,
      padding:      "0 40px",
      height:       64,
      display:      "flex",
      alignItems:   "center",
      justifyContent: "space-between",
      background:   scrolled ? "rgba(5,10,18,0.95)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(0,255,179,0.1)" : "none",
      transition:   "all 0.4s ease",
    }}>

      <div
        onClick={() => setActive("home")}
        style={{
          fontFamily:    "'Space Mono', monospace",
          fontSize:      20,
          fontWeight:    700,
          color:         "#00ffb3",
          letterSpacing: 2,
          cursor:        "pointer",
        }}
      >
        &lt;{OWNER_NAME} /&gt;
      </div>

      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>

        {NAV_LINKS.map(section => {
          const isActive = active === section;
          return (
            <button
              key={section}
              onClick={() => setActive(section)}
              onMouseEnter={e => {
                if (!isActive) {
                  e.currentTarget.style.color       = "#ccc";
                  e.currentTarget.style.borderColor = "rgba(0,255,179,0.2)";
                }
              }}
              onMouseLeave={e => {
                if (!isActive) {
                  e.currentTarget.style.color       = "#888";
                  e.currentTarget.style.borderColor = "transparent";
                }
              }}
              style={{
                background:    isActive ? "rgba(0,255,179,0.12)" : "transparent",
                border:        isActive ? "1px solid rgba(0,255,179,0.4)" : "1px solid transparent",
                color:         isActive ? "#00ffb3" : "#888",
                padding:       "6px 18px",
                borderRadius:  8,
                fontFamily:    "'Space Mono', monospace",
                fontSize:      12,
                letterSpacing: 1.5,
                textTransform: "uppercase",
                cursor:        "pointer",
                transition:    "all 0.25s ease",
              }}
            >
              {section}
            </button>
          );
        })}

        <a
          href={SOCIAL.github}
          target="_blank"
          rel="noreferrer"
          title="GitHub"
          onMouseEnter={e => e.currentTarget.style.color = "#fff"}
          onMouseLeave={e => e.currentTarget.style.color = "#888"}
          style={{
            marginLeft:  8,
            display:     "flex",
            alignItems:  "center",
            color:       "#888",
            transition:  "color 0.2s",
          }}
        >
          <GitHubIcon />
        </a>

        <a
          href={SOCIAL.linkedin}
          target="_blank"
          rel="noreferrer"
          title="LinkedIn"
          onMouseEnter={e => e.currentTarget.style.color = "#0A66C2"}
          onMouseLeave={e => e.currentTarget.style.color = "#888"}
          style={{
            display:    "flex",
            alignItems: "center",
            color:      "#888",
            transition: "color 0.2s",
          }}
        >
          <LinkedInIcon />
        </a>
      </div>
    </nav>
  );
}