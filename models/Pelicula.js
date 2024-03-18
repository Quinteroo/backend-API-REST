import mongoose from 'mongoose'

const peliculaSchema = mongoose.Schema({
  _id: {
    type: String,
    required: true,
    trim: true
  },

  nombre: {
    type: String,
    required: true,
    trim: true
  },

  genero: {
    type: String,
    required: true,
    trim: true
  },

  director: {
    type: String,
    required: true,
    trim: true
  },

  fecha: {
    type: Number,
    required: true,
    trim: true
  }
})


const Pelicula = mongoose.model('Pelicula', peliculaSchema, 'pelicula')

export default Pelicula