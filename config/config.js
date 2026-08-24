window.BLOGGER_MASTER_CONFIG = {
  version: "1.0.0",

  site: {
    name: "My Blog",
    description: "My Blogger site"
  },

  design: {
    primaryColor: "#2563eb",
    textColor: "#172033",
    backgroundColor: "#f5f7fb",
    cardColor: "#ffffff",
    borderColor: "#e6eaf0",
    radius: "16px",
    maxWidth: "1280px"
  },

  menu: [
    { title: "Home", url: "/" },
    { title: "Technology", url: "/search/label/Technology" },
    { title: "Tutorial", url: "/search/label/Tutorial" },
    { title: "News", url: "/search/label/News" },
    { title: "About", url: "/p/about.html" }
  ],

  sidebar: {
    enabled: true,
    widgets: [
      { type: "search", title: "Search" },
      { type: "popular", title: "Popular Posts", limit: 5 },
      { type: "labels", title: "Categories" },
      { type: "recent", title: "Recent Posts", limit: 5 },
      { type: "social", title: "Follow Us" }
    ]
  },

  footer: {
    text: "© My Blog. All rights reserved."
  }
};