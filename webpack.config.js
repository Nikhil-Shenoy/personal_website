var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: [
		"script!jquery/dist/jquery.min.js",
		"script!foundation-sites/dist/js/foundation.min.js", 
		"./src/main.jsx"
	],
	externals: {
		jquery: 'jQuery'
	},
	plugins: [
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery': 'jquery'
		})
	],
	output: {
		path: __dirname, 
		filename: "./public/bundle.js"
	},
	resolve: {
		root: __dirname,
		alias: {
			Home: 'src/components/Home.jsx',
			TopBar: 'src/components/TopBar.jsx',
			Root: 'src/components/Root.jsx',
			About: 'src/components/About.jsx',
			Blog: 'src/components/Blog.jsx',
			//Main: 'app/components/Main.jsx',
			//Nav:  'app/components/Nav.jsx',
			//Weather: 'app/components/Weather.jsx',
			//WeatherForm: 'app/components/WeatherForm.jsx',
			//About: 'app/components/About.jsx',
			//Example: 'app/components/Example.jsx',
			//WeatherMessage: 'app/components/WeatherMessage.jsx',
			//openWeatherMap: 'app/api/openWeatherMap.jsx',
			//ErrorModal: 'app/components/ErrorModal.jsx'
		},
		extensions: ['','.js', '.jsx'],
	},
	module: {
		loaders: [
			{
				loader: "babel-loader",
				query: {
					presets: ['react', 'es2015']
				},
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/
			}
		]
	},
	devServer: {
		contentBase: path.join(__dirname, "public"),
		port: 3000,
		watchContentBase: true,
		compress: true
	}
}
