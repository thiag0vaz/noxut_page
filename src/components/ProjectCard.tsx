import type { Project } from "@/data/projects";

export function ProjectCard({ p }: { p: Project }) {
  return (
    <div className="card overflow-hidden p-0">
      <div className="relative">
        <img src={p.cover} alt={p.title} className="w-full h-48 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17]/70 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold">{p.title}</h3>
        <p className="text-white/80 mt-2">{p.description}</p>
        {p.tags && (
          <div className="mt-3 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span key={t} className="badge">{t}</span>
            ))}
          </div>
        )}
        <div className="mt-4 flex flex-wrap gap-3">
          {p.link && <a className="btn btn-primary" href={p.link} target="_blank">Ver projeto</a>}
          {p.repo && <a className="btn btn-outline" href={p.repo} target="_blank">Repositório</a>}
        </div>
      </div>
    </div>
  );
}
