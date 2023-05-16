
const express = require('express')
const router = express.Router()
var bodyParser = require('body-parser')

import { client } from "src/cache/redis.config"

const getAllProducts = async () => {
    const time = Math.random() * 10000

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    id: 1,
                    name: 'Café com Deus Pai',
                    author: 'Junior Rostirola',
                    price: 82.99
                },
                {
                    id: 2,
                    name: 'Mundo de Sofia',
                    author: 'Jostein Gaarder',
                    price: 67.45
                },
                {
                    id: 3,
                    name: 'A Arte da Guerra',
                    author: 'Maquiavel',
                    price: 21.36
                }
            ])
        }, time)
    })
}

router
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())

    .get('/', async (req, res) => {
        const productsFromCache = await client.get('getAllProducts')

        if(productsFromCache) return res.status(200).json(JSON.parse(productsFromCache))

        const products = await getAllProducts();
        await client.set(
            'getAllProducts', 
            JSON.stringify(products
        ), { EX: 10 }) // 10 Segundos

        return res.status(200).json(products)
    })

    .get('/saved', async (req, res) => {
        await client.del('getAllProducts');
        res.send({ ok: true })
    })

module.exports = router
