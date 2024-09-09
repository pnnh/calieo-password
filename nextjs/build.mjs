import {$, cd} from 'zx'

await $`date`

async function buildApp() {
    await $`npm run build`
    await $`docker build -t calieo-password -f Dockerfile .`

    // 集成环境下重启容器
    await $`docker rm -f calieo-password`
    await $`docker run -d --restart=always \
            --name calieo-password \
            -p 8003:8003 \
            calieo-password`
}

await buildApp()
