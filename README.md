# btakita.github.io

www.briantakita.com site

See http://www.briantakita.com/posts/monorepo-static-sites-using-sveltejs-rollup-bash/

## Installation

```shell
git clone https://github.com/btakita/btakita.github.io.git
git submodule init
git submodule update
npm i -g yarn lerna
yarn
```

I recommend using <a href="https://github.com/direnv/direnv" target="_blank">direnv</a>.

## Development

If you have tmux, run:

`tmux-btakita.sh`

Otherwise:

```
cd packages/web
yarn run dev
```

### [pages/build.pages.js](./pages/build.pages.js)

This module builds all of the static pages on briantakita.com. Using <a href="https://buble.surge.sh" target="_blank">buble</a> makes it easy create a parallelized build while avoiding callback hell. The advantage of not using a build tool such as grunt, is it's easier to utilize existing libraries & to reduce <a href="https://www.wikiwand.com/en/No_Silver_Bullet" target="_blank">accidental complexity</a>.

## Deployment

`make`