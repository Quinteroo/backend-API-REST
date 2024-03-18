import mongoose from 'mongoose'


const conectarDB = async () => {
  try {

    const db = await mongoose.connect(process.env.MONGO_URI)

    const url = `${db.connection.host}:${db.connection.port}`

    console.log(`💚Backend conetado en URL: ${url}`);

  } catch (error) {
    console.log(`🥵ERROR : ${error.message}`);
    process.exit(1)
  }
}

export default conectarDB