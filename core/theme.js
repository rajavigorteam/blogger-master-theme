(function () {

  "use strict";

  var CONFIG = window.BLOGGER_MASTER_CONFIG;

  if (!CONFIG) {
    console.warn(
      "BLOGGER MASTER THEME: config.js tidak ditemukan."
    );
    return;
  }


  /*
   * =====================================================
   * UTILITAS
   * =====================================================
   */

  function findWidget(widgetId) {

    if (!widgetId) {
      return null;
    }

    return document.getElementById(widgetId);
  }


  /*
   * =====================================================
   * MENCARI AREA JUDUL WIDGET
   * =====================================================
   */

  function findWidgetTitle(widget) {

    if (!widget) {
      return null;
    }

    return (
      widget.querySelector(".title") ||
      widget.querySelector(".widget-title") ||
      widget.querySelector("h2") ||
      widget.querySelector("h3") ||
      widget.querySelector("h4")
    );
  }


  /*
   * =====================================================
   * MENCARI AREA ISI WIDGET
   * =====================================================
   */

  function findWidgetContent(widget) {

    if (!widget) {
      return null;
    }

    return (
      widget.querySelector(".widget-content") ||
      widget.querySelector(".widget-content-inner") ||
      widget.querySelector(".widget-inner")
    );
  }


  /*
   * =====================================================
   * UBAH JUDUL
   * =====================================================
   */

  function changeTitle(widget, title) {

    if (!title) {
      return;
    }

    var titleElement = findWidgetTitle(widget);

    if (!titleElement) {
      return;
    }

    titleElement.textContent = title;
  }


  /*
   * =====================================================
   * UBAH ISI WIDGET
   * =====================================================
   */

  function changeContent(widget, content) {

    if (content === undefined) {
      return;
    }

    var contentElement = findWidgetContent(widget);

    if (!contentElement) {
      console.warn(
        "MASTER THEME: area content tidak ditemukan:",
        widget.id
      );

      return;
    }

    contentElement.innerHTML = content;
  }


  /*
   * =====================================================
   * ATUR WIDGET
   * =====================================================
   */

  function applyWidget(widgetId, settings) {

    var widget = findWidget(widgetId);

    if (!widget) {

      console.warn(
        "MASTER THEME: widget tidak ditemukan:",
        widgetId
      );

      return;
    }


    /*
     * ENABLE / DISABLE
     */

    if (settings.enabled === false) {

      widget.style.display = "none";

      return;
    }

    widget.style.display = "";


    /*
     * PRESERVE CONTENT
     */

    if (settings.preserveContent === true) {
      return;
    }


    /*
     * TITLE
     */

    if (settings.title) {

      changeTitle(
        widget,
        settings.title
      );

    }


    /*
     * CONTENT
     */

    if (
      settings.content !== undefined
    ) {

      changeContent(
        widget,
        settings.content
      );

    }

  }


  /*
   * =====================================================
   * PROSES SEMUA WIDGET
   * =====================================================
   */

  function applyWidgets() {

    var widgets =
      CONFIG.widgets || {};

    Object.keys(widgets).forEach(
      function (widgetId) {

        applyWidget(
          widgetId,
          widgets[widgetId]
        );

      }
    );

  }


  /*
   * =====================================================
   * DESAIN GLOBAL
   * =====================================================
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
      function (variable) {

        if (
          variables[variable]
        ) {

          root.style.setProperty(
            variable,
            variables[variable]
          );

        }

      }
    );

  }


  /*
   * =====================================================
   * START
   * =====================================================
   */

  function start() {

    applyDesign();

    applyWidgets();

    console.log(
      "BLOGGER MASTER THEME: aktif"
    );

  }


  /*
   * =====================================================
   * BLOGGER KADANG MERENDER WIDGET
   * SETELAH JAVASCRIPT DIJALANKAN.
   *
   * KITA COBA BEBERAPA KALI.
   * =====================================================
   */

  var attempts = 0;

  var timer =
    setInterval(
      function () {

        attempts++;

        applyWidgets();

        if (attempts >= 10) {

          clearInterval(timer);

        }

      },
      700
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
