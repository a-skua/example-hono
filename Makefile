SRC := $(shell find src -type f -name '*.ts')
WIT := $(shell find wit -type f -name '*.wit')

.PHONY: build
build: dist/component.wasm

.PHONY: init
init: node_modules

.PHONY: clean
clean:
	rm -rf dist node_modules

dist/component.wasm: $(SRC) $(WIT) node_modules
	npm run build

node_modules: package-lock.json
	npm ci
