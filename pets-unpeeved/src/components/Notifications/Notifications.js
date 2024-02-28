import React, {useEffect, useState} from 'react';
import AddAppointment from "../AddAppointment/AddAppointment";// Assuming you have this component
import '../../styles/components/Notifications.scss';
import {usePetIcons, usePets} from "../../hooks/pets";
import {API_URL} from "../../values";

function Notifications() {
    const [isAddAppointmentOpen, setIsAddAppointmentOpen] = useState(false);
    const [appointments, setAppointments] = useState([]);

    const petIconMapping = usePetIcons();

    // Fetch user added pets
    const pets = usePets()

    const fetchAppointments = () => {
        fetch(`${API_URL}/appointments`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${window.localStorage.getItem('token')}`,
            }
        })
            .then(response => {
                const isOk = response.ok

                response.json().then(resp => {
                    if(isOk){
                        setAppointments(resp)
                    }else{
                        alert(resp.message)
                        throw new Error(resp.message);
                    }
                });
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleAddAppointment = (appointmentDetails) => {
        console.log(appointmentDetails)
        const now = new Date();
        const appointmentDateTime = new Date(appointmentDetails.date);
        const reminderTime = new Date(appointmentDateTime.getTime() - 60 * 60 * 1000); // 1 hour before

        if (reminderTime > now) {
            const timeout = reminderTime.getTime() - now.getTime();
            setTimeout(() => {
                alert(`Reminder: You have an appointment for ${appointmentDetails.pet.name} coming up in an hour.`);
            }, timeout);
        }

        setAppointments([...appointments, appointmentDetails]);
        setIsAddAppointmentOpen(false);
    };

    useEffect(fetchAppointments, []);

    return (
        <div className="notifications">
            <button onClick={() => setIsAddAppointmentOpen(true)} className="notifications__add-btn">Add Appointment</button>
            {isAddAppointmentOpen && <AddAppointment pets={pets} onSave={handleAddAppointment} onClose={() => setIsAddAppointmentOpen(false)} />}
            <div className="notifications__list">
                {appointments.map((appointment, index) => (
                    <div key={index} className="notification-item">
                        <img src={petIconMapping[appointment.pet.type]} alt={appointment.pet.name} className="notification-item__icon" />
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
