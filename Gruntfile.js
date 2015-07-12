module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      dist: {
        src: ['_include/js/*.js'],
        dest: '_include/js/build.js',
      }
    },
    		cssmin: {
  			options: {
    			shorthandCompacting: false,
    			roundingPrecision: -1
  			},
  			target: {
    		files: [{
      			expand: true,
      			cwd: '_include/css',
      			src: ['*.css', '!*.min.css'],
      			dest: '_include/cssmin',
      			ext: '.min.css'
    	}]
  	}
},
    uglify: {
      dist: {
        files: [{
      			expand: true,
      			cwd: '_include/js',
      			src: ['*.js', '!*.min.js','!jquery.tweet.js','!jquery.isotope.js', 'jquery.fancybox.pack.js'],
      			dest: '_include/jsmin',
      			ext: '.min.js'
    	}]
      }
    },
    imagemin: {
      options: {
        cache: false
      },

      dist: {
        files: [{
          expand: true,
          cwd: '_include/img/',
          src: ['**/*.{png,jpg,gif}'],
          dest: '_include/img/'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['uglify', 'imagemin','cssmin']);

};