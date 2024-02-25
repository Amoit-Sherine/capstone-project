import React, { useState } from 'react';
import AddAppointment from "../AddAppointment/AddAppointment";// Assuming you have this component
import '../../styles/components/Notifications.scss';

// Importing pet images directly
import dogIcon from '../../assets/pet-icons/dog2.jpeg';
import catIcon from '../../assets/pet-icons/cat2.jpeg';
import birdIcon from '../../assets/pet-icons/bird.jpeg';
import snakeIcon from '../../assets/pet-icons/snake.jpeg';


function Notifications() {
    const [isAddAppointmentOpen, setIsAddAppointmentOpen] = useState(false);
    const [appointments, setAppointments] = useState([]);

    // Mock pets array
    const mockPets = [
        { name: 'Doug', icon: dogIcon },
        { name: 'Knox', icon: catIcon},
        { name: 'Hiss', icon: snakeIcon },
        { name: 'Pub', icon: birdIcon },
    ];


    const handleAddAppointment = (appointmentDetails) => {
        setAppointments([...appointments, appointmentDetails]);
        setIsAddAppointmentOpen(false);
    };

    return (
        <div className="notifications">
            <button onClick={() => setIsAddAppointmentOpen(true)} className="notifications__add-btn">Add Appointment</button>
            {isAddAppointmentOpen && <AddAppointment pets={mockPets} onSave={handleAddAppointment} onClose={() => setIsAddAppointmentOpen(false)} />}
            <div className="notifications__list">
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
        </div>
    );
}

export default Notifications;
