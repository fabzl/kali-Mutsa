var mozjpeg = require('imagemin-mozjpeg');
var pngquant = require('imagemin-pngquant');
var gifsicle = require('imagemin-gifsicle');

module.exports.tasks = {

	/**
	 * grunt-contrib-imagemin
	 * https://github.com/gruntjs/grunt-contrib-imagemin
	 * Minify PNG, SVG, gif & JPEG images
	 */
	imagemin: {
		images: {
			files: [{
				expand: true,
				cwd: '<%=config.img.srcDir%>/',
				src: ['**/*.{svg,png,jpg,gif}'],
				dest: '<%=config.img.distDir%>'
			}]
		}
	},


	/**
	 * Grunticon
	 * https://github.com/filamentgroup/grunticon
	 */
	grunticon: {
		myIcons: {
			files: [{
				expand: true,
				cwd   : '<%=config.tempDir%>/icons',
				src   : ['*.{svg,png,jpg,gif}'],
				dest  : '<%=config.img.distDir%>/icons'
			}],
			options: {
				// https://github.com/filamentgroup/grunticon#optionscustomselectors
				// customselectors: {
				// 	"arrow": [".icon-arrow:before"]
				// }
			}
		}
	}
};
