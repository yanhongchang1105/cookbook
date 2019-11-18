const path = require('path')
const { override, fixBabelImports, addWebpackAlias, setWebpackPublicPath, addDecoratorsLegacy } = require('customize-cra');
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        style: 'css',
    }),
    addWebpackAlias({ //添加别名
        "assets": path.resolve(__dirname, './src/assets/'),
        "components": path.resolve(__dirname, './src/components/'),
        "utils": path.resolve(__dirname, './src/utils/'),
        "pages": path.resolve(__dirname, './src/pages/')
    }),
    addDecoratorsLegacy(),
    // setWebpackPublicPath('http://49.235.247.151:3002')
);