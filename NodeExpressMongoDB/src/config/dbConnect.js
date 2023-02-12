import mongoose from "mongoose"

mongoose.connect("mongodb+srv://alura:mongodb1020@nodeexpress.md0zdvt.mongodb.net/alura-node");
mongoose.set('strictQuery', true);

let db = mongoose.connection;

export default db;