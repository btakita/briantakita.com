#!/bin/sh
pushd packages/web && SHOULD_POP=1
npm run export
cp now.json __sapper__/export
now deploy __sapper__/export
now alias briantakitacom.btak.now.sh briantakita.com
now alias briantakitacom.btak.now.sh www.briantakita.com
if [ $SHOULD_POP ]; then popd; fi
