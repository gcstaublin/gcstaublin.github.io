module.exports = function (grunt) {
  require('time-grunt')(grunt);

  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json')
  });
  grunt.loadTasks('tasks');

  //register tasks
  grunt.registerTask('dist', ['uglify:dist', 'sass:dist', 'prefix']);
  grunt.registerTask('dev', ['uglify:dev', 'sass:dev', 'prefix']);
  grunt.registerTask('prefix', ['autoprefixer']);
  grunt.registerTask('svg', ['svgstore']);
  grunt.registerTask("serve", ["shell:jekyllServe"]);

  // default
  grunt.registerTask('default', function(){
    grunt.log.writeln('\n*******  RUNNING DEV TASK for -- NOT FOR PRODUCTION  ******');
    grunt.task.run(['watch']);
  });

};
