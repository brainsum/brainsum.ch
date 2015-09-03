/**
 * grunt-contrib-uglify
 * @see
 */

module.exports = {

  options: {
    banner: '<%= banner %>'
  },

  files: {
    src: 'dist/js/app.js',
    dest: 'dist/js/app.min.js'
  }

};
