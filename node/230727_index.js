import {a, b} from './230727_module.js'

// console.log(a, b)
import http from 'http'
import fs from 'fs'

// const http = require('http')
const server = http.createServer((request, response) => {
    response.writeHead(200)
    // response.write("<h1>Hello World</h1>");
    // response.end("<p>End</p>");

    try {
        const data = fs.readFileSync('./inde11231231x.html')
        response.writeHead(200)
        response.end(data)
    } catch(error) {
        console.log(error)
        response.writeHead(404)
        response.end(error.message)
    }
})

server.listen(8000, function() {
    console.log('localhost: 8000')
})