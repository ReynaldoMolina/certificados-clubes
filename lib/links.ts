export const legalLinks = [
  {
    label: "Política de Privacidad",
    url: "/politica-privacidad",
    items: [],
  },
  {
    label: "Aviso legal",
    url: "/aviso-legal",
    items: [],
  },
  {
    label: "Política de Cookies",
    url: "/politica-cookies",
    items: [],
  },
  {
    label: "Sobre mí",
    url: "/sobre-mi",
    items: [],
  },
];

export const siteMapLinks = [
  {
    label: "Inicio",
    url: "/",
    items: [],
  },
  {
    label: "Mis certificados",
    url: "/#mis-certificados",
    items: [],
  },
  {
    label: "Diseños",
    url: "/#diseños",
    items: [],
  },
  {
    label: "Información",
    url: "/#info",
    items: [],
  },
];

export const navigationLinks = [
  ...siteMapLinks,
  {
    label: "Legal",
    url: "#",
    items: legalLinks,
  },
];

export const sideMenuLinks = [...siteMapLinks, ...legalLinks];
