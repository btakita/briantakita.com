#!/bin/bash
rm -rf private/dist/*.js
rm -rf build/*
mkdir build
cp -R public/* build/
rollup -c ./build.svelte.rollup.js
node ./private/dist/build.svelte.js