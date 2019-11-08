#!/bin/sh
pushd $(dirname $0)/../src/routes/archive
touch "$(date +%Y%m%d).md"
popd
