import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/taller-node');
        console.log('Conexión exitosa a MongoDB');
      } catch (error) {
        console.error('Error al conectar a MongoDB:', error);
      }
};

export default connectDB;
