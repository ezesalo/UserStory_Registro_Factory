import express from 'express'
import registroRouter from '../../usuarios/ruteo/registroRouter.js'


function crearServidor(port){

    const app = express()

    app.use(express.json())

    app.use('/usuarios', registroRouter)

  
    return new Promise((resolve, reject) => {
        const server = app.listen(port)
            .once('error', () => {
                reject(new Error('error al conectarse al servidor'))
            })
            .once('listening', () => {
                server.port = server.address().port
                resolve(server)
            })
    })


}

export { crearServidor }