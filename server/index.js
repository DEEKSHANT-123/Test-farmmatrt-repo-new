const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const apiRoutes = require("./api.routes");
const Razorpay = require("razorpay");
const crypto = require("crypto");
require("dotenv").config();
const path = require('path');
const app = express();
const multer = require('multer');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));



// Payment getway start /////////////////////////////////////////////////////////
app.post("/order", async (req, res) => {
   try{
    const razorpay = new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_KEY_SECRET
    });
    if(!req.body){
        return res.status(400).send("Bad Request");
    }
    const options = req.body;

    const order = await razorpay.orders.create(options);

    if(!order){
        return res.status(400).send("Bad Request");

    }

    res.json(order);



   }catch(error){
    console.log(error);
    res.status(500).send(error);
   }
});
app.post("/validate", async (req, res) => {

    const {razorpay_order_id, razorpay_payment_id, razorpay_signature} = req.body

    const sha = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET);
    // order_id + " | " + razorpay_payment_id

    sha.update(`${razorpay_order_id}|${razorpay_payment_id}`);

    const digest = sha.digest("hex");

    if (digest!== razorpay_signature) {
        return res.status(400).json({msg: " Transaction is not legit!"});
    }

    res.json({msg: " Transaction is legit!", orderId: razorpay_order_id,paymentId: razorpay_payment_id});
})

//  payment getway end/////////////////////////////////////////////////////////////////////////


//mongodb connection
const DB = 'mongodb+srv://farmart:farmart@cluster0.s2799tv.mongodb.net/FARMART?retryWrites=true&w=majority';
mongoose.connect(DB, {
useNewUrlParser: true,
// useCreateIndex:true,
useUnifiedTopology: true,
// useFindAndModify:false,
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



// add product start/////////////////////////////////////////////////////////////////////
// Multer storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/'); // Destination folder for file uploads
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname); // File name with timestamp
    }
  });
  
  const upload = multer({ storage: storage });

//create schema
const productData= new mongoose.Schema({
    name:String,
    description:String,
    price:String,
    waranty:String,
    category:String,
    quantity:String,
    rating:String,
    image: String
    },{
    timestamps:true,
    });

    // create Model
const productModel=mongoose.model("product",productData)
// Serve images stored in MongoDB
app.use('/images', express.static(path.join(__dirname, 'uploads')));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

  //define get method

  app.listen(5000, ()=> {
    console.log("server is running")
  })



  app.get("/productdetails", async (req, res) => {
    try {
      const products = await productModel.find({}); // Use productModel to find documents
      res.json({ success: true, data: products });
    } catch (error) {
      res.status(500).json({ success: false, message: "Error fetching products", error: error.message });
    }
});




  // Define POST endpoint to add a new product
  app.post("/addproduct", upload.single('image'), async (req, res) => {
    try {
        console.log(req.file); // Log the uploaded file
      const { name, description, price, waranty,category,quantity ,rating} = req.body;
      const image = req.file ? req.file.filename : ''; // Save the filename if an image is uploaded
      const newProduct = new productModel({ name, description, price, waranty,category,quantity, rating,image });
      const savedProduct = await newProduct.save();
      res.status(201).json({ success: true, message: "Product added successfully", data: savedProduct });
    } catch (error) {
      console.error("Error adding product:", error);
      res.status(500).json({ success: false, message: "Error adding product", error: error.message });
    }
  });
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Update a product
app.put("/updateproduct/:id", upload.single('image'), async (req, res) => {
    try {
      const { id } = req.params;
      const { name, description, price, waranty ,category,quantity,rating} = req.body;
      const image = req.file ? req.file.filename : '';
      const updatedProduct = {
        name,
        description,
        price,
        waranty,
        category,
        quantity,
        rating,
        image: req.file ? req.file.filename : '' // Save the filename if an image is uploaded
      };
      const result = await productModel.findByIdAndUpdate(id, updatedProduct, { new: true });
      res.json({ success: true, message: "Product updated successfully", data: result });
    } catch (error) {
      res.status(500).json({ success: false, message: "Error updating product", error: error.message });
    }
  });
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
// Delete a product
app.delete("/deleteproduct/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const result = await productModel.findByIdAndDelete(id);
      res.json({ success: true, message: "Product deleted successfully", data: result });
    } catch (error) {
      res.status(500).json({ success: false, message: "Error deleting product", error: error.message });
    }
  });
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//add product end

//Checkout details start

//create checkout schema
const checkoutSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  address1: { type: String, required: true },
  address2: { type: String },
  city: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  pincode: { type: String, required: true },
  contact: { type: String, required: true },
  total: { type: Number, required: true }
}, { timestamps: true });



app.get("/checkout-details/:id", async (req, res) => {
  try {
      const checkoutDetails = await Checkout.findById(req.params.id);
      if (!checkoutDetails) {
          return res.status(404).json({ success: false, message: "No checkout details found with the provided ID" });
      }
      res.json({ success: true, data: checkoutDetails });
  } catch (error) {
      console.error("Error retrieving checkout details:", error);
      res.status(500).json({ success: false, message: "Error retrieving checkout details", error: error.message });
  }
});

// Inside your main server file or a separate route file

app.post("/submit-checkout", async (req, res) => {
  try {
      const checkoutData = new Checkout(req.body);
      await checkoutData.save();
      res.status(201).json({ success: true, message: "Checkout details saved successfully", data: checkoutData });
  } catch (error) {
      console.error("Error saving checkout details:", error);
      res.status(500).json({ success: false, message: "Error saving checkout details", error: error.message });
  }
});






//checkout details end ///////////////////////////////////////////////////////////




const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
console.log(`Server is running on port ${PORT}`);
}); 