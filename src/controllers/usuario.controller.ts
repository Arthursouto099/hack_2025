import { Response, Request, NextFunction } from "express";
import { UsuarioService } from "../services/usuario.service";
import { Usuario } from "../entitys/Usuarios";


class UsuarioController {
    private service = new UsuarioService()


    public create = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const user = await this.service.createUser(req.body)
            res.status(201).json({ message: "User criado com sucesso", data: user })
        }

        catch (e: any) {
            next(e)
        }
    }


    public  update = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const usuario = await this.service.updateById(req.params.id_usuario, req.body)
            res.status(200).json({message: "User Editado com sucesso", data: usuario})
        }

        catch (e: any) {
            next(e)
        }
    }


    public findBy = async (req: Request, res: Response, next: NextFunction) => {
        try {
            if (req.query.target && req.query.value) {
                    const setores = await this.service.findByTarget({
                        target: req.query.target as keyof Usuario,
                        value: req.query.value as string
                    })

                    res.json(setores)
                    return
            }
            res.json(await this.service.findByTarget())
        }

        catch (e: any) {
            next(e)
        }
    }

    public delete = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const setor = await this.service.deleteById(req.params.id_usuario)
            res.status(201).json({ message: "User deletado com sucesso" })
        }

        catch (e: any) {
            next(e)
        }
    }


}

const UsuarioControllerInstance = new UsuarioController()

export default UsuarioControllerInstance
