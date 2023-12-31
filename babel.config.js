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
            '@screens': './src/routes/screens',
            '@stacks': './src/routes/stacks',
            '@server': './src/server',
            '@store': './src/store',
            '@routes': './src/routes',
            '@types': './src/types',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
