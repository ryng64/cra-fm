var gulp = require("gulp");
var inline = require("gulp-inline");

gulp.task("default", function () {
  return gulp
    .src("build/index.html")
    .pipe(inline({ base: "build/" }))
    .pipe(gulp.dest("inlined/"));
});
