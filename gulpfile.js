/**
 * Gulpfile for Phil & Steph wedding website project
 * Author: Phil Gibbins
 */

'use strict';

/* ************************************************************************** */
/* GULP CONFIG */
/* ************************************************************************** */

/* Dependencies */

// gulp itself
var gulp = require('gulp');

// css
var sass = require('gulp-sass');

// js
var babel = require('gulp-babel');
var eslint = require('gulp-eslint');

// compilation utilities
var csscomb = require('gulp-csscomb');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var browserify = require('browserify');
var sourcemaps = require('gulp-sourcemaps');

// helpers
var watch = require('gulp-watch');

// utilities
var fs = require('fs');
var shell = require('gulp-shell');

// server
var spawn = require('child_process').spawn;

/* ************************************************************************** */

/* Variables */

var node;

var allFilesInAllFolders = '/**/*';

var directories = {
    cssSrc: './src/css',
    cssDist: './dist/css',
    jsSrc: './src/js',
    jsDist: './dist/js'
}

var files = {
    cssDist: 'style.css',
    jsSrc: 'app.js',
    jsDist: 'app.min.js',
    serverConfig: './server/config.js'
}

var fileExtensions = {
    sass: '.scss',
    js: '.js'
}

var supportedBrowsersList = [
    'last 2 versions', //the last 2 versions for each major browser
    'IE >= 10'
];

var babelConfig = {
    presets: ["es2015", "react"]
};

/* ************************************************************************** */

/* SERVER */

gulp.task('start-server', function() {
    gulp.start('kill-server');
    node = spawn('node', [filePaths.serverConfig], {stdio: 'inherit'});
    node.on('close', function(code) {
        if (code === 8) {
            gulp.log('Error detected, waiting for changes...');
        }
    });
});

gulp.task('kill-server', function() {
    if (node) node.kill();
});

gulp.task('kill-server-process', shell.task([
    'killall node'
]));

/* ************************************************************************** */

/* CSS */

/**
 * Task to format CSS
 */

/**
 * Task to compile Sass
 */
gulp.task('sass', function() {
    return gulp.src( directories.cssSrc + allFilesInAllFolders + fileExtensions.sass )
        .pipe( sourcemaps.init() )
        .pipe(
            sass({
                includePaths: [
                    './node_modules/reset-css'
                ],
                outputStyle: 'compressed'
            })
            .on('error', sass.logError)
        )
        .pipe(postcss(
            [
                autoprefixer({
                    browsers: supportedBrowsersList
                })
            ]
        ))
        .pipe( sourcemaps.write() )
        .pipe( gulp.dest( directories.cssDist ) );
});

/* ************************************************************************** */

/* JAVASCRIPT */

// to add source maps

gulp.task("js", ['eslint'], function () {
  browserify( directories.jsSrc + "/" + files.jsSrc )
    .transform( 'babelify', babelConfig )
    .bundle()
    .pipe(fs.createWriteStream( directories.jsDist + "/" + files.jsDist));
});

// es2015 linting
gulp.task('eslint', function() {
    return gulp.src([ directories.jsSrc + allFilesInAllFolders + fileExtensions.js ])
        .pipe(eslint())
        .pipe(eslint.format());
});

/* ************************************************************************** */

/* PROCESSING */

/**
 * Task to watch for changes in files and trigger events
 */
gulp.task('watch', function() {

    // watch for css changes
    watch(
        [
            directories.cssSrc + allFilesInAllFolders + fileExtensions.sass
        ],
        function() {
            gulp.start('sass');
        }
    );

    // watch for js changes
    watch([ directories.jsSrc + allFilesInAllFolders + fileExtensions.js ], function() {
        gulp.start('js');
    });

    /*// watch for server config changes
    watch([files.serverConfig], function() {
        gulp.start('start-server');
    });

    // start app server
    gulp.start('start-server');*/

});

/*
    Task to force kill all node processes and start the watch
    To fix:
    http://stackoverflow.com/questions/4075287/node-express-eaddrinuse-address-already-in-use-kill-server
    This should ideally not be needed, and if the node process can be killed
    when watch exited then this will no longer be required.
 */
gulp.task('force-watch', ['kill-server-process'], function() {
    gulp.start('watch');
});


/* ************************************************************************** */