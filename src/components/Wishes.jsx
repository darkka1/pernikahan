import { useState, useEffect } from "react";

export default function Wishes() {
  const [wishes, setWishes] = useState([]);
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [page, setPage] = useState(0);
  const perPage = 4;

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("wishes")) || [];
    setWishes(saved);
  }, []);

  const sendWish = (e) => {
    e.preventDefault();
    const newWish = { name, msg };
    const updated = [newWish, ...wishes];
    setWishes(updated);
    localStorage.setItem("wishes", JSON.stringify(updated));
    setName("");
    setMsg("");
  };

  return (
    <div className="pt-24 pb-20 px-6 text-center">
      <h2 className="text-3xl font-semibold">Ucapan & Doa</h2>

      <form onSubmit={sendWish} className="mt-6 space-y-3">
        <input value={name} onChange={e=>setName(e.target.value)}
          placeholder="Nama" className="w-full px-4 py-2 rounded-lg border" />
        <textarea value={msg} onChange={e=>setMsg(e.target.value)}
          placeholder="Ucapan" className="w-full px-4 py-2 rounded-lg border" />
        <button className="px-6 py-2 bg-[#c7a06e] text-white rounded-full">
          Kirim
        </button>
      </form>

      <div className="mt-6">
        {wishes.slice(page*perPage, page*perPage + perPage).map((w,i)=>(
          <div key={i} className="bg-white shadow p-4 rounded-xl mt-3">
            <strong>{w.name}</strong>
            <p>{w.msg}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-3 mt-4">
        <button onClick={()=>page>0 && setPage(page-1)}
          className="px-4 py-2 border rounded-lg">Prev</button>
        <button onClick={()=>(page+1)*perPage<wishes.length && setPage(page+1)}
          className="px-4 py-2 border rounded-lg">Next</button>
      </div>

    </div>
  );
}