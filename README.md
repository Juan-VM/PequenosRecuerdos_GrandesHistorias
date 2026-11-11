# PequenosRecuerdos_GrandesHistorias

Plataforma web para la gestión y personalización de figuras artesanales que incorporan códigos QR únicos para compartir fotografías, mensajes y recuerdos especiales.

## Demo

El sitio es una demo estática (HTML + Tailwind CSS vía CDN). Los módulos están en
`InterfacesModulos/`:

| Módulo | URL en producción |
| --- | --- |
| Inicio | `/` o `/Inicio/code.html` |
| Catálogo | `/Catalogo/code.html` |
| Personalizar figura | `/PersonalizarFigura/code.html` |
| Visualizar dedicatoria | `/VisualizarDedicatoria/code.html` |
| Panel de administración | `/PanelAdministracion/code.html` |

La barra flotante inferior permite navegar entre todos los módulos.

## Desplegar en Vercel

El archivo `vercel.json` ya contiene las reglas para que la raíz abra la página de
Inicio y para que las URLs no muestren la carpeta `InterfacesModulos`.

1. Sube el proyecto a GitHub/GitLab/Bitbucket.
2. En [vercel.com/new](https://vercel.com/new), importa el repositorio.
3. Configuración del proyecto:
   - **Framework Preset:** `Other`
   - **Build Command:** vacío
   - **Output Directory:** vacío (raíz del repositorio)
   - **Environment Variables:** ninguna
4. Pulsa **Deploy**.

También puedes desplegar desde la terminal:

```bash
npx vercel        # preview
npx vercel --prod # producción
```

No se necesita compilación ni backend: Vercel sirve los archivos estáticos
directamente y aplica las reglas de `vercel.json`.
