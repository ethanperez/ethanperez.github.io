module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'style.css': 'styles/style.scss'
        }
      }
    },
    watch: {
      css: {
        files: ['styles/**.scss'],
        tasks: ['sass'],
        options: {
          spawn: false,
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass']);
  grunt.registerTask('dev', ['sass', 'watch']);
}


