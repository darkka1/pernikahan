import { useEffect } from "react";

export default function Petals() {
  useEffect(() => {
    const interval = setInterval(() => {
      const petal = document.createElement("div");
      petal.className = "petal";
      petal.style.left = Math.random() * 100 + "vw";
      petal.style.animationDuration = (Math.random() * 4 + 3) + "s";
      document.body.appendChild(petal);

      setTimeout(() => petal.remove(), 7000);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return null;
}