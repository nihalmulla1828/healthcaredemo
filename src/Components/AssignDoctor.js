
import React, { useState } from "react";

export const AssignDoctor = () => {
  const [formData, setFormData] = useState({
    patientName: "",
    problemDescription: "",
    appointmentDate: "",
    doctor: "",
  });

  const doctors = ["Dr. Hansraj Hathi", "Dr. Harshad Verma", "Dr. Arun Sharma", "Dr. Sanjay Sharma"]; // Example doctor list

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Assigned Data: ", formData);
    alert("Doctor successfully assigned to the appointment!");
    // Add submission logic here
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Assign Doctor to Appointment</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Patient Name:</label>
          <input
            type="text"
            name="patientName"
            value={formData.patientName}

            onChange={handleChange}
            placeholder="Enter patient's name"
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Problem Description:</label>
          <textarea
            name="problemDescription"
            value={formData.problemDescription}
            onChange={handleChange}
            placeholder="Enter problem description"
            style={styles.textarea}
            required
          />
        </div>
        <div style={styles.formGroup}>

          <label style={styles.label}>Appointment Date:</label>
          <input
            type="date"
            name="appointmentDate"
            value={formData.appointmentDate}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Doctor:</label>
          <select
            name="doctor"
            value={formData.doctor}
            onChange={handleChange}
            style={styles.select}
            required
          >

            <option value="">Select Doctor</option>
            {doctors.map((doc, index) => (
              <option key={index} value={doc}>
                {doc}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" style={styles.button}>
          Assign Doctor
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    width: "400px",

    margin: "50px auto",
    padding: "20px",
    border: "3px solid black",
    borderRadius: "8px",
    backgroundColor: "salmon",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  header: {
    backgroundColor:"indianred",
    borderRadius: "4px",
    textAlign: "center",
    color: "black",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  formGroup: {
   
    marginBottom: "15px",
  },
  label: {
    
   
    color:"black",
    marginBottom: "5px",

    fontSize: "14px",
    fontWeight: "bold",
  },
  input: {
    backgroundColor:"pink",
    color:"black",
    width: "100%",
    padding: "8px",
    border: "1px solid black",
    borderRadius: "4px",
    fontSize: "14px",
  },
  textarea: {
    
        backgroundColor:"pink",
        color:"black",
    width: "100%",
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "14px",
    minHeight: "80px",
 
    width: "100%",
    padding: "8px",
},
select: {
    backgroundColor:"pink",
    color:"black",

    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "14px",
  },
  button: {
    padding: "10px",
    backgroundColor: "greenyellow",
    color: "darkred",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "18px",
  },
};

//export default AssignDoctor;
