import { useState } from "react";

import ParticleCanvas from "./components/ParticleCanvas";
import Nav            from "./components/Nav";
import Footer         from "./components/Footer";

import Home         from "./sections/Home";
import Skills       from "./sections/Skills";
import Achievements from "./sections/Achievements";
import Projects     from "./sections/Projects";
import Contact      from "./sections/Contact";

export default function App() {
  const [active,    setActive]    = useState("home");
  const [animating, setAnimating] = useState(false);

  const navigate = (section) => {
    if (section === active) return;
    setAnimating(true);
    setTimeout(() => {
      setActive(section);
      setAnimating(false);
      window.scrollTo(0, 0);
    }, 300);
  };

  return (
    <>
      <ParticleCanvas />

      <Nav active={active} setActive={navigate} />

      <main
        style={{
          position:   "relative",
          zIndex:     1,
          opacity:    animating ? 0 : 1,
          transform:  animating ? "translateY(20px)" : "none",
          transition: "opacity 0.3s ease, transform 0.3s ease",
        }}
      >
        {active === "home"         && <Home setActive={navigate} />}
        {active === "skills"       && <Skills />}
        {active === "achievements" && <Achievements />}
        {active === "projects"     && <Projects />}
        {active === "contact"      && <Contact />}
      </main>

      <Footer />
    </>
  );
}