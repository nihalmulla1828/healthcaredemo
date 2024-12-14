
import React, { useState } from "react";

export const RegisterAdmin = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
    bloodGroup: "",
    contactNo: "",
    age: "",
    street: "",
    city: "",
    pincode: "",
  });

  // Handle input change
  const handleInputChange = (e) => {

    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted: ", formData);
    alert("User Registered Successfully!");
    // You can add API call here to send data to the server
  };

  return (
    <div style={{ maxWidth: "800px",border:"5px solid black",borderColor:"black", margin: "5px", padding: "20px", backgroundColor: "lightgreen", borderRadius: "8px" }}>
      <h2 style={{ textAlign: "center", color: "white",border:"5px" ,bordercolor:"black",backgroundColor:"darkred",borderRadius:"4px"}}>Register Admin</h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" ,color:"black" }}>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            style={{ width: "100%", padding: "8px",backgroundColor:"white",color:"black" }}
            required
          />
        </div>
        <div style={{ marginBottom: "15px",color:"black" }}>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            style={{ width: "100%", padding: "8px",backgroundColor:"white" ,color:"black"}}
            required
          />
        </div>
        <div style={{ marginBottom: "15px",color:"black" }}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            style={{ width: "100%", padding: "8px" ,backgroundColor:"white",color:"black"}}
            required
          />
        </div>
        <div style={{ marginBottom: "15px",color:"black" }}>
          <label>Password</label>
          <input
            type="password"
            name="password"

            value={formData.password}
            onChange={handleInputChange}
            style={{ width: "100%", padding: "8px",backgroundColor:"white",color:"black" }}
            required
          />
        </div>
        <div style={{ marginBottom: "15px",color:"black" }}>
          <label>Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            style={{ width: "100%", padding: "8px",backgroundColor:"white",color:"black" }}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div style={{ marginBottom: "15px",color:"black" }}>
          <label>Blood Group</label>
          <select
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleInputChange}
            style={{ width: "100%", padding: "8px" ,backgroundColor:"white",color:"black"}}
            required
          >
            <option value="">Select Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>

            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
        </div>
        <div style={{ marginBottom: "15px" ,color:"black"}}>
          <label>Contact No</label>
          <input
            type="text"
            name="contactNo"
            value={formData.contactNo}
            onChange={handleInputChange}
            style={{ width: "100%", padding: "8px" ,backgroundColor:"white",color:"black"}}
            required
          />
        </div>
        <div style={{ marginBottom: "15px",color:"black" }}>
          <label>Age</label>
          <input
            type="number"
            name="age"

            value={formData.age}
            onChange={handleInputChange}
            style={{ width: "100%", padding: "8px",backgroundColor:"white",color:"black" }}
            required
          />
        </div>
        <div style={{ marginBottom: "15px",color:"black" }}>
          <label>Street</label>
          <textarea
            name="street"
            value={formData.street}
            onChange={handleInputChange}
            style={{ width: "100%", padding: "8px",backgroundColor:"white" ,color:"black"}}
            required
          ></textarea>
        </div>
        <div style={{ marginBottom: "15px" ,color:"black"}}>
          <label>City</label>
          <input

            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            style={{ width: "100%", padding: "8px" ,backgroundColor:"white",color:"black"}}
            required
          />
        </div>
        <div style={{ marginBottom: "15px",color:"black" }}>
          <label>Pincode</label>
          <input
            type="text"
            name="pincode"
            value={formData.pincode}
            onChange={handleInputChange}
            style={{ width: "100%", padding: "8px" ,backgroundColor:"white",color:"black"}}
            required
          />
        </div>

        <button
          type="submit"
          style={{
            fontSize:"18px",
            backgroundColor: "blue",
            color: "white",
            padding: "10px 20px",
            border: "none",
            cursor: "pointer",
            borderRadius: "4px",
            width: "100%",
          }}
        >
          Register Admin
        </button>
      </form>
    </div>
  );
};
