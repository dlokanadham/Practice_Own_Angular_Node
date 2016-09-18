var path = require('path');
module.exports=function(grunt){
grunt.initConfig({
	 
  
	  express: {
            ssl: {
                options: {
                    port: 57431,
                    hostname: "localhost",
                    bases: 'app'
                }
            }
        }
});

grunt.loadNpmTasks("grunt-contrib-watch");
grunt.loadNpmTasks("grunt-parallel");
grunt.loadNpmTasks('grunt-express');

 grunt.registerTask('ssl-start', [
        'express:ssl',
        'express-keepalive'
    ]);


};
