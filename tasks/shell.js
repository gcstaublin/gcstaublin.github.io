module.exports = function(grunt) {
  grunt.config('shell', {
    options: {

    },

    jekyllServe: {
        command: "jekyll serve"
      },
      jekyllBuild: {
        command: "jekyll build"
    }


  });
  grunt.loadNpmTasks('grunt-shell');
};
