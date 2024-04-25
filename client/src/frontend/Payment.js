import React from "react";

const Payment = () => {
  const paymentHandler = async (event) => {
    const amount = 500 *100;
    const currency = 'INR';
    const receiptId = '1234567890';

    try {
      // Step 1: Create order on your server
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

      if (!response.ok) {
        throw new Error('Failed to create order');
      }

      const order = await response.json();
      console.log('order', order);

      // Step 2: Initialize Razorpay
      const options = {
        key: "", // Your Razorpay key
        amount,
        currency,
        name: "FarMart",
        description: "Test Transaction",
        image: "./images/company_logo.png",
        order_id: order.id,
        handler: async function (response) {
          const body = { ...response };
          const validateResponse = await fetch('http://localhost:5000/validate', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
          });
          const jsonResponse = await validateResponse.json();
          console.log('jsonResponse', jsonResponse);
        },
        prefill: {
          name: "Customer Name",
          email: "customer@gmail.com",
          contact: "8765437970",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#F37254", // Customize Razorpay theme color
        },
      };

      const rzp1 = new window.Razorpay(options); // Ensure Razorpay is loaded in the global scope

      // Step 3: Open Razorpay payment form
      rzp1.open();

    } catch (error) {
      console.error('Payment error:', error);
      // Handle error gracefully, e.g., show an error message to the user
    }

    event.preventDefault();
  };

  return (
    <div style={containerStyle} className='payment-card'>
      <h3>Razorpay Payment Gateway</h3>
      <button style={buttonStyle} className='payment-button' onClick={paymentHandler}>Pay Now</button>
    </div>
  );
};

export default Payment;

// CSS styles
const containerStyle = {
  border: '1px solid #ccc',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  padding: '30px',
  backgroundColor: '#191970',
  textAlign: 'center',
  maxWidth: '400px',
  margin: '0 auto',
  color:'white',
};

const buttonStyle = {
  backgroundColor: 'tomato',
  color: 'white',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '16px',
  marginTop: '20px',
};
