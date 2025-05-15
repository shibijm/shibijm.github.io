build:
	npm i
	$(eval export NEXT_TELEMETRY_DISABLED = 1)
	npm run build

clean:
	rm -rf .next node_modules out
