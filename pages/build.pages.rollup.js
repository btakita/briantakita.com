const {$node__rollup__svelte} = require('ctx-core/svelte/rollup')
module.exports = $node__rollup__svelte({
  input: 'pages/build.pages.mjs',
  output: {
    file: 'private/dist/build.pages.js'
  }
})