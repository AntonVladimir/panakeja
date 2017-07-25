module.exports = function(grunt){

	grunt.loadNpmTasks("grunt-contrib-less");
	grunt.loadNpmTasks("grunt-autoprefixer");
	grunt.loadNpmTasks('grunt-svgstore');

	grunt.initConfig({
		less:{
			style:{
				files:{
					"css/style.css": ["less/style.less"] 
				}
			}
		},

		autoprefixer:{
			options:{
				browsers:["last 2 version","ie 10"]
			},
			style:{
				src:"css/style.css"
			}
		},

		svgstore: {
    		options: {
      			prefix : 'icon-',
      				svg: {
        				viewBox : '0 0 100 100',
                style: "display: none",
       					xmlns: 'http://www.w3.org/2000/svg'
      				},

      				cleanup: ["fill"],
    		},
    		default: {
    			files: {
    				"image/sprit/svg-sprite.svg": ["image/*.svg"],
    			}, 
    		},
  		},
	});
};