/*global module:false*/
module.exports = function(grunt) {

  require('load-grunt-config')(grunt, {
    data: {

      // List of supported browsers. Uses caniuse.com database.
      // @see https://github.com/ai/browserslist
      browsers: [
        'last 2 versions',
      ],

      // Filenames.
      names: {
        common: 'common',
        tablet: 'tablet',
        desktop: 'desktop',
        wide: 'wide',
        js: 'app',
      },

      // Path references.
      paths: {
        distRoot: 'dist',
        distCSS: '<%= paths.distRoot %>/css',
        distJS: '<%= paths.distRoot %>/js',

        srcRoot: 'src',
        srcLESS: '<%= paths.srcRoot %>/less',
        srcJS: '<%= paths.srcRoot %>/scripts',
        srcVendor: '<%= paths.srcRoot %>/vendor',

        img: '<%= paths.distRoot %>/img'
      },

      // Banner for uncompressed output.
      banner: [
        '/*!',
        ' * <%= package.title %> v<%= package.version %> <%= package.homepage ? "(" + package.homepage + ")" : "" %>',
        ' * Copyright (c) <%= grunt.template.today("yyyy") %>, <%= package.author %>',
        ' */\n'
      ].join('\n')
    }
  });
};
