module.exports = function(grunt) {

 grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    express: {
      test: {
        options: {
          script: './server.js'
      }
    }
   },
    jasmine_node: {
      options: {
        forceExit: true,
      },
      all: ['spec/']
    },
    jshint: {
      files: ['Gruntfile.js', 'test/*.js', 'src/*.js', 'spec/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          quiet: false, // Optionally suppress output to standard out (defaults to false)
        },
        src: ['test/**/*.js']
      }
    }
  });


  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jasmine-node');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-mocha-test');

  grunt.registerTask('default', ['jshint', 'express:test', 'mochaTest']);
};
