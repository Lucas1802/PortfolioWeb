function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-transparent border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Esquerda - Avatar + nome */}
        <div className="flex items-center gap-3">
          <img
            src="/eu.jpg"
            alt="Lucas Gabriel"
            className="w-10 h-10 rounded-full border border-purple-500"
          />
          <span className="text-white font-semibold text-lg">Gabriel</span>
        </div>
    
        <a
          href="#about"
          className="px-5 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm font-medium hover:scale-105 transition"
        >
          Sobre mim
        </a>
      </div>
      <div className="absolute bottom-0 left-0 w-full flex justify-center">
        <div className="h-[2px] w-2/3 bg-gradient-to-r from-transparent via-purple-500 to-transparent blur-sm opacity-70" />
      </div>
    </header>
  );
}

export default Navbar;
