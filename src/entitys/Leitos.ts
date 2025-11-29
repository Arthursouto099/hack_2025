import { Column, Entity, JoinColumn, JoinTable, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Setor } from "./Setores";
import { Usuario } from "./Usuarios";


@Entity()
export class Leito {
    @PrimaryGeneratedColumn('uuid')
    id_leito: string
    
    @Column({ type: "uuid", nullable: false })
    id_setor: string

    @ManyToOne(() => Setor, (setor) => setor.leitos, {onDelete: "CASCADE"})
    @JoinColumn({name: "id_setor"})
    setor: Setor

    @Column({ type: "uuid", nullable: true })
    id_usuario: string | null

    @OneToOne(() => Usuario, {nullable: true})
    @JoinColumn({name: "id_usuario"})
    usuario: Usuario 


}
