/**
 * grunt-closurecompiler
 * @see https://www.npmjs.com/package/grunt-closurecompiler
 */

module.exports = {

  options: {
    // Possible levels: ADVANCED_OPTIMIZATIONS, SIMPLE_OPTIMIZATIONS, WHITESPACE_ONLY
    'compilation_level': 'SIMPLE_OPTIMIZATIONS',
    'max_processes': 5,
    'banner': '<%= banner %>'
  },

  files: {
    '<%= paths.distJS %>/<%= names.js %>.js': "<%= paths.srcJS %>/**/*.js"
  }

};