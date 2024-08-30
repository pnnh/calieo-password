#!/usr/bin/env -S deno run --allow-env --allow-run --allow-read --allow-write

import {$, cd} from 'https://deno.land/x/zx_deno/mod.mjs'

await $`date`

async function buildApp() {
    await $`npm run build`
    await $`docker build -t calieo-nextjs -f Dockerfile .`

    // 集成环境下重启容器
    await $`docker rm -f calieo-nextjs`
    await $`docker run -d --restart=always \
            --name calieo-nextjs \
            -p 8000:8000 \
            calieo-nextjs`
}

await buildApp()
