// ------------------------- Packages ------------------------------

const { merge } = require('webpack-merge')

// ------------------------ Local ----------------------------------

const commonConfig = require('./webpack.common')

// -----------------------------------------------------------------

const devConfig = {
	mode: 'development',
	devServer: {
		port: 3000,
		historyApiFallback: {
			index: 'index.html'
		}
	}
}

// -----------------------------------------------------------------

module.exports = merge(commonConfig, devConfig)
