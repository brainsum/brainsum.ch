/**
 * grunt-closurecompiler
 * @see https://www.npmjs.com/package/grunt-closurecompiler
 */

module.exports = {

  options: {
    // Possible levels: ADVANCED_OPTIMIZATIONS, SIMPLE_OPTIMIZATIONS, WHITESPACE_ONLY
    'compilation_level': 'ADVANCED_OPTIMIZATIONS',
    'max_processes': 5,
    'banner': '<%= banner %>'
  },

  files: {
    src: '<%= paths.distJS %>/<%= names.distJS %>.js',
    dest: '<%= paths.distJS %>/<%= names.distJS %>.min.js'
  }

};