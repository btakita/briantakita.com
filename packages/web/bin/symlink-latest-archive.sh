#!/bin/sh
pushd $(dirname $0)/../src/routes/archive
ln -sf $(ls * | grep '^[0-9]\+\.html' | sort | tail -n1) latest.html
COUNT=$(ls * | grep '^[0-9]\+\.html' | wc -l)
if [[ "$COUNT" -gt 1 ]]; then
	ln -sf $(ls * | grep '^[0-9]\+\.html' | sort | tail -n2 | head -n1) previous.html
fi
if [[ "$COUNT" -gt 2 ]]; then
	ln -sf $(ls * | grep '^[0-9]\+\.html' | sort | tail -n3 | head -n1) previous-2.html
fi
if [[ "$COUNT" -gt 3 ]]; then
	ln -sf $(ls * | grep '^[0-9]\+\.html' | sort | tail -n4 | head -n1) previous-3.html
fi
if [[ "$COUNT" -gt 4 ]]; then
	ln -sf $(ls * | grep '^[0-9]\+\.html' | sort | tail -n5 | head -n1) previous-4.html
fi
if [[ "$COUNT" -gt 5 ]]; then
	ln -sf $(ls * | grep '^[0-9]\+\.html' | sort | tail -n6 | head -n1) previous-5.html
fi
popd