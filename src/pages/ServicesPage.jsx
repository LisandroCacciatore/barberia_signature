import Seo from '../components/Seo.jsx';
import Services from '../sections/Services.jsx';
import Team from '../sections/Team.jsx';
import ContactForm from '../sections/ContactForm.jsx';

const ContainerWrapper = ({ children }) => (
  <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">{children}</div>
);

export default function ServicesPage() {
  return (
    <>
      <Seo
        title="Servicios"
        description="Carta de tratamientos de Signature."
        path="/servicios"
      />
      <section className="w-full bg-surface-container-lowest py-16 border-b border-outline-variant">
        <ContainerWrapper>
          <div className="max-w-3xl">
            <span className="text-label-md text-primary uppercase tracking-[0.2em] font-semibold">Menú de Servicios</span>
            <h1 className="font-display text-4xl lg:text-5xl text-primary uppercase font-light tracking-wider mt-3 leading-tight">
              Protocolos, Tiempos & Arquitectura
            </h1>
          </div>
        </ContainerWrapper>
      </section>
      <Services />
      <Team />
      <ContactForm />
    </>
  );
}