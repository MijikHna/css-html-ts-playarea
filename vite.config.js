import { defineConfig } from 'vite';
import image from '@rollup/plugin-image';

export default defineConfig({
  build: {
    manifest: true,
    outDir: 'dist',
    rollupOptions: {
      input: {
        index: 'index.html',
        'css/default': 'css/default.css',

        'html/clickable-svg': 'html/clickable-svg.html',
        'css/clickable-svg-West-Africa.svg': 'css/clickable-svg-West-Africa.svg.css',
        'js/clickable-svg': 'src/clickable-svg.ts',

        'html/scroll-animation': 'html/scroll-animation.html',
        'css/scroll-animation': 'css/scroll-animation.css',
        'js/scroll-animation': 'src/scroll-animation.ts',

        'html/css-grid': 'html/css-grid.html',
        'css/css-grid': 'css/css-grid.css',

        'html/clip-path-border': 'html/clip-path-border.html',
        'css/clip-path-border': 'css/clip-path-board.css',

        'html/interactive-heatmap': 'html/interactive-heatmap.html',
        'css/interactive-heatmap': 'css/interactive-heatmap.css',
        'js/interactive-heatmap': 'src/interactive-heatmap.ts',

        'html/link-replacement': 'html/link-replacement.html',
        'js/link-replacement': 'src/link-replacement.ts',

        'html/upload-files': 'html/upload-files.html',
        'js/upload-files': 'src/upload-files.ts',

        'html/trancate-text': 'html/trancate-text.html',
        'css/trancate-text': 'css/trancate-text.css',
        'js/trancate-text': 'src/trancate-text.ts',

        'html/pseudo-classes-vs-pseudo-elements': 'html/pseudo-classes-vs-pseudo-elements.html',
        'css/pseudo-classes-vs-pseudo-elements': 'css/pseudo-classes-vs-pseudo-elements.css',

        'html/responsive-nav-bar': 'html/responsive-nav-bar.html',
        'css/responsive-nav-bar': 'css/responsive-nav-bar.css',
        'js/responsive-nav-bar': 'src/responsive-nav-bar.ts',

        'html/responsive-responsive-website': 'html/responsive-responsive-website.html',
        'css/responsive-responsive-website': 'css/responsive-responsive-website.css',

        'html/css-functions': 'html/css-functions.html',
        'css/css-functions': 'css/css-functions.css',

        'html/css-clip-path-advanced': 'html/css-clip-path-advanced.html',
        'css/css-clip-path-advanced': 'css/css-clip-path-advanced.css',
      },
      plugins: [image()],
    },
    emptyOutDir: true,
  },
});

