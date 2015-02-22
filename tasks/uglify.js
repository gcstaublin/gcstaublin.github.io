module.exports = function(grunt) {
	var jsFiles = ['static/js/test.js', 'static/js/test2.js'];
	grunt.config('uglify', {
		options: {
			banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
			preserveComments: 'some'
		},
		// Dist
		dist: {
			options: {
				  preserveComments: 'some',
				  compress: {
				    drop_console: true
				  }
			},
			files: {
			   'static/js/test.min.js' : jsFiles
			}
		},
		// Dev
		dev: {
			options: {
			  compress: false,
			  beautify: true,
			  mangle: false
			},
			files: {
			  'static/js/test.min.js' : jsFiles
			}
		}

	});
	grunt.loadNpmTasks('grunt-contrib-uglify');
};



