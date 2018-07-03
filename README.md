## AppRun Example - Share AppRun Globally

HTML:

```html
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>AppRun</title>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
</head>
<body>
  <div id="main"></div>
  <script src="https://unpkg.com/apprun@latest/dist/apprun.js"></script>
  <script src="home.js"></script>
  <script src="about.js"></script>
  <script src="contact.js"></script>
  <script src="app.js"></script>
</body>
</html>
```

Webpack:
```JavaScript
const path = require('path');
module.exports = {
  entry: {
    'app': './main.tsx',
    'home': './Home.tsx',
    'about': './About.tsx',
    'contact': './contact.tsx'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname)
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      { test: /.tsx?$/, loader: 'ts-loader' },
      { test: /\.js$/, use: ["source-map-loader"], enforce: "pre" }
    ]
  },
  externals: {
    apprun: 'apprun'
  },
  devServer: {
    open: true
  },
  devtool: 'source-map'
}
```


* Use _npm start_ to start the dev server
* Use _npm run build_ to build for production
