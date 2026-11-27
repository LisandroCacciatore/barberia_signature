import Seo from '../components/Seo.jsx';
import { team } from '../data/team.js';
import { philosophy } from '../data/philosophy.js';
import ContactForm from '../sections/ContactForm.jsx';

const ContainerWrapper = ({ children }) => (
  <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">{children}</div>
);

export default function About() {
  return (
    <>
      <Seo
        title="Equipo"
        description="Conocé al equipo de Signature Salon Masculino."
        path="/nosotros"
      />

      <section className="w-full bg-background py-16 border-b border-outline-variant">
        <ContainerWrapper>
          <div className="max-w-3xl">
            <span className="text-label-md text-primary uppercase tracking-[0.2em] font-semibold">Sobre Nosotros</span>
            <h1 className="font-display text-4xl lg:text-5xl text-primary uppercase font-light tracking-wider mt-3 leading-tight">
              El Arte de la Precisión
            </h1>
            <p className="text-body-lg text-secondary mt-4">
              SIGNATURE nació para fracturar el paradigma del salón multitudinario. Concebimos un santuario reservado donde el visagismo y la dermocosmética conviven en absoluta calma.
            </p>
          </div>
        </ContainerWrapper>
      </section>

      <section className="w-full bg-surface-container-lowest py-16 border-b border-outline-variant">
        <ContainerWrapper>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-6">
              <div className="rounded-xl overflow-hidden border border-outline-variant shadow-xl">
                <img
                  src={philosophy?.images?.[0]?.url}
                  alt="Interior"
                  className="w-full h-[420px] object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-6">
              <h2 className="font-display text-2xl lg:text-3xl text-primary uppercase font-bold mb-4">El Origen del Espacio</h2>
              <p className="text-body-md text-secondary leading-relaxed mb-4">
                Inaugurado en el corazón de Pichincha, el Atelier de SIGNATURE reformuló el ritual masculino tradicional. Descartamos la parafernalia ruidosa para erigir una estación de diseño personalizado.
              </p>
            </div>
          </div>
        </ContainerWrapper>
      </section>

      <section className="w-full bg-background py-16">
        <ContainerWrapper>
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl lg:text-3xl text-primary uppercase font-bold mt-2">Los Artesanos del Detalle</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* ✅ map protegido con ?. */}
            {team?.map((member) => (
              <div key={member.name} className="rounded-xl overflow-hidden bg-surface-container border border-outline-variant">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top" />
                </div>
                <div className="p-5 text-center">
                  <span className="text-label-sm text-primary uppercase tracking-wider">{member.tag}</span>
                  <h3 className="font-display text-lg text-primary font-bold mt-1">{member.name}</h3>
                  <p className="text-body-sm text-secondary mt-2 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </ContainerWrapper>
      </section>

      <ContactForm />
    </>
  );
}