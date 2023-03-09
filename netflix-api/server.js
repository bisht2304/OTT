const express=require("express");
const cors=require("cors");
const mongoose=require("mongoose");
const userRoutes=require("./routes/UserRoutes")
const app=express();
app.use(cors());
app.use(express.json());

// connectb  mongoose
mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://shubh1234:camera22@cluster0.lifa0aw.mongodb.net/netflix',{
    useNewUrlParser:true,
    useUnifiedTopology:true

},()=>{
    console.log("db connect")
})
app.use("/api/user",userRoutes);

app.listen(8000,()=>{
    console.log("server started")
});