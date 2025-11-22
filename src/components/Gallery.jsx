import gallery from "../data/gallery";

export default function Gallery() {
  return (
    <div className="pt-24 pb-20 text-center px-6">

      <h2 className="text-3xl font-semibold">Gallery</h2>

      <div className="overflow-hidden mt-6">
        <div className="flex animate-slide">
          {gallery.map((img, i) => (
            <img key={i} src={img} className="w-60 h-80 object-cover mx-2 rounded-xl" />
          ))}
        </div>
      </div>

    </div>
  );
}