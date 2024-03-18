import express from 'express'
import dotenv from 'dotenv'
import conectarDB from './config/db.js';
import peliculaRoutes from './routes/peliculaRoutes.js'



const app = express()
dotenv.config()
conectarDB()

app.use(express.json()); // Estas son funciones propias de express que transforman la información enviada como JSON al servidor de forma que podremos obtenerla en req.body.
app.use(express.urlencoded({ extended: false }));


app.use('/api/peliculas', peliculaRoutes)

const PORT = process.env.PORT || 5000

app.listen(5000, () => {
  console.log(`Servidor funcionando en el puerto ${PORT}👹`);
});