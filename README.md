# MlogJS watch mode template

## Getting Started

before start, you need to download this repository.
use `git clone` or download zip file and unzip it.

first, mlogjs CLI according to [the doc](https://mlogjs.github.io/mlogjs/guide/getting-started.html#local-setup).

```bash
npm i -g mlogjs
```

> [!NOTE]  
> **Yarn** totally not working. it will cause unknown error.

second, set up mlogjs typescript definitions directly.

```
mlogjs setup
```

last, run `watch` script to start watch mode.

```
npm run watch
```

now, when you save [script.ts](./script.ts) file, the source code is compiled and uploaded to logic processor after few seconds with mlogjs-watcher mod.

## References

[MlogJS Doc](https://mlogjs.github.io/mlogjs/)
