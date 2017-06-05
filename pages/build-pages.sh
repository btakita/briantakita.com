#!/bin/bash
rm -f ./private/dist/build.pages.js
rm -rf build/*
mkdir -p build
cp -R public/* build/
rollup -c ./pages/build.pages.rollup.js
node ./private/dist/build.pages.js
echo Done build-pages.sh
cat