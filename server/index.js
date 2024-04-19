const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const apiRoutes = require("./api.routes");

const app = express();
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/FARMART", {
useNewUrlParser: true,
useUnifiedTopology: true,
})
.then(() => {
console.log("Connected to MongoDB");
})
.catch((error) => {
console.error("Error connecting to MongoDB:", error);
});

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json()); // Parse JSON request bodies

app.use("/api", apiRoutes);
// add product start

//create schema
const productData=mongoose.Schema({
    name:String,
    description:String,
    price:String,
    waranty:String,
    },{
    timestamps:true,
    });

    // create Model
const productModel=mongoose.model("farmart_product",productData)
//reading data
//http://localhost:3002/
app.get("/",async(req,res)=>{
const data=await productModel.find({})
res.json({success:true,data:data})
})

app.get("/", (req, res) => {
    res.send('Hello World!');
  });

// create product data || save data in mongodb
//http://localhost:3001/addproduct
app.post("/addproduct",async(req,res)=>{
    console.log(req.body)
    const data=new productModel(req.body)
    await data.save()
    
    res.send({success:true,message:"data save successfully",data:data})
    })

    // Update product data
//http://localhost:3001/updateproduct
app.put("/updateproduct",async(req,res)=>{
    console.log(req.body)
    const {_id,...rest}=req.body
    console.log(rest)
    const data=await productModel.updateOne({_id:_id},rest)
    res.send({success:true,message:"data updated successfully",data:data})
    })
    
//delete product data
//http://localhost:3001/deleteproduct/661abb56f14ec1f60a2cf140
app.delete("/deleteproduct/:id",async(req,res)=>{
    const id=req.params.id
    console.log(id)
    const data=await productModel.deleteOne({_id:id})
    res.send({success:true,message:"data deleted successfully",data:data})
    })

//add product end



const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});