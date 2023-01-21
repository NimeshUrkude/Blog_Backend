import express from "express";
const app = express();
import mongoose from "mongoose";
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
import postRoutes from "./routes/routes.js";
import cors from "cors";
const corsOptions ={
    origin:["http://localhost:3000" ,"https://nimeshurkude.github.io"],
    credentials:true,            
}
app.use(cors(corsOptions));
app.use("/",postRoutes);
const CONNECTION_URL="mongodb+srv://LDEserver:itisLDEserver@cluster0.poa842s.mongodb.net/Blog?retryWrites=true&w=majority"; //req change
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

