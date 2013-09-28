module.exports = (grunt) ->

  grunt.initConfig
    pkg: grunt.file.readJSON('package.json')
    browserify:
      client:
        src: ['public/coffee/**/*.coffee']
        dest: 'public/javascripts/client.js'
        options:
          debug: true
          external: ['annyang', 'jQuery', 'key', 'waypoints']
          transform: ['coffeeify']
      vendor:
        src: [
          'bower_components/annyang/annyang.js'
          'bower_components/jquery/jquery.js'
          'bower_components/jquery-waypoints/waypoints.js'
          'bower_components/keymaster/keymaster.js'
        ]
        dest: 'public/javascripts/vendor.js'
        options:
          debug: true
          alias: [
            'bower_components/jquery/jquery.js:jQuery'
          ]
          shim:
            annyang:
              path: 'bower_components/annyang/annyang.js'
              exports: 'annyang'
            keymaster:
              path: 'bower_components/keymaster/keymaster.js'
              exports: 'key'
            waypoints:
              path: 'bower_components/jquery-waypoints/waypoints.js'
              exports: 'waypoints'
    concat:
      'public/javascripts/app.js': ['public/javascripts/vendor.js', 'public/javascripts/client.js']
    watch:
      options:
        livereload: 9011
      coffee:
        files: 'public/coffee/**/*.coffee'
        tasks: ['browserify:client', 'concat']
      grunt:
        files: 'Gruntfile.coffee'
      sass:
        files: 'public/stylesheets/**/*.s?ss'
      slim:
        files: 'views/**/*.slim'

  grunt.loadNpmTasks('grunt-browserify')
  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-contrib-watch')

  grunt.registerTask('default', ['browserify', 'concat'])
