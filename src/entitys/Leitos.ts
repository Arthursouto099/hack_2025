import { Entity, JoinColumn, JoinTable, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Setor } from "./Setores";
import { Usuario } from "./Usuarios";


@Entity()
export class Leito {
    @PrimaryGeneratedColumn('uuid')
    id_leito: string
    
    @ManyToOne(() => Setor, (setor) => setor.id_setor)
    setor: Setor


    @ManyToOne(() => Usuario, (usuario) => usuario.id_usuario)
    usuario: Usuario
}