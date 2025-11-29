import { Entity, JoinColumn, JoinTable, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Setor } from "./Setores";
import { Usuario } from "./Usuarios";


@Entity()
export class Leito {
    @PrimaryGeneratedColumn('uuid')
    id_leito: string
    
    @ManyToOne(() => Setor, (setor) => setor.leitos, {onDelete: "CASCADE"})
    setor: Setor


    @ManyToOne(() => Usuario, (usuario) => usuario.leitos, {onDelete: "CASCADE"})
    usuario: Usuario 
}