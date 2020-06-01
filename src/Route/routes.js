const express = require('express')
const router = express.Router()

const generateSSL = require('./generateSSL')

const Route = () => {
    const routes = [
        {
            method: 'get',
            url:    '/generate/ssl/:domain',
            fn:     generateSSL
        }
    ]

    for(let route of routes){

        const { method, url, fn } = route
        router[method](url, fn)

    }

    return router
}

module.exports = Route()