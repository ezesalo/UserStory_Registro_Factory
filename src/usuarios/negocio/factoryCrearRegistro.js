import {crearDaoUsuariosCache} from '../../usuarios/persistencia/daoUsuariosCache.js'
import {crearMailer} from '../../compartido/mail/factoryMailer.js'
import  {crearCURegistro} from './crearRegistro.js'

function crearFactoryRegistro(){
    const mailer = crearMailer()
    const daoUsuarios = crearDaoUsuariosCache()
    const registroFactory = crearCURegistro(daoUsuarios, mailer)
    return registroFactory
}

export {crearFactoryRegistro}