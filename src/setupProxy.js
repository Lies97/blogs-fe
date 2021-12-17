const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api/articles', {
      target: 'http://news-crawler-backend.herokuapp.com',
      secure: false,
      changeOrigin: true,
      pathRewrite: {
        '^/api/old-path': '/api/articles', // rewrite path
      }
    })
  );

  app.use(
    createProxyMiddleware('/api/article', {
      target: 'http://news-crawler-backend.herokuapp.com',
      secure: false,
      changeOrigin: true,
      pathRewrite: {
        '^/api/old-path': '/api/article', // rewrite path
      }
    })
  );
};
