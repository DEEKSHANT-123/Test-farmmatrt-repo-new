import React from "react";
import styled from "styled-components";

const Cart = () => {
  return (
    <Wrapper>
      <h2>Cart</h2>
      <ul>
        {/* Render cart items here */}
        {/* Example: */}
        {/* <li>Product Name</li> */}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* Add your styles here */
`;

export default Cart;
