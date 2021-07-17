// npm install express@4.15.2 --save
import express from 'express'
import router from './../routes/index.js'
const port = process.env.PORT || 3001
const server = express()

server.use(router)
server.listen(port, () =>{// This tells the server to listen for requests on port 3001
    console.log(`Server running on port ${port}`)
})