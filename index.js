import express from "express";
const app = express();
import mongoose from "mongoose";
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
import postRoutes from "./routes/routes.js";
import cors from "cors";
const ori1=process.env.ORIGIN_ONE_KEY;
const ori2=process.env.ORIGIN_ONE_KEY;
const corsOptions ={
    origin:[ori1 ,ori2],
    credentials:true,            
}
app.use(cors(corsOptions));
app.use("/",postRoutes);
const CONNECTION_URL=process.env.MONGO_KEY;
const PORT=process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL, {useNewUrlParser: true , useUnifiedTopology: true})
.then(function(){
    app.listen(PORT,function(){
        console.log("Server is started");
    })
})
.catch(function(error){
    console.log(error.message);
});

