module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['module:react-native-dotenv'],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
        alias: {
          '~components': './src/components',
          '~navigation': './src/navigation',
          '~redux': './src/redux',
          '~screens': './src/screens',
          '~helpers': './src/helpers',
          '~hooks': './src/hooks',
        },
      },
    ],
  ],
};
