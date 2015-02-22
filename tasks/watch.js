module.exports = function (grunt) {
    var jsFiles = ['static/js/test.js', 'static/js/test2.js'];
    grunt.config('watch', {
        css: {
            files: ['static/scss/*.scss', 'static/scss/base/*.scss'],
            tasks: ['sass:dev', 'prefix'],
            options: {
              livereload: true,
            },
          },

        js: {
            files: [jsFiles],
            tasks: ['uglify:dev']
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
};
