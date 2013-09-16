module.exports = (grunt) ->

  grunt.initConfig
    pkg: grunt.file.readJSON('package.json')
    watch:
      options:
        livereload: 9011
      coffee:
        files: 'public/javascripts/**/*.coffee'
      sass:
        files: 'public/stylesheets/**/*.s?ss'
      slim:
        files: 'views/**/*.slim'

  grunt.loadNpmTasks('grunt-contrib-watch')

  grunt.registerTask('default', ['watch'])
