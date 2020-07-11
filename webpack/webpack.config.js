const miniCssExtPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
	output: {
		path: path.resolve(__dirname, 'static/js'),
		filename: "main.js"
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					{
						loader: miniCssExtPlugin.loader,
						options: {
							publicPath: '/static/css/'
						}
					},
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1	
						}
					},
					{
						loader: 'sass-loader',
						options: {
							sassOptions: {
								outputStyle: 'compressed'
							}
						}
					}
				]
			}
		]
	},
	plugins: [
		new miniCssExtPlugin()
	]
}

