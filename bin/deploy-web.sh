#!/bin/sh
pushd packages/web
npm run export
cp now.json __sapper__/export
now deploy __sapper__/export
now alias briantakitacom.btak.now.sh briantakita.com
now alias briantakitacom.btak.now.sh www.briantakita.com
popd