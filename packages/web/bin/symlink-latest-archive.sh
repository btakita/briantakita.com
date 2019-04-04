#!/bin/sh
pushd $(dirname $0)/../src/routes/archive
ln -sf $(ls * | grep [0-9]*\.html | sort | tail -n1) latest.html
popd