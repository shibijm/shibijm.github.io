build: install
	$(eval export NEXT_TELEMETRY_DISABLED = 1)
	npm run build

install:
	npm install

clean:
	rm -rf .next node_modules out

lint:
	npm run lint

dev:
	npm run dev
