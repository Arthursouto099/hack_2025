import { Request,Response } from "express";
import LeitosService from "../services/leitos.service";


    class LeitosControllers {
    private services = new LeitosService()

    public create = async (req:Request,res:Response) => {
        try {
            const leito = await this.services.create(req.body)
            res.status(201).json(leito)
        } catch (e:any) {   
            res.status(400).json({message:e.message})
        }
    }

    public list = async(req:Request,res:Response) =>{
        try {
            const leito = await this.services.findAll()
            res.json(leito)
        } catch (e:any) {
            res.status(404).json({message:e.message})
        }
    }

    public  update = async(req:Request,res:Response) =>{
        try {
            const leito = await this.services.update(req.params.id,req.body)
            res.json(leito)
        } catch (e:any) {
            res.status(400).json({message:e.message})
        }
    }

    public delete = async (req:Request,res:Response) =>{
        try {
            const result = await this.services.remove(req.params.id)
            res.json(result)
        } catch (e:any) {
            res.status(404).json({messagem:e.message})
        }
    }
}

const leitoInstancia = new LeitosControllers()

export default leitoInstancia