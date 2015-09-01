/**
 * grunt-contrib-concat
 * @see https://github.com/gruntjs/grunt-contrib-concat
 */

module.exports = {

  options: {
    banner: '<%= banner %>',
  },

  files: {
    src: [

      // Bootstrap (uncomment needed components)
      '<%= paths.srcVendor %>/bootstrap/js/transition.js',
      // '<%= paths.srcVendor %>/bootstrap/js/alert.js',
      // '<%= paths.srcVendor %>/bootstrap/js/button.js',
      // '<%= paths.srcVendor %>/bootstrap/js/carousel.js',
      '<%= paths.srcVendor %>/bootstrap/js/collapse.js',
      '<%= paths.srcVendor %>/bootstrap/js/dropdown.js',
      // '<%= paths.srcVendor %>/bootstrap/js/modal.js',
      // '<%= paths.srcVendor %>/bootstrap/js/tooltip.js',
      // '<%= paths.srcVendor %>/bootstrap/js/popover.js',
      // '<%= paths.srcVendor %>/bootstrap/js/scrollspy.js',
      // '<%= paths.srcVendor %>/bootstrap/js/tab.js',
      // '<%= paths.srcVendor %>/bootstrap/js/affix.js',

      // jQuery
      // '<%= paths.srcVendor %>/jquery/dist/jquery.js',

      // Tesseract
      '<%= paths.srcJS %>/**/*.js',
    ],

    dest: '<%= paths.distJS %>/<%= names.distJS %>.js'
  }

};
