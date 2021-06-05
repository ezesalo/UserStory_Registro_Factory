import {crearDaoUsuariosCache} from '../persistencia/daoUsuariosCache.js'
import {crearEnviadorDeMails} from './crearEnviadorDeMails.js'
import  {crearCURegistro} from './crearRegistro.js'



function crearFactoryRegistro(){
    const credenciales = {user: 'clubortemail@gmail.com', pass:'wmhxyrhimevxswoz'}
    const mailer = crearEnviadorDeMails(credenciales.user, credenciales.pass)
    const daoUsuarios = crearDaoUsuariosCache()
    const registroFactory = crearCURegistro(daoUsuarios, mailer)
    return registroFactory
}

export {crearFactoryRegistro}