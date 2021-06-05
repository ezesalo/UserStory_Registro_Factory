import express from 'express'
import {crearFactoryRegistro}  from '../../negocio/factoryCrearRegistro.js'


const router = express.Router()
const creadorDeRegistro = crearFactoryRegistro()
 
router.post('/', async (req, res) => {     
        
        await creadorDeRegistro.ejecutar(req.body)
        res.json({ msg: 'ok' })          
    } 
)

export default router