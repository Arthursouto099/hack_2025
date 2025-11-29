import { Entity, JoinColumn, JoinTable, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Setor } from "./Setores";
import { Usuario } from "./Usuarios";


@Entity()
export class Leito {
    @PrimaryGeneratedColumn('uuid')
    id_leito: string
    
    @ManyToOne(() => Setor, (setor) => setor.leitos, {onDelete: "CASCADE"})
    setor: Setor

    @OneToOne(() => Usuario)
    usuario: Usuario 
}
