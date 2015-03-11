module.exports = function(grunt) {
	grunt.config('sass', {
		options: {

		},
		// Dist
		dist: {
			options: {
			  style: 'compressed',
			  sourcemap: 'auto'
			},
			files: {
			  'static/css/screen.css': 'static/scss/screen.scss'
			}
		},
		// Dev
		dev: {
			options: {
			  style: 'expanded',
			  sourcemap: 'auto'
			},
			files: {
			  'static/css/screen.css' : 'static/scss/screen.scss'
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
};
