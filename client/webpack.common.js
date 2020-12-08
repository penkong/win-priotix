// ------------------------- Packages ------------------------------

const HTMLWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

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
			},
			{
				test: /\.(sa|sc|c)ss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					// 'style-loader',
					'css-loader',
					'sass-loader'
				]
			}
		]
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: './public/index.html'
		}),
		new MiniCssExtractPlugin({})
	]
}
