import { Response, Request, NextFunction } from "express";
import { SetorService } from "../services/setor.service";
import { Setor } from "../entitys/Setores";



class SetorController {
    private service = new SetorService()


    public create = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const setor = await this.service.createSetor(req.body)
            res.status(201).json({ message: "Setor criado com sucesso", data: setor })
        }

        catch (e: any) {
            next(e)
        }
    }


    public  update = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const setor = await this.service.updateById(req.params.id_setor, req.body)
            res.status(200).json({message: "Setor Editado com sucesso", data: setor})
        }

        catch (e: any) {
            next(e)
        }
    }


    public findBy = async (req: Request, res: Response, next: NextFunction) => {
        try {
            if (req.query.target && req.query.value) {
                    const setores = await this.service.findByTarget({
                        target: req.query.target as keyof Setor,
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
            const setor = await this.service.deleteById(req.params.id_setor)
            res.status(201).json({ message: "Setor deletado com sucesso" })
        }

        catch (e: any) {
            next(e)
        }
    }


}

const SetorControllerIstance = new SetorController()

export default SetorControllerIstance
