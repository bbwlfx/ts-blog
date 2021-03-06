const debug = process.env.NODE_ENV === "development";

export default function(app) {
  const ctx = app.context;
  const renderer = ctx.render;
  const proxy = function(locals, options, noCache) {
    const localConfig = {
      DEBUG: debug,
      platform: this.userAgent.isMobile ? "platform-mobile" : "platform-pc",
      isIE: this.userAgent.isIE,
      isSafari: this.userAgent.isSafari,
      isChrome: this.userAgent.isChrome,
      browser: this.userAgent.browser,
      browserVersion: this.userAgent.version
    };
    const mergeLocals = Object.assign(localConfig, locals);
    return renderer.call(this, "index", mergeLocals, options, noCache);
  };
  app.context.render = proxy;
}
