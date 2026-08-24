(function () {
  "use strict";

  function findSidebar() {
    return (
      document.getElementById("sidebar1") ||
      document.querySelector("#sidebar1") ||
      document.querySelector(".sidebar")
    );
  }

  function testSidebar() {
    var sidebar = findSidebar();

    if (!sidebar) {
      console.warn("MASTER THEME: sidebar tidak ditemukan.");
      return false;
    }

    if (document.querySelector("[data-master-sidebar-test]")) {
      return true;
    }

    var box = document.createElement("div");

    box.setAttribute("data-master-sidebar-test", "true");

    box.style.cssText =
      "background:#111;" +
      "color:#fff;" +
      "padding:20px;" +
      "margin:15px 0;" +
      "border-radius:8px;" +
      "font-family:Arial,sans-serif;" +
      "font-size:16px;" +
      "position:relative;" +
      "z-index:9999;";

    box.innerHTML =
      "<strong>MASTER SIDEBAR BERHASIL</strong>" +
      "<br><span style='font-size:13px'>" +
      "Konten ini dikirim dari GitHub." +
      "</span>";

    sidebar.insertBefore(box, sidebar.firstChild);

    console.log(
      "MASTER THEME: sidebar berhasil ditemukan.",
      sidebar
    );

    return true;
  }

  function start() {
    var attempts = 0;

    var timer = setInterval(function () {
      attempts++;

      if (testSidebar() || attempts >= 20) {
        clearInterval(timer);
      }
    }, 500);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }

})();
