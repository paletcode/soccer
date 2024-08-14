import express from 'express'
import playerRoutes from './routes/players.routes.js'
import fs from 'fs'

//json import on ES6


const app = express()
app.disable('x-powered-by')
const PORT = process.env.PORT ?? 3000
app.use(playerRoutes)

app.listen(PORT, () =>{
    console.log('listenig on Port');
});

 