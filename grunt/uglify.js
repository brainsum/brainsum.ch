/**
 * grunt-contrib-uglify
 * @see
 */

module.exports = {

  options: {
    banner: '<%= banner %>'
  },

  files: {
    src: '<%= paths.distJS %>/<%= names.distJS %>.js',
    dest: '<%= paths.distJS %>/<%= names.distJS %>.min.js'
  }

};
