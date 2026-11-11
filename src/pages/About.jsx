import Seo from '../components/Seo.jsx';
import { site } from '../data/site.js';
import { team } from '../data/team.js';
import { faq } from '../data/faq.js';
import ContactForm from '../sections/ContactForm.jsx';
import { contact } from '../data/contact.js';

export default function About() {
  return (
    <div className="bg-background min-h-screen pt-16">
      <Seo
        title="Nosotros"
        description="Conocé a Signature Salón Masculino: quiénes somos, nuestro equipo y filosofía. Barbería premium en Rosario desde 2019."
        path="/nosotros"
      />

      {/* Hero about */}
      <section className="w-full py-20 lg:py-28 border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
          <span className="text-label-sm text-secondary uppercase tracking-[0.2em]">Nuestra historia</span>
          <h1 className="font-display text-4xl lg:text-6xl text-primary uppercase font-light tracking-wider mt-3 mb-6 max-w-2xl leading-tight">
            Nacimos para redefinir el grooming masculino en Rosario
          </h1>
          <p className="text-body-lg text-secondary max-w-xl leading-relaxed">
            Desde 2019, Signature es el espacio donde los hombres que cuidan su imagen encuentran
            lo que buscan: calidad, atención al detalle y un ambiente que te hace querer volver.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="w-full py-16 border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: 'timeline', title: 'Desde 2019', body: 'Cinco años perfeccionando cada técnica y cada experiencia en nuestro salón de Pichincha.' },
            { icon: 'groups', title: '+2.400 clientes', body: 'Una comunidad de hombres que eligen Signature como su lugar de confianza.' },
            { icon: 'workspace_premium', title: 'Premium always', body: 'Productos de primera línea internacional. American Crew, Layrite, Reuzel, Baxter of California.' },
          ].map((v, i) => (
            <div key={i} className="bg-surface-container border border-outline-variant rounded-xl p-6">
              <span className="material-symbols-outlined text-primary text-[32px] mb-4 block">{v.icon}</span>
              <h3 className="font-display text-sm text-primary font-bold uppercase mb-2">{v.title}</h3>
              <p className="text-body-sm text-secondary">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="w-full py-16 border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
          <h2 className="font-display text-3xl text-primary uppercase font-light mb-10">El equipo</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.filter((m) => !m.noAvatar).map((member) => (
              <div key={member.id} className="bg-surface-container border border-outline-variant rounded-xl p-6">
                <div className="w-20 h-20 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-secondary text-[36px]">person</span>
                </div>
                <h3 className="font-display text-sm text-primary font-bold uppercase">{member.name}</h3>
                <p className="text-label-sm text-secondary uppercase tracking-wider mt-0.5 mb-3">{member.role}</p>
                <p className="text-body-sm text-secondary mb-4">{member.bio}</p>
                <div className="flex flex-wrap gap-1.5">
                  {member.specialties.map((s) => (
                    <span key={s} className="px-2 py-0.5 bg-surface-container-high rounded text-label-sm text-secondary">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full py-16 border-b border-outline-variant">
        <div className="max-w-4xl mx-auto px-margin-mobile lg:px-margin">
          <h2 className="font-display text-3xl text-primary uppercase font-light mb-10">
            Preguntas frecuentes
          </h2>
          <div className="flex flex-col gap-4">
            {faq.map((item, i) => (
              <details key={i} className="group bg-surface-container border border-outline-variant rounded-xl">
                <summary className="flex justify-between items-center px-6 py-4 cursor-pointer list-none">
                  <span className="font-display text-sm text-primary font-semibold">{item.q}</span>
                  <span className="material-symbols-outlined text-secondary group-open:rotate-180 transition-transform text-[20px]">
                    expand_more
                  </span>
                </summary>
                <div className="px-6 pb-5">
                  <p className="text-body-sm text-secondary">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-3xl text-primary uppercase font-light mb-4">
                {contact.headline}
              </h2>
              <p className="text-body-md text-secondary mb-8">{contact.subheadline}</p>
              <div className="flex flex-col gap-5">
                {contact.channels.map((ch, i) => (
                  <a key={i} href={ch.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                    <span className="material-symbols-outlined text-primary text-[24px]">{ch.icon}</span>
                    <div>
                      <p className="text-label-sm text-secondary uppercase tracking-wider">{ch.label}</p>
                      <p className="text-body-md text-primary group-hover:text-secondary transition-colors">{ch.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}

