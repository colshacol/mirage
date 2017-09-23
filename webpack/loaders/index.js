import ExtractTextPlugin from 'extract-text-webpack-plugin'

export default [
	{
		test: /\.js$/,
		exclude: /node_modules/,
		use: [
			'babel-loader'
		]
	},
	{
		test: /\.css$/,
		exclude: /node_modules/,
		use: ExtractTextPlugin.extract({
			fallback: "style-loader",
			use: [
				{
					loader: "css-loader",
					options: {
						modules: true,
						importLoaders: 1,
						localIdentName: "[name]_[hash:base64:5]"
					}
				},
				{
					loader: "postcss-loader",
					options: {}
				}
			]
		})
	}
]
