import { Router } from "express"
import { setorRouter } from "./setor.router"



const router = Router()

router.use("/setor", setorRouter)


export default router