import { Column, Entity, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Leito } from "./Leitos";


@Entity()
export class Usuario {
    @PrimaryGeneratedColumn('uuid')
    id_usuario: string
    
    @Column({unique: true, length: 11})
    cpf: string

    @Column()
    numero_telefone: string

    @Column()
    senha: string

    @OneToOne(() => Leito, (leito) => leito.usuario) 
    leito: Leito
}