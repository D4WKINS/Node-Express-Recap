import express from 'express';

const router = express.Router();// allows us to use router in our server.js

router.get('/',(req,res,next)=>{
    res.send('Hello World')// res.send as the name suggests sends data to the client/browser
})

export default router