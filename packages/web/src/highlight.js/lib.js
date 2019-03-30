import highlight from 'highlight.js/lib/highlight'
import js__highlight from 'highlight.js/lib/languages/javascript'
import json__highlight from 'highlight.js/lib/languages/json'
import shell__highlight from 'highlight.js/lib/languages/shell'
highlight.registerLanguage('js', js__highlight)
highlight.registerLanguage('json', json__highlight)
highlight.registerLanguage('shell', shell__highlight)
export default highlight
