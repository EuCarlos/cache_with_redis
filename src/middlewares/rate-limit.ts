import { NextFunction, Request, Response } from "express"
import { client } from "src/cache/redis.config"

export const rateLimit = (resource: string, limit = 5) => 
    async (
        req: Request, 
        res: Response, 
        next: NextFunction
    ) => {
    console.log('rateLimit-check')

    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const key = `rate-limit-${resource}-${ip}`
    const requestCount = Number(await client.get(key) || 0) + 1
    await client.set(key, requestCount, { EX: 30 })

    if(requestCount > limit) {
        return res.status(429).json({ error: 'rate-limit'})
    }
    // console.log({ ip, key, requestCount })
    
    next()
}