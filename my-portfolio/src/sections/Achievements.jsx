import Section from "../components/Section";
import Card    from "../components/Card";
import { ACHIEVEMENTS } from "../data/portfolioData";

export default function Achievements() {
  return (
    <Section title="Achievements" subtitle="// MILESTONES">
      <div style={{
        display:             "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap:                 20,
      }}>
        {ACHIEVEMENTS.map((item, i) => (
          <Card key={item.title} delay={i * 100}>
            <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>

              <div style={{ fontSize: 32, lineHeight: 1 }}>{item.icon}</div>

              <div style={{ flex: 1 }}>
                <div style={{
                  display:        "flex",
                  justifyContent: "space-between",
                  alignItems:     "baseline",
                  marginBottom:   6,
                }}>
                  <div style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    fontSize:   16,
                    color:      "#fff",
                  }}>
                    {item.title}
                  </div>
                  <div style={{
                    fontFamily:    "'Space Mono', monospace",
                    fontSize:      10,
                    color:         "#00ffb3",
                    marginLeft:    12,
                    flexShrink:    0,
                  }}>
                    {item.year}
                  </div>
                </div>

                <p style={{ color: "#777", fontSize: 13, lineHeight: 1.7, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}