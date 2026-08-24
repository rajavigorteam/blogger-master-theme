# Blogger Master Theme

Satu konfigurasi pusat untuk banyak Blogspot.

File penting:
- `config/config.js` = menu, sidebar, widget, dan desain global
- `core/theme.css` = tampilan
- `core/theme.js` = renderer

Tahap pertama ini adalah fondasi. Popular Posts, Labels, dan Recent Posts belum mengambil data Blogger asli; nanti kita sambungkan satu per satu.

Loader yang nantinya dipasang di setiap Blogger:
<link rel="stylesheet" href="URL_THEME_CSS">
<script src="URL_CONFIG_JS"></script>
<script src="URL_THEME_JS"></script>

Target sidebar:
<div data-blogger-master-sidebar></div>

Target footer:
<div data-blogger-master-footer></div>
