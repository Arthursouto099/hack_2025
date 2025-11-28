import { DataSource } from "typeorm";
import "dotenv/config"


export const AppDataSource = new DataSource({
    type: "oracle",
    host: "localhost",
    port: 1521,
    username: "test",
    password: "test",
    database: "test",
    synchronize: true,
    logging: true,
    entities: [],
    subscribers: [],
    migrations: [],
})
