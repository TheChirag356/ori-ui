test:
	bun run test

registry:
	bun run registry:build

run: registry
	bun run dev

build: generate registry
	bun run build

generate:
	bun run registry:generate
