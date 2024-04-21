import React from "react";
// import Razorpay from "razorpay"; // Import Razorpay module


const Cart = () => {
  const paymentHandler = async (event) => {
    const amount = 500;
    const currency = 'INR';
    const receiptId = '1234567890';

    const response = await fetch('http://localhost:5000/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        amount,
        currency,
        receipt: receiptId
      })
    });

    const order = await response.json();
    console.log('order', order);

    const option = {
      key: "",
      amount,
      currency,
      name: "FarMart",
      description: "Test Transaction",
      image: "./images/company_logo.png",
      order_id: order.id, // Corrected typo from oreder_id to order_id
      handler: async function (response) {
        const body = {...response}
        const validateResponse = await fetch('http://localhost:5000/validate',{
          method: 'POST',
          headers:{
            'Content-Type' : 'application/json'
          },
          body:JSON.stringify(body)
        })
        const jsonResponse = await validateResponse.json();
        console.log('jsonResponse',jsonResponse);
      },
      prefill: {
        name: "Customer Name",
        email: "customer@gmail.com",
        contact: "8765437970",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
    }
    var rzp1 = new Razorpay(option);
     rzp1.on("payment.failed",function(response){
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
       alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);

   })

  rzp1.open(); 
    event.preventDefault();
  }

  return (
    <>

      <div className='product'>
        <h1>Razorpay Payment Gateway</h1>
        <button className='button' onClick={paymentHandler}>Pay Now</button>
      </div>
    </>
  );
};

export default Cart;