all: run

run:
	NODE_ENV="development" gulp

build:
	NODE_ENV="production" node index.js

test:
	NODE_END="test"
	mocha
