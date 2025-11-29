import { Column, Entity, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Usuario {
    @PrimaryGeneratedColumn('uuid')
    id_usuario: string

    @Column()
    nome: string
    
    @Column({unique: true, length: 11})
    cpf: string

    @Column()
    numero_telefone: string

    @Column()
    senha: string
}