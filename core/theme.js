(function () {
  "use strict";

  var CONFIG = window.BLOGGER_MASTER_CONFIG;

  if (!CONFIG) {
    console.warn("MASTER THEME: config.js tidak ditemukan.");
    return;
  }

  /*
   * Cari widget Blogger.
   *
   * Blogger kadang memberikan ID DOM:
   * HTML10
   * widget-HTML10
   * HTML10-1
   * atau bentuk lain.
   */

  function findWidget(id) {
    var selectors = [
      "#" + id,
      "#" + id.toLowerCase(),
      '[id="' + id + '"]',
      '[id^="' + id + '-"]',
      '[id*="' + id + '"]'
    ];

    for (var i = 0; i < selectors.length; i++) {
      try {
        var element = document.querySelector(selectors[i]);

        if (element) {
          return element;
        }
      } catch (e) {}
    }

    return null;
  }


  /*
   * Cari judul widget.
   */

  function findTitle(widget) {
    if (!widget) return null;

    return (
      widget.querySelector(".title") ||
      widget.querySelector(".widget-title") ||
      widget.querySelector("h2") ||
      widget.querySelector("h3")
    );
  }


  /*
   * Cari area konten widget.
   */

  function findContent(widget) {
    if (!widget) return null;

    return (
      widget.querySelector(".widget-content") ||
      widget.querySelector(".widget-content-inner")
    );
  }


  /*
   * Ubah satu widget.
   */

  function applyWidget(id, settings) {

    var widget = findWidget(id);

    /*
     * Kalau widget tidak ditemukan:
     * JANGAN melakukan apa pun.
     */

    if (!widget) {
      console.warn(
        "MASTER THEME: widget tidak ditemukan:",
        id
      );

      return;
    }


    /*
     * Aktif / nonaktif.
     */

    if (settings.enabled === false) {
      widget.style.display = "none";
      return;
    }

    widget.style.display = "";


    /*
     * Ubah judul.
     */

    if (settings.title) {

      var title = findTitle(widget);

      if (title) {
        title.textContent = settings.title;
      }

    }


    /*
     * Ubah isi.
     */

    if (
      settings.content !== undefined
    ) {

      var content =
        findContent(widget);

      if (content) {

        content.innerHTML =
          settings.content;

      } else {

        console.warn(
          "MASTER THEME: area konten tidak ditemukan:",
          id
        );

      }

    }

  }


  /*
   * Proses semua widget.
   */

  function applyAllWidgets() {

    var widgets =
      CONFIG.widgets || {};

    Object.keys(widgets).forEach(
      function (id) {

        applyWidget(
          id,
          widgets[id]
        );

      }
    );

  }


  /*
   * Desain global.
   */

  function applyDesign() {

    var design =
      CONFIG.design || {};

    var root =
      document.documentElement;

    if (design.primaryColor) {
      root.style.setProperty(
        "--bm-primary",
        design.primaryColor
      );
    }

    if (design.textColor) {
      root.style.setProperty(
        "--bm-text",
        design.textColor
      );
    }

    if (design.backgroundColor) {
      root.style.setProperty(
        "--bm-bg",
        design.backgroundColor
      );
    }

    if (design.cardColor) {
      root.style.setProperty(
        "--bm-card",
        design.cardColor
      );
    }

    if (design.borderColor) {
      root.style.setProperty(
        "--bm-border",
        design.borderColor
      );
    }

    if (design.radius) {
      root.style.setProperty(
        "--bm-radius",
        design.radius
      );
    }

    if (design.maxWidth) {
      root.style.setProperty(
        "--bm-max",
        design.maxWidth
      );
    }

  }


  /*
   * Tunggu Blogger selesai merender widget.
   */

  function start() {

    applyDesign();

    var attempts = 0;

    var timer =
      setInterval(function () {

        attempts++;

        applyAllWidgets();

        if (attempts >= 10) {
          clearInterval(timer);
        }

      }, 700);

  }


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
