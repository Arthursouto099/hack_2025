import { DataSource } from "typeorm";
import "dotenv/config"
import { Leito } from "./entitys/Leitos";
import { Usuario } from "./entitys/Usuarios";
import { Setor } from "./entitys/Setores";


export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "db_centenario",
    synchronize: true,
    logging: true,
    entities: [Leito, Usuario, Setor],
    subscribers: [],
    migrations: [],
})
