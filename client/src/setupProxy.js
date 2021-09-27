const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/get_current_user", {
      target: "http://localhost:8080",
    })
  );
  app.use(
    createProxyMiddleware("/logout", { target: "http://localhost:8080" })
  );
};
