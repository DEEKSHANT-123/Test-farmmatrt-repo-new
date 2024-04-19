import React from "react";
import { IoMdClose } from "react-icons/io";
import './ProductAd.css'

const ProductForm=({handleSubmit,handleOnChange,handleclose,rest})=>{
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

            <lable htmlFor="name">Product Waranty:</lable>
            <input Type="text" id="waranty" name="waranty" onChange={handleOnChange} value={rest.waranty}></input>
            <button className="btn"> Submit</button>

        </form>
    </div>
    )
}

export default ProductForm;


//jejdwiujdHFIJVO'IUUFJNOU