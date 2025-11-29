import { AppDataSource } from "../data-source";
import { Leito } from "../entitys/Leitos";


export default  class LeitosService {
    private repo = AppDataSource.getRepository(Leito)

     public async create(data: Omit<Leito, 'id_leito'>){
        try {
            const Leito = this.repo.create({
                ...data
            })
            return await this.repo.save(Leito)
        }

        catch(e: any) {
            console.log(e)
            throw  new Error("Este leito já existe")
        }
    }

    public async findAll(){
        const leito = await this.repo.find({relations: ["usuario", "setor"]});

        return leito.map(u => {
            const clone:any = {...u}

            return clone
        })
    }

    public async update (id_leito: string, newData: Partial<Leito>){
        try {
            const newLeito = await this.repo.createQueryBuilder().update(Leito).set(newData).where("id_leito = id",{id: id_leito}).execute();

            return await this.repo.findOneBy({id_leito})
        } catch (e:any) {
            throw new Error("Falha ao atualizar o leito")
        }
    }

    public async remove(id_leito:string){
        const leito =  await  this.repo.findOne({where:{id_leito}})

        try {
            await this.repo.createQueryBuilder().delete().from(Leito).where("id_leito = :id", {id: id_leito}).execute();

            return {message:"Leito deletado com sucesso"}

        } catch (e:any) {
            throw new Error("Erro ao deleta leito")
        }


    }


}