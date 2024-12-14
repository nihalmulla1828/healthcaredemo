import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AdminDashboard } from './Components/AdminDashboard';
import { UserLogin } from './Components/UserLogin';
import { RegisterAdmin } from './Components/RegisterAdmin';
import { AllDoctor } from './Components/AllDoctor';
import { AllAppointments } from './Components/AllAppointments';
import { AssignDoctor } from './Components/AssignDoctor';
import { AllPatients } from './Components/AllPatients';
import { AddDoctor } from './Components/AddDoctor';

function App() {
  return React.createElement(
    Router, 
    null, 
    React.createElement(
      Routes,
      null,
      React.createElement(Route, {
        path: "/",
        element: React.createElement(AdminDashboard)
      }),
      React.createElement(Route, {
        path: "/Alldoctor",
        element: React.createElement(AllDoctor)
      }),
      React.createElement(Route, {
        path: "/Register-Admin",
        element: React.createElement(RegisterAdmin)
      }),
      React.createElement(Route, {
        path: "/User-Login",
        element: React.createElement(UserLogin)
      }),
      React.createElement(Route, {
        path: "/All-Appointments",
        element: React.createElement(AllAppointments)
      }),
      React.createElement(Route, {
        path: "/Assign-Doctor",
        element: React.createElement(AssignDoctor)
      }),
      React.createElement(Route, {
        path: "/All-Patients",
        element: React.createElement(AllPatients)
      }),
      React.createElement(Route, {
        path: "/Add-Doctor",
        element: React.createElement(AddDoctor)
      })
    )
  );
}

export default App;
