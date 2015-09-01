/**
 * grunt-contrib-watch
 * @see https://github.com/gruntjs/grunt-contrib-watch
 */

module.exports = {

  options: {
    spawn: false,
    livereload: true
  },

  js: {
    files: ['<%= paths.srcJS %>/**/*.js'],
    tasks: ['concat', 'uglify'],
  },

  less: {
    files: '<%= paths.srcLESS %>/**/*.less',
    tasks: ['less', 'autoprefixer', 'cssmin']
  },
};
