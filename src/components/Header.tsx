export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#0B0F17]/70 backdrop-blur border-b border-white/10">
      <div className="container-page h-16 flex items-center justify-between">
        <a href="#" className="text-white font-extrabold tracking-tight text-lg">
          <span className="bg-gradient-to-r from-indigo-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent">Noxut</span> • Portfólio
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#members" className="text-white/80 hover:text-white transition">Equipe</a>
          <a href="#projects" className="text-white/80 hover:text-white transition">Projetos</a>
          <a href="#contact" className="text-white/80 hover:text-white transition">Contato</a>
        </nav>
      </div>
    </header>
  );
}
