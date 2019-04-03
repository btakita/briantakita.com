#!/bin/bash
rm -rf build/*
mkdir -p build
pushd packages/web
npm run export
popd
cp -R packages/web/__sapper__/export/* build/
echo Done build-pages.sh