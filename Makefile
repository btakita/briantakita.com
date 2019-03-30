deploy:

	build-pages.sh
	cd build && \
	git commit -m "Deploy" && \
	git push