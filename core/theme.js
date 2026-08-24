(function () {
  "use strict";

  /*
   * Blogger Master Theme
   *
   * Untuk sementara:
   * - Menu Blogger lama tetap digunakan
   * - Sidebar Blogger lama tetap digunakan
   * - Widget Blogger lama tetap digunakan
   *
   * Tidak ada widget yang disembunyikan atau diganti.
   */

  var CONFIG = window.BLOGGER_MASTER_CONFIG;

  if (!CONFIG) {
    console.warn("BLOGGER MASTER THEME: config.js tidak ditemukan.");
    return;
  }

  function applyDesign() {
    var design = CONFIG.design || {};
    var root = document.documentElement;

    var vars = {
      "--bm-primary": design.primaryColor,
      "--bm-text": design.textColor,
      "--bm-bg": design.backgroundColor,
      "--bm-card": design.cardColor,
      "--bm-border": design.borderColor,
      "--bm-radius": design.radius,
      "--bm-max": design.maxWidth
    };

    Object.keys(vars).forEach(function (key) {
      if (vars[key]) {
        root.style.setProperty(key, vars[key]);
      }
    });
  }

  function init() {
    applyDesign();

    console.log(
      "BLOGGER MASTER THEME aktif. Sidebar dan menu Blogger tetap."
    );
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

})();
