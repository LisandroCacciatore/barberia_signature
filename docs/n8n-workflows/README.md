# Workflows n8n — Signature Salón

## Importar
1. En n8n, ir a **Workflows → Import from File**.
2. Seleccionar cada archivo `.json` de `docs/n8n-workflows/`.

## Conectar credenciales
| Workflow | Credencial | Servicio |
|----------|------------|----------|
| 01, 02, 03 | Google Sheets OAuth2 | Google Cloud |
| 01, 02, 04 | SMTP | Hostinger / Gmail App Password |
| 03 | Header Auth | API key de Fresha |
| 04 | Header Auth | Slack OAuth token |

## Configuración rápida
1. Reemplazar `PEGA_TU_SPREADSHEET_ID` por el ID real de tu hoja de cálculo.
2. Cambiar los emails placeholder (`salon@…`, `equipo@…`, etc.).
3. En el workflow 04, ajustar el canal Slack (`#leads-signature`).

## Activar
Los workflows están creados con `"active": false`. Enciéndelos una vez que las credenciales estén conectadas.

## Endpoints que consume el frontend
- **Leads**: `POST /webhook/lead-signature` → workflow 01
- **Alertas internas** (opcional): `POST /webhook/lead-alert` → workflow 04

