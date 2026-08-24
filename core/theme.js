(function () {
  "use strict";

  function test() {
    var sections = document.querySelectorAll("b\\:section");

    console.log("MASTER THEME AKTIF");
    console.log("Jumlah section:", sections.length);

    var all = document.querySelectorAll("[id]");

    all.forEach(function (el) {
      if (
        el.id &&
        (
          el.id.toLowerCase().indexOf("side") !== -1 ||
          el.className &&
          String(el.className).toLowerCase().indexOf("side") !== -1
        )
      ) {
        console.log("Kandidat sidebar:", el);
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", test);
  } else {
    test();
  }
})();
