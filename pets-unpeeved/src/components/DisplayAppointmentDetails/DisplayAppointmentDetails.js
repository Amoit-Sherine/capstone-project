// DisplayAppointmentDetails.js
import React from 'react';
import '../../styles/components/DisplayAppointmentDetails.scss';

function DisplayAppointmentDetails({ appointment, onClose }) {
    return (
        <div className="appointment-details-modal">
            <div className="appointment-details-modal__content">
                <h3>Appointment Details</h3>
                <p>Type: {appointment.type}</p>
                <p>Date: {appointment.date}</p>
                <p>Time: {appointment.time}</p>
                <p>Location: {appointment.location}</p>
                <p>With: {appointment.petName}</p>
                <button onClick={onClose} className="appointment-details-modal__close-btn">Close</button>
            </div>
        </div>
    );
}

export default DisplayAppointmentDetails;
