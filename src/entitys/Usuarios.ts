import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { v4 as uuid} from "uuid"
import { Leito } from "./Leitos";


@Entity()
export class Usuario {
    @PrimaryColumn({default: uuid()})
    id_usuario: string
    
    @Column({unique: true, length: 11})
    cpf: string

    @Column()
    numero_telefone: string

    @Column()
    senha: string

    @OneToMany(() => Leito, (leito) => leito.usuario) 
    leitos: Leito[]
}