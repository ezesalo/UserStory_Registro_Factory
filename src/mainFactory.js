import {crearServidor} from './ruteo/servidor.js'
import axios from 'axios'

const port = 8080
const servidor = await crearServidor(port)

const socio1 = {
    nombre: 'eze1',
    apellido: 'salo',
    email: 'clubortemail@gmail.com',
    dni: '567777',
    password: 'eze1'
  }

  const socio2 = {
    nombre: 'eze2',
    apellido: 'salo',
    email: 'clubortemail@gmail.com',
    dni: '56111',
    password: 'eze1'
  }

  const socio3 = {
    nombre: 'eze3',
    apellido: 'salo',
    email: 'clubortemail@gmail.com',
    dni: '56111',
    password: 'eze1'
  }
     
    await axios.post(`http://localhost:${port}/usuarios`, socio1)
    console.log('reques completada 1')
  
    await axios.post(`http://localhost:${port}/usuarios`, socio2)
    console.log('reques completada 2')
    
    // //forzar falla
    await axios.post(`http://localhost:${port}/usuarios`, socio3)
    console.log('reques completada 3')
   
 servidor.close()