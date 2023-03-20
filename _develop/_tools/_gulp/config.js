import path from 'path';

const config = {
  develop: {
    documentRoot: path.resolve(__dirname, '../../../dist/'),
    cssSrc: path.resolve(__dirname, '../../../_develop/scss/*.scss'),
    watchCss: path.resolve(__dirname, '../../../_develop/scss/**/*.scss').replace(/\\/g, '/'),
    destCss: path.resolve(__dirname, '../../../dist/'),
    assetsSrc: path.resolve(__dirname, '../../../_develop/assets/**/**.*').replace(/\\/g, '/'),
    watchAssets: path.resolve(__dirname, '../../../_develop/assets/**/**.*').replace(/\\/g, '/'),
    destAssets: path.resolve(__dirname, '../../../dist/assets/')
  }
};

export default config;
