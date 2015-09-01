/**
 * grunt-contrib-less
 * @see https://github.com/gruntjs/grunt-contrib-less
 */

module.exports = {

  options: {
    // paths: ['<%= paths.srcLESS %>'],
    sourceMap: false
  },

  common: {
    src: 'src/less/common.less',
    dest: 'dist/css/common.css'
  },

  tablet: {
    src: 'src/less/tablet.less',
    dest: 'dist/css/tablet.css'
  },

  desktop: {
    src: 'src/less/desktop.less',
    dest: 'dist/css/desktop.css'
  },

  wide: {
    src: 'src/less/wide.less',
    dest: 'dist/css/wide.css'
  }
};
