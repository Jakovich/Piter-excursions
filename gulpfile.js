var gulp = require("gulp");
var less = require("gulp-less");
var plumber = require("gulp-plumber");
var copy = require("gulp-contrib-copy");
var clean = require('gulp-contrib-clean');
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var csso = require("gulp-csso");
var uglify = require("gulp-uglify");
var server = require("browser-sync");
var rename = require("gulp-rename");
var svgstore = require('gulp-svgstore');
var svgmin = require('gulp-svgmin');
var path = require('path');
var imagemin = require("gulp-imagemin");
var pug = require('gulp-pug');

gulp.task('svgstore-social', function () {
    return gulp
        .src('img/social-sprite/*.svg')
        .pipe(svgmin(function (file) {
            var prefix = path.basename(file.relative, path.extname(file.relative));
            return {
                plugins: [{
                    cleanupIDs: {
                        prefix: prefix + '-',
                        minify: true
                    }
                }]
            }
        }))
        .pipe(svgstore())
        .pipe(gulp.dest('img/svgsprites'));
});

gulp.task('svgstore-general', function () {
    return gulp
        .src('img/general-sprite/*.svg')
        .pipe(svgmin(function (file) {
            var prefix = path.basename(file.relative, path.extname(file.relative));
            return {
                plugins: [{
                    cleanupIDs: {
                        prefix: prefix + '-',
                        minify: true
                    }
                }]
            }
        }))
        .pipe(svgstore())
        .pipe(gulp.dest('img/svgsprites'));
});

gulp.task('html', function buildHTML() {
  return gulp.src('pug/*.pug')
  .pipe(plumber())
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('build'));
});

gulp.task("style", function(){
  gulp.src("less/style.less")
  .pipe(plumber())
  .pipe(less())
  .pipe(postcss([
    autoprefixer({browsers: [
      "last 3 version",
      "last 3 Chrome versions",
      "last 3 Firefox versions",
      "last 3 Opera versions",
      "last 2 Edge versions",
      "ie >= 9"
    ]})

  ]))

  .pipe(gulp.dest("build/css"))
  .pipe(csso())
  .pipe(rename("style.min.css"))
  .pipe(gulp.dest("build/css"))
  .pipe(server.reload({stream: true}));
});


gulp.task("min-js", function(){
  gulp.src("js/main.js")
  .pipe(plumber())
  .pipe(gulp.dest("build/js/"))
  .pipe(uglify())
  .pipe(rename("main.min.js"))
  .pipe(gulp.dest("build/js/"));
  gulp.src("js/form.js")
  .pipe(plumber())
  .pipe(gulp.dest("build/js/"))
  .pipe(uglify())
  .pipe(rename("form.min.js"))
  .pipe(gulp.dest("build/js/"));
  gulp.src("js/carousel.js")
  .pipe(plumber())
  .pipe(gulp.dest("build/js/"))
  .pipe(uglify())
  .pipe(rename("carousel.min.js"))
  .pipe(gulp.dest("build/js/"));
  gulp.src("js/map-index.js")
  .pipe(plumber())
  .pipe(gulp.dest("build/js/"))
  .pipe(uglify())
  .pipe(rename("map-index.min.js"))
  .pipe(gulp.dest("build/js/"));
  gulp.src("js/map-history.js")
  .pipe(plumber())
  .pipe(gulp.dest("build/js/"))
  .pipe(uglify())
  .pipe(rename("map-history.min.js"))
  .pipe(gulp.dest("build/js/"));
  gulp.src("js/map-building.js")
  .pipe(plumber())
  .pipe(gulp.dest("build/js/"))
  .pipe(uglify())
  .pipe(rename("map-building.min.js"))
  .pipe(gulp.dest("build/js/"));
});


gulp.task("image", function(){
  return gulp.src("img/**/*.{png,jpg,gif}")
  .pipe(imagemin({
    optimizationLevel: 3,
    progressive: true
  }))
  .pipe(gulp.dest("build/img"));
});

gulp.task('svgmin', function () {
    return gulp
        .src('img/*.svg')
        .pipe(svgmin(function (file) {
            var prefix = path.basename(file.relative, path.extname(file.relative));
            return {
                plugins: [{
                    cleanupIDs: {
                        prefix: prefix + '-',
                        minify: true
                    }
                }]
            }
        }))

        .pipe(gulp.dest('build/img'));
});

gulp.task("copyVendor", function() {
  gulp.src("vendor/**/*")
  .pipe(copy())
  .pipe(gulp.dest("build/vendor"));
});

gulp.task("fonts", function(){
  gulp.src("fonts/**/*")
  .pipe(copy())
  .pipe(gulp.dest("build/fonts"));
});

gulp.task("copySprite", function() {
  gulp.src("img/svgsprites/*.svg")
  .pipe(copy())
  .pipe(gulp.dest("build/img/svgsprites"));
  gulp.src("img/map/**/*")
  .pipe(copy())
  .pipe(gulp.dest("build/img/map"));
});


gulp.task("clean", function () {
  return gulp.src("build", {read: false})
    .pipe(clean());
});

gulp.task("copyVendor", function() {
  gulp.src("vendor/**/*")
  .pipe(copy())
  .pipe(gulp.dest("build/vendor"));
});


gulp.task("show", function(){
  server.init({
    server: "build",
    notify: false,
    open: true,
    ui: false
  });





  gulp.watch("less/**/*.less", ["style"]).on("change", server.reload);
  gulp.watch("pug/**/*.pug", ["html"]).on("change", server.reload);
  gulp.watch("img/**/*.{png,jpg,gif,svg}", ["image"]).on("change", server.reload);
  gulp.watch("js/**/*.js", ["min-js"]).on("change", server.reload);
  gulp.watch("vendor/**/*.js", ["copyVendor"]).on("change", server.reload);
});

gulp.task("build", ["clean", "html", "style", "fonts", "image", "copyVendor", "copySprite", "svgmin", "min-js"]);
