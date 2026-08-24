(function () {
  "use strict";

  const C = window.BLOGGER_MASTER_CONFIG;

  if (!C) {
    console.warn("BLOGGER_MASTER_CONFIG belum dimuat.");
    return;
  }

  function applyDesign() {
    const d = C.design || {};
    const root = document.documentElement;

    const vars = {
      "--bm-primary": d.primaryColor,
      "--bm-text": d.textColor,
      "--bm-bg": d.backgroundColor,
      "--bm-card": d.cardColor,
      "--bm-border": d.borderColor,
      "--bm-radius": d.radius,
      "--bm-max": d.maxWidth
    };

    Object.keys(vars).forEach(function (key) {
      if (vars[key]) {
        root.style.setProperty(key, vars[key]);
      }
    });
  }

  function init() {
    applyDesign();

    /*
     * MENU BLOGGER SENGAJA TIDAK DISENTUH.
     *
     * Menu tetap menggunakan LinkList Blogger:
     * #main-menu-nav
     *
     * Isi menu tetap dapat kamu atur dari Blogger
     * seperti sebelumnya.
     */
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

})();
