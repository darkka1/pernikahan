import React from "react";
import OpeningScreen from "./components/OpeningScreen";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Couple from "./components/Couple";
import Event from "./components/Event";
import Gallery from "./components/Gallery";
import Wishes from "./components/Wishes";
import Petals from "./components/Petals";

export default function App() {
  return (
    <div className="font-sans bg-[#fbf7f2] text-[#443322]">
      <Petals />
      <OpeningScreen />
      <Navbar />

      <section id="home"><Home /></section>
      <section id="couple"><Couple /></section>
      <section id="event"><Event /></section>
      <section id="gallery"><Gallery /></section>
      <section id="wish"><Wishes /></section>
    </div>
  );
}