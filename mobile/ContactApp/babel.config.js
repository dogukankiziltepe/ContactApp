module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@constants': './src/constants',
          '@config': './src/config',
          '@i18n': './src/i18n',
          '@store': './src/store',
          '@helpers': './src/helpers',
          '@screens': './src/screens',
          '@services': './src/services',
          '@navigation': './src/navigation',
          '@library': './src/library',
          '@types': './src/types',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
