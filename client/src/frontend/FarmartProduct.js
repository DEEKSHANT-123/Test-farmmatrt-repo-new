import React from "react";
import list from "../farmartdata"; // Importing the product list
import Cards from "./Cards";
import './FarmartProduct.css';

const FarmartProduct = ({ handleClick }) => {
  return (
    <>
    
    <section className="abcd">
        {
            list.map((item)=>(
                <Cards item={item} key={item.id} handleClick={handleClick} />
            ))
        }
    </section>
    
    
    </>
  );
};

export default FarmartProduct;
