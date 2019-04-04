#!/bin/bash
rm -rf build/*
mkdir -p build
pushd packages/web
symlink-latest-archive.sh
npm run export
popd
cp -R packages/web/__sapper__/export/* build/
echo Done build-pages.sh