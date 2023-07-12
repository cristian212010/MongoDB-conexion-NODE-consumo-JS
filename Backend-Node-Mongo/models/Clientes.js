import mongoose from "mongoose";

const ClienteSchema = mongoose.Schema(
  {
    Compania: {
      type: String,
      require: true,
      trim: true,
    },
    Contacto: {
      type: String,
      require: true,
      trim: true,
    },
    Titulo: {
      type: String,
      require: true,
      trim: true,
    },
    Direccion: {
      type: String,
      require: true,
      trim: true,
    },
    Ciudad: {
      type: String,
      require: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Cliente = mongoose.model("Cliente", ClienteSchema);

export default Cliente;
