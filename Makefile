
run:
	npm run dev

install:
	npm install 
	npm install tailwind @tailwindcss/vite

create:
	# The current folder was created by running the following command
	# with React as framework and JavaScript as variant.
	npx create-vite@latest .

docker-build:
	docker build -t kanban-board-react:latest .

docker-run:
	docker run -it --rm -p 8080:80 --name kanban-board-react kanban-board-react:latest
