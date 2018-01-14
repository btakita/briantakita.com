const {$node__rollup__svelte} = require('ctx-core/svelte/rollup')
module.exports = $node__rollup__svelte({
  input: 'briantakita.com/http.mjs',
  output: {
    file: 'private/dist/briantakita.com.http.js'
  },
  sourceMap: true
})