import { useState } from "react";
import Section from "../components/Section";
import Card    from "../components/Card";
import { CONTACT_INFO } from "../data/portfolioData";

const inputStyle = {
  width:      "100%",
  background: "rgba(255,255,255,0.04)",
  border:     "1px solid rgba(255,255,255,0.1)",
  borderRadius: 8,
  padding:    "12px 14px",
  color:      "#fff",
  fontSize:   14,
  outline:    "none",
  fontFamily: "inherit",
  boxSizing:  "border-box",
  transition: "border-color 0.2s",
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", msg: "" });
  const [sent, setSent] = useState(false);

  const handleChange = e =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
  };

  const focusBorder  = e => { e.target.style.borderColor = "rgba(0,255,179,0.4)"; };
  const blurBorder   = e => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; };

  return (
    <Section title="Contact" subtitle="// GET IN TOUCH">
      <div style={{
        display:             "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap:                 40,
      }}>

        <div>
          <p style={{ color: "#777", lineHeight: 1.8, marginBottom: 36 }}>
            I'm currently open to new opportunities. Whether you have a project
            in mind, a question, or just want to say hi — my inbox is always open.
          </p>

          {CONTACT_INFO.map(item => (
            <div key={item.label} style={{ marginBottom: 20 }}>
              <div style={{
                fontFamily:    "'Space Mono', monospace",
                fontSize:      10,
                color:         "#00ffb3",
                letterSpacing: 3,
                marginBottom:  4,
              }}>
                {item.label}
              </div>

              {item.href ? (
                <a href={item.href} style={{ color: "#ccc", textDecoration: "none", fontSize: 14 }}>
                  {item.val}
                </a>
              ) : (
                <div style={{ color: "#ccc", fontSize: 14 }}>{item.val}</div>
              )}
            </div>
          ))}
        </div>

        <Card delay={200} glow>
          {sent ? (
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>✉️</div>
              <div style={{
                fontFamily: "'Syne', sans-serif",
                fontSize:   20,
                color:      "#00ffb3",
                fontWeight: 700,
              }}>
                Message Sent!
              </div>
              <div style={{ color: "#777", marginTop: 8 }}>
                I'll get back to you soon.
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {[
                { label: "Name",  name: "name",  type: "text"  },
                { label: "Email", name: "email", type: "email" },
              ].map(field => (
                <div key={field.name} style={{ marginBottom: 16 }}>
                  <label style={{
                    display:       "block",
                    fontFamily:    "'Space Mono', monospace",
                    fontSize:      10,
                    letterSpacing: 2,
                    color:         "#555",
                    marginBottom:  6,
                  }}>
                    {field.label.toUpperCase()}
                  </label>
                  <input
                    name={field.name}
                    type={field.type}
                    value={form[field.name]}
                    onChange={handleChange}
                    onFocus={focusBorder}
                    onBlur={blurBorder}
                    required
                    style={inputStyle}
                  />
                </div>
              ))}

              <div style={{ marginBottom: 20 }}>
                <label style={{
                  display:       "block",
                  fontFamily:    "'Space Mono', monospace",
                  fontSize:      10,
                  letterSpacing: 2,
                  color:         "#555",
                  marginBottom:  6,
                }}>
                  MESSAGE
                </label>
                <textarea
                  name="msg"
                  value={form.msg}
                  onChange={handleChange}
                  onFocus={focusBorder}
                  onBlur={blurBorder}
                  required
                  rows={5}
                  style={{ ...inputStyle, resize: "vertical" }}
                />
              </div>

              <button
                type="submit"
                onMouseEnter={e => {
                  e.currentTarget.style.opacity   = "0.9";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.opacity   = "1";
                  e.currentTarget.style.transform = "";
                }}
                style={{
                  width:         "100%",
                  padding:       "13px",
                  borderRadius:  8,
                  background:    "linear-gradient(135deg, #00ffb3, #00c9ff)",
                  color:         "#050a12",
                  fontFamily:    "'Space Mono', monospace",
                  fontWeight:    700,
                  fontSize:      12,
                  letterSpacing: 2,
                  border:        "none",
                  cursor:        "pointer",
                  transition:    "opacity 0.2s, transform 0.2s",
                }}
              >
                SEND MESSAGE
              </button>
            </form>
          )}
        </Card>
      </div>
    </Section>
  );
}