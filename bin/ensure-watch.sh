#!/bin/bash
. ./ctx-core/bin/ensure.sh
function main {
  ensure http-rollup-watch.sh -a btakita.github.io
  ensure pages-watch.sh -a btakita.github.io
}
main