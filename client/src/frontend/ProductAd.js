import React, { useEffect, useState } from "react";
import ProductForm from "./ProductForm";
import './ProductAd.css';
import axios from "axios";

axios.defaults.baseURL="http://localhost:5000/"


const ProductAd=()=>{
    const [addSection,setAddSection]=useState(false)
    const [editSection,setEditSection]=useState(false)
    //add product
    const [formData,setFormData]=useState({
        name:"",
        description:"",
        price:"",
        waranty:"",
        image: null // Initialize image state

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/addproduct", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data);
            if (response.data.success) {
                setAddSection(false);
                alert(response.data.message);
                getFetchData();
                setFormData({
                    name: "",
                    description: "",
                    price: "",
                    waranty: "",
                    image: ""
                });
            }
        } catch (error) {
            console.error("Error adding product:", error);
            // Handle error, show error message, etc.
        }
    }
    
// //fetch data
//     const getFetchData=async()=>{
//         const data=await axios.get("/")
//         console.log(data)
//         if(data.data.success){
//             setDataList(data.data.data)
//             // alert(data.data.message)
//         }

//     }

const getFetchData = async () => {
    try {
        const response = await axios.get("http://localhost:5000/productdetails");
        console.log(response.data); // Log response data to verify
        if (response.data.success) {
            setDataList(response.data.data);
            // alert(response.data.message);
        }
    } catch (error) {
        console.error("Error fetching data:", error); // Log any errors
        // Handle error gracefully (e.g., show error message to user)
    }
};


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

// const handleUpdate=async(e)=>{
//     e.preventDefault()
//     const data=await axios.put("/updateproduct",formDataEdit)
//     if(data.data.success){
//         getFetchData()
//         alert(data.data.message)
//         setEditSection(false)
//     }

// }

// const handleUpdate = async (e) => {
//     e.preventDefault();
//     const { _id, ...rest } = formDataEdit; // Extract the ID from formDataEdit
//     const data = await axios.put(`/updateproduct/${_id}`, rest); // Include the ID in the URL and send the rest of the data
//     if (data.data.success) {
//         getFetchData();
//         alert(data.data.message);
//         setEditSection(false);
//     }
// }


const handleUpdate = async (e) => {
    e.preventDefault();
    console.log(formDataEdit);
    const { _id, ...rest } = formDataEdit;
    const formDataWithImage = new FormData();

    // Append other form data fields
    formDataWithImage.append('name', formDataEdit.name);
    formDataWithImage.append('description', formDataEdit.description);
    formDataWithImage.append('price', formDataEdit.price);
    formDataWithImage.append('waranty', formDataEdit.waranty);
    formDataWithImage.append('image', formDataEdit.image);
    
    const data = await axios.put(`/updateproduct/${_id}`, formDataWithImage);
    if (data.data.success) {
        getFetchData();
        alert(data.data.message);
        setEditSection(false);
    }
};






const handleEditOnChange=async(e)=>{
    const {value,name,files}=e.target
    if (name === 'image') {
        setFormDataEdit((prevFormData) => ({
            ...prevFormData,
            image: files[0] // Update the image with the selected file
        }));
    } else {
        setFormDataEdit((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    }

}
const handleEdit=(el)=>{
    setFormDataEdit({
        ...el,
        image: el.image // Include the image data in formDataEdit
    });
    setEditSection(true)

}


const handleFileInputChange = (e) => {
    const file = e.target.files[0];
   setFormData((prevFormData) => ({
       ...prevFormData,
       image: file // Set the image file in the formData state
    }));
 };

    return (

        <>
        <div className="container16">
          <button className="btn btn-add" onClick={()=>setAddSection(true)}> Add Product</button>

          {
            addSection && (
                //product add form is here
               <ProductForm
                handleSubmit={handleSubmit}
                handleFileInputChange={handleFileInputChange}
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
                handleFileInputChange={handleFileInputChange}
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
                <th>Product Warranty</th>
                <th>Product Image</th>
                <th>Action</th>
            </tr>
        </thead>
        
        <tbody>
            {
                datalist[0] ?(
                datalist.map((el)=>{
                    console.log(el)
                    return(
                        <tr key={el._id}>
                            <td>{el.name}</td>
                            <td>{el.description}</td>
                            <td>{el.price}</td>
                            <td>{el.waranty}</td>
                            <td style={{ backgroundColor: "lightgray" }}>
                            <img src={`http://localhost:5000/images/${el.image}`} alt={el.name} 
                            width="500px"
                            height="250px" 
                            style={{ border: "1px solid black" }}                          
                            />
              
                            </td>
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