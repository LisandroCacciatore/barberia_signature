import Seo from '../components/Seo.jsx';
import SchemaOrg from '../components/SchemaOrg.jsx';
import Hero from '../sections/Hero.jsx';
import Philosophy from '../sections/Philosophy.jsx';
import Services from '../sections/Services.jsx';
import Team from '../sections/Team.jsx';
import Gallery from '../sections/Gallery.jsx';
import Testimonials from '../sections/Testimonials.jsx';
import BlogPreview from '../sections/BlogPreview.jsx';
import Location from '../sections/Location.jsx';

export default function Home() {
  return (
    <>
      <Seo
        title={null}
        description="Barbería premium en Rosario. Cortes, barba, rituales faciales y experiencias exclusivas. Reservá tu turno online."
        path="/"
      />
      <SchemaOrg />
      <Hero />
      <Philosophy />
      <Services limit={4} />
      <Team />
      <Gallery />
      <Testimonials />
      <BlogPreview />
      <Location />
    </>
  );
}

