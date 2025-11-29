import express, { urlencoded } from "express"
import "reflect-metadata"
import "dotenv/config"
import { AppDataSource as app } from "./src/data-source"
import router from "./src/routes/router"

const server = express()


server.use(express.json())
server.use(router)
server.use(urlencoded({ extended: true }))



app.initialize().then(() => {
    server.listen(process.env.PORT ?? 3000, () => {
        console.log(`running in http://localhost:${process.env.PORT ?? 3000}`)
    })
}).then(() => console.log("error at connect to database"))




