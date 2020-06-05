const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss')

mix.sass('src/app.scss', 'public/css')
  .options({
    processCssUrls: false,
    postCss: [ tailwindcss() ],
  })
