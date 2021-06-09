import express from 'express'
import {crearFactoryRegistro}  from '../../usuarios/negocio/factoryCrearRegistro.js'


const router = express.Router()
const creadorDeRegistro = crearFactoryRegistro()
 
router.post('/', async (req, res, next) => {
    try {
    const usuario = await creadorDeRegistro.ejecutar(req.body)
     res.status(201).json(usuario)
    } catch (error) {
      next(error)
    }
  })

  router.use((error, req, res, next) => {
    if (error.type === 'ERROR_DNI_EN_USO') {
      res.status(400)
    } else if (error.type === 'ERROR_DATOS_INVALIDOS') {
      res.status(400)
    } else if (error.type === 'ERROR_ESTUDIANTE_NO_ENCONTRADO') {
      res.status(404)
    } else {
      res.status(500)
    }
    res.json({ message: error.message })
  })

export default router