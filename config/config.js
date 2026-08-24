window.BLOGGER_MASTER_CONFIG = {

  version: "2.0.0",

  /*
   * =====================================================
   * DESAIN GLOBAL
   * =====================================================
   */

  design: {
    primaryColor: "#111111",
    textColor: "#222222",
    backgroundColor: "#f5f5f5",
    cardColor: "#ffffff",
    borderColor: "#e5e5e5",
    radius: "8px",
    maxWidth: "1280px"
  },


  /*
   * =====================================================
   * MENU
   *
   * DIKOSONGKAN karena kita menggunakan menu Blogger lama.
   * =====================================================
   */

  menu: [],


  /*
   * =====================================================
   * WIDGET BLOGGER
   *
   * ID harus sama dengan ID widget di template Blogger.
   *
   * enabled  = tampil / tidak
   * title    = judul widget
   * content  = isi widget
   * =====================================================
   */

  widgets: {

  HTML10: {
    enabled: true,
    title: "MASTER",
    content: `
      <div style="text-align:center;">
        <img
          src="URL-GAMBAR-KAMU"
          style="max-width:100%;height:auto;"
        />
      </div>
    `
  },

  HTML3: {
    enabled: true,
    title: "LINK ALTERNATIF SLOT 10K",
    content: `
      <div style="text-align:center;">
        <a href="https://contoh-domain.com"
           target="_blank"
           rel="nofollow noopener">
          LINK ALTERNATIF
        </a>
      </div>
    `
  },

  HTML6: {
    enabled: true,
    title: "FACEBOOK",
    content: `
      <div style="text-align:center;">
        <a href="https://facebook.com/"
           target="_blank"
           rel="nofollow noopener">
          Facebook
        </a>
      </div>
    `
  }

}


    /*
     * Widget HTML3
     * Link alternatif
     */

    HTML3: {
      enabled: true,

      title: "LINK ALTERNATIF SLOT 10K",

      content: `
        <div style="text-align:center;">

          <a
            href="https://contoh-domain.com"
            target="_blank"
            rel="nofollow noopener"
          >
            LINK ALTERNATIF
          </a>

        </div>
      `
    },


    /*
     * Widget Followers Blogger
     *
     * Kita tidak mengubah isi widget ini.
     */

    Followers1: {
      enabled: true,

      preserveContent: true
    },


    /*
     * Widget HTML6
     * Facebook
     */

    HTML6: {
      enabled: true,

      title: "FACEBOOK",

      content: `
        <div style="text-align:center;">

          <a
            href="https://facebook.com/"
            target="_blank"
            rel="nofollow noopener"
          >
            Facebook
          </a>

        </div>
      `
    }

  },


  /*
   * =====================================================
   * FOOTER
   * =====================================================
   */

  footer: {
    enabled: false,
    text: "© My Blog"
  }

};
