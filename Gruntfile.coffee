module.exports = (grunt) ->

  grunt.initConfig
    pkg: grunt.file.readJSON('package.json')

    browserify:
      client:
        src: ['public/livescript/**/*.ls']
        dest: 'public/javascripts/client.js'
        options:
          debug: true
          external: ['annyang', 'flowplayer', 'jquery', 'key', 'waypoints']
          transform: ['liveify']
      vendor:
        src: [
          'bower_components/annyang/annyang.js'
          'bower_components/flowplayer/lib/flowplayer.js'
          'public/javascripts/vendor/flowplayer.min.js'
          'bower_components/jquery/jquery.js'
          'bower_components/jquery-waypoints/waypoints.js'
          'bower_components/keymaster/keymaster.js'
        ]
        dest: 'public/javascripts/vendor.js'
        options:
          debug: true
          shim:
            annyang:
              path: 'bower_components/annyang/annyang.js'
              exports: 'annyang'
            jquery:
              path: 'bower_components/jquery/jquery.js'
              exports: '$'
            flowplayer:
              path: 'public/javascripts/vendor/flowplayer.min.js'
              exports: 'flowplayer'
              depends:
                jquery: '$'
            keymaster:
              path: 'bower_components/keymaster/keymaster.js'
              exports: 'key'
            waypoints:
              path: 'bower_components/jquery-waypoints/waypoints.js'
              exports: 'waypoints'

    concat:
      'public/javascripts/app.js': ['public/javascripts/vendor.js', 'public/javascripts/client.js']

    sass:
      dist:
        files:
          'public/stylesheets/main.css': 'public/sass/main.sass'

    watch:
      options:
        livereload: 9011
      livescript:
        files: 'public/livescript/**/*.ls'
        tasks: ['browserify:client', 'concat']
      grunt:
        files: 'Gruntfile.coffee'
      sass:
        files: 'public/sass/**/*.s?ss'
        tasks: ['sass']
      slim:
        files: 'views/**/*.slim'

  grunt.loadNpmTasks('grunt-browserify')
  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-contrib-sass')
  grunt.loadNpmTasks('grunt-contrib-watch')

  grunt.registerTask('default', ['browserify', 'concat', 'sass'])
