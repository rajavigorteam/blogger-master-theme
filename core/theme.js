(function () {
  "use strict";

  const C = window.BLOGGER_MASTER_CONFIG;

  if (!C) {
    console.warn("BLOGGER_MASTER_CONFIG belum dimuat.");
    return;
  }

  /*
   * =====================================================
   * BLOGGER MASTER THEME
   * Mengontrol menu asli Blogger
   * Target: #main-menu-nav
   * =====================================================
   */

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

  /*
   * =====================================================
   * MENU GLOBAL
   * Menggunakan <ul id="main-menu-nav"> milik Blogger
   * =====================================================
   */

  function renderMainMenu() {
    const menu = document.querySelector("#main-menu-nav");

    if (!menu) {
      console.warn("Menu #main-menu-nav tidak ditemukan.");
      return;
    }

    const items = C.menu || [];

    menu.innerHTML = "";

    items.forEach(function (item) {
      const li = document.createElement("li");
      const a = document.createElement("a");

      a.href = item.url || "#";
      a.textContent = item.title || "Menu";
      a.setAttribute("role", "menuitem");

      li.appendChild(a);
      menu.appendChild(li);
    });

    console.log(
      "Blogger Master Theme: " +
      items.length +
      " menu berhasil dimuat dari GitHub."
    );
  }

  /*
   * =====================================================
   * START
   * =====================================================
   */

  function init() {
    applyDesign();
    renderMainMenu();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

})();
