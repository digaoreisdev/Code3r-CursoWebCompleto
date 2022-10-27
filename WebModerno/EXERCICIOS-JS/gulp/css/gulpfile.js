const { series } = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')(require('node-sass'))
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function transformacaoCSS() {
  return gulp.src('src/sass/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(uglifycss({ "ugliComments": true}))
    .pipe(concat('estilo.min.css'))
    .pipe(gulp.dest('build/css'))
}

function copiarHTML(){
  return gulp.src('src/index.html')
    .pipe(gulp.dest('build'))
}

exports.default = series(transformacaoCSS, copiarHTML)