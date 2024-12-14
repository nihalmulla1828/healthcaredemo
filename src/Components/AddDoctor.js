import React, { useState } from "react";

export const AddDoctor = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    qualification: "",
    specialist: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted: ", formData);
    // Add form submission logic here
  };

  return (
    <div className="form-container">
      <h2 className="form-heading">Add Doctor</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Enter full name"
            value={formData.fullName}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="dateOfBirth">Date of Birth</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="qualification">Qualification</label>
          <input
            type="text"
            id="qualification"
            name="qualification"
            placeholder="Enter qualification"
            value={formData.qualification}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="specialist">Specialist</label>
          <select
            id="specialist"
            name="specialist"
            value={formData.specialist}
            onChange={handleChange}
            className="form-input"
          >
            <option value="">---Select---</option>
            <option value="Cardiologist">Cardiologist</option>
            <option value="Dermatologist">Dermatologist</option>
            <option value="Neurologist">Neurologist</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter mobile number"
            value={formData.phone}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        <button type="submit" className="submit-btn">Register</button>
      </form>

      <style jsx>{`
        /* General container for the form */
        .form-container {
         
          height: 100vh; 
          max-width:400px;
          margin: 20px auto;
          padding: 20px;
          background-color: #fff;
          border: 2px solid black;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          text-align: center;
        }

        /* Heading style */
        .form-heading {
          color: #dc3545;
          font-size: 24px;
          margin-bottom: 20px;
        }

        /* Form group style */
        .form-group {
        
         backgroundcolor: white;
          margin-bottom: 20px;
          text-align: left;
        }

        /* Label style */
        .form-group label {
          
          display: block;
          font-weight: bold;
          color: black;
          margin-bottom: 5px;
        }

        /* Input field style */
        .form-input {
         background-color : white;
         color: black;
          width: 100%;
          padding: 10px;
          margin-top: 5px;
          border: 1px solid black;
          border-radius: 5px;
          font-size: 16px;
        }

        /* Input focus style */
        .form-input:focus {
         
          
          border-color: #dc3545;
          outline: none;
        }

        /* Button style */
        .submit-btn {
          background-color: #dc3545;
          color: white;
          padding: 12px 20px;
          font-size: 16px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .submit-btn:hover {
          background-color: #c82333;
        }

        .submit-btn:focus {
          outline: none;
        }
      `}</style>
    </div>
  );
};

