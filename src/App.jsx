import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import Home from './pages/Home.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import About from './pages/About.jsx';
import BlogIndex from './pages/BlogIndex.jsx';
import BlogPost from './pages/BlogPost.jsx';
import Booking from './pages/Booking.jsx';

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="text-center">
        <span className="text-label-md text-primary uppercase tracking-[0.3em]">404</span>
        <h1 className="font-display text-4xl text-primary uppercase font-light mt-4 mb-4">
          Página no encontrada
        </h1>
        <a
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 btn-chrome font-label-lg uppercase tracking-wider rounded-lg"
        >
          Volver al inicio
        </a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/reserva" element={<Booking />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
