import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Leito } from "./Leitos";

export enum SetorEnum {
    UTI = "UTI",
    LEITO_NORMAL = "LEITO_NORMAL",
    EMERGENCIA = "EMERGENCIA",
    MATERNIDADE = "MATERNIDADE",
    PSIQUIATRICO = "PSIQUIATRICO",
    POS_CIRURGIA = "POS_CIRURGIA"
}


@Entity()
export class Setor {
    @PrimaryGeneratedColumn('uuid')
    id_setor: string


    @Column({default: "SETOR"})
    nome_setor: string

    @Column({
        type: "enum",
        enum: SetorEnum,
    })
    tipo_setor: SetorEnum


    @OneToMany(() => Leito, (leito) => leito.setor)
    leitos: Leito[]
}