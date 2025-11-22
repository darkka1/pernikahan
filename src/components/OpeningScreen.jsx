import React, { useState } from "react";
import music from "../assets/music.mp3";
import profile from "../assets/images/profile.jpg";

export default function OpeningScreen() {
  const [open, setOpen] = useState(false);

  const start = () => {
    document.getElementById("bgMusic").play();
    setOpen(true);
  };

  return (
    <>
      <audio id="bgMusic" src={music} loop />

      {!open && (
        <div className="fixed inset-0 bg-[#f4ebdd] flex items-center justify-center z-[9999] transition-all">
          <div className="text-center animate-fadeIn">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-[#c8a079] mx-auto mb-5">
              <img src={profile} alt="" className="w-full" />
            </div>

            <h2 className="text-3xl font-semibold">Satria & Novi</h2>
            <p className="mt-4">Kepada Yth,<br />Tamu & Keluarga</p>

            <button
              onClick={start}
              className="px-6 py-2 bg-[#c7a06e] mt-6 rounded-full text-white"
            >
              Buka Undangan
            </button>
          </div>
        </div>
      )}
    </>
  );
}