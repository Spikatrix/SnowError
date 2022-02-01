/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: [
    ['@snowpack/plugin-typescript', {
      // Yarn PnP workaround
      // https://www.npmjs.com/package/@snowpack/plugin-typescript
      ...(process.versions.pnp ? { tsc: 'yarn pnpify tsc' } : {}),
    }],
    './resolveProxyImports-plugin.js',
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2020',
  },
  devOptions: {
    open: 'none',
  },
  alias: {
    "~": "./src",
  },
};
