// Inline SVG icons (lucide-react version doesn't export Linkedin/Twitter)
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
  </svg>
);
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  </svg>
);

export default function TeamCard({ member }) {
  const { name, role, bio, initials, color = 'bg-green-700', linkedin, twitter } = member;

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow text-center group">
      {/* Avatar */}
      <div className={`w-20 h-20 rounded-2xl ${color} flex items-center justify-center text-white font-display font-bold text-2xl mx-auto mb-4 group-hover:scale-105 transition-transform`}>
        {initials}
      </div>
      <h3 className="font-semibold text-slate-800 text-lg">{name}</h3>
      <div className="text-green-600 text-xs font-semibold tracking-wider uppercase mt-0.5 mb-3">{role}</div>
      {bio && <p className="text-slate-500 text-sm leading-relaxed mb-4">{bio}</p>}

      {/* Socials */}
      {(linkedin || twitter) && (
        <div className="flex justify-center gap-2">
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-blue-100 hover:text-blue-700 flex items-center justify-center text-slate-500 transition-colors">
              <LinkedinIcon />
            </a>
          )}
          {twitter && (
            <a href={twitter} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-sky-100 hover:text-sky-600 flex items-center justify-center text-slate-500 transition-colors">
              <TwitterIcon />
            </a>
          )}
        </div>
      )}
    </div>
  );
}
