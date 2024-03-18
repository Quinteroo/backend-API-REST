import Pelicula from '../models/Pelicula.js'
//! ENDPOINTS


// endpoint GET que me permite traer todos los documentos de un tipo de colección.
const peliculas = async (req, res) => {
  try {
    const peliculas = await Pelicula.find();
    return res.status(200).json(peliculas)
  } catch (err) {
    return res.status(500).json(err);
  }
}


// endpoint GET que me permite traer un solo elemento por su id de una colección.
const peliculaID = async (req, res) => {
  const id = req.params.id
  try {//                  
    const pelicula = await Pelicula.findById(id)
    if (pelicula) {
      return res.status(200).json(pelicula);
    } else {
      return res.status(404).json('No se ha encontrado la película por ese ID 😅');
    }
  } catch (err) {
    return res.status(500).json(err);
  }
}



// endpoint POST que me permite crear un nuevo elemento en la colección correspondiente.
const create = async (req, res) => {
  try {
    const newPelicula = new Pelicula({
      name: req.body.name,
      age: req.body.age,
      alias: req.body.alias,
      role: req.body.role
    });

    const createdPelicula = await newPelicula.save();
    return res.status(201).json(createdPelicula);
  } catch (error) {
    return res.status(500).json(err);
  }
}

//endpoint PUT que me permite editar un elemento por su id en una colección.
const editar = async (req, res) => {
  try {
    const { id } = req.params
    const peliculaModify = new Pelicula(req.body)
    peliculaModify._id = id
    const peliculaUpdated = await Pelicula.findByIdAndUpdate(id, peliculaModify)
    return res.status(200).json(peliculaUpdated)
  } catch (error) {
    return res.status(500).json(err)
  }
}


// endpoint DELETE que me permite borrar un elemento por su id en una colección.
const borrar = async (req, res) => {
  try {
    const { id } = req.params;
    await Pelicula.findByIdAndDelete(id);
    return res.status(200).json('Película Eliminada!');
  } catch (error) {
    return res.status(500).json(err);
  }
}




export { peliculas, peliculaID, create, editar, borrar }