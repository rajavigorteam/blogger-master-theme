(function () {

  "use strict";

  var CONFIG = window.BLOGGER_MASTER_CONFIG;

  if (!CONFIG) {
    console.warn("MASTER THEME: config.js tidak ditemukan.");
    return;
  }

  function applyWidget(id, settings) {

    var widget = document.getElementById(id);

    if (!widget) {
      console.warn(
        "MASTER THEME: widget tidak ditemukan:",
        id
      );
      return;
    }

    /*
     * Hanya mencari isi widget.
     * Tidak menghapus widget.
     * Tidak mengubah sidebar.
     * Tidak mengubah posisi widget.
     */

    var content =
      widget.querySelector(".widget-content");

    if (!content) {
      console.warn(
        "MASTER THEME: content tidak ditemukan:",
        id
      );
      return;
    }

    /*
     * Ubah judul jika ditemukan.
     */

    if (settings.title) {

      var title =
        widget.querySelector(".title") ||
        widget.querySelector("h2") ||
        widget.querySelector("h3");

      if (title) {
        title.textContent =
          settings.title;
      }
    }

    /*
     * Ubah ISI saja.
     */

    if (
      settings.content !== undefined
    ) {

      content.innerHTML =
        settings.content;

    }

    console.log(
      "MASTER THEME: widget berhasil dikontrol:",
      id
    );

  }


  function start() {

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


  if (
    document.readyState === "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      start
    );

  } else {

    start();

  }

})();
