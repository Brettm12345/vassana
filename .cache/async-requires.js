// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-index-tsx": () => import("./../../../src/pages/index.tsx" /* webpackChunkName: "component---src-pages-index-tsx" */),
  "component---src-pages-science-tsx": () => import("./../../../src/pages/science.tsx" /* webpackChunkName: "component---src-pages-science-tsx" */)
}

