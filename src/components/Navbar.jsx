export default function Navbar() {
  const scrollTo = (id) => {
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 shadow">
      <ul className="flex justify-center gap-6 py-3 text-sm font-medium">
        <li><button onClick={() => scrollTo("#home")}>Home</button></li>
        <li><button onClick={() => scrollTo("#couple")}>Couple</button></li>
        <li><button onClick={() => scrollTo("#event")}>Event</button></li>
        <li><button onClick={() => scrollTo("#gallery")}>Gallery</button></li>
        <li><button onClick={() => scrollTo("#wish")}>Wish</button></li>
      </ul>
    </nav>
  );
}