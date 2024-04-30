import React,{ useState } from "react";
import { IoMdClose } from "react-icons/io";
import './ProductAd.css'

const ProductForm=({handleSubmit,handleOnChange,handleFileInputChange,handleclose,rest})=>{
   
    return(
        <div className="addcontainer">
        <form onSubmit={handleSubmit}>
        <div className="close-btn" onClick={handleclose}><IoMdClose /></div>

            <lable htmlFor="name">Product Name:</lable>
            <input Type="text" id="name" name="name" onChange={handleOnChange} value={rest.name}></input>

            <label htmlFor="description">Product Description:</label>
             <textarea id="description" name="description" onChange={handleOnChange} value={rest.description}></textarea>


            <lable htmlFor="name">Product Price:</lable>
            <input Type="text" id="price" name="price" onChange={handleOnChange} value={rest.price}></input>

            <lable htmlFor="name">Product Warranty:</lable>
            <input Type="text" id="waranty" name="waranty" onChange={handleOnChange} value={rest.waranty}></input>

            <lable htmlFor="name">Product Category:</lable>
            <input Type="text" id="waranty" name="category" onChange={handleOnChange} value={rest.category}></input>

            <lable htmlFor="name">Product Quantity:</lable>
            <input Type="text" id="quantity" name="quantity" onChange={handleOnChange} value={rest.quantity}></input>

            <lable htmlFor="name">Product Rating:</lable>
            <input Type="text" id="rating" name="rating" onChange={handleOnChange} value={rest.rating}></input>



            
        
            {/* <label htmlFor="image">Product Image:</label>
        <input type="file" id="image" name="image" accept="image/*" onChange={handleFileInputChange} /> */}
        <label htmlFor="image">Product Image:</label>
<input type="file" id="image" name="image" onChange={handleFileInputChange}  />


            <button className="btn"> Submit</button>


        </form>
    </div>
    )
}

export default ProductForm;