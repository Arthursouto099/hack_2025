import { AppDataSource } from "../data-source";
import { Usuario } from "../entitys/Usuarios";



export class UsuarioService {
    private repo = AppDataSource.getRepository(Usuario)

    public async createUser(usuario: Omit<Usuario, 'id_usuario'>) {
        try {
            const created = this.repo.create(usuario)
            return this.repo.save(created)
        }

        catch (e: any) {
            throw new Error(e.message)
        }
    }

    public async findByTarget<T extends keyof Usuario>(params?: { target: T, value: Usuario[T] }) {
        try {
            if (!params) return await this.repo.find()

            const { target, value } = params
            return await this.repo.find({ where: { [target]: value } })
        }

        catch (e: any) {
            throw new Error(e.message)
        }
    }


    public async updateById(id_usuario: string, newData: Partial<Usuario>) {
        try {
            await this.repo.createQueryBuilder('usuario')
                .update(Usuario)
                .set(newData)
                .where("usuario.id_usuario = :id", { id: id_usuario})
                .execute()

            return await this.repo.findOneBy({ id_usuario })
        }

        catch (e: any) {
            throw new Error(e.message)
        }
    }


    public async deleteById(id_usuario: string) {
        try {
            const {affected } = await this.repo.createQueryBuilder('usuario')
                .delete()
                .where("usuario.id_usuario = :id", { id: id_usuario })
                .execute()


            if (affected === 0) throw new Error("Nenhum registro afetado")

            return true
        }
        catch (e: any) {
            throw new Error(e.message)
        }
    }

}