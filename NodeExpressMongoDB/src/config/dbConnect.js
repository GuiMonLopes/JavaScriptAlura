import mongoose from "mongoose"

mongoose.connect("mongodb+srv://alura:102030@nodeexpress.md0zdvt.mongodb.net/alura-node");
mongoose.set('strictQuery', true);

let db = mongoose.connection;

export default db;