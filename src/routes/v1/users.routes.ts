const express = require('express')
const router = express.Router()
var bodyParser = require('body-parser')

import { rateLimit } from "src/middlewares/rate-limit"
import JSONResponse from "../../concerns/response"
import { Request, Response } from "express"


router
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())

    .use(rateLimit('app', 8))

    .get('/', rateLimit('home'), async (req: Request, res) => {
        res.json(JSONResponse.response('Request Successfully', true, { message: 'hi!' }))
    })

    .get('/users', rateLimit('users'), async (req, res: Response) => {
        const users = [
            {
                id: "057e9d2a-4b4b-5a69-977f-a1c4b0fe78b6",
                name:"João Silva",
                email:"joao.silva@exemplo.com",
                user:"joaosilva"
            },
            {
                id: "61a6d64e-1432-5ec8-9d46-bfa2ae61e57f",
                name:"Maria Santos",
                email:"maria.santos@exemplo.com",
                user:"msantos"
            },
            {
                id: "50d7f7ba-6f49-5822-af24-9d2bf2d62f5b",
                name:"Pedro Oliveira",
                email:"pedro.oliveira@exemplo.com",
                user:"poliveira"
            },
            {
                id: "dbf5c200-2432-5ffe-a7a0-99fca77aa9fb",
                name:"Ana Souza",
                email:"ana.souza@exemplo.com",
                user:"anasouza"
            },
            {
                id: "11e2a129-c710-53b4-9141-2bfc5c65f13c",
                name:"Fernando Pereira",
                email:"fernando.pereira@exemplo.com",
                user:"fpereira"
            }
        ]
         

        res.json(JSONResponse.response('Request Successfully', true, { users }))
    })

module.exports = router