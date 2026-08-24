(function () {

  "use strict";


  /*
   * ==========================================
   * GLOBAL CONFIG
   * ==========================================
   */

  var CONFIG =
    window.BLOGGER_MASTER_CONFIG || {};

  var MENU =
    window.BLOGGER_MASTER_MENU || {};

  var WIDGETS =
    window.BLOGGER_MASTER_WIDGETS || {};


  /*
   * ==========================================
   * DESIGN
   * ==========================================
   */

  function applyDesign() {

    var design =
      CONFIG.design || {};

    var root =
      document.documentElement;


    var variables = {

      "--bm-primary":
        design.primaryColor,

      "--bm-text":
        design.textColor,

      "--bm-bg":
        design.backgroundColor,

      "--bm-card":
        design.cardColor,

      "--bm-border":
        design.borderColor,

      "--bm-radius":
        design.radius,

      "--bm-max":
        design.maxWidth

    };


    Object.keys(variables).forEach(
      function (key) {

        if (variables[key]) {

          root.style.setProperty(
            key,
            variables[key]
          );

        }

      }
    );

  }


  /*
   * ==========================================
   * MENU
   *
   * Menggunakan menu Blogger lama.
   * Kita hanya mengganti link di dalamnya.
   * ==========================================
   */

  function applyMenu() {

    if (!MENU.items) {
      return;
    }


    var nav =
      document.getElementById(
        "main-menu-nav"
      );


    if (!nav) {

      console.warn(
        "MASTER THEME: main-menu-nav tidak ditemukan."
      );

      return;

    }


    /*
     * Kosongkan menu lama.
     *
     * CSS dan container tetap milik
     * template Blogger.
     */

    nav.innerHTML = "";


    MENU.items.forEach(
      function (item) {

        if (!item.title) {
          return;
        }


        var li =
          document.createElement("li");


        var a =
          document.createElement("a");


        a.href =
          item.url || "#";


        a.textContent =
          item.title;


        li.appendChild(a);

        nav.appendChild(li);

      }
    );

  }


  /*
   * ==========================================
   * CARI WIDGET
   * ==========================================
   */

  function findWidget(id) {

    return document.getElementById(id);

  }


  /*
   * ==========================================
   * UBAH WIDGET
   * ==========================================
   */

  function applyWidget(id, settings) {

    var widget =
      findWidget(id);


    if (!widget) {

      console.warn(
        "MASTER THEME: widget tidak ditemukan:",
        id
      );

      return;

    }


    /*
     * Jangan hapus widget.
     */

    if (settings.enabled === false) {

      widget.style.display = "none";

      return;

    }


    widget.style.display = "";


    /*
     * Judul
     */

    if (settings.title) {

      var title =
        widget.querySelector(
          ".widget-title"
        ) ||
        widget.querySelector(
          "h2"
        );


      if (title) {

        title.textContent =
          settings.title;

      }

    }


    /*
     * Isi widget
     */

    if (
      settings.content !== undefined
    ) {

      var content =
        widget.querySelector(
          ".widget-content"
        );


      if (content) {

        content.innerHTML =
          settings.content;

      } else {

        console.warn(
          "MASTER THEME: .widget-content tidak ditemukan:",
          id
        );

      }

    }

  }


  /*
   * ==========================================
   * SEMUA WIDGET
   * ==========================================
   */

  function applyWidgets() {

    Object.keys(WIDGETS).forEach(
      function (id) {

        applyWidget(
          id,
          WIDGETS[id]
        );

      }
    );

  }


  /*
   * ==========================================
   * START
   * ==========================================
   */

  function start() {

    applyDesign();

    applyMenu();

    applyWidgets();


    console.log(
      "BLOGGER MASTER THEME aktif"
    );

  }


  /*
   * Blogger kadang merender widget
   * setelah DOM siap.
   *
   * Kita coba beberapa kali.
   */

  var attempts = 0;


  var timer =
    setInterval(
      function () {

        attempts++;

        applyMenu();

        applyWidgets();


        if (attempts >= 8) {

          clearInterval(timer);

        }

      },
      1000
    );


  if (
    document.readyState ===
    "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      start
    );

  } else {

    start();

  }

})();
