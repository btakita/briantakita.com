#!/bin/bash
pushd packages/-web
symlink-latest-archive.sh
npm run deploy
popd
echo Done build-pages.sh
