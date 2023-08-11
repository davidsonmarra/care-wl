const {BRAND} = require('./env');

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          imageScale: ['@2x', '@3x'],
          imageTypes: ['.png', '.gif', '.jpg', '.jpeg'],
          alias: {
            '@assets': `./src/assets`,
            '@assetsBrand': `./src/assets/${BRAND}`,
            '@components': './src/components',
            '@global': './src/global',
            '@helpers': './src/helpers',
            '@modules': './src/modules',
            '@presentational': './src/presentational',
            '@server': './src/server',
            '@types': './src/types',
          },
        },
      ],
    ],
  };
};
