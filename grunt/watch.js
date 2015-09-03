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
    files: 'src/scripts/**/*.js',
    tasks: ['jshint', 'concat', 'uglify'],
  },

  less: {
    files: 'src/less/**/*.less',
    tasks: ['less', 'autoprefixer', 'cssmin']
  },

  all: {
    files: ['src/scripts/**/*.js', 'src/less/**/*.less'],
    tasks: ['jshint', 'concat', 'uglify', 'less', 'autoprefixer', 'cssmin']
  }
};
