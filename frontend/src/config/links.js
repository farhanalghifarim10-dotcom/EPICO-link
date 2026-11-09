 /**
 * =========================================================================
 * EPICO OFFICIAL LINKS CONFIGURATION
 * =========================================================================
 * Update your official social media URLs, WhatsApp contact, and brand links here.
 * The ActionButtons component dynamically renders all active links in order.
 * 
 * Rules:
 * - Keep URLs absolute (starting with https:// or mailto:).
 * - id: Unique identifier for React keys and analytics.
 * - title: Uppercase display title shown on the button.
 * - subtitle: High-contrast athletic secondary label (optional).
 * - icon: Icon identifier ('tiktok', 'instagram', 'whatsapp', 'mail').
 * - url: The external link or action.
 * - isExternal: true opens link in a new secure tab.
 */

export const brandMeta = {
  name: "EPICO",
  slogan: "MAKE IT EPIC",
  legalEntity: "EPICO Sport Official",
  officialEmail: "epicosportofficial@gmail.com",
  origin: "BANDUNG / EST. 2026",
  discipline: "ATHLETIC APPAREL",
};

export const actionLinks = [
  {
    id: "tiktok",
    title: "TIKTOK EPICO",
    subtitle: "OFFICIAL CONTENT & DROPS",
    icon: "tiktok",
    url: "https://www.tiktok.com/@epico.official?_r=1",
    isExternal: true,
  },
  {
    id: "instagram",
    title: "INSTAGRAM EPICO",
    subtitle: "EDITORIAL & COMMUNITY",
    icon: "instagram",
    url: "https://www.instagram.com/epicosportofficial?obrf=bGNsNjZmZ2lzOWl5",
    isExternal: true,
  },
  {
    id: "whatsapp",
    title: "WHATSAPP EPICO",
    subtitle: "DIRECT VIP CONCIERGE & ORDERS",
    icon: "whatsapp",
    url: "https://wa.me/6282262121094",
    isExternal: true,
  },
  {
    id: "email",
    title: "EMAIL OFFICIAL EPICO",
    subtitle: "COMMERCIAL & PARTNERSHIPS",
    icon: "mail",
    url: "mailto:epicosportofficial@gmail.com",
    isExternal: false,
  },
];

