const mongoose = require("mongoose");
const express = require("express");
const app = express();
require("dotenv").config();

const DB = process.env.DB

<<<<<<<<< Temporary merge branch 1
mongoose.connect(`mongodb+srv://firasazzebi66:${DB}@cluster0.z3mogai.mongodb.net/beatbones?retryWrites=true&w=majority`).then(()=>console.log('connected to the database')).catch((err)=>console.log(err))
=========
mongoose.connect(`mongodb+srv://firasazzebi66:${DB}@cluster0.z3mogai.mongodb.net/?retryWrites=true&w=majority`).then(()=>console.log('connected to the database')).catch((err)=>console.log(err))
>>>>>>>>> Temporary merge branch 2

app.use(express.json());

app.use(require("./Routes/Users/index"));

app.listen(5000, (err) => {
  if (err) throw err;
  console.log("server is up");
});
