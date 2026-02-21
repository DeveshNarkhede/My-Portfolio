import Section from "../components/Section";
import Card    from "../components/Card";
import { PROJECTS } from "../data/portfolioData";

export default function Projects() {
  return (
    <Section title="Projects" subtitle="// WHAT I'VE BUILT">
      <div style={{
        display:             "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap:                 24,
      }}>
        {PROJECTS.map((project, i) => (
          <Card key={project.title} delay={i * 120} glow={i === 0}>

            <div style={{
              width:        40,
              height:       3,
              background:   project.color,
              borderRadius: 2,
              marginBottom: 20,
            }} />

            <h3 style={{
              fontFamily: "'Syne', sans-serif",
              fontSize:   20,
              fontWeight: 700,
              color:      "#fff",
              margin:     "0 0 10px",
            }}>
              {project.title}
            </h3>

            <p style={{ color: "#777", fontSize: 13, lineHeight: 1.75, margin: "0 0 20px" }}>
              {project.desc}
            </p>

            {/* Tech tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 24 }}>
              {project.tags.map(tag => (
                <span key={tag} style={{
                  padding:    "3px 10px",
                  borderRadius: 4,
                  fontSize:   11,
                  fontFamily: "'Space Mono', monospace",
                  background: "rgba(255,255,255,0.05)",
                  color:      "#aaa",
                  border:     "1px solid rgba(255,255,255,0.08)",
                }}>
                  {tag}
                </span>
              ))}
            </div>

            <div style={{ display: "flex", gap: 12 }}>
              <a href={project.link} style={{
                fontFamily:    "'Space Mono', monospace",
                fontSize:      11,
                letterSpacing: 1.5,
                color:         project.color,
                textDecoration: "none",
              }}>
                LIVE DEMO →
              </a>
              <a href={project.repo} style={{
                fontFamily:    "'Space Mono', monospace",
                fontSize:      11,
                letterSpacing: 1.5,
                color:         "#555",
                textDecoration: "none",
              }}>
                SOURCE CODE
              </a>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}