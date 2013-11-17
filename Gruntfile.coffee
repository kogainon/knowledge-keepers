module.exports = (grunt) ->

  grunt.initConfig
    pkg: grunt.file.readJSON('package.json')

    coffee:
      compile:
        files:
          'public/javascripts/client.js': 'public/coffee/main.coffee'

    concat:
      options:
        separator: ';'
      dist:
        dest: 'public/javascripts/all.js'
        src: [
          'bower_components/jquery/jquery.js'
          'bower_components/jquery-ui/ui/jquery-ui.js'
          'bower_components/fullPage.js/vendors/jquery.slimscroll.min.js'
          'bower_components/fullPage.js/jquery.fullPage.js'
          'public/javascripts/client.js'
        ]

    sass:
      dist:
        files:
          'public/stylesheets/main.css': 'public/sass/main.sass'

    watch:
      options:
        livereload: 9011
      coffee:
        files: 'public/coffee/*.coffee'
        tasks: ['coffee', 'concat']
      grunt:
        files: 'Gruntfile.coffee'
      sass:
        files: 'public/sass/**/*.s?ss'
        tasks: ['sass']
      slim:
        files: 'views/**/*.slim'

  grunt.loadNpmTasks('grunt-browserify')
  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-contrib-coffee')
  grunt.loadNpmTasks('grunt-contrib-sass')
  grunt.loadNpmTasks('grunt-contrib-watch')

  grunt.registerTask('default', ['browserify', 'concat', 'sass'])
