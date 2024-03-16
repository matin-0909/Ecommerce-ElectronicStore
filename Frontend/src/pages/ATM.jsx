import React, { useState } from 'react';
import '../style/Addcardform.css';
import httpCommon from '../http-common';
import validation from '../services/validation';


const AddCardForm = () => {
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    cvv: '',
    expiryDate: '',
    name: '',
    user_id:sessionStorage.getItem("token")
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({
      ...cardDetails,
      [name]: value
    });
  };
  const headers = {"Authorization":"Bearer " + sessionStorage.getItem("token")};

  const handleSubmit = async  (e) => {
    e.preventDefault();
    try{
      const response = await  httpCommon.post("/user/addcard",cardDetails,{headers})
    
    }catch(e)
    {
      validation.error(e);
    }
      
   
    console.log('Form submitted:', cardDetails);
    // Clear form fields after submission
    setCardDetails({
      cardNumber: '',
      cvv: '',
      expiryDate: '',
      name: ''
    });
  };

  return (
    <div className="card-form-container">
      <h2>Add Card Details</h2>
      <form onSubmit={handleSubmit} className="card-form">
        <div className="form-group">
          <label>Card Number:</label>
          <input
            type="text"
            name="cardNumber"
            value={cardDetails.cardNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>CVV:</label>
          <input
            type="text"
            name="cvv"
            value={cardDetails.cvv}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Expiry Date:</label>
          <input
            type="text"
            name="expiryDate"
            value={cardDetails.expiryDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={cardDetails.name}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default AddCardForm;
