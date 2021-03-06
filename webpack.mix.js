const mix = require("laravel-mix");

// require("laravel-mix-bundle-analyzer");

// if (!mix.inProduction()) {
//     mix.bundleAnalyzer();
// }
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js("resources/js/app.js", "public/js")
    .vue()
    .version()
    .extract()
    .sass("resources/sass/app.scss", "public/css");

mix.browserSync({
    proxy: {
        target: "http://portfolio-site"
    },
    files: [
        "./resources/**/*",
        "./app/**/*",
        "./config/**/*",
        "./routes/**/*",
        "./public/**/*"
    ],
    open: false,
    reloadOnRestart: true
});
