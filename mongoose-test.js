const mongoose = require('mongoose')
const connectionString = "mongodb+srv://fbsroot:fbs%40123@cluster0.wvb02ep.mongodb.net/test"
mongoose.connect(connectionString)
.then(()=>{
    console.log("Connection established successfuly...")
})
.catch(()=>{
    console.log("Error Connecting...")
})

//mongodb+srv://fbsroot:fbs%40123@cluster0.wvb02ep.mongodb.net/test