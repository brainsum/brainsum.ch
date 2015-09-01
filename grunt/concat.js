/**
 * grunt-contrib-concat
 * @see https://github.com/gruntjs/grunt-contrib-concat
 */

module.exports = {

  // options: {
  //   banner: '<%= banner %>',
  // },

  files: {
    src: [
      '<%= paths.srcJS %>/**/*.js',
    ],

    dest: '<%= paths.distJS %>/<%= names.distJS %>.js'
  }

};
