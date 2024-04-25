import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './Address.css'; // Import the CSS file

const Address = ({ location }) => {
    const total = location.state && location.state.total;

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        country: '',
        pincode: '',
        contact: ''
    });

    const navigate = useNavigate(); // Initialize useNavigate

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleMakePayment = () => {
        // Check if all mandatory fields are filled
        if (
            formData.name &&
            formData.email &&
            formData.address1 &&
            formData.city &&
            formData.state &&
            formData.country &&
            formData.pincode &&
            formData.contact
        ) {
            // Proceed to payment page
            navigate('/payment');
        } else {
            // Display error message or handle validation as needed
            alert('Please fill in all mandatory fields.');
        }
    }

    return (
        <div className="form-container">
            <div className="address-form">
                <h2>Address Form</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="name" className="label">
                            Name<span className="star">*</span>:
                        </label>
                        <input type="text" id="name" name="name" className="input" placeholder="Enter your name" onChange={handleInputChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="label">
                            Email<span className="star">*</span>:
                        </label>
                        <input type="email" id="email" name="email" className="input" placeholder="Enter your email" onChange={handleInputChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address1" className="label">
                            Address Line 1<span className="star">*</span>:
                        </label>
                        <input type="text" id="address1" name="address1" className="input" placeholder="Address Line 1" onChange={handleInputChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address2" className="label">
                            Address Line 2:
                        </label>
                        <input type="text" id="address2" name="address2" className="input" placeholder="Address Line 2" onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city" className="label">
                            City<span className="star">*</span>:
                        </label>
                        <input type="text" id="city" name="city" className="input" placeholder="City" onChange={handleInputChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="state" className="label">
                            State<span className="star">*</span>:
                        </label>
                        <input type="text" id="state" name="state" className="input" placeholder="State" onChange={handleInputChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="country" className="label">
                            Country<span className="star">*</span>:
                        </label>
                        <input type="text" id="country" name="country" className="input" placeholder="Country" onChange={handleInputChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pincode" className="label">
                            Pin Code<span className="star">*</span>:
                        </label>
                        <input type="text" id="pincode" name="pincode" className="input" placeholder="Pin Code" onChange={handleInputChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contact" className="label">
                            Contact No.<span className="star">*</span>:
                        </label>
                        <input type="text" id="contact" name="contact" className="input" placeholder="Contact No." onChange={handleInputChange} required />
                    </div>
                    <div className="form-group">
                        <button type="button" onClick={handleMakePayment} className="button">Make Payment</button> {/* "Make Payment" button */}
                    </div>
                </form>
                <div>
                    Total Price: Rs - {total ? total : 'N/A'} {/* Display total price */}
                </div>
            </div>
        </div>
    );
}

export default Address;