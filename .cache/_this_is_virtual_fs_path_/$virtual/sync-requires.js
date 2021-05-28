
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-index-tsx": preferDefault(require("/home/brettm/src/github.com/avasara/src/pages/index.tsx")),
  "component---src-pages-science-tsx": preferDefault(require("/home/brettm/src/github.com/avasara/src/pages/science.tsx"))
}

