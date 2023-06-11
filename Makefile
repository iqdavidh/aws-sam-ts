.PHONY: build-FunctionDependenciesLayer build-lambda-common
.PHONY: build-Function1  build-Function2

build-FunctionDependenciesLayer:
	mkdir -p "$(ARTIFACTS_DIR)/nodejs"
	cp package.json package-lock.json "$(ARTIFACTS_DIR)/nodejs/"
	npm install --production --prefix "$(ARTIFACTS_DIR)/nodejs/"
	rm "$(ARTIFACTS_DIR)/nodejs/package.json" # to avoid rebuilding when changes doesn't relate to dependencies


build-Function1:
	$(MAKE) FDIR=src/f1/*.* build-lambda-common
build-Function2:
	$(MAKE) FDIR=src/f2/*.* build-lambda-common

build-lambda-common:
	rm -rf dist
	echo "{\"extends\": \"./tsconfig.json\", \"include\": [\"${FDIR}\"] }" > tsconfig-only-handler.json
	npm run build -- --build tsconfig-only-handler.json
	cp -r dist "$(ARTIFACTS_DIR)/"
	echo "{\"name\": \"lambda\",\"type\": \"module\"}" > "$(ARTIFACTS_DIR)/package.json"

