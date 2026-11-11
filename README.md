# Signature Salón Masculino – Sitio web React + Vite + Tailwind

## Setup rápido

```bash
npm install
cp .env.example .env   # editar .env con tu endpoint n8n y número WhatsApp
npm run dev            # desarrollo en http://localhost:5173
```

## Build (producción)

```bash
npm run build
# genera `dist/` + `public/sitemap.xml`
```

## Variables de entorno

| Variable | Uso |
|----------|-----|
| `VITE_LEAD_ENDPOINT` | Webhook n8n donde se envían los leads |
| `VITE_WHATSAPP` | Número WhatsApp del salón (solo dígitos, sin símbolos) |

## Integración n8n

Los workflows están en `docs/n8n-workflows/`.  
Revisá `docs/n8n-workflows/README.md` para importarlos y conectar credenciales.

## Deploy sugerido

| Platform | Comentario |
|----------|------------|
| **Vercel** | `vercel.json` ya incluye los rewrites SPA. Configurá las env-vars en el dashboard. |
| **Hostinger VPS** | `npm run build` → servir `dist/` con Nginx (configuración `try_files $uri /index.html`). |

## Estructura de carpetas

```
src/
 ├─ components/   ← UI reutilizable (Navbar, Footer, WhatsAppFloat, Seo, etc.)
 ├─ data/         ← contenido estático (site, services, team, blog, booking, etc.)
 ├─ hooks/        ← useBooking.js
 ├─ pages/        ← Home, ServicesPage, About, BlogIndex, BlogPost, Booking
 ├─ sections/     ← bloques modulares (Hero, Philosophy, Services, Team, Gallery, etc.)
 ├─ utils/        ← utm.js, formatDate.js
public/
 ├─ 404.html
 ├─ robots.txt
 └─ sitemap.xml   (autogenerado en build)
scripts/
 └─ generate-sitemap.mjs
docs/n8n-workflows/
 ├─ 01-captura-lead.json
 ├─ 02-reactivacion.json
 ├─ 03-dashboard-concurrencia.json
 ├─ 04-alerta-interna.json
 └─ README.md
```
