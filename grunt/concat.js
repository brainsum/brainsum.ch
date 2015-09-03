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
      'src/scripts/**/*.js',
    ],

    dest: 'dist/js/app.js'
  }

};
