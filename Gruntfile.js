/*
 * qulinary-bower-stripe
 * https://github.com/QulinaryOrg/bower-stripe
 *
 * Copyright (c) 2016 Qulinary, Inc.
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    bowerUpdateMain: {
      target: {
        main: [
          'src/**/*.js'
        ]
      }
    },
    release: {
      options: {
        additionalFiles: ['bower.json']
      }
    }
  });
  grunt.registerTask('default', 'release:patch');

};
