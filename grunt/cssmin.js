/**
 * grunt-contrib-cssmin
 * @see https://github.com/gruntjs/grunt-contrib-cssmin
 */

module.exports = {

  options: {
    roundingPrecision: 3,
    sourceMap: true,
    keepSpecialComments: 0
  },

  common: {
    src: 'dist/css/common.css',
    dest: 'dist/css/common.min.css'
  },

  tablet: {
    src: 'dist/css/tablet.css',
    dest: 'dist/css/tablet.min.css'
  },

  desktop: {
    src: 'dist/css/desktop.css',
    dest: 'dist/css/desktop.min.css'
  },

  wide: {
    src: 'dist/css/wide.css',
    dest: 'dist/css/wide.min.css'
  }

};
