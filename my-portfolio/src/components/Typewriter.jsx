import { useState, useEffect } from "react";

export default function Typewriter({ texts }) {
  const [display,  setDisplay]  = useState("");
  const [idx,      setIdx]      = useState(0);
  const [charIdx,  setCharIdx]  = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const cur = texts[idx];
    let timeout;

    if (!deleting && charIdx < cur.length) {
      timeout = setTimeout(() => setCharIdx(c => c + 1), 70);
    } else if (!deleting && charIdx === cur.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx(c => c - 1), 40);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setIdx(i => (i + 1) % texts.length);
    }

    setDisplay(cur.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, idx, texts]);

  return (
    <span style={{ color: "#00ffb3" }}>
      {display}
      <span style={{ animation: "blink 1s step-end infinite" }}>|</span>
    </span>
  );
}