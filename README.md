# hono with wasm

## build

```sh
npm run build
```

### update wit/deps

```sh
wkg wit fetch
```

## run

```sh
wasmtime serve -S cli dist/component.wasm
```
