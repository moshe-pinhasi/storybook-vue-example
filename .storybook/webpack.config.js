const path = require("path");

module.exports = (baseConfig, env, defaultConfig) => {
    baseConfig.module.rules.push({
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader', {
            loader: 'style-resources-loader',
            options: {
                patterns: [
                    path.resolve(__dirname, '../src/assets/variables.scss'),
                ]
            }
        }],
        include: path.resolve(__dirname, "../src/")
      });

    return baseConfig;
  };