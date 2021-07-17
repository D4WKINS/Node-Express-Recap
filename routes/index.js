import express from 'express';

const router = express.Router();// allows us to use router in our server.js

router.get('/',(req,res,next)=>{ // '/' is our default route 
//This callback is required to define our get method, this is executed whenever a request is made to the root of our site
    res.send('Hello World')// res.send as the name suggests sends data to the client/browser
})

export default router