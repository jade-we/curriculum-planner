build:
	cd frontend && pnpm build
	ENV=prod go build -buildvcs=false -o ./bin/go-vite ./main.go

dev:
	cd frontend && pnpm dev & air && fg	

db:
	docker compose up -d

td:
	docker stop postgres_curriculum_dev