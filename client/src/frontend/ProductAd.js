import React, { useEffect, useState } from "react";
import ProductForm from "./ProductForm";
import './ProductAd.css';
import axios from "axios";

axios.defaults.baseURL="http://localhost:3001/"

const ProductAd=()=>{
    const [addSection,setAddSection]=useState(false)
    const [editSection,setEditSection]=useState(false)
    //add product
    const [formData,setFormData]=useState({
        name:"",
        description:"",
        price:"",
        waranty:"",

    })

    //edit
    const [formDataEdit,setFormDataEdit]=useState({
        name:"",
        description:"",
        price:"",
        waranty:"",
        _id:""

    })
    const [datalist ,setDataList]=useState([])

    const handleOnChange=(e)=>{
        const {value,name}=e.target
        setFormData((preve)=>{
            return{
                ...preve,
                [name]:value
            }
        })
    }

    const handleSubmit=async(e)=>{
        e.preventDefault()
        const data=await axios.post("/addproduct",formData)
        console.log(data)
        if(data.data.success){
            setAddSection(false)
            alert(data.data.message)
            getFetchData()
            setFormData({
                name:"",
                description:"",
                price:"",
                waranty:"",
            })
        }
    }
//fetch data
    const getFetchData=async()=>{
        const data=await axios.get("/")
        console.log(data)
        if(data.data.success){
            setDataList(data.data.data)
            // alert(data.data.message)
        }

    }

    useEffect(()=>{
        getFetchData()
    },[])

//delete handller
const handleDelete =async(id)=>{
    const data=await axios.delete("/deleteproduct/"+id)
    if(data.data.success){
        getFetchData()
        alert(data.data.message)
    }
}
//Edit/update handller

const handleUpdate=async(e)=>{
    e.preventDefault()
    const data=await axios.put("/updateproduct",formDataEdit)
    if(data.data.success){
        getFetchData()
        alert(data.data.message)
        setEditSection(false)
    }

}

const handleEditOnChange=async(e)=>{
    const {value,name}=e.target
        setFormDataEdit((preve)=>{
            return{
                ...preve,
                [name]:value
            }
        })

}
const handleEdit=(el)=>{
    setFormDataEdit(el)
    setEditSection(true)

}




    return (

        <>
        <div className="container16">
          <button className="btn btn-add" onClick={()=>setAddSection(true)}> Add Product</button>

          {
            addSection && (
                //product add form is here
               <ProductForm
                handleSubmit={handleSubmit}
                handleOnChange={handleOnChange}
                handleclose={()=>setAddSection(false)}
                rest={formData}
               
               />

            )
          }
          {
            editSection && (
                <ProductForm
                handleSubmit={handleUpdate}
                handleOnChange={handleEditOnChange}
                handleclose={()=>setEditSection(false)}
                rest={formDataEdit}
               
               />

            )
          }


{/* //display the product from database */}
<div className="tablecontainer">
    <table>
        <thead>
            <tr>
                <th>Product Name</th>
                <th>Product Description</th>
                <th>Product Price</th>
                <th>Product Waranty</th>
                <th>Action</th>
            </tr>
        </thead>
        
        <tbody>
            {
                datalist[0] ?(
                datalist.map((el)=>{
                    console.log(el)
                    return(
                        <tr>
                            <td>{el.name}</td>
                            <td>{el.description}</td>
                            <td>{el.price}</td>
                            <td>{el.waranty}</td>
                            <td>
                            <button className="btn btn-edit" onClick={()=>handleEdit(el)}>Edit</button>
                    <button className="btn btn-delete" onClick={()=>handleDelete(el._id)}>Delete</button>
                            </td>
                        </tr>
                    )
                }))
                : <p>No data</p>
            }
        </tbody>
    </table>
</div>

   

         


        </div>
        </>
    );
}
export default ProductAd;