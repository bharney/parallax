const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  entry: './app/scripts/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader'
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              api: 'modern',
              sassOptions: {
                quietDeps: true,
                silenceDeprecations: ['import', 'global-builtin', 'color-functions', 'legacy-js-api'],
                loadPaths: [path.resolve(__dirname, 'node_modules')]
              }
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]'
        }
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/main.css'
    })
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
    modules: [
      path.resolve(__dirname, 'app'),
      'node_modules'
    ]
  },
  performance: {
    hints: false
  },
  devServer: {
    static: path.join(__dirname, 'app'),
    devMiddleware: {
      publicPath: '/'
    },
    client: {
      overlay: {
        errors: true,
        warnings: false
      }
    },
    compress: true,
    port: 8000,
    hot: true,
    historyApiFallback: true
  }
};
