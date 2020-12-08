// ------------------------- Packages ------------------------------

const HTMLWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

// -----------------------------------------------------------------

module.exports = {
	entry: { index: path.resolve(__dirname, 'src', 'index.tsx') },
	resolve: {
		extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				loader: 'awesome-typescript-loader'
			},
			{
				enforce: 'pre',
				test: /\.js$/,
				loader: 'source-map-loader'
			}
		]
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: './public/index.html'
		})
	]
}
