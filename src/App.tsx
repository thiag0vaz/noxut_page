import { Header } from "@/components/Header";
import { MEMBERS } from "@/data/members";
import { PROJECTS } from "@/data/projects";
import { MemberCard } from "@/components/MemberCard";
import { ProjectCard } from "@/components/ProjectCard";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0F17] text-white">
      {/* BG decor */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute -top-40 -left-40 w-[35rem] h-[35rem] rounded-full blur-3xl opacity-30 bg-gradient-to-br from-indigo-600 via-sky-500 to-cyan-400" />
        <div className="absolute -bottom-40 -right-40 w-[35rem] h-[35rem] rounded-full blur-3xl opacity-20 bg-gradient-to-tr from-fuchsia-600 via-purple-600 to-indigo-500" />
      </div>

      <Header />

      <main className="container-page">
        {/* Hero */}
        <section className="pt-16 pb-12 text-center">
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight">
            Showroom{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent">
              Noxut
            </span>
          </h1>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#projects" className="btn btn-primary">Ver Projetos</a>
            <a href="#members" className="btn btn-outline">Conheça a Equipe</a>
          </div>
        </section>

        {/* Equipe */}
        <section id="members" className="py-10">
          <div className="flex items-end justify-between mb-6">
            <div>
              <h2 className="section-title">Equipe</h2>
              <p className="section-subtitle">Edite em <code className="text-sky-300">src/data/members.ts</code></p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {MEMBERS.map((m) => <MemberCard key={m.id} m={m} />)}
          </div>
        </section>

        {/* Projetos */}
        <section id="projects" className="py-10">
          <div className="flex items-end justify-between mb-6">
            <div>
              <h2 className="section-title">Projetos</h2>
              <p className="section-subtitle">Edite em <code className="text-sky-300">src/data/projects.ts</code></p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {PROJECTS.map((p) => <ProjectCard key={p.id} p={p} />)}
          </div>
        </section>

        {/* Contato */}
        <section id="contact" className="py-12">
          <div className="card">
            <h2 className="section-title">Contato</h2>
            <p className="section-subtitle">Coloque seus canais aqui:</p>
            <ul className="grid sm:grid-cols-3 gap-3 text-white/90">
              <li className="glass rounded-xl p-4">E-mail: contato@noxut.dev</li>
              <li className="glass rounded-xl p-4">Instagram: @noxut.dev</li>
              <li className="glass rounded-xl p-4">GitHub: github.com/noxut</li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8 mt-6">
        <div className="container-page text-center text-sm text-white/60">
          © {new Date().getFullYear()} Noxut. Feito com React & Tailwind.
        </div>
      </footer>
    </div>
  );
}
