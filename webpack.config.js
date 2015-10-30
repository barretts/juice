module.exports = {
	entry: './lib/embedded.js',
	module: {
		loaders: [
			{ test: /\.json$/, loader: 'json'}
		]
	},
	output: {
		filename: 'bundle.js',
	}
};