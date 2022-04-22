install: 
	npm ci

brain-games:
	node bin/brain-games.js	

brain-even:
	node bin/brain-even.js	

publish:
	npm publish --dry-run

lint: 
	node_modules/.bin/eslint .
