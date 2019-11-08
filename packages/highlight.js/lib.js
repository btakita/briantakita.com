import hljs from 'highlight.js/lib/highlight'
import js__highlight from 'highlight.js/lib/languages/javascript'
import ts__highlight from 'highlight.js/lib/languages/typescript'
import json__highlight from 'highlight.js/lib/languages/json'
import shell__highlight from 'highlight.js/lib/languages/shell'
hljs.registerLanguage('javascript', js__highlight)
hljs.registerLanguage('js', js__highlight)
hljs.registerLanguage('typescript', ts__highlight)
hljs.registerLanguage('ts', ts__highlight)
hljs.registerLanguage('json', json__highlight)
hljs.registerLanguage('shell', shell__highlight)
export { hljs }
