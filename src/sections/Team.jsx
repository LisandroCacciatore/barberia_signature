import { team } from '../data/team.js'; // ✅ Import normal

export default function Team() {
  return (
    <section className="w-full bg-surface-container-lowest py-16 border-b border-outline-variant">
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
        <div className="flex flex-col items-center text-center max-w-xl mx-auto mb-12">
          <span className="text-label-md text-primary uppercase tracking-[0.2em] mb-2 font-semibold">Maestros & Profesionales</span>
          <h2 className="font-display text-2xl lg:text-3xl text-primary uppercase font-bold">Equipo de Especialistas</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* ✅ Fallback acá, en el map */}
          {(team || []).map((member) => (
            <div key={member.name} className="flex flex-col rounded-xl overflow-hidden bg-surface-container border border-outline-variant">
              <div className="aspect-[4/5] bg-background overflow-hidden relative">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-background/85 backdrop-blur-sm border border-outline-variant text-label-sm text-primary uppercase tracking-wider">{member.tag}</div>
              </div>
              <div className="p-4">
                <h3 className="font-display text-base text-primary font-bold">{member.name}</h3>
                <span className="text-label-sm text-primary uppercase font-semibold block mt-1">{member.role}</span>
                <p className="text-body-sm text-secondary mt-2 leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}