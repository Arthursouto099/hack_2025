import express, { urlencoded } from "express"
import "reflect-metadata"
import "dotenv/config"

const server = express()


server.use(express.json())
server.use(urlencoded({extended: true}))


server.listen(process.env.PORT ?? 3000, () => {
    console.log(`running in http://localhost:${process.env.PORT ?? 3000}`)
})



