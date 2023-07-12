import mongoose from "mongoose";

const conectarDB = async () =>{
    try {
        const connectionDB = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        const url = `CONECTADO A MONGODB EN EL SERVER: ${connectionDB.connection.host} - EN PUERTO: ${connectionDB.connection.port}`;
        console.log(url);
    } catch (error) {
        console.log(`${error.message}`);
        process.exit(1);
    }
};

export default conectarDB;