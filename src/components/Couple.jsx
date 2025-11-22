import foto1 from "../assets/images/foto1.jpg";
import foto2 from "../assets/images/foto2.jpg";

export default function Couple() {
  return (
    <div className="pt-24 pb-20 px-6 text-center">
      <h2 className="text-3xl font-semibold">Mempelai</h2>

      <div className="flex flex-col md:flex-row justify-center mt-10 gap-8">

        <div className="bg-white shadow p-6 rounded-xl w-64 mx-auto">
          <img src={foto1} className="rounded-xl" />
          <h3 className="text-xl font-semibold mt-3">Satria Bimantara</h3>
          <p>Putra dari Bapak Soemartono (Alm) & Ibu Ida Sriminarti</p>
        </div>

        <div className="bg-white shadow p-6 rounded-xl w-64 mx-auto">
          <img src={foto2} className="rounded-xl" />
          <h3 className="text-xl font-semibold mt-3">Novi Ebrianti</h3>
          <p>Putri dari Bapak Warsono & Ibu Siti Aminah</p>
        </div>

      </div>
    </div>
  );
}