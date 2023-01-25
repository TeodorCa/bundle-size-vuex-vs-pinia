const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = [
  {
    entry: './src/vuex.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'vuex.bundle.js'
    },
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        reportFilename: 'vuex-bundle-size-report.html',
        openAnalyzer: false,
        statsFilename: 'vuex-bundle-size-report.json',
        generateStatsFile: true,
        statsOptions: null,
        logLevel: 'info'
      })
    ]
  },
  {
    entry: './src/pinia.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'pinia.bundle.js'
    },
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        reportFilename: 'pinia-bundle-size-report.html',
        openAnalyzer: false,
        statsFilename: 'pinia-bundle-size-report.json',
        generateStatsFile: true,
        statsOptions: null,
        logLevel: 'info'
      })
    ]
  }
];
