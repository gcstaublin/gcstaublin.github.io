module.exports = function(grunt) {
  grunt.config('shell', {
    options: {

    },

    jekyllServe: {
        command: "jekyll serve --baseurl"
      },
      jekyllBuild: {
        command: "jekyll build"
    }


  });
  grunt.loadNpmTasks('grunt-shell');
};
