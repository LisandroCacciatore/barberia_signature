import { team } from '../data/team.js';

export default function Team() {
  const featured = team.filter((m) => !m.noAvatar);
  return (
    <section className="w-full py-20 lg:py-28 border-b border-outline-variant">
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
        <div className="mb-12">
          <span className="text-label-sm text-secondary uppercase tracking-[0.2em]">
            Quiénes somos
          </span>
          <h2 className="font-display text-3xl lg:text-4xl text-primary uppercase font-light mt-2">
            El equipo
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((member) => (
            <div
              key={member.id}
              className="bg-surface-container border border-outline-variant rounded-xl p-6 hover:border-primary transition-colors"
            >
              {/* Avatar placeholder */}
              <div className="w-16 h-16 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-secondary text-[28px]">person</span>
              </div>
              <h3 className="font-display text-sm text-primary font-bold uppercase">{member.name}</h3>
              <p className="text-label-sm text-secondary uppercase tracking-wider mt-0.5 mb-3">
                {member.role}
              </p>
              <p className="text-body-sm text-secondary mb-4 line-clamp-3">{member.bio}</p>
              <div className="flex flex-wrap gap-1.5">
                {member.specialties.map((s) => (
                  <span
                    key={s}
                    className="px-2 py-0.5 bg-surface-container-high rounded text-label-sm text-secondary"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-3 pt-3 border-t border-outline-variant flex items-center justify-between">
                <span className="text-label-sm text-primary">{member.rating}</span>
                <span className="text-label-sm text-secondary">{member.reviews} reseñas</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

