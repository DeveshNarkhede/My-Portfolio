import Section  from "../components/Section";
import Card     from "../components/Card";
import SkillBar from "../components/SkillBar";
import { SKILLS, TECH_TAGS } from "../data/portfolioData";

export default function Skills() {
  return (
    <Section title="Skills" subtitle="// TECH STACK">

      {/* Skill Tag */}
      <div style={{
        display:             "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap:                 24,
      }}>
        {SKILLS.map((category, ci) => (
          <Card key={category.cat} delay={ci * 150} glow={ci === 0}>
            <div style={{
              fontFamily:    "'Space Mono', monospace",
              fontSize:      11,
              color:         "#00ffb3",
              letterSpacing: 3,
              marginBottom:  20,
            }}>
              {category.cat.toUpperCase()}
            </div>

            {category.items.map((skill, si) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                delay={ci * 150 + si * 100}
              />
            ))}
          </Card>
        ))}
      </div>

      {/* Tech tag */}
      <div style={{ marginTop: 32, display: "flex", flexWrap: "wrap", gap: 10 }}>
        {TECH_TAGS.map((tag, i) => (
          <span
            key={tag}
            style={{
              padding:       "6px 16px",
              borderRadius:  100,
              fontFamily:    "'Space Mono', monospace",
              fontSize:      11,
              letterSpacing: 1.5,
              border:        "1px solid rgba(0,255,179,0.25)",
              color:         "#00ffb3",
              background:    "rgba(0,255,179,0.05)",
              animation:     `fadeIn 0.5s ease ${i * 60}ms both`,
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </Section>
  );
}