const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
	mode: 'development',
	entry: {
		"style": ["./src/styles/style.scss"]
	},
	devtool: 'source-map',
	output: {
		//insert local relative path
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		new FixStyleOnlyEntriesPlugin(),
		new MiniCssExtractPlugin({
			filename: "[name].css",
			chunkFilename: "[name].min.css"
		})
	],
	module: {
		rules: [
			{
				test: /\.s?css$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					"sass-loader"
				]
			},
		]
	}
};