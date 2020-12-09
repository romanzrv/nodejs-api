install-dependencies:
	npm i

run-mongodocker:
	docker build -t mongodocker . && docker run -d -p 27017:27017 mongodocker

run-express-app:
	cd src/ && ../node_modules/.bin/nodemon App.ts

run-app: install-dependencies run-mongodocker run-express-app