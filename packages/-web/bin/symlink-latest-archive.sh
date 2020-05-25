#!/bin/sh
pushd $(dirname $0)/../src/routes/archive
ln -sf $(ls * | grep '^[0-9]\+\.md' | sort | tail -n1) latest.md
COUNT=$(ls * | grep '^[0-9]\+\.md' | wc -l)
if [[ "$COUNT" -gt 1 ]]; then
	ln -sf $(ls * | grep '^[0-9]\+\.md' | sort | tail -n2 | head -n1) previous.md
fi
if [[ "$COUNT" -gt 2 ]]; then
	ln -sf $(ls * | grep '^[0-9]\+\.md' | sort | tail -n3 | head -n1) previous--2.md
fi
if [[ "$COUNT" -gt 3 ]]; then
	ln -sf $(ls * | grep '^[0-9]\+\.md' | sort | tail -n4 | head -n1) previous--3.md
fi
if [[ "$COUNT" -gt 4 ]]; then
	ln -sf $(ls * | grep '^[0-9]\+\.md' | sort | tail -n5 | head -n1) previous--4.md
fi
if [[ "$COUNT" -gt 5 ]]; then
	ln -sf $(ls * | grep '^[0-9]\+\.md' | sort | tail -n6 | head -n1) previous--5.md
fi
popd
