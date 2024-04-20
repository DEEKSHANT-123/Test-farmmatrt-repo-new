import React from "react";
import styled from "styled-components";
import "./Product.css";

const SingleProduct = () => {
  return (
    <Wrapper>
      <section className="container">
        <div className="product-data">
          {/* Product data */}
        </div>
        <div className="product-images">
          {/* Product images */}
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* Add your styles here */
`;

export default SingleProduct;
