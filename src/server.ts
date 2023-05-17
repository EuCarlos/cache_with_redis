// imports
import express from 'express'
import { print } from './routes/functions/printPaths'
import swaggerUI from 'swagger-ui-express'
import swaggerDocsV1 from './docs/v1/swagger.json'
require("dotenv").config()

import { client } from './cache/redis.config'

// controllers
import '@controllers/UsersController'

// routes
const v1Router = require('./routes/v1')
const productsRoutes = require('./routes/v1/products.routes')
const v1Users = require('./routes/v1/users.routes')

import JsonResponse from './concerns/response'

const PORT = process.env.PORT || 3333

const app = express();

app
    .use("/api/v1/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocsV1 ))
    .use('/api/v1/workouts', v1Router)

    // USERS
    .use('/api/v1/sign-in', v1Users)

    // PRODUCTS
    .use('/api/v1/products', productsRoutes)

    .use((req, res) => {
        const pathname = req.originalUrl
        const result = JsonResponse.response(`Can't found this route: ${pathname}`, false)

        res.status(404).json(result);
    })

const startup = async () => {
    await client.connect()

    app.listen(PORT, () => {
        console.log(`🔥 Server is running in PORT ${PORT} - ${process.env.NODE_ENV}`)
    })
}

startup()

console.log("🛣️  ROUTES")
app._router.stack.forEach(print.bind(null, []))

console.log("📚 Documentation is on the route: /api/v1/docs")
