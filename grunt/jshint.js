/**
 * grunt-contrib-jshint
 * @see
 */

module.exports = {

  // @see http://jshint.com/docs/options/
  options: {
    curly: true,
    eqeqeq: true,
    immed: true,
    latedef: true,
    newcap: true,
    noarg: true,
    sub: true,
    undef: true,
    unused: true,
    boss: true,
    eqnull: true,
    browser: true,
    esnext: false,
    jquery: true,

    // Set available global variables.
    globals: {
      console: true,
      window: true,
      alert: true
    },
  },

  files: {
    src: [
      'src/scripts/**/*.js'
    ]
  }

};
