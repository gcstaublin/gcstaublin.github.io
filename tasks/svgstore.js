module.exports = function(grunt) {
  grunt.config('svgstore', {
    options: {
      prefix : 'shape-', // This will prefix each ID
      cleanup: false,
      svg: {
        style: "display: none;"
      }
    },
    default: {
      files: {
        "_includes/svg-defs.svg": ["static/svg/*.svg"]
      }
    },
  });
  grunt.loadNpmTasks('grunt-svgstore');
};

