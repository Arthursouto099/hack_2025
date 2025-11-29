import { Router } from "express"
import { setorRouter } from "./setor.router"
import { UsuarioRouter } from "./usuario.router"
import { leitosRouter } from "./leitos.router"



const router = Router()

router.use("/setor", setorRouter)
router.use("/usuario", UsuarioRouter)

router.use("/leito",leitosRouter)

export default router