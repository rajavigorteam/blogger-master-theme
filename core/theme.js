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

  /*
   * MENU BLOGGER ASLI
   * Tidak disentuh.
   */
  function keepOriginalMenu() {
    const testMenu = document.querySelector(".bm-master-nav");

    if (testMenu) {
      testMenu.remove();
    }
  }

  /*
   * SIDEBAR MASTER
   * Hanya menambahkan wadah baru.
   * Widget lama belum dihapus.
   */
  function renderMasterSidebar() {
    const sidebar = document.querySelector("#sidebar1");

    if (!sidebar) {
      console.warn("Sidebar #sidebar1 tidak ditemukan.");
      return;
    }

    if (sidebar.querySelector("[data-blogger-master-sidebar]")) {
      return;
    }

    const wrapper = document.createElement("div");
    wrapper.setAttribute("data-blogger-master-sidebar", "true");
    wrapper.className = "bm-master-sidebar";

    const title = document.createElement("h2");
    title.className = "bm-master-sidebar-title";
    title.textContent = "Master Sidebar";

    wrapper.appendChild(title);

    const widgets =
      C.sidebar && Array.isArray(C.sidebar.widgets)
        ? C.sidebar.widgets
        : [];

    widgets.forEach(function (widget) {
      const box = document.createElement("div");
      box.className = "bm-master-widget";

      const heading = document.createElement("h3");
      heading.textContent = widget.title || "Widget";

      box.appendChild(heading);

      const content = document.createElement("div");
      content.className = "bm-master-widget-content";

      if (widget.type === "search") {
        const form = document.createElement("form");
        form.className = "bm-master-search";

        const input = document.createElement("input");
        input.type = "search";
        input.placeholder = "Search...";

        const button = document.createElement("button");
        button.type = "submit";
        button.textContent = "Search";

        form.appendChild(input);
        form.appendChild(button);

        form.addEventListener("submit", function (e) {
          e.preventDefault();

          const q = input.value.trim();

          if (q) {
            window.location.href =
              "/search?q=" + encodeURIComponent(q);
          }
        });

        content.appendChild(form);
      }

      else if (widget.type === "html") {
        content.innerHTML = widget.content || "";
      }

      else {
        const note = document.createElement("div");
        note.textContent =
          "Widget " +
          (widget.type || "unknown") +
          " siap dikontrol dari GitHub.";

        content.appendChild(note);
      }

      box.appendChild(content);
      wrapper.appendChild(box);
    });

    sidebar.insertBefore(wrapper, sidebar.firstChild);

    console.log(
      "Blogger Master Theme: Master Sidebar berhasil dimuat."
    );
  }

  function init() {
    applyDesign();
    keepOriginalMenu();
    renderMasterSidebar();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

})();
