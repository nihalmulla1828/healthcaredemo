import React, { useState } from "react";

export const AllPatients = () => {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      patientName: "Pratim Waghmare",
      contact: "9876543210",
      problem: "Visual Issue",
      doctorName: "Hansraj Hathi",
      prescription: "Please take medicine twice a day for a week",
      appointmentDateTime: "2024-12-08 10:00 AM",
      appointmentDate: "2024-12-08",
      status: "Treatment Done",
      price: "500",
      medicalRecords: "Link to medical record 1",
      action: "Assigned to Doctor",
    },
    {
      id: 2,
      patientName: "Atul Dolifode",
      contact: "8765432109",
      problem: "Leg Pain",
      doctorName: "Not Assigned to Doctor",
      prescription: "N/A",
      appointmentDateTime: "2024-12-09 02:00 PM",
      appointmentDate: "2024-12-09",
      status: "Canceled",
      price: "N/A",
      medicalRecords: "Link to medical record 2",
      action: "Canceled",
    },
    {
      id: 3,
      patientName: "Ashok Darade",
      contact: "9876543210",
      problem: "Headache",
      doctorName: "Arun Sharma",
      prescription: "Please take medicine twice a day for a week",
      appointmentDateTime: "2024-12-10 03:00 PM",
      appointmentDate: "2024-12-10",
      status: "Not Assigned to Doctor",
      price: "N/A",
      medicalRecords: "Link to medical record 3",
      action: "Assign to Doctor",
    },
    {
      id: 4,
      patientName: "Alok Aalsi",
      contact: "8765432109",
      problem: "Fever",
      doctorName: "Not Assigned to Doctor",
      prescription: "N/A",
      appointmentDateTime: "2024-12-11 11:00 AM",
      appointmentDate: "2024-12-11",
      status: "Canceled",
      price: "N/A",
      medicalRecords: "Link to medical record 4",
      action: "Canceled",
    },
  ]);

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>All Appointments</h2>
      <table style={styles.table}>
        <thead>
          <tr style={styles.headerRow}>
            <th style={styles.th}>Patient Name</th>
            <th style={styles.th}>Patient Contact</th>
            <th style={styles.th}>Problem</th>
            <th style={styles.th}>Doctor Name</th>
            <th style={styles.th}>Prescription</th>
            <th style={styles.th}>Appointment Date/Time</th>
            <th style={styles.th}>Appointment Date</th>
            <th style={styles.th}>Appointment Status</th>
            <th style={styles.th}>Appointment Price</th>
            <th style={styles.th}>Medical Records</th>
            <th style={styles.th}>Action</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id} style={styles.row}>
              <td style={styles.td}>{appointment.patientName}</td>
              <td style={styles.td}>{appointment.contact}</td>
              <td style={styles.td}>{appointment.problem}</td>
              <td style={styles.td}>{appointment.doctorName}</td>
              <td style={styles.td}>{appointment.prescription}</td>
              <td style={styles.td}>{appointment.appointmentDateTime}</td>
              <td style={styles.td}>{appointment.appointmentDate}</td>
              <td style={styles.td}>{appointment.status}</td>
              <td style={styles.td}>{appointment.price}</td>
              <td style={styles.td}>
                <a
                  href="#"
                  onClick={() => alert("Viewing: " + appointment.medicalRecords)}
                  style={styles.link}
                >
                  View Medical Records
                </a>
              </td>
              <td style={styles.td}>{appointment.action}</td>
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
    backgroundColor: "yellow",
  },
  header: {
    backgroundColor: "darkred",
    textAlign: "center",
    color: "white",
    marginBottom: "20px",
    padding: "10px",
    borderRadius: "4px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    backgroundColor: "white",
  },
  headerRow: {
    backgroundColor: "#800000",
  },
  th: {
    border: "1px solid black",
    padding: "10px",
    textAlign: "left",
    color: "white",
    backgroundColor: "#800000",
    fontWeight: "bold",
  },
  row: {
    backgroundColor: "#f9f9f9",
  },
  td: {
    border: "1px solid black",
    padding: "10px",
    textAlign: "left",
    color: "black",
  },
  link: {
    color: "#800000",
    textDecoration: "underline",
    cursor: "pointer",
  },
};

