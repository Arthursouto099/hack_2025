import { AppDataSource } from "../data-source";
import { Setor } from "../entitys/Setores";

export class SetorService {
    private repo = AppDataSource.getRepository(Setor)

    public async createSetor(setor: Omit<Setor, 'id_setor'>) {
        try {
            const created = this.repo.create(setor)
            return this.repo.save(created)
        }

        catch (e: any) {
            throw new Error(e.message)
        }
    }

    public async findByTarget<T extends keyof Setor>(params?: {target: T, value: Setor[T]}) {
        try {
            if(!params) return await this.repo.find({relations: ['leitos']})

            const {target, value} = params
            return await this.repo.find({ where: {[target]: value}, relations: ["leitos"] })
        }

        catch (e: any) {
            throw new Error(e.message)
        }
    }

    
    public async updateById(id_setor: string, newData: Partial<Setor>) {
        try {
            await this.repo.createQueryBuilder('setor')
                .update(Setor)
                .set(newData)
                .where("setor.id_setor = :id", { id: id_setor })
                .execute()

            return await this.repo.findOneBy({ id_setor })
        }

        catch (e: any) {
            throw new Error(e.message)
        }
    }


    public async deleteById(id_setor: string) {
        try {
            const {affected} = await this.repo.createQueryBuilder('setor')
                .delete()
                .where("setor.id_setor = :id", { id: id_setor })
                .execute()
                

            if(affected === 0) throw new Error("Nenhum registro afetado")
            
            return true
        }
        catch (e: any) {
            throw new Error(e.message)
        }
    }


}



