import {promisify} from 'util'
import {runInThisContext} from 'vm'
import glob from 'glob'
import {readFile
      , writeFile} from 'fs'
import mkdirp from 'mkdirp'
import {dirname, basename, normalize} from 'path'
import marked from 'marked'
import typogr from 'typogr'
import 'svelte/ssr/register'
import posts__page from 'posts.html/posts__page.html'
import post__page from 'posts.html/post__page.html'
import archive__page from 'posts.html/archive__page.html'
import feed__xml from 'posts.html/feed__xml.html'
import sitemap__xml from 'posts.html/sitemap__xml.html'
main()
  .catch(error => console.error(error))
async function main() {
  const posts = await $posts()
      , domain = 'https://briantakita.com'
  await Promise.all([
    write__posts__page(),
    write__post__page(),
    write__archive__page(),
    write__feed__xml(),
    write__sitemap__xml()
  ])
  async function write__posts__page() {
    const html = posts__page.render({posts})
    return promisify(writeFile)('build/index.html', html)
  }
  async function write__post__page() {
    const htmls = []
        , promises__mkdir = []
    for (let i=0; i < posts.length; i++) {
      const post = posts[i]
          , html = post__page.render(post)
          , build__dir = $build__dir(post)
      htmls.push(html)
      promises__mkdir.push(
        promisify(mkdirp)(build__dir)
      )
    }
    await Promise.all(promises__mkdir)
    const promises__writeFile = []
    for (let i=0; i < htmls.length; i++) {
      const build__dir = $build__dir(posts[i])
      promises__writeFile.push(
        promisify(writeFile)(`${build__dir}/index.html`, htmls[i])
      )
    }
    return await Promise.all(promises__writeFile)
  }
  async function write__archive__page() {
    const html = archive__page.render({posts})
    return promisify(writeFile)('build/archive.html', html)
  }
  async function write__feed__xml() {
    const xml =
            [
              '<?xml version="1.0" encoding="utf-8" ?>',
              feed__xml.render({
                posts,
                domain
              })
            ].join('\n')
    return promisify(writeFile)('build/feed.xml', xml)
  }
  async function write__sitemap__xml() {
    const xml =
            [
              '<?xml version="1.0" encoding="utf-8" ?>',
              sitemap__xml.render({
                posts,
                domain
              })
            ].join('\n')
    return promisify(writeFile)('build/sitemap.xml', xml)
  }
  async function $posts() {
    const posts = []
        , paths__source = await promisify(glob)('posts/*.md')
        , promises__markdowns = []
    for (let i=0; i < paths__source.length; i++) {
      const path = paths__source[i]
      promises__markdowns.push(
        promisify(readFile)( path, 'utf-8' )
      )
    }
    const markdowns = await Promise.all(promises__markdowns)
    for (let i=0; i < markdowns.length; i++) {
      const path__source = paths__source[i]
          , path = $path({path__source})
          , markdown = markdowns[i]
          , match = /---\n([\s\S]+?)\n---/.exec( markdown )
          , frontMatter = match[1]
          , content__markdown =
              markdown.slice(match[0].length)
          , content =
              typogr(marked(content__markdown)).typogrify()
          , metadata = $metadata(frontMatter)
          , index__more = content.indexOf('<hr class="more"/>')
      metadata.intro = content.slice(0, index__more)
      posts.push(
        Object.assign(
          {content, path__source, path},
          metadata,
          {date: new Date(metadata.date)})
      )
    }
    return posts.sort((a, b) => b.date - a.date)
  }
  function $build__dir(page={}) {
    return normalize(`build/${$path(page)}`)
  }
  function $path(page={}) {
    const {path__source} = page
    return normalize(`/${dirname(path__source)}/${basename(path__source, '.md')}`)
  }
  function $metadata(frontMatter) {
    const metadata = {}
        , lines = frontMatter.split( '\n' )
    for (let i=0; i < lines.length; i++) {
      const pair = lines[i]
          , colonIndex = pair.indexOf( ':' )
      metadata[ pair.slice( 0, colonIndex ).trim() ] =
        pair.slice( colonIndex + 1 ).trim()
    }
    return metadata
  }
}