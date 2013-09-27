module.exports = (grunt) ->

  grunt.initConfig
    pkg: grunt.file.readJSON('package.json')
    browserify:
      dist:
        files:
          'public/javascripts/build.js': ['public/coffee/**/*.coffee']
        options:
          debug: true
          transform: ['coffeeify']
    watch:
      options:
        livereload: 9011
      coffee:
        files: 'public/coffee/**/*.coffee'
        tasks: ['browserify']
      sass:
        files: 'public/stylesheets/**/*.s?ss'
      slim:
        files: 'views/**/*.slim'

  grunt.loadNpmTasks('grunt-browserify')
  grunt.loadNpmTasks('grunt-contrib-watch')

  grunt.registerTask('default', ['watch'])
