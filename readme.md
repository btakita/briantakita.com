# btakita.github.io

www.briantakita.com site

## Installation

```
git clone https://github.com/btakita/btakita.github.io.git
git submodule init
git submodule update
```

I recommend using <a href="https://github.com/direnv/direnv" target="_blank">direnv</a>.

## Development

Open a console & run each of the following scripts in it's own tab:

`bin/ensure-watch.sh`

`bin/ensure-watch.sh # Yes call it a second time`

`bin/ensure-server.sh`

By default, server is run on http://localhost:3111

### [pages/build.pages.js](./pages/build.pages.js)

This module builds all of the static pages on briantakita.com. Using <a href="https://buble.surge.sh" target="_blank">buble</a> makes it easy create a parallelized build while avoiding callback hell. The advantage of not using a build tool such as grunt, is it's easier to utilize existing libraries & to reduce <a href="https://www.wikiwand.com/en/No_Silver_Bullet" target="_blank">accidental complexity</a>.
