window.BLOGGER_MASTER_CONFIG = {
  version: "1.1.0",

  site: {
    name: "My Blog",
    description: "My Blogger site"
  },

  design: {
    primaryColor: "#111111",
    textColor: "#222222",
    backgroundColor: "#f5f5f5",
    cardColor: "#ffffff",
    borderColor: "#e5e5e5",
    radius: "8px",
    maxWidth: "1280px"
  },

  /*
   * MENU TIDAK DIGUNAKAN OLEH MASTER THEME.
   * Menu lama Blogger tetap dipakai.
   */
  menu: [],

  /*
   * =====================================================
   * SIDEBAR GLOBAL
   * =====================================================
   *
   * Urutan widget di bawah ini = urutan tampil di sidebar.
   */

  sidebar: {
    enabled: true,

    widgets: [

      {
        type: "search",
        title: "SEARCH"
      },

      {
        type: "html",
        title: "PROMO",
        content: `
          <div style="text-align:center;">
            <a href="#" target="_blank">
              <img
                src="https://via.placeholder.com/300x250"
                style="width:100%;height:auto;border-radius:8px;"
              />
            </a>
          </div>
        `
      },

      {
        type: "html",
        title: "INFORMASI",
        content: `
          <ul>
            <li><a href="/p/about.html">About Us</a></li>
            <li><a href="/p/contact.html">Contact</a></li>
            <li><a href="/p/privacy-policy.html">Privacy Policy</a></li>
          </ul>
        `
      },

      {
        type: "recent",
        title: "RECENT POSTS",
        limit: 5
      }

    ]
  },

  footer: {
    text: "© My Blog. All rights reserved."
  }
};
