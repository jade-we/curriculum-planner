build:
	cd frontend && pnpm build
	ENV=prod go build -buildvcs=false -o ./bin/go-vite ./main.go

dev:
	cd frontend && pnpm dev & ~/go/bin/air && fg	