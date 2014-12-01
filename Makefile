deploy:

	rm -rf ./build
	node build.js
	cd ./build && \
	git init . && \
	git add . && \
	git commit -m "Deploy"; \
	git push "git@github.com:btakita/btakita.github.io.git" master:gh-pages --force && \
	rm -rf .git