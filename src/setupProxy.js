const proxy = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(
        '/api',
        proxy({
            target: 'http://localhost:5300',
            changeOrigin: true
        })
    );
    app.use(
        '/list',
        proxy({
            target: 'http://localhost:7777',
            changeOrigin: true,
            pathRewrite: {
                '^/list': ''
            }
        })
    );
};