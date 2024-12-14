import React, { useState } from "react";

export const AllDoctor = () => {
  const [doctors, setDoctors] = useState([
    {
      id: 1,
      fullName: "Dr. Hansraj Hathi",
      dob: "1980-02-22",
      qualification: "MBBS, MD",
      specialist: "Orthopedics",
      email: "hathi@gmail.com",
      phoneNo: "9494985235",
    },
    {
      id: 2,
      fullName: "Dr. Arun Verma",
      dob: "1982-04-24",
      qualification: "MBBS",
      specialist: "Neurologist",
      email: "arun@gmail.com",
      phoneNo: "9488985555",
    },
    {
      id: 3,
      fullName: "Dr. Parikshit Sharma",
      dob: "1970-06-28",
      qualification: "MBBS, MD",
      specialist: "Dentist",
      email: "parikshit@gmail.com",
      phoneNo: "7776985235",
    },
    {
      id: 4,
      fullName: "Dr. Alok Khanna",
      dob: "1975-09-22",
      qualification: "FCPS",
      specialist: "Orthopedics",
      email: "alok@gmail.com",
      phoneNo: "8695985235",
    },
  ]);

  const handleDelete = (id) => {
    const updatedDoctors = doctors.filter((doctor) => doctor.id !== id);
    setDoctors(updatedDoctors);
  };

  const handleAdd = (id) => {
    alert(`Add action triggered for doctor with ID: ${id}`);
  };

  const handleVerify = (id) => {
    alert(`Verify action triggered for doctor with ID: ${id}`);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>LIST OF DOCTORS</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Full Name</th>
            <th style={styles.th}>DOB</th>
            <th style={styles.th}>Qualification</th>
            <th style={styles.th}>Specialist</th>
            <th style={styles.th}>Email</th>
            <th style={styles.th}>Phone No</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor) => (
            <tr key={doctor.id}>
              <td style={styles.td}>{doctor.fullName}</td>
              <td style={styles.td}>{doctor.dob}</td>
              <td style={styles.td}>{doctor.qualification}</td>
              <td style={styles.td}>{doctor.specialist}</td>
              <td style={styles.td}>{doctor.email}</td>
              <td style={styles.td}>{doctor.phoneNo}</td>
              <td style={styles.td}>
                <button
                  style={styles.deleteButton}
                  onClick={() => handleDelete(doctor.id)}
                >
                  Delete
                </button>
                <button
                  style={styles.addButton}
                  onClick={() => handleAdd(doctor.id)}
                >
                  Add
                </button>
                <button
                  style={styles.verifyButton}
                  onClick={() => handleVerify(doctor.id)}
                >
                  Verify
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    width: "95%",
    margin: "20px auto",
    padding: "20px",
    border: "3px solid black",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "pink",
  },
  header: {
    backgroundColor: "darkred",
    borderRadius: "4px",
    textAlign: "center",
    color: "white",
    marginBottom: "20px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  th: {
    border: "2px solid black",
    backgroundColor: "indianred",
    color: "Black",
    padding: "10px",
    textAlign: "center",
  },
  td: {
    border: "1px solid black",
    padding: "10px",
    color: "Black",
    textAlign: "center",
  },
  deleteButton: {
    backgroundColor: "#ff4d4d",
    color: "white",
    border: "1px solid black",
    borderRadius: "5px",
    padding: "5px 10px",
    cursor: "pointer",
    marginRight: "5px",
  },
  addButton: {
    backgroundColor: "blue",
    color: "white",
    border: "1px solid black",
    borderRadius: "5px",
    padding: "5px 10px",
    cursor: "pointer",
    marginRight: "5px",
  },
  verifyButton: {
    backgroundColor: "lightgreen",
    color: "black",
    border: "1px solid black",
    borderRadius: "5px",
    padding: "5px 10px",
    cursor: "pointer",
  },
};
