////////////////////////////////////////////////////////////////////////////////
/**
 * @name Gulp taskrunner
 * @desc Gulp taskrunner for Leon Gaban versino 8
 */

var gulp          = require('gulp'),
    gutil         = require('gulp-util'),
    gulpif        = require('gulp-if'),
    uglify        = require('gulp-uglify'),
    concat        = require('gulp-concat'),
    sass          = require('gulp-ruby-sass'),
    streamqueue   = require('streamqueue'),
    sourcemaps    = require('gulp-sourcemaps'),
    runSequence   = require('run-sequence'),
    del           = require('del'),
    es            = require('event-stream');

// Log Errors
////////////////////////////////////////////////////////////////////////////////

function errorlog(err){
    console.log(err.message);
    this.emit('end');
}

/** Main Gulp Tasks */
/** ------------------------------------------------------------------------- */
////////////////////////////////////////////////////////////////////////////////

/** Main Styles */
/** ------------------------------------------------------------------------- */
gulp.task('css', function() {
    return sass('bower_components/sass-smacss/sass/leongaban.scss', {
        // noCache: true,
        style: 'compressed' 
    })
    .pipe(sourcemaps.init())
    .on('error', errorlog)
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('assets/css/'))
});

/** Development watch */
/** ------------------------------------------------------------------------- */
gulp.task('watch', function() {
    gulp.watch('bower_components/sass-smacss/sass/**/*.scss', ['css']).on('change', function(file) {
        gutil.log(gutil.colors.cyan.bold('CSS updated' + ' (' + file.path + ')'));
    });
});