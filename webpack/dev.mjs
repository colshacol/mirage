import { resolve } from 'path'
import loaders from './loaders'
import plugins from './plugins'
import webpack from 'webpack'

export default {
	devtool: 'eval',
	context: resolve(__dirname, './source'),
	entry: resolve(__dirname, '../source/index.js'),

  output: {
    filename: 'js/index.js',
    path: resolve(__dirname, '../build')
  },

  module: {
    rules: [ ...loaders ]
	},

	resolve: {
    modules: [resolve(__dirname, '../node_modules')],
    extensions: ['.js', '.json', '.jsx', '.css'],
    alias: {
      '@comps': resolve(__dirname, '../source/comps'),
			'@styles': resolve(__dirname, '../source/styles'),
			'@utils': resolve(__dirname, '../source/utils'),
			'@packages': resolve(__dirname, '../source/packages'),
			'@scenes': resolve(__dirname, '../source/scenes'),
    }
	},

	plugins: [
		...plugins,
		new webpack.HotModuleReplacementPlugin()
	],

	devServer: {
    hot: true,
    overlay: true,
		lazy: false,
    contentBase: resolve(__dirname, '../build')
  }
}
