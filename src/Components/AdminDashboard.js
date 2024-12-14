import React from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css'

export const AdminDashboard = () => {
  return React.createElement(
    'div',
    { className: 'dashboard-container' },
    // Row 1
    React.createElement('div', { className: 'row' },
      React.createElement('div', { className: 'card' },
        React.createElement('h3', null, 'All Doctors'),
        React.createElement(Link, { to: '/Alldoctor' }, 
          React.createElement('button', { className: 'card-btn' }, 'View Doctors')
        )
      ),
      React.createElement('div', { className: 'card' },
        React.createElement('h3', null, 'Register Admin'),
        React.createElement(Link, { to: '/Register-Admin' },
          React.createElement('button', { className: 'card-btn' }, 'Register Admin')
        )
      ),
      React.createElement('div', { className: 'card' },
        React.createElement('h3', null, 'User Login'),
        React.createElement(Link, { to: '/User-Login' },
          React.createElement('button', { className: 'card-btn' }, 'User Login')
        )
      )
    ),
    // Row 2
    React.createElement('div', { className: 'row' },
      React.createElement('div', { className: 'card' },
        React.createElement('h3', null, 'All Appointments'),
        React.createElement(Link, { to: '/All-Appointments' },
          React.createElement('button', { className: 'card-btn' }, 'View Appointments')
        )
      ),
      React.createElement('div', { className: 'card' },
        React.createElement('h3', null, 'Assign Doctor'),
        React.createElement(Link, { to: '/Assign-Doctor' },
          React.createElement('button', { className: 'card-btn' }, 'Assign Doctor')
        )
      ),
      React.createElement('div', { className: 'card' },
        React.createElement('h3', null, 'All Patients'),
        React.createElement(Link, { to: '/All-Patients' },
          React.createElement('button', { className: 'card-btn' }, 'View Patients')
        )
      )
    ),
    // Row 3
    React.createElement('div', { className: 'row' },
      React.createElement('div', { className: 'card' },
        React.createElement('h3', null, 'Add Doctor'),
        React.createElement(Link, { to: '/Add-Doctor' },
          React.createElement('button', { className: 'card-btn' }, 'Add Doctor')
        )
      ),
    )
  );
};
