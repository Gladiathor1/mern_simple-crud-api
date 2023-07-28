const mongoose = require('mongoose')

const UrlScehma = new mongoose.Schema({
    urlName:{ type: String, required: true, unique: true }
})

const urlList = mongoose.model("MyUrls",UrlScehma)
module.exports = urlList