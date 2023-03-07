const express=require("express");
const app=express();
const cors=require("cors");
const mongoose=require("mongoose");
const bodyParser = require("body-parser");
if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}
app.use(cors());
const { json } = require("body-parser");
// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const DB_URL = process.env.DB_URL;

main().then(() => {
    console.log("Connected!!");
}).catch(err => {
    console.log(err)
});

async function main() {
    await mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
}

// Routes
const UserRoutes=require("./Routes/UserRoutes");

app.use('/user',jsonParser,UserRoutes);

app.listen(process.env.PORT,()=>{
    console.log("listening");
})