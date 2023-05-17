const Redis = require('ioredis')

const redis = new Redis()
const batch = 1000

const run = async() => {
    console.time('SET')
    for (let i = 0; i < batch; i++) {
        const value = await redis.set('test1-' + i, 'ola', 'EX', 10, 'GET')
        // console.log(value)
    }
    console.timeEnd('SET')      // <--- 535.59ms

    console.time('PIPELINE')
    const pipeline = redis.pipeline()
    for (let i = 0; i < batch; i++) {
        pipeline.set('test2-' + i, 'ola', 'EX', 10, 'GET')
    }
    const values = await pipeline.exec()
    // console.log(values)
    console.timeEnd('PIPELINE') // <--- 2.74ms
}

run()