import express from 'express'
import { peliculas, peliculaID, create, editar, borrar } from '../controller/peliculaController.js'

const router = express.Router()


// endpoint GET que me permite traer todos los documentos de un tipo de colección.
router.get('/todas', peliculas)

// endpoint GET que me permite traer un solo elemento por su id de una colección.
router.get('/:id', peliculaID)

// endpoint POST que me permite crear un nuevo elemento en la colección correspondiente.
router.post('/create', create)

//endpoint PUT que me permite editar un elemento por su id en una colección.
router.put('/edit/:id', editar)

// endpoint DELETE que me permite borrar un elemento por su id en una colección.
router.delete('/:id', borrar)





export default router