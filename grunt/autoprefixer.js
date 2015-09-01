/**
 * grunt-autoprefixer
 * @see https://github.com/nDmitry/grunt-autoprefixer
 */

module.exports = {

  options: {
    browsers: '<%= browsers %>',
    diff: false // Set it to true if you want to get an output diff file
  },
  dist: {
    expand: true,
    flatten: true,
    src: '<%= paths.distCSS %>/<%= names.distCSS %>.css',
    dest: '<%= paths.distCSS %>'
  }

};
