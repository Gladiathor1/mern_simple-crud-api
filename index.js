const express = require("express");
const mongoose = require("mongoose");
// const {dbcreate, dbget, dbdel, dbupdate} = require('./mongodb_facade');
const UrlModel = require("./models/urls");
const { db } = require("./models/urls");
const morgan = require("morgan");
require('dotenv').config();
const cors = require("cors")
// const bodyParser = require('body-parser');
// const path = require("path");
// const req = require("express/lib/request");
// const res = require("express/lib/response");
// const bodyParser= require('body-parser');


// app.use(bodyParser.json());

const app = express();

app.use(express.json())
app.use(cors());

// app.use(bodyParser.urlencoded({extended:true}))
//log requests
// app.use(morgan('tiny'))
// app.set("view engine","ejs")
// app,set("views", path.resolve(__dirname,"views/ejs"))
// app.use("/css", express.static(path.resolve(__dirname,"assets/css")))
// app.use("/img", express.static(path.resolve(__dirname,"assets/img")))
// app.use("/js", express.static(path.resolve(__dirname,"assets/js")))


const uri = "mongodb+srv://Jehanzeb:x6mffcZsNOwz63dA@cluster0.doseh.mongodb.net/MyDatabase?retryWrites=true&w=majority";
mongoose.connect(uri,
{
    useNewUrlParser:true,
}
)
const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("mongoose connection successfull")
})

const urlRouter = require("./routes/urls")
app.use('/urls',urlRouter)




// app.put("/", async (req,res) =>{
//     const myUrls = new UrlModel({urlName:"anjelectrotech.com"});

//     try{
//         await myUrls.save();
//         res.send("url added")
//     }catch(err){
//         console.log(err); 
//     }
// })





// app.get('/', (req, res)=>{
//     dbget().then(result =>{
//         res.send(result)
//     })
//     // res.send('hello world')
// })

// app.post('/', (req, res)=>{

//     dbcreate(req.body)
//     res.send('new url added')
// })

// app.put('/', (req,res)=>{
//     dbupdate(req.body)
//     res.send('url updated')

// })

// app.delete('/', (req,res)=>{
//     dbdel(req.body)
//     res.send('url deleted')
// })

// app.get('/', async (req, res)=>{
//     await UrlModel.find({});
// })

app.listen(5000, ()=>{
    console.log('server runnimg')
});