
import React, { useState } from "react";

export const UserLogin = () => {
  // State for form fields
  const [loginData, setLoginData] = useState({
    role: "",
    email: "",
    password: "",
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Login Data: ", loginData);
    alert("Login Successful!");
    // Add login API call here if needed
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px", backgroundColor: "lightgreen", borderRadius: "8px" , border: "3px solid black",borderColor:"black"}}>
      <h2 style={{ textAlign: "center", color: "#a30000",backgroundColor:"aqua" }}>ADMIN LOGIN</h2>
      <form onSubmit={handleSubmit}>
        {/*<div style={{ marginBottom: "15px" , backgroundcolor:"white"}}>
          <label style={{color:"Black"}}>User Role</label>
          <select
            name="role"
            value={loginData.role}
            onChange={handleInputChange}
            style={{ width: "100%", padding: "8px"  , backgroundColor:"white",borderColor:"black",color:"black"}}
            required

          >
            <option value="">Select Role</option>
            <option value="Admin">Admin</option>
            <option value="Admin">Doctor</option>
            <option value="Admin">Patient</option>
            <option value="User">User</option>
          </select>
        </div>*/}
        <div style={{ marginBottom: "15px", color:"White" }}>
          <label style={{color:"Black"}}>Email Id</label>
          <input
          
            type="email"
            name="email"
            value={loginData.email}
            
            onChange={handleInputChange}
            style={{ width: "100%", padding: "8px", backgroundColor:"white",color:"black" }}
            required
          />
        </div>
        <div style={{ marginBottom: "15px" }}>

          <label style={{color:"Black"}}>Password</label>
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleInputChange}
            style={{ width: "100%", padding: "8px", backgroundColor: "white",color:"black"  }}
            required
          />
        </div>
        <button
          type="submit"
          style={{
            marginBottom: "15px",
            backgroundColor: "#a30000",
            color: "white",
            padding: "10px 20px",
            border: "none",
            cursor: "pointer",
            borderRadius: "4px",
            width: "100%",

          }}
        >
          Login
        </button>
        {/*<div>
        <button
          type="submit"
          style={{
            marginBottom: "15px",
            backgroundColor: "blue",
            color: "white",
            padding: "10px 20px",
            border: "none",
            cursor: "pointer",
            borderRadius: "4px",
            width: "100%",

          }}
        >
          Sign up
        </button>
        </div>*/}
      </form>
    </div>
  );
};

//export default UserLogin;
