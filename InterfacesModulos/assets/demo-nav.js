/* ==========================================================================
   Pequeños Recuerdos, Grandes Historias — Navegación de demostración
   Barra flotante compartida por todos los módulos de la demo.
   ========================================================================== */
(function () {
  "use strict";

  var PAGES = [
    { id: "inicio", label: "Inicio", icon: "home", href: "../Inicio/code.html" },
    { id: "catalogo", label: "Catálogo", icon: "storefront", href: "../Catalogo/code.html" },
    { id: "personalizar", label: "Personalizar", icon: "palette", href: "../PersonalizarFigura/code.html" },
    { id: "dedicatoria", label: "Dedicatoria", icon: "qr_code_2", href: "../VisualizarDedicatoria/code.html" },
    { id: "admin", label: "Admin", icon: "dashboard", href: "../PanelAdministracion/code.html" }
  ];

  var path = decodeURIComponent(window.location.pathname).replace(/\\/g, "/").toLowerCase();
  var current = "inicio";

  if (path.indexOf("/catalogo/") !== -1) current = "catalogo";
  else if (path.indexOf("/personalizarfigura/") !== -1) current = "personalizar";
  else if (path.indexOf("/visualizardedicatoria/") !== -1) current = "dedicatoria";
  else if (path.indexOf("/paneladministracion/") !== -1) current = "admin";

  var style = document.createElement("style");
  style.textContent = [
    ".demo-dock{position:fixed;left:50%;bottom:1rem;transform:translateX(-50%);z-index:90;display:flex;align-items:center;gap:.25rem;padding:.4rem .5rem;border-radius:9999px;background:rgba(255,249,239,.94);border:1px solid rgba(85,99,64,.2);box-shadow:0 16px 40px -8px rgba(68,60,52,.24);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);font-family:'Nunito Sans',sans-serif;max-width:calc(100vw - 1.5rem);}",
    ".demo-dock__badge{display:inline-flex;align-items:center;gap:.3rem;padding:.45rem .75rem;border-radius:9999px;background:#f3ede4;color:#7e5630;font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;white-space:nowrap;}",
    ".demo-dock__badge .material-symbols-outlined{font-size:15px;}",
    ".demo-dock__item{display:inline-flex;align-items:center;gap:.4rem;padding:.5rem .8rem;border-radius:9999px;color:#45483f;text-decoration:none;font-size:12px;font-weight:700;white-space:nowrap;transition:background-color .2s ease,color .2s ease,transform .2s ease;}",
    ".demo-dock__item .material-symbols-outlined{font-size:19px;}",
    ".demo-dock__item:hover{background:#f3ede4;color:#556340;transform:translateY(-1px);}",
    ".demo-dock__item.is-active{background:#556340;color:#fff9ef;box-shadow:0 6px 16px -4px rgba(85,99,64,.45);}",
    ".demo-dock__item.is-active:hover{background:#556340;color:#fff9ef;}",
    "@media (max-width:760px){.demo-dock{bottom:.65rem;gap:.1rem;padding:.35rem;}.demo-dock__badge{display:none;}.demo-dock__item{padding:.55rem .65rem;}.demo-dock__item .demo-dock__label{display:none;}}",
    "@media (min-width:761px){body.demo-dock-page{padding-bottom:5.5rem;}}"
  ].join("");
  document.head.appendChild(style);

  var nav = document.createElement("nav");
  nav.className = "demo-dock";
  nav.setAttribute("aria-label", "Navegación de demostración del proyecto");

  var badge = document.createElement("span");
  badge.className = "demo-dock__badge";
  badge.innerHTML = '<span class="material-symbols-outlined" aria-hidden="true">auto_awesome</span> Demo';
  nav.appendChild(badge);

  PAGES.forEach(function (page) {
    var link = document.createElement("a");
    link.className = "demo-dock__item" + (page.id === current ? " is-active" : "");
    link.href = page.href;
    link.title = page.label;
    if (page.id === current) link.setAttribute("aria-current", "page");
    link.innerHTML =
      '<span class="material-symbols-outlined" aria-hidden="true">' + page.icon + "</span>" +
      '<span class="demo-dock__label">' + page.label + "</span>";
    nav.appendChild(link);
  });

  document.body.appendChild(nav);

  if (!document.body.classList.contains("demo-no-dock-pad")) {
    document.body.classList.add("demo-dock-page");
  }
})();
