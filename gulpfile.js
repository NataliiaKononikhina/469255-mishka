"use strict";

var gulp = require("gulp");
var less = require("gulp-less");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var minify = require("gulp-csso");
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");
var webp = require("gulp-webp");
var del = require("del");
var run = require("run-sequence");
var destFolder = "build";

gulp.task("build", function (done) {
  return run(
    "clean",
    "copy",
    "html",
    "style",
    "images",
    "webp",
    done
  );
});

gulp.task("clean", function () {
  return del(destFolder);
});

gulp.task("style", function () {
  gulp.src("less/style.less")
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest(destFolder + "/css"))
    .pipe(server.stream())
    .pipe(minify())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest(destFolder + "/css"));
});

gulp.task("images", function () {
  return gulp.src("img/**/*.{png,jpg,svg}")
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.jpegtran({progressive: true}),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest(destFolder + "/img"));
});

gulp.task("webp", function () {
  return gulp.src("img/**/*.{png,jpg}")
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest(destFolder + "/img"));
});

gulp.task("copy", function () {
  return gulp.src([
    "fonts/**/*.{woff,woff2}",
    "js/**"
  ], {
    base:"."
  })
    .pipe(gulp.dest(destFolder));
});

gulp.task("html", function () {
  return gulp.src(["*.html"], {base:"."})
    .pipe(gulp.dest(destFolder));
});

gulp.task("serve", function() {
  server.init({
    server: destFolder + "/"
  });

  gulp.watch("less/**/*.less", ["style"]);
  gulp.watch("*.html", ["html"]);
  gulp.watch("js/*.js", ["copy"]);
});
