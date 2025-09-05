import type { Member } from "@/data/members";

export function MemberCard({ m }: { m: Member }) {
  return (
    <div className="card flex flex-col items-center text-center gap-3">
      <div className="relative">
        <img
          src={m.avatar}
          alt={m.name}
          className="w-24 h-24 rounded-full object-cover ring-4 ring-white/10"
        />
        <span className="absolute -bottom-1 right-0 text-[10px] badge">#{m.id}</span>
      </div>
      <div>
        <h3 className="text-lg font-bold">{m.name}</h3>
        <p className="text-sm text-white/70">{m.role}</p>
      </div>
      {m.bio && <p className="text-sm text-white/80">{m.bio}</p>}
      {m.links && (
        <div className="flex flex-wrap gap-2 mt-1">
          {m.links.map((l) => (
            <a
              key={l.url}
              href={l.url}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline text-xs"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
