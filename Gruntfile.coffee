module.exports = (grunt) ->

  grunt.initConfig
    pkg: grunt.file.readJSON('package.json')
    browserify:
      client:
        files:
          'public/javascripts/client.js': ['public/coffee/**/*.coffee']
        options:
          debug: true
          external: ['jquery', 'keymaster', 'waypoints']
          transform: ['coffeeify']
      vendor:
        files:
          'public/javascripts/vendor.js': ['public/javascripts/vendor/**/*.js']
        options:
          debug: true
          shim:
            jquery:
              path: 'public/javascripts/vendor/jquery.js'
              exports: '$'
            keymaster:
              path: 'public/javascripts/vendor/keymaster.js'
              exports: 'key'
            waypoints:
              path: 'public/javascripts/vendor/waypoints.js'
              exports: 'waypoints'
    concat:
      'public/javascripts/app.js': ['public/javascripts/vendor.js', 'public/javascripts/client.js']
    watch:
      options:
        livereload: 9011
      coffee:
        files: 'public/coffee/**/*.coffee'
        tasks: ['browserify:dist']
      sass:
        files: 'public/stylesheets/**/*.s?ss'
      slim:
        files: 'views/**/*.slim'

  grunt.loadNpmTasks('grunt-browserify')
  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-contrib-watch')

  grunt.registerTask('default', ['browserify', 'concat'])
