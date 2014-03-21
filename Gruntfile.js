/*global module:false*/
module.exports = function(grunt) {
  grunt.initConfig({
    concat: {
      dist: {
        src: ['js/corpus.js', 'js/source.js'],
        dest: 'js/passive-agressive.js'
      }
    },
    uglify: {
      dist: {
        files: {
          'js/passive-agressive.min.js': 'js/passive-agressive.js'
        }
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      files: ['js/corpus.js', 'js/source.js']
    },
    watch: {
      scripts: {
        files: ['js/*.js'],
        tasks: ['concat', 'jshint', 'uglify'],
        options: {
          spawn: false
        }
      }
    }
  });
  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['concat', 'jshint', 'uglify']);
};
