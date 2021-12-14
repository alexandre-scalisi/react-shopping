import mongoose from "mongoose";

const connection = {};

const connect = async () => {
  if (connection.isConnected) return;

  if (mongoose.connection.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;
    if (connection.isConnected === 1) return;
    await mongoose.disconnect();
  }
  const db = await mongoose.connect(process.env.MONGODB_HOST);

  connection.isConnected = db.connections[0].readyState;
};

const disconnect = async () => {
  if (connection.isConnected) {
    await mongoose.disconnect();
  }
};

const db = { connect, disconnect };

export default db;
