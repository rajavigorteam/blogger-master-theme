(function () {
  "use strict";

  const C = window.BLOGGER_MASTER_CONFIG;

  if (!C) {
    console.warn("BLOGGER MASTER THEME: config.js tidak ditemukan.");
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

  function findSidebar() {
    return document.querySelector(".sidebar.common-widget");
  }

  function createTitle(title) {
    const h3 = document.createElement("h3");
    h3.className = "bm-master-widget-title";
    h3.textContent = title || "Widget";
    return h3;
  }

  function createWidget(widget) {
    const box = document.createElement("div");

    box.className = "bm-master-widget";

    box.appendChild(createTitle(widget.title));

    const content = document.createElement("div");
    content.className = "bm-master-widget-content";

    /*
     * SEARCH
     */
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

      form.addEventListener("submit", function (event) {
        event.preventDefault();

        const q = input.value.trim();

        if (q) {
          window.location.href =
            "/search?q=" + encodeURIComponent(q);
        }
      });

      content.appendChild(form);
    }

    /*
     * HTML
     */
    else if (widget.type === "html") {
      content.innerHTML = widget.content || "";
    }

    /*
     * RECENT POSTS
     */
    else if (widget.type === "recent") {
      const list = document.createElement("div");

      list.className = "bm-recent-posts";

      const limit = Number(widget.limit) || 5;

      loadRecentPosts(list, limit);

      content.appendChild(list);
    }

    /*
     * WIDGET BELUM DIDUKUNG
     */
    else {
      const note = document.createElement("p");

      note.textContent =
        "Widget \"" +
        (widget.type || "unknown") +
        "\" belum tersedia.";

      content.appendChild(note);
    }

    box.appendChild(content);

    return box;
  }

  /*
   * Mengambil artikel terbaru dari Blogger.
   */
  function loadRecentPosts(container, limit) {
    const callbackName =
      "bmRecentPosts_" +
      Date.now();

    window[callbackName] = function (data) {
      try {
        const entries =
          data.feed &&
          data.feed.entry
            ? data.feed.entry
            : [];

        entries.slice(0, limit).forEach(function (entry) {
          const item = document.createElement("div");

          item.className = "bm-recent-post";

          const link = document.createElement("a");

          link.href =
            entry.link && entry.link.length
              ? (
                  entry.link.find(function (x) {
                    return x.rel === "alternate";
                  }) || {}
                ).href || "#"
              : "#";

          link.textContent =
            entry.title && entry.title.$t
              ? entry.title.$t
              : "Untitled";

          item.appendChild(link);

          container.appendChild(item);
        });
      } finally {
        delete window[callbackName];
        script.remove();
      }
    };

    const script = document.createElement("script");

    script.src =
      "/feeds/posts/default" +
      "?alt=json-in-script" +
      "&max-results=" +
      encodeURIComponent(limit) +
      "&callback=" +
      callbackName;

    script.onerror = function () {
      container.textContent =
        "Recent posts tidak dapat dimuat.";
      delete window[callbackName];
      script.remove();
    };

    document.body.appendChild(script);
  }

  /*
   * SIDEBAR MASTER
   */
  function renderSidebar() {
    const sidebar = findSidebar();

    if (!sidebar) {
      console.warn(
        "BLOGGER MASTER THEME: sidebar tidak ditemukan."
      );
      return;
    }

    const oldMaster =
      sidebar.querySelector(
        "[data-blogger-master-sidebar]"
      );

    if (oldMaster) {
      oldMaster.remove();
    }

    const settings = C.sidebar || {};

    if (settings.enabled === false) {
      return;
    }

    const wrapper = document.createElement("div");

    wrapper.className = "bm-master-sidebar";

    wrapper.setAttribute(
      "data-blogger-master-sidebar",
      "true"
    );

    const widgets =
      Array.isArray(settings.widgets)
        ? settings.widgets
        : [];

    widgets.forEach(function (widget) {
      wrapper.appendChild(
        createWidget(widget)
      );
    });

    sidebar.insertBefore(
      wrapper,
      sidebar.firstChild
    );

    console.log(
      "BLOGGER MASTER THEME: " +
      widgets.length +
      " widget sidebar dimuat."
    );
  }

  function init() {
    applyDesign();
    renderSidebar();
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      init
    );
  } else {
    init();
  }

})();
