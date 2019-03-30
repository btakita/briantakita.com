deploy:

	build-pages.sh
	cd build && \
	git add .
	git commit -am "Deploy" && \
	git push