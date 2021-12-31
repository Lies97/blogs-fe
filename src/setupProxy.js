const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/articles', {
      target: 'http://us-central1-horizontal-cab-336803.cloudfunctions.net',
      secure: false,
      changeOrigin: true,
      pathRewrite: {
        '^/api/old-path': '/articles', // rewrite path
      }
    })
  );

  app.use(
    createProxyMiddleware('/article', {
      target: 'http://us-central1-horizontal-cab-336803.cloudfunctions.net',
      secure: false,
      changeOrigin: true,
      pathRewrite: {
        '^/api/old-path': '/article', // rewrite path
      }
    })
  );
};
