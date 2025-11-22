import { useEffect, useState } from "react";

export default function Event() {
  const [time, setTime] = useState({ d:0, h:0, m:0, s:0 });

  useEffect(() => {
    const target = new Date("2024-12-25T11:00:00").getTime();
    setInterval(() => {
      const now = Date.now();
      const diff = target - now;

      setTime({
        d: Math.floor(diff / (1000*60*60*24)),
        h: Math.floor(diff / (1000*60*60)%24),
        m: Math.floor(diff / (1000*60)%60),
        s: Math.floor((diff/1000)%60)
      });
    }, 1000);
  }, []);

  return (
    <div className="pt-24 pb-20 text-center px-6">
      <h2 className="text-3xl font-semibold">Ngunduh Mantu</h2>

      <p className="mt-4 leading-relaxed">
        Rabu, 25 Desember 2024<br />
        11.00 WIB - 13.00 WIB<br />
        Ocean Garden Resto Stasiun<br />
        Jl. Trunojoyo No.3, Kota Malang
      </p>

      <a href="https://maps.app.goo.gl/" target="_blank"
        className="inline-block mt-4 px-6 py-2 bg-[#c7a06e] text-white rounded-full">
        Buka Maps
      </a>

      <div className="flex justify-center gap-3 mt-6">
        {["Hari","Jam","Menit","Detik"].map((t,i)=>(
          <div key={i} className="bg-white shadow px-4 py-2 rounded-xl">
            <div className="text-2xl font-bold">
              {[time.d, time.h, time.m, time.s][i]}
            </div>
            <p>{t}</p>
          </div>
        ))}
      </div>

      <blockquote className="italic mt-6">
        “Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan…”
        <br />— Ar-Rum 21 —
      </blockquote>
    </div>
  );
}