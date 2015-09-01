/**
 * grunt-autoprefixer
 * @see https://github.com/nDmitry/grunt-autoprefixer
 */

module.exports = {

  options: {
    browsers: '<%= browsers %>',
    diff: false, // Set it to true if you want to get an output diff file
    expand: true,
    flatten: true
  },

  common: {
    src: 'dist/css/common.css',
    dest: 'dist/css/common.css'
  },

  tablet: {
    src: 'dist/css/tablet.css',
    dest: 'dist/css/tablet.css'
  },

  desktop: {
    src: 'dist/css/desktop.css',
    dest: 'dist/css/desktop.css'
  },

  wide: {
    src: 'dist/css/wide.css',
    dest: 'dist/css/wide.css'
  }

};
