import express from 'express'
import playerRoutes from './routes/players.routes.js'


const app = express()
app.disable('x-powered-by')
app.use(express.json())

const PORT = process.env.PORT ?? 3000
app.use(playerRoutes)

app.listen(PORT, () =>{
    console.log('listenig on Port');
});

 