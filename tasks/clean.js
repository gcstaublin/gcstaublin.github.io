module.exports = function(grunt) {
	grunt.config('clean', {
		css: ['static/css'],
	    js: ['static/js/*.min.js']
	});
	grunt.loadNpmTasks('grunt-contrib-clean');
};
