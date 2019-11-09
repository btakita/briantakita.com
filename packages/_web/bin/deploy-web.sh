#!/bin/sh
pushd packages/_web && SHOULD_POP=1
npm run export
cp now.json __sapper__/export
now --prod __sapper__/export
if [ $SHOULD_POP ]; then popd; fi
