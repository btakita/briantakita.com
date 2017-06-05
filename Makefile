deploy:

	rm -rf ./build
	build-pages.sh
	rm -rf build/.git
	cd build && \
	git init . && \
	git add . && \
	git commit -m "Deploy"; \
	git push "git@github.com:btakita/btakita.github.io.git" master:master --force