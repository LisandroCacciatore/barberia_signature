import { useParams, Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import { blogPosts } from '../data/blog.js';
import { formatDate } from '../utils/formatDate.js';

// Minimal post content map (expandable)
const postContent = {
  'como-cuidar-tu-barba-en-invierno': `
El invierno es el peor enemigo de la barba bien cuidada. Las bajas temperaturas resecan la piel debajo del vello facial, generando picazón, caspa y barba quebradiza.

**Los 5 pasos para mantener tu barba impecable en invierno:**

1. **Lavá con jabón específico** — Los jabones comunes rompen los aceites naturales de la barba. Usá un jabón o shampoo especial para barba, máximo 3 veces por semana.

2. **Acondicioná siempre** — Después del lavado, aplicá un acondicionador o bálsamo de barba. Dejalo actuar 2 minutos y enjuagá con agua tibia.

3. **Aceite de barba diario** — Es el paso más importante. 3-4 gotas distribuidas en la palma y aplicadas en la barba y piel subyacente hidratan y dan brillo.

4. **Peine o cepillo con cerdas naturales** — Peinate la barba diariamente. Distribuye los aceites naturales y mantiene la forma.

5. **Recorte regular** — En invierno las puntas se secan más rápido. Vení cada 2-3 semanas para un mantenimiento que preserve la forma.

**Productos que recomendamos:** Aceite de barba Layrite, Bálsamo de barba American Crew, Jabón Reuzel.
  `,
  'guia-de-estilos-para-tu-tipo-de-cara': `
La clave para un corte que realmente te quede bien empieza por identificar la forma de tu cara. Te explicamos los 4 tipos más comunes y qué cortes funcionan mejor para cada uno.

**Cara ovalada**
La más versátil. Casi cualquier corte funciona. Podés ir desde un fade clásico hasta un undercut o pompadour sin problema.

**Cara cuadrada**
Mandíbula marcada y frente ancha. Los mejores cortes son los que agregan volumen en la parte superior y mantienen los laterales cortos: fade con textura en la cima, undercut con volumen.

**Cara redonda**
El objetivo es alargar visualmente. Evitá los cortes muy cortos en todo el cabello. Optá por cortes con más longitud arriba, fade bien bajo o medio, con textura vertical.

**Cara rectangular o alargada**
Querés agregar anchura. Los cortes más cortos arriba y con algo de volumen en los costados funcionan mejor. Evitá el pompadour muy alto.

**El consejo de Matías (Director de Signature):** "Más importante que la forma de la cara es tu estilo de vida. Un corte que no podés mantener es un mal corte, sin importar cuánto te quede."
  `,
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="bg-background min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center px-6">
          <span className="text-label-md text-secondary uppercase tracking-wider">Artículo no encontrado</span>
          <h1 className="font-display text-3xl text-primary uppercase font-light mt-4 mb-4">
            Este artículo no existe
          </h1>
          <Link to="/blog" className="inline-flex items-center gap-2 px-6 py-3 btn-chrome font-label-lg uppercase tracking-wider rounded-lg">
            Volver al blog
          </Link>
        </div>
      </div>
    );
  }

  const content = postContent[slug] || post.excerpt + '\n\nContenido completo próximamente.';
  const related = blogPosts.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 2);

  return (
    <div className="bg-background min-h-screen pt-16">
      <Seo
        title={post.title}
        description={post.excerpt}
        path={`/blog/${slug}`}
      />

      {/* Header */}
      <section className="w-full py-12 border-b border-outline-variant">
        <div className="max-w-3xl mx-auto px-margin-mobile lg:px-margin">
          <div className="flex items-center gap-2 mb-4">
            <Link to="/blog" className="text-label-sm text-secondary hover:text-primary uppercase tracking-wider transition-colors">
              ← Blog
            </Link>
            <span className="text-secondary/40">/</span>
            <span className="text-label-sm text-secondary uppercase tracking-wider">{post.category}</span>
          </div>
          <h1 className="font-display text-3xl lg:text-4xl text-primary uppercase font-light leading-tight mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-label-sm text-secondary">
            <span>{formatDate(post.date)}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Cover placeholder */}
      <div className="max-w-3xl mx-auto px-margin-mobile lg:px-margin">
        <div className="h-56 bg-surface-container border border-outline-variant rounded-xl my-8 flex items-center justify-center">
          <span className="material-symbols-outlined text-secondary text-[48px] opacity-30">article</span>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-margin-mobile lg:px-margin pb-16">
        <div className="prose-custom">
          {content.split('\n\n').map((para, i) => {
            if (para.startsWith('**') && para.endsWith('**')) {
              return <h2 key={i} className="font-display text-lg text-primary font-bold uppercase mt-8 mb-3">{para.replace(/\*\*/g, '')}</h2>;
            }
            if (para.includes('**')) {
              const parts = para.split(/(\*\*[^*]+\*\*)/).map((part, j) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                  return <strong key={j} className="text-primary font-semibold">{part.replace(/\*\*/g, '')}</strong>;
                }
                return <span key={j}>{part}</span>;
              });
              return <p key={i} className="text-body-md text-secondary mb-4 leading-relaxed">{parts}</p>;
            }
            if (para.match(/^\d+\./)) {
              return <p key={i} className="text-body-md text-secondary mb-3 pl-4 border-l border-outline-variant leading-relaxed">{para}</p>;
            }
            return <p key={i} className="text-body-md text-secondary mb-4 leading-relaxed">{para}</p>;
          })}
        </div>

        {/* CTA */}
        <div className="mt-10 p-6 bg-surface-container border border-outline-variant rounded-xl">
          <p className="font-display text-sm text-primary uppercase font-bold mb-2">
            ¿Querés que te asesoremos en persona?
          </p>
          <p className="text-body-sm text-secondary mb-4">
            Vení a Signature y te recomendamos el mejor servicio para tu tipo de cabello y estilo.
          </p>
          <Link to="/reserva" className="inline-flex items-center gap-2 px-6 py-3 btn-chrome font-label-lg uppercase tracking-wider rounded-lg">
            Reservar turno
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
        </div>

        {/* Related posts */}
        {related.length > 0 && (
          <div className="mt-12">
            <h2 className="font-display text-lg text-primary uppercase font-light mb-6">
              También puede interesarte
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  className="bg-surface-container border border-outline-variant rounded-xl p-5 hover:border-primary transition-all"
                >
                  <span className="text-label-sm text-secondary uppercase tracking-wider">{p.category}</span>
                  <h3 className="font-display text-sm text-primary font-bold mt-1 mb-2">{p.title}</h3>
                  <p className="text-body-sm text-secondary line-clamp-2">{p.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}

