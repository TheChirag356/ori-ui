test:
	bun run test

registry:
	bun run registry:build

run: registry
	bun run dev