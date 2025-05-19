import React, { useState } from 'react';

function Registration() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    address: '',
    city: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Registration data:', formData);
  };

  return (
    <div>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input name="firstName" value={formData.firstName} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Last Name:
          <input name="lastName" value={formData.lastName} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Confirm Password:
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Phone:
          <input name="phone" value={formData.phone} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Address:
          <input name="address" value={formData.address} onChange={handleChange} required />
        </label>
        <br />
        <label>
          City:
          <input name="city" value={formData.city} onChange={handleChange} required />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Registration;
