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

  function removeTestMenu() {
    const testMenu = document.querySelector(".bm-master-nav");

    if (testMenu) {
      testMenu.remove();
      console.log("Blogger Master Theme: test menu removed.");
    }
  }

  function init() {
    removeTestMenu();
    applyDesign();

    /*
     * MENU BLOGGER ASLI TIDAK DISENTUH.
     *
     * Menu lama seperti:
     * SITUS SLOT 10K
     * DEPOSIT
     * WITHDRAW
     * INFORMASI
     * ABOUT US
     * LIVECHAT
     * DAFTAR BLOG INDEX
     *
     * tetap menggunakan sistem LinkList Blogger.
     */
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

})();
