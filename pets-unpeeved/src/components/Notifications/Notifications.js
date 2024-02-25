import React, { useState, useEffect } from 'react';
import '../../styles/components/Notifications.scss';

function Notifications() {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        // This should be replaced with a real API call or state management selector
        // to fetch appointments from the database
        const fetchAppointments = async () => {
            // const response = await fetch('/api/appointments');
            // const data = await response.json();
            // setAppointments(data);
        };

        fetchAppointments();
    }, []);

    return (
        <div className="notifications">
            {appointments.map((appointment, index) => (
                <div key={index} className="notification-item">
                    <img src={appointment.pet.icon} alt={appointment.pet.name} className="notification-item__icon" />
                    <div className="notification-item__details">
                        <span>{appointment.pet.name}</span>
                        <span>{appointment.type}</span>
                        <span>{appointment.date}</span>
                        <span>{appointment.location}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Notifications;
