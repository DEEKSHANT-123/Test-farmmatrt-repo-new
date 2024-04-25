import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './Address.css'; // Import the CSS file

const Address = ({ total }) => {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleMakePayment = () => {
        // Redirect to the Payment page
        navigate('/payment');
    }

    return (
        <div className="form-container">
            <div className="address-form">
                <h2>Address Form</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="name" className="label">Name:</label>
                        <input type="text" id="name" className="input" placeholder="Enter your name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="label">Email:</label>
                        <input type="email" id="email" className="input" placeholder="Enter your email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address1" className="label">Address Line 1:</label>
                        <input type="text" id="address1" className="input" placeholder="Address Line 1" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address2" className="label">Address Line 2:</label>
                        <input type="text" id="address2" className="input" placeholder="Address Line 2" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city" className="label">City:</label>
                        <input type="text" id="city" className="input" placeholder="City" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="state" className="label">State:</label>
                        <input type="text" id="state" className="input" placeholder="State" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="country" className="label">Country:</label>
                        <input type="text" id="country" className="input" placeholder="Country" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pincode" className="label">Pin Code:</label>
                        <input type="text" id="pincode" className="input" placeholder="Pin Code" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contact" className="label">Contact No.:</label>
                        <input type="text" id="contact" className="input" placeholder="Contact No." />
                    </div>
                    <div className="form-group">
                        <button onClick={handleMakePayment} className="button">Make Payment</button> {/* "Make Payment" button */}
                    </div>
                </form>
                <div>
                    Total Price: Rs - {total} {/* Display total price */}
                </div>
            </div>
        </div>
    );
}

export default Address;