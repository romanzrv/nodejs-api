run-mongodocker:
	docker build -t mongodocker . && docker run -d -p 27017:27017 mongodocker